import { Badge, SxProps } from "@mui/material";
import React from "react";
import { Theme } from "@emotion/react";
import { StackRowJustBetween } from "../../styles";
import {
  IconContentElementProps,
  IconContentElement,
} from "./icon-content.element";

export interface IconContentBadgeCountElementProps
  extends IconContentElementProps {
  badgeCount: number;
  sxBadge?: SxProps<Theme>;
  isAddCountToContent?: boolean;
}

export const IconContentBadgeCountElement: React.FC<
  IconContentBadgeCountElementProps
> = ({ badgeCount, sxBadge = {}, isAddCountToContent = false, ...rest }) => {
  return isAddCountToContent ? (
    <StackRowJustBetween gap={1}>
      <IconContentElement {...rest} />
      {badgeCount > 0 && (
        <Badge
          badgeContent={badgeCount}
          color="error"
          slotProps={{
            badge: {
              sx: {
                position: "static",
                transform: "none",
                alignSelf: "center",
                ...sxBadge,
              },
            },
          }}
        />
      )}
    </StackRowJustBetween>
  ) : (
    <Badge
      badgeContent={badgeCount}
      color="error"
      slotProps={{ badge: { sx: { top: -8, right: 3, ...sxBadge } } }}
    >
      <IconContentElement {...rest} />
    </Badge>
  );
};
