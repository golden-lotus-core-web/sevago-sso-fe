import { Box, List } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuItem } from "./menu-item.component";
import { SubmenuList } from "./submenu-list.component";
import { AppModule } from "../../../../common";
import { useSidebar } from "../../../../hooks";

interface SidebarMenuProps {
  items: AppModule[];
}

const findExpandMenuByPath = (
  menus: AppModule[],
  pathname: string
): AppModule[] | null => {
  for (const menu of menus) {
    if (menu.type === "expand-menu") {
      for (const child of menu.children || []) {
        if (child.children) {
          for (const grandChild of child.children) {
            if (grandChild.path && pathname.includes(grandChild.path)) {
              return menu.children || null;
            }
          }
        }
        if (child.path && pathname.includes(child.path)) {
          return menu.children || null;
        }
      }
    }
    // Kiểm tra cả children của menu hiện tại
    if (menu.children) {
      const found = findExpandMenuByPath(menu.children, pathname);
      if (found) return found;
    }
  }
  return null;
};

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const { isCollapsed, setActiveExpandMenu } = useSidebar();

  // Find matching menu items based on current path
  const findMatchingMenuItems = useCallback(
    (menuItems: AppModule[], currentPath: string) => {
      for (const item of menuItems) {
        if (item.path && currentPath.includes(item.path)) {
          if (item.type === "expand-menu") {
            return { expandItems: [], expandMenu: item.children || null };
          }
          if (item.type === "submenu") {
            return { expandItems: [item.title], expandMenu: null };
          }
          return { expandItems: [], expandMenu: null };
        }

        if (item.children) {
          for (const child of item.children) {
            if (child.path && currentPath.includes(child.path)) {
              return item.type === "expand-menu"
                ? { expandItems: [], expandMenu: item.children }
                : { expandItems: [item.title], expandMenu: null };
            }
          }
        }
      }
      return { expandItems: [], expandMenu: null };
    },
    []
  );

  // Auto expand menu when path changes
  useEffect(() => {
    const foundExpandMenu = findExpandMenuByPath(items, location.pathname);
    if (foundExpandMenu) {
      setActiveExpandMenu(foundExpandMenu);
    }

    const { expandItems } = findMatchingMenuItems(items, location.pathname);
    setExpandedItems(expandItems);
  }, [location.pathname, items, findMatchingMenuItems, setActiveExpandMenu]);

  // Handle menu item click
  const handleMenuClick = useCallback(
    (item: AppModule) => {
      if (item.type === "expand-menu") {
        setActiveExpandMenu(item.children || []);
      } else if (item.type === "submenu") {
        setExpandedItems((prev) =>
          prev.includes(item.title)
            ? prev.filter((i) => i !== item.title)
            : [...prev, item.title]
        );
      } else if (item.path) {
        // navigate(item.path);
        setActiveExpandMenu(null);
      }
    },
    [navigate, setActiveExpandMenu]
  );

  // Check if menu item is selected
  const isItemSelected = useCallback(
    (item: AppModule) => {
      // Kiểm tra path trực tiếp
      if (item.path && location.pathname.includes(item.path)) {
        return true;
      }

      // Kiểm tra children nếu có
      if (item.children) {
        return item.children.some((child) => {
          // Kiểm tra path của child
          if (child.path && location.pathname.includes(child.path)) {
            return true;
          }
          // Kiểm tra grandchildren nếu có
          if (child.children) {
            return child.children.some(
              (grandChild) =>
                grandChild.path && location.pathname.includes(grandChild.path)
            );
          }
          return false;
        });
      }

      return false;
    },
    [location.pathname]
  );

  // Render a menu item
  const renderMenuItem = useCallback(
    (item: AppModule) => {
      const isSelected = isItemSelected(item);
      const isExpanded = expandedItems.includes(item.title);

      return (
        <Box key={item.title}>
          <MenuItem
            item={item}
            isSelected={isSelected}
            isExpanded={isExpanded}
            onClick={() => handleMenuClick(item)}
          />
          {!isCollapsed && item.type === "submenu" && item.children && (
            <SubmenuList
              items={item.children}
              isExpanded={isExpanded}
              isItemSelected={isItemSelected}
              onItemClick={(child) => {
                if (child.path) {
                  setActiveExpandMenu(null);
                }
              }}
            />
          )}
        </Box>
      );
    },
    [
      expandedItems,
      handleMenuClick,
      isCollapsed,
      isItemSelected,
      navigate,
      setActiveExpandMenu,
    ]
  );

  return <List sx={{ width: "100%", p: 0 }}>{items.map(renderMenuItem)}</List>;
};
