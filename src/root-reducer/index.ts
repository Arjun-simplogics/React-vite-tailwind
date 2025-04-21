import { RootReducer } from "../modal/root-reducer";
import userReducer from "../redux/services/user/user.slice";
import tablePluginReducer from "../redux/services/table-plugin/table-plugin.slice";

export const rootReducer: RootReducer = {
	user: userReducer,
	tablePlugin: tablePluginReducer,
};
