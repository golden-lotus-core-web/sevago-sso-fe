import type { BaseEntity } from "../../common/interfaces/base-item.interface";
import type { SubManager, User } from "../user/user.entities";
import type { OrgUnitStatus, OrgUnitType } from "./org-unit.enum";

 
 

export interface OrgUnit extends BaseEntity {
  id: string;
  name: string;
  description: string;
  type: OrgUnitType;
  status: OrgUnitStatus;
  totalMember: number;
  parentId: string;
  parent: OrgUnit;
  children: OrgUnit[];
  managerId: string;
  manager: User;
  permission: boolean;
  projectTaskId?: string;
  divisionId?: string;
  subManagersParent: SubManagersParent[];
  subManagers: SubManager[];
}
export interface SubManagersParent {
  orgUnit: OrgUnit;
}

export interface OrgUnitIdDetail extends OrgUnit {
  orgUnit: OrgUnit;
  users: User[];
}

export interface GetOrgUnitIdDto extends OrgUnit {
  userOrgUnitPositions: {
    id: string;
    user: {
      id: string;
      name: string;
    };
    position: {
      id: string;
      name: string;
    };
  }[];
}
