import type { DatabaseEntity } from "./types";

/**
 * Generic error handler for database operations
 * This utility function provides consistent error handling for API operations.
 * It formats error messages, logs them to console, and returns a rejected promise
 * with the appropriate error value.
 *
 * @param operation - The type of operation being performed (e.g., "create", "update", "delete")
 * @param entity - The database entity being operated on (e.g., "users", "donations")
 * @param error - The caught error object (can be any type, will be processed accordingly)
 * @returns A rejected Promise with either the original Error object or a string message
 */
export const handleOperationError = (
	operation: string,
	entity: DatabaseEntity,
	error: unknown,
) => {
	const errorMessage = error instanceof Error ? error.message : String(error);
	console.error(`${operation} ${entity} mutation Error: ${errorMessage}`);
	return Promise.reject(error instanceof Error ? error : errorMessage);
};
