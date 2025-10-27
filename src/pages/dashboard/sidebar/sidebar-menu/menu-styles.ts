import { Theme } from "@mui/material";

export const menuItemStyles = {
  listItem: (isSelected: boolean) => ({
    marginY: "2px",
    gap: "8px",
    cursor: "pointer",
    borderRadius: "6px",
    backgroundColor: isSelected ? "#E6EEED" : "transparent",
    padding: "10px",
    overflow: "hidden",
    "&:hover": {
      backgroundColor: "#E6EEED",
    },
  }),
  submenuItem: {
    marginY: "2px",
    gap: "8px",
    cursor: "pointer",
    borderRadius: "6px",
    padding: "10px",
    overflow: "hidden",
    "&:hover": {
      backgroundColor: "#E6EEED",
    },
  },
  expandMenuTypography: (theme: Theme, isActive: boolean) => ({
    position: "relative",
    display: "inline-block",
    color: isActive ? theme.palette.primary.main : "inherit",
    fontWeight: isActive ? 600 : "inherit",
    lineHeight: "16.8px",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  }),
  iconExpandMenu: (isExpanded: boolean | undefined) => ({
    transition: "transform 0.3s ease",
    transform: isExpanded ? "rotate(-180deg)" : "rotate(0deg)",
    display: "flex",
    alignItems: "center",
  }),
};
