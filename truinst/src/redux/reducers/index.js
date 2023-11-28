import { combineReducers } from "redux";
import authModal from "./authModalReducer";
import auth from "./authReduser";
import global from "./globalReduser"

export const rootReduser = combineReducers({ authModal, auth,global});
