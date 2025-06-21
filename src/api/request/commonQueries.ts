import type { AxiosRequestConfig } from "axios";
import axiosInstance from "../axiosInstance";
import type { DatabaseEntity } from "./types";
import { handleOperationError } from "./helpers";

const getDatabaseList = async <T extends { id: number }>(
	entity: DatabaseEntity,
	config?: AxiosRequestConfig,
): Promise<T[]> => {
	try {
		const response = await axiosInstance.get(`/${entity}`, config);
		console.log(`get ${entity} list:`, response);
		return response?.data.data || response?.data;
	} catch (error: unknown) {
		return handleOperationError("getList", entity, error);
	}
};

const getDatabaseItem = async <T extends { id: number }>(
	entity: DatabaseEntity,
	id: number,
	config?: AxiosRequestConfig,
): Promise<T> => {
	try {
		const response = await axiosInstance.get(`/${entity}/${id}`, config);
		return response?.data.data || response?.data;
	} catch (error: unknown) {
		return handleOperationError("getItem", entity, error);
	}
};

export { getDatabaseItem, getDatabaseList };
