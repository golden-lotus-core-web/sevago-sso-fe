import {
  FormControl,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { STYLE, TYPOGRAPHY_STYLES } from "../../../common";
import { StackRowAlignCenter } from "../../styles";

export interface PaginationElementProps {
  total?: number;
  page: number;
  take: number;
  openRowsPerPage?: boolean;
  onChange: (pagination: { page: number; take: number }) => void;
  sx?: SxProps<Theme>;
}

export const PaginationElement: React.FC<PaginationElementProps> = ({
  total = 0,
  page,
  take = 10,
  openRowsPerPage = true,
  onChange,
  sx = {},
}) => {
  const totalPages = Math.ceil(total / take);
  const validTakes = [5, 10, 25, 50];
  const displayTake = validTakes.includes(Number(take)) ? Number(take) : 10;
  const { palette } = useTheme();

  const handleChangeRowsPerPage = (event: SelectChangeEvent<number>) => {
    const newTake = Number(event.target.value);
    onChange({ page: 1, take: newTake });
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    onChange({ page: newPage, take });
  };

  return (
    <StackRowAlignCenter
      gap={0.75}
      sx={{ ml: "auto", p: STYLE.PADDING_GAP_BUTTON, ...sx }}
    >
      {openRowsPerPage && (
        <StackRowAlignCenter gap={0.5}>
          <Typography
            sx={{ ...TYPOGRAPHY_STYLES.textSm.regular, marginRight: "8px" }}
          >
            Hiển thị:
          </Typography>
          <FormControl size="small">
            <Select
              value={displayTake}
              onChange={handleChangeRowsPerPage}
              sx={{
                "&.MuiInputBase-root": {
                  borderRadius: "6px",
                  height: "32px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid var(--Neutral-300, #E4E6E6)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid var(--Neutral-300, #E4E6E6)",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid var(--Neutral-300, #E4E6E6)",
                },
              }}
            >
              <MenuItem value={5}>5 / trang</MenuItem>
              <MenuItem value={10}>10 / trang</MenuItem>
              <MenuItem value={25}>25 / trang</MenuItem>
              <MenuItem value={50}>50 / trang</MenuItem>
            </Select>
          </FormControl>
        </StackRowAlignCenter>
      )}

      <Pagination
        count={totalPages}
        page={page}
        showFirstButton
        showLastButton
        onChange={handlePageChange}
        // size="small"
        variant="outlined"
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root.Mui-disabled": {
            opacity: 0.5,
            pointerEvents: "none",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            background: palette.primary.main,
            color: "white",
          },
        }}
      />
    </StackRowAlignCenter>
  );
};
