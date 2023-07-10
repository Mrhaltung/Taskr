import { combineReducers } from "redux";

import {authReducer, postReducer} from "./authReducer";

export const reducers = combineReducers({authReducer, postReducer})