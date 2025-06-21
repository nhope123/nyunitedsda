import { handleOperationError } from "./helpers";
import type { DatabaseEntity } from "./types";

describe("handleOperationError", () => {
	// Spy on console.error to verify it's called correctly
	const originalConsoleError = console.error;
	const mockConsoleError = vi.fn();

	beforeEach(() => {
		console.error = mockConsoleError;
	});

	afterEach(() => {
		console.error = originalConsoleError;
		vi.clearAllMocks();
	});

	it("should format and log Error objects correctly", async () => {
		// Arrange
		const operation = "create";
		const entity = "users" as DatabaseEntity;
		const error = new Error("Something went wrong");

		// Act & Assert
		await expect(handleOperationError(operation, entity, error)).rejects.toBe(
			error,
		);

		expect(mockConsoleError).toHaveBeenCalledWith(
			"create users mutation Error: Something went wrong",
		);
	});

	it("should handle string errors", async () => {
		// Arrange
		const operation = "update";
		const entity = "posts" as DatabaseEntity;
		const errorMessage = "Network timeout";

		// Act & Assert
		await expect(
			handleOperationError(operation, entity, errorMessage),
		).rejects.toBe(errorMessage);

		expect(mockConsoleError).toHaveBeenCalledWith(
			"update posts mutation Error: Network timeout",
		);
	});

	it("should convert numeric errors to strings", async () => {
		// Arrange
		const operation = "delete";
		const entity = "comments" as DatabaseEntity;
		const errorCode = 404;

		// Act & Assert
		await expect(
			handleOperationError(operation, entity, errorCode),
		).rejects.toBe("404");

		expect(mockConsoleError).toHaveBeenCalledWith(
			"delete comments mutation Error: 404",
		);
	});

	it("should handle null/undefined errors", async () => {
		// Arrange
		const operation = "read";
		const entity = "products" as DatabaseEntity;

		// Act & Assert - Test null
		await expect(handleOperationError(operation, entity, null)).rejects.toBe(
			"null",
		);

		expect(mockConsoleError).toHaveBeenCalledWith(
			"read products mutation Error: null",
		);

		// Reset mock
		mockConsoleError.mockClear();

		// Act & Assert - Test undefined
		await expect(
			handleOperationError(operation, entity, undefined),
		).rejects.toBe("undefined");

		expect(mockConsoleError).toHaveBeenCalledWith(
			"read products mutation Error: undefined",
		);
	});

	it("should handle complex object errors", async () => {
		// Arrange
		const operation = "patch";
		const entity = "orders" as DatabaseEntity;
		const complexError = { status: 500, message: "Server error" };

		// Act & Assert
		await expect(
			handleOperationError(operation, entity, complexError),
		).rejects.toBe("[object Object]");

		expect(mockConsoleError).toHaveBeenCalledWith(
			"patch orders mutation Error: [object Object]",
		);
	});

	it("should handle Error subclasses", async () => {
		// Arrange
		const operation = "query";
		const entity = "analytics" as DatabaseEntity;
		class CustomError extends Error {
			constructor(message: string) {
				super(message);
				this.name = "CustomError";
			}
		}
		const customError = new CustomError("Custom error message");

		// Act & Assert
		await expect(
			handleOperationError(operation, entity, customError),
		).rejects.toBe(customError);

		expect(mockConsoleError).toHaveBeenCalledWith(
			"query analytics mutation Error: Custom error message",
		);
	});
});
