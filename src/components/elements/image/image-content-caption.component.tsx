import { SxProps } from "@mui/system";
import React from "react";
import { STYLE } from "../../../common/constant";
import { StackRow } from "../../styles/stack.style";
import { TypographyContentCaption } from "../typography/typography-content-caption.component";
import { SizeProps } from "../../avatar";
import { AvatarElement } from "../../avatar/avatar.element";

export interface ImageContentCaptionComponentProps {
  url?: string;
  content?: string;
  caption?: string;
  sizeType?: SizeProps;
  sx?: SxProps;
  sxContent?: SxProps;
  sxCaption?: SxProps;
  alt?: string;
}

export const ImageContentCaptionComponent: React.FC<
  ImageContentCaptionComponentProps
> = ({
  url,
  content,
  caption,
  sizeType = "medium",
  sx,
  sxContent,
  sxCaption,
  alt = "",
}) => {
  return (
    <StackRow alignItems="center" sx={{ ...sx, gap: STYLE.PADDING_GAP_ITEM }}>
      <AvatarElement alt={alt} url={url} size={sizeType} />
      <TypographyContentCaption
        content={content}
        caption={caption}
        sxContent={sxContent}
        sxCaption={sxCaption}
      />
    </StackRow>
  );
};
