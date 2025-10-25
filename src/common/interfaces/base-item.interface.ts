import type { User } from '../../apis/user/user.entities';

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy?: Partial<User>;
  updatedBy?: Partial<User>;
}
