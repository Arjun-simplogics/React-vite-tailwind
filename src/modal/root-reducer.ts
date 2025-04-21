import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { UserReducer } from "../redux/services/user/user.slice";
import { TablePluginReducer } from "../redux//services/table-plugin/table-plugin.slice";

export type RootReducer = {
	user: Reducer<UserReducer, AnyAction>;
	tablePlugin: Reducer<TablePluginReducer, AnyAction>;
};
