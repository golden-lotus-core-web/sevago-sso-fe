import React from "react";
import { IconButton } from "@mui/material";
import { type SxProps } from "@mui/system";
import { IconElement } from "./icon.element";

interface IconButtonElementProps {
  icon: string;
  onClick: () => void;
  sx?: SxProps;
  size?: number;
}

export const IconButtonElement: React.FC<IconButtonElementProps> = ({
  icon,
  onClick,
  sx,
  size = 16,
}) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: 8,
        top: "50%",
        transform: "translateY(-50%)",
        width: size + 8,
        height: size + 8,
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
        },
        ...sx,
      }}
    >
      <IconElement icon={icon} sx={{ fontSize: size }} />
    </IconButton>
  );
};
