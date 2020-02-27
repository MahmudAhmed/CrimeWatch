import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import modal from "./modal_reducer";
import incidents from "./incidents_reducer"
const RootReducer = combineReducers({
  incidents,
  session,
  errors,
  modal
});

export default RootReducer;
