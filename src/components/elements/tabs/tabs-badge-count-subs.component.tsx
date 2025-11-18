import { Stack, useTheme } from '@mui/material';
import { LayoutGroup, motion } from 'framer-motion';
import React, { useEffect, useId, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StackTabs } from '../../styles';
import { IconContentBadgeCountElement, IconContentBadgeCountSubsElement } from '../icon';
import { LinkElement } from '../link';
import { TabBadgeCount } from './tabs-badge-count.component';
import { TAB_BACKGROUND_STYLES, TAB_STYLES } from './tabs.constant';

export interface TabBadgeCountSubs {
  id?: string;
  icon: string;
  name: string;
  onClick?: () => void;
  href?: string;
  subs?: TabBadgeCount[];
  badgeCount: number;
}

export interface TabsBadgeCountSubsComponentProps {
  idSelect?: string;
  tabs: TabBadgeCountSubs[];
  size?: 'large' | 'small' | 'medium';
}

export const TabsBadgeCountSubsComponent: React.FC<TabsBadgeCountSubsComponentProps> = ({ idSelect, tabs, size }) => {
  const { palette } = useTheme();

  const location = useLocation();

  const [idSelected, setIdSelected] = useState(idSelect);

  const layoutGroupId = useId();

  useEffect(() => {
    setIdSelected(idSelect);
  }, [idSelect]);

  return (
    <LayoutGroup id={layoutGroupId}>
      <StackTabs direction={'column'} sx={{ background: 'transparent', boxShadow: 'none' }}>
        {tabs.map((tab) => (
          <LinkElement
            component={tab.href ? 'a' : 'span'}
            href={tab.href}
            onClick={tab.onClick}
            key={tab.name}
            id={tab.id}
          >
            <Stack
              component={motion.div}
              sx={TAB_STYLES}
              initial={{
                color: tab.id === idSelected ? palette.primary.contrastText : palette.text.primary,
              }}
              animate={{
                color: tab.id === idSelected ? palette.primary.contrastText : palette.text.primary,
              }}
              transition={{ duration: 0.3 }}
              onTap={() => !tab.subs && setIdSelected(tab.id)}
            >
              {tab.subs ? (
                <IconContentBadgeCountSubsElement
                  icon={tab.icon}
                  content={tab.name}
                  badgeCount={tab.badgeCount}
                  sx={{ zIndex: 2 }}
                  size={size}
                  subs={tab.subs}
                  idSubSelect={tab.subs.find((sub) => location.pathname.includes(sub.id))?.id}
                />
              ) : (
                <IconContentBadgeCountElement
                  icon={tab.icon}
                  content={tab.name}
                  sx={{ zIndex: 2 }}
                  size={size}
                  badgeCount={tab.badgeCount}
                />
              )}
              {tab.id === idSelected && (
                <Stack
                  component={motion.div}
                  sx={TAB_BACKGROUND_STYLES}
                  layoutId="selected"
                  animate={{ backgroundColor: palette.primary.main }}
                  initial={{ backgroundColor: palette.primary.main }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Stack>
          </LinkElement>
        ))}
      </StackTabs>
    </LayoutGroup>
  );
};
