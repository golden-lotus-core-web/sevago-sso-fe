 
import type { PageOptionsDto } from '../../common/interfaces/page-options.interface';
import type { SubManager, UserOrgUnitPosition } from './user.entities';
import {
  Gender,
  UserBankName,
  UserCitizenIdentificationPlace,
  UserCultureLevel,
  UserEducationLevel,
  UserEthnic,
  UserLevel,
  UserMaritalStatus,
  UserMovementSearchType,
  UserMovementStatus,
  UserMovementType,
  UserOfficialStatus,
  UserReligion,
  UserResignType,
  UserStatus,
  UserType,
} from './user.enum';

export interface CreateUserDto {
  code: string;
  name: string;
  email: string;
  phone: string;
  cccd?: string;
  birthday?: Date;
  url?: string;
  address?: string;
  tempAddress?: string;
  gender?: Gender;
  type: UserType;
  password?: string;
  dateOnboard?: Date;
  officialStatus?: UserOfficialStatus;
  level?: UserLevel;
  internalPhones?: string[] | null;
  educationLevel?: UserEducationLevel;
  major?: string;
  cultureLevel?: UserCultureLevel;
  dateResign?: Date;
  resignType?: UserResignType;
  resignReason?: string;
  citizenIdentificationDate?: Date;
  citizenIdentificationPlace?: UserCitizenIdentificationPlace;
  passportNumber?: string;
  passportDate?: Date;
  passportPlace?: string;
  passportValidityDate?: Date;
  ethnicity?: UserEthnic;
  religion?: UserReligion;
  maritalStatus?: UserMaritalStatus;
  taxCode?: string;
  socialInsuranceNumber?: string;
  bankAccountNumber?: string;
  bankName?: UserBankName;
  bankBranch?: string;
  tenure?: number;
  relativeName?: string;
  relativePhone?: string;

  //FE
  userOrgUnitPositions: Partial<UserOrgUnitPosition>[];
  subManagers: SubManager[];
  codeClock?: string;
  dateWorkEnd?: Date;
}

export interface GetListUserDto extends PageOptionsDto {
  gender?: Gender;
  type?: UserType;
  status?: UserStatus;
  officialStatus?: UserOfficialStatus;
  orgUnitIds?: string[];
  positionIds?: string[];
}

export interface UpdateUserDto extends CreateUserDto {
  status: UserStatus;
}

export interface UpdateAccountDto extends CreateUserDto {
  passwordOld?: string;
}

export interface GetListUserMovementManagerDto extends PageOptionsDto {
  type?: UserMovementType;
  status?: UserMovementStatus;
  //Thêm filter searchType
  searchType?: UserMovementSearchType;
  statusMovement?: UserMovementStatus;
  dateAppointmentFrom?: Date;
  dateAppointmentTo?: Date;
  createdAtFrom?: Date;
  createdAtTo?: Date;
}

export interface UserMovementUpdate {
  status: UserMovementStatus;
  reasonReject: string;
}
export interface UserMovementUpdateHistory {
  reason: string;
  dateAppointment: Date;
  file: string;
}
