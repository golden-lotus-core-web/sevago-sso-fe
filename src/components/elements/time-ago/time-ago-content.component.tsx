import { Stack } from "@mui/system";
import React from "react";
import { STYLE } from "../../../common";
import { TypographyOneLine } from "../typography";
import { TimeAgoComponent } from "./time-ago.component";

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
      <TypographyOneLine content={content} />
      <TimeAgoComponent time={time} />
    </Stack>
  );
};
