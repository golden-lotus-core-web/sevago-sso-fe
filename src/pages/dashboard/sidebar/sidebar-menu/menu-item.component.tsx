import { Box, ListItem, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AppModule, getLimitLineCss } from "../../../../common";
import { IconElement, StackRow } from "../../../../components";
import { TooltipOnHoverElement } from "../../../../components/elements/tooltip";
import { useSidebar } from "../../../../hooks";
import { menuItemStyles } from "./menu-styles";

interface MenuItemProps {
  item: AppModule;
  isSelected: boolean;
  isExpanded?: boolean;
  onClick: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  item,
  isSelected,
  isExpanded,
  onClick,
}) => {
  const { isCollapsed } = useSidebar();
  const renderItem = () => {
    return (
      <Link
        to={item.path || "#"}
        style={{ textDecoration: "none", color: "unset" }}
      >
        <ListItem onClick={onClick} sx={menuItemStyles.listItem(isSelected)}>
          <ListItemIcon sx={{ minWidth: isCollapsed ? 0 : 20 }}>
            <IconElement
              icon={item.icon}
              color={isSelected ? "primary" : "inherit"}
            />
          </ListItemIcon>

          {!isCollapsed && (
            <StackRow sx={{ flex: 1, gap: 0 }} justifyContent={"space-between"}>
              <Typography
                variant="body1"
                color={isSelected ? "primary" : "inherit"}
                sx={{
                  ...getLimitLineCss(1),
                }}
              >
                {item.title}
              </Typography>

              {item.type === "submenu" && (
                <Box sx={menuItemStyles.iconExpandMenu(isExpanded)}>
                  <IconElement icon="expand_more" fontSize="small" />
                </Box>
              )}
              {item.type === "expand-menu" && (
                <IconElement icon="chevron_right" fontSize="small" />
              )}
            </StackRow>
          )}
        </ListItem>
      </Link>
    );
  };
  if (isCollapsed) {
    return (
      <TooltipOnHoverElement placement="right" content={item.title}>
        {renderItem()}
      </TooltipOnHoverElement>
    );
  }
  return renderItem();
};
