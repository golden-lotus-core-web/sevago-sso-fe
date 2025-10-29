const SIZE_LARGE = 32;
const SIZE_MEDIUM = 26;
const SIZE_SMALL = 18;
const SIZE_EXTRA_SMALL = 20;

export type SizeProps = "extra_small" | "small" | "medium" | "large";

export const MAP_SIZE: Record<string, { width: number; height: number }> = {
  large: { width: SIZE_LARGE, height: SIZE_LARGE },
  medium: { width: SIZE_MEDIUM, height: SIZE_MEDIUM },
  small: { width: SIZE_SMALL, height: SIZE_SMALL },
  extra_small: { width: SIZE_EXTRA_SMALL, height: SIZE_EXTRA_SMALL },
};

export enum StatusAvatar {
  PENDING = "Đang chờ",
  APPROVED = "Đã phê duyệt",
  REJECTED = "Đã từ chối",
}
