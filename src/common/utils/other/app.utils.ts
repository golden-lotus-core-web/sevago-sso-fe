import { AppCategory } from '../../enums/app-category.enum';

export const getAppColor = (app: AppCategory): string => {
  switch (app) {
    case AppCategory.HRM:
      return 'linear-gradient(180deg, #09D47B 0%, #07554B 100%)';
    case AppCategory.WORKFLOW:
      return 'linear-gradient(180deg, #3990FF 0%, #2662FF 100%)';
    default:
      return 'linear-gradient(180deg, #FF9A56 0%, #FF6A43 100%)';
  }
};
