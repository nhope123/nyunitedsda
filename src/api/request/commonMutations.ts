import type { AxiosRequestConfig } from "axios";
import axiosInstance from "../axiosInstance";
import type { DatabaseEntity } from "./types";
import { handleOperationError } from "./helpers";

// Create entity
const createEntity = async <T extends object>(
	entity: DatabaseEntity,
	data: Omit<T, "id">,
	config?: AxiosRequestConfig,
): Promise<T> => {
	try {
		const response = await axiosInstance.post(`/${entity}`, data, config);
		return response.data.data || response.data;
	} catch (error: unknown) {
		return handleOperationError("create", entity, error);
	}
};

// Update entity
const updateEntity = async <T extends { id: number }>(
	entity: DatabaseEntity,
	id: number,
	data: Partial<Omit<T, "id">>,
	config?: AxiosRequestConfig,
): Promise<T> => {
	try {
		const response = await axiosInstance.put(`/${entity}/${id}`, data, config);
		return response.data.data || response.data;
	} catch (error: unknown) {
		return handleOperationError("update", entity, error);
	}
};

// Delete entity
const deleteEntity = async <T extends object>(
	entity: DatabaseEntity,
	id: number,
	config?: AxiosRequestConfig,
): Promise<T | { success: boolean }> => {
	try {
		const response = await axiosInstance.delete(`/${entity}/${id}`, config);
		return response.data.data || response.data;
	} catch (error: unknown) {
		return handleOperationError("delete", entity, error);
	}
};

export { createEntity, updateEntity, deleteEntity };
