import { Typography } from "@mui/material";
import React from "react";
import { getLimitLineCss, getTimeAgo } from "../../../common";

export interface TimeAgoComponentProps {
  time: Date;
  hasText?: boolean;
}

export const TimeAgoComponent: React.FC<TimeAgoComponentProps> = ({
  time,
  hasText,
}) => {
  return (
    <Typography
      variant="caption"
      sx={{ ...getLimitLineCss(1), color: "text.disabled", lineHeight: 1.2 }}
    >
      {(hasText ? "Cập nhật lúc " : "") + getTimeAgo(time)}
    </Typography>
  );
};
