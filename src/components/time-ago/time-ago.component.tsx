import { Typography } from "@mui/material";
import React from "react";
import { timeUtils } from "../../common/utils";
import { getLimitLineCss } from "../../common/utils/other/get-limit-line-css.utils";

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
      {(hasText ? "Cập nhật lúc " : "") + timeUtils.getTimeAgo(time)}
    </Typography>
  );
};
