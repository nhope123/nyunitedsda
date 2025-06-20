import * as Yup from "yup";

export const passwordSchema = Yup.string()
	.min(6, "Password must be at least 6 characters")
	.max(50, "Password must be at most 50 characters")
	.required("Password is required");

export const nameSchema = Yup.string()
	.min(3, "Username must be at least 3 characters")
	.max(50, "Username must be at most 50 characters");
