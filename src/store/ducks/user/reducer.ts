import  produce, { Draft } from "immer";
import { LoadingState } from "../../types";
import { UserActions } from "./actionCreators";
import { UserActionType } from "./contracts/actionTypes";
import { UserState } from "./contracts/state";


const initialUserState: UserState = {
  data: undefined,
  status: LoadingState.NEVER,
}

export const userReducer = produce((draft:Draft<UserState>,action:UserActions) =>{
  switch (action.type) {
    case UserActionType.SET_USER_DATA :
      draft.data = action.payload
      draft.status = LoadingState.SUCCESS
      break;

      case UserActionType.SET_LOADING_STATE :
        draft.status = action.payload;
      break;

      default:
      break;
  }
},initialUserState);