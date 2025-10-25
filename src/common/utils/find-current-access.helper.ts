
import { SYSTEM_MODULES } from '../constant/apps.constant';
import type { AppModule } from '../enums/app-category.enum';


export const findCurrentAccessByPath = (pathname: string): string | undefined => {
  // Helper để check path trong children và trả về key của module chứa path
  const checkInChildren = (module: AppModule, children?: AppModule[]): string | undefined => {
    if (!children) return undefined;

    for (const child of children) {
      // Kiểm tra path trực tiếp của child
      if (child.path && pathname.includes(child.path)) {
        return module.key;
      }

      // Kiểm tra trong children của child (nếu có)
      if (child.children) {
        const found = checkInChildren(module, child.children);
        if (found) return found;
      }
    }

    return undefined;
  };

  // Tìm module chứa path
  for (const module of SYSTEM_MODULES) {
    // Kiểm tra path trực tiếp của module
    if (module.path && pathname.includes(module.path)) {
      return module.key;
    }

    // Kiểm tra trong children của module
    if (module.children) {
      const found = checkInChildren(module, module.children);
      if (found) return found;
    }
  }

  return undefined;
};

