 
import type { BaseEntity } from '../../common/interfaces/base-item.interface';
import type { OrgUnit } from '../org-unit/org-unit.entities';
import {
  Gender,
  UserBankName,
  UserCitizenIdentificationPlace,
  UserCultureLevel,
  UserEducationLevel,
  UserEthnic,
  UserLevel,
  UserMaritalStatus, 
  UserOfficialStatus,
  UserReligion,
  UserResignType,
  UserStatus,
  UserType,
} from './user.enum';

export interface UserOrgUnitPosition extends BaseEntity {
  userId: string;
  user: User;
  positionId: string;
  position: any;
  orgUnitId: string;
  orgUnit: any;
  orgUnits: any[];
  id: string;
  subManagers: SubManager[];
  positionType: any;
  manager: string;
  isOldData?: boolean;
  orgUnitData?: any;
}
export interface avatarUser {
  id: string;
  name: string;
  url: string;
}
export interface User extends BaseEntity {
  code: string;
  name: string;
  gender: Gender;
  dateOnboard: Date;
  email: string;
  internalPhones: string[];
  phone: string;
  level: UserLevel;
  birthday: Date;
  address: string;
  tempAddress: string;
  educationLevel: UserEducationLevel;
  major: string;
  cultureLevel: UserCultureLevel;
  dateWorkEnd: Date;
  resignType: UserResignType;
  resignReason: string;
  cccd: string;
  citizenIdentificationDate: Date;
  citizenIdentificationPlace: UserCitizenIdentificationPlace;
  passportNumber: string;
  passportDate: Date;
  passportPlace: string;
  passportValidityDate: Date;
  ethnicity: UserEthnic;
  religion: UserReligion;
  maritalStatus: UserMaritalStatus;
  taxCode: string;
  socialInsuranceNumber: string;
  bankAccountNumber: string;
  bankBranch: string;
  bankName: UserBankName;
  tenure: number;
  relativeName: string;
  relativePhone: string;
  url: string;
  type: UserType;
  status: UserStatus;
  password: string;
  officialStatus: UserOfficialStatus;
  // deletedValue: UserDeletedValue;
  userOrgUnitPositions: UserOrgUnitPosition[];
  managedOrgUnits: OrgUnit[];
  // jobApprovers: JobApprover[];
  // userApprovers: UserMovementApprover[];
  // userMovements: UserMovement[];
  // userNotifications: UserMovementNotify[];
  subManagers: SubManager[];

  //Bổ sung từ FE
  managers?: {
    [key: string]: OrgUnitData;
  };
  orgUnits?: any[];
  position?: any;
  // orgUnits?: OrgUnit[];
  // position?: Position;
  permission: boolean;
  numberPermission?: number;
  codeClock: string;
}
interface Manager {
  orgUnitId: string;
  orgUnitName: string;
  managerId: string;
  managerName: string;
  managerEmail: string;
  level: number;
  url: string;
  type: number;
}

interface OrgUnitData {
  orgUnitName: string;
  positionName: string;
  nearestManagers: Manager[];
}

interface PositionValueDto {
  id: string;
  orgName: string;
  positionName: string;
}
export interface OrgUnitValueDto {
  id: string;
  orgName: string;
  positionName: string;
  divisionName: string;
  departmentName: string;
  partName: string;
  teamsName: string[];
}

export interface MovementValueDto {
  position?: PositionValueDto;
  orgUnit?: OrgUnitValueDto;
  user?: User;
}

 
 
 

 

 
 

export interface UserMovementOrgUnitSimple {
  id: string;
  name: string;
  type: number;
}

export interface UserMovementPositionSimple {
  id: string;
  name: string;
}

 
 

 
export interface SubManager {
  id?: string;
  name?: string;
  type?: number;
  orgUnitId?: string;
  orgUnitParentId?: string;
  // orgUnit?: OrgUnit;
  orgUnit?: any;
  user?: User;
}

export interface UserHistoryItem {
  id: string;
  updatedAt: string;
  createdBy: {
    id: string;
    name: string;
    url: string;
  };
}

export interface UserMovementHistoryData {
  userMovementHistory: UserHistoryItem;
  changes: UserMovementHistoryChange[];
}

export interface UserMovementHistoryChange {
  field: string;
  label: string;
  reasonOld: string;
  reasonNew: string;
  dateAppointmentOld: string;
  dateAppointmentNew: string;
  fileOld: string;
  fileNew: string;
}

export interface UserInformationHistoryChange {
  field: string;
  old: string;
  new: string;
}

export interface UserInformationHistoryData {
  userHistory: UserHistoryItem;
  changes: UserInformationHistoryChange[];
}
