import { List } from "@mui/material";
import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppModule } from "../../../../common";
import { ExpandMenuItem } from "./expand-menu-item.component";

interface SidebarMenuExpandProps {
  items: AppModule[];
}

export const SidebarMenuExpand: React.FC<SidebarMenuExpandProps> = ({
  items,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isItemActive = useCallback(
    (item: AppModule) => {
      // Nếu item có path và path khớp với current path
      if (item.path && location.pathname.includes(item.path)) {
        return true;
      }

      // Kiểm tra trong children nếu có
      if (item.children) {
        return item.children.some((child) => {
          // Kiểm tra path của child
          if (child.path && location.pathname.includes(child.path)) {
            return true;
          }
          // Kiểm tra trong children của child nếu có
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

  return (
    <List sx={{ width: "100%", p: 0 }}>
      {items.map((item) => (
        <ExpandMenuItem
          key={item.title}
          item={item}
          onItemClick={(path) => {
            if (path) {
              navigate(path);
            }
          }}
          isItemActive={isItemActive}
        />
      ))}
    </List>
  );
};
