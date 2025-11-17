import { ButtonProps, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { FileWithPreview } from "../../../common/interfaces/image-with-preview.interface";
import { ButtonIconElement } from "./button-icon.element";

export interface ButtonUploadFileElementProps
  extends Omit<ButtonProps, "onChange"> {
  multiple?: boolean;
  onChange: (files: FileWithPreview[]) => void;
  accept?: string;
}

export const ButtonUploadFileElement: React.FC<
  ButtonUploadFileElementProps
> = ({ multiple = false, onChange, accept = "image/*", ...rest }) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      const filesTemp = newFiles.map((file: File) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      );
      setFiles(filesTemp);
      onChange(filesTemp);
    }
  };

  useEffect(() => {
    return () =>
      files?.forEach((file) => {
        URL.revokeObjectURL(file.preview);
      });
  }, [files]);

  return (
    <React.Fragment>
      <Stack sx={{ width: "fit-content", height: "fit-content" }}>
        <ButtonIconElement
          {...rest}
          icon="attach_file"
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
        />
      </Stack>
      <input
        type="file"
        accept={accept}
        hidden
        multiple={multiple}
        ref={fileInputRef}
        onChange={change}
      />
    </React.Fragment>
  );
};
