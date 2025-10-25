import { UserType } from '../../apis/user/user.enum';

export interface ResList<T> {
  total: number;
  list: T[];
  userType?: UserType;
  isManager?: boolean;
}
