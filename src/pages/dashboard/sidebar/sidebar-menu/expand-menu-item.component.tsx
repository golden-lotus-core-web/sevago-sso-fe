import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { AppModule } from "../../../../common";
import { IconContentElement } from "../../../../components/elements/icon";

interface ExpandMenuProps {
  item: AppModule;
  onItemClick: (path?: string) => void;
  isItemActive: (item: AppModule) => boolean;
}

export const ExpandMenuItem: React.FC<ExpandMenuProps> = ({
  item,
  onItemClick,
  isItemActive,
}) => {
  return (
    <Box key={item.title}>
      <Box sx={{ py: 1.5 }}>
        <IconContentElement
          icon={item.icon}
          content={item.title}
          sxText={{ fontWeight: 600, textTransform: "uppercase" }}
        />
      </Box>
      {item.children?.map((child) => (
        <motion.div
          key={child.title}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.15 }}
          style={{
            padding: "10px 8px 10px 28px",
            zIndex: 3,
            position: "relative",
            cursor: "pointer",
          }}
          whileHover="hover"
          onClick={() => onItemClick(child.path)}
        >
          <Typography
            component="div"
            variant="body1"
            sx={(theme) => ({
              position: "relative",
              display: "inline-block",
              color: isItemActive(child)
                ? theme.palette.primary.main
                : "inherit",
              fontWeight: isItemActive(child) ? 600 : "inherit",
              lineHeight: "16.8px",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            })}
          >
            {child.title}
            <motion.p
              style={{
                position: "absolute",
                bottom: -2,
                left: 0,
                width: "100%",
                height: "2px",
                background: "currentColor",
                transformOrigin: "left",
              }}
              initial={{ scaleX: isItemActive(child) ? 1 : 0 }}
              animate={{ scaleX: isItemActive(child) ? 1 : 0 }}
              variants={{
                hover: {
                  scaleX: 1,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                },
              }}
            />
          </Typography>
        </motion.div>
      ))}
    </Box>
  );
};
