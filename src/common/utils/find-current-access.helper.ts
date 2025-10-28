import { APP_OBJ } from "../constant/apps.data";

export const findCurrentAccessByPath = (
  pathname: string
): string | undefined => {
  // Tìm module chứa path (không có children)
  for (const module of Object.values(APP_OBJ)) {
    if (module.path && pathname.includes(module.path)) {
      return module.path;
    }
  }
  return undefined;
};
