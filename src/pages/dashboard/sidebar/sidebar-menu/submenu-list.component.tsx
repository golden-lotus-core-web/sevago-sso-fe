import { Collapse, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AppModule, getLimitLineCss } from "../../../../common";
import { menuItemStyles } from "./menu-styles";

interface SubmenuListProps {
  items: AppModule[];
  isExpanded: boolean;
  isItemSelected: (item: AppModule) => boolean;
  onItemClick: (item: AppModule) => void;
}

export const SubmenuList: React.FC<SubmenuListProps> = ({
  items,
  isExpanded,
  onItemClick,
}) => {
  return (
    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
      <List sx={{ pl: 3.5 }} component="div" disablePadding>
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.path || "#"}
            style={{ textDecoration: "none", color: "unset" }}
          >
            <ListItem
              onClick={() => onItemClick(item)}
              key={item.title}
              disablePadding
              sx={menuItemStyles.submenuItem}
            >
              <Typography
                variant="body1"
                color={
                  location.pathname.includes(item.path || "")
                    ? "primary"
                    : "inherit"
                }
                sx={{
                  flex: 1,
                  ...getLimitLineCss(1),
                  fontWeight: location.pathname.includes(item.path || "")
                    ? 600
                    : 400,
                }}
              >
                {item.title}
              </Typography>
            </ListItem>
          </Link>
        ))}
      </List>
    </Collapse>
  );
};
