import React from "react";
import { Stack } from "@mui/system";
import { TimeAgoComponent } from "./time-ago.component";
import { STYLE } from "../../common/constant";
import { Typography } from "@mui/material";
import { getLimitLineCss } from "../../common/utils/other/get-limit-line-css.utils";

export interface TimeAgoContentComponentProps {
  time: Date;
  content: string;
  height?: number | string;
}

export const TimeAgoContentComponent: React.FC<
  TimeAgoContentComponentProps
> = ({ time, content, height = STYLE.HEIGHT_IMAGE_DEFAULT }) => {
  return (
    <Stack
      sx={{
        height,
        gap: 0,
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Typography
        sx={{
          ...getLimitLineCss(1),
        }}
      >
        {content}
      </Typography>
      <TimeAgoComponent time={time} />
    </Stack>
  );
};
