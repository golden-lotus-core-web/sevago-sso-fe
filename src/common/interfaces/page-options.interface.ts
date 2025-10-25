import { OrderType } from '../enums/order-type.enum';

export interface PageOptionsDto {
  order?: OrderType;
  orderBy?: string;
  page: number;
  take: number;
  search?: string;
  isRelations?: boolean;
  positionIds?: string[];
  orgUnitIds?: string[];
  isSearchPosition?: boolean;
  isSearchOrgUnit?: boolean;
  notType?: string;
  // subManager?: PositionSubManager;
  currentOrgUnitId?: string;
}
