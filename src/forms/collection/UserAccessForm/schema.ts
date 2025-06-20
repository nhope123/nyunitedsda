import * as Yup from "yup";
import { nameSchema, passwordSchema } from "../commonSchemas";

export const loginSchema = Yup.object({
	username: nameSchema.concat(Yup.string().required("Username is required")),
	password: passwordSchema,
	rememberMe: Yup.boolean(),
});

export const registerSchema = Yup.object({
	username: nameSchema.concat(Yup.string().required("Username is required")),
	password: passwordSchema,
	confirmPassword: passwordSchema.concat(
		Yup.string()
			.oneOf([Yup.ref("password"), undefined], "Passwords must match")
			.required("Confirm Password is required"),
	),
});
