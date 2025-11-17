import { SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import { StackRowAlignJustCenter } from "../../styles";
import { IconElement } from "./icon.element";

export interface IconContentOpacityElementProps {
  icon: string;
  content?: any;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | any;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  sx?: SxProps<Theme>;
}

export const IconContentOpacityElement: React.FC<
  IconContentOpacityElementProps
> = ({ icon, content, color = "inherit", onClick, sx = {} }) => {
  return (
    <StackRowAlignJustCenter
      onClick={onClick}
      sx={{
        backgroundColor: "red",
        cursor: "pointer",
        position: "relative",
        "& > .material-icons": {
          opacity: content ? 0 : 1,
          position: "absolute",
          transition: `opacity 0.3s`,
          color,
        },
        "& > .content": {
          position: "absolute",
          opacity: 1,
          transition: `opacity 0.3s`,
        },
        "&:hover": {
          "& > .material-icons": {
            opacity: 1,
            transition: `opacity 0.3s`,
          },
          "& > .content": {
            opacity: 0,
            transition: `opacity 0.3s`,
          },
        },
        ...sx,
      }}
    >
      <IconElement className="icon" icon={icon} color={color} />
      {content && (
        <Typography className="content" color={color}>
          {content}
        </Typography>
      )}
    </StackRowAlignJustCenter>
  );
};
