import type { GlobalAccountState } from "./account/account.interface";
import type { GlobalSystemState } from "./system/system.interface";
 
interface RemainingWeightState {
  weight: number;
}
export interface GlobalReduxState {
  account: GlobalAccountState;
  system: GlobalSystemState;
  remainingWeight: RemainingWeightState;
}
