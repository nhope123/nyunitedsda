import Stack from "@mui/material/Stack";
import { type FC, useCallback, useMemo } from "react";
import FormContainer from "../../FormBuilder/FormContainer";
import InputField from "../../Input/FormField";
import type { InputFieldProps } from "../../Input/types";
import {
	configurePasswordInput,
	configureUsernameInput,
} from "../commonInputs";
import { loginSchema, registerSchema } from "./schema";
import type { UserAccessFormProps } from "./types";

const defaultValues = {
	username: "",
	password: "",
};

const initialLoginValues = {
	...defaultValues,
	rememberMe: false,
};

const initialRegisterValues = {
	...defaultValues,
	confirmPassword: "",
	acceptTerms: false,
};

const CONFIRM_PASSWORD = "Confirm Password";
const REGISTER = "Register";
const REMEMBER_ME = "Remember me";
const SIGN_IN = "Sign In";

const UserAccessForm: FC<UserAccessFormProps> = ({ type = "login" }) => {
	const {
		buttonText,
		confirmPasswordProps,
		initialValues,
		passwordProps,
		usernameProps,
		validationSchema,
	} = useMemo(
		() => ({
			buttonText: type === "login" ? SIGN_IN : REGISTER,
			initialValues:
				type === "login" ? initialLoginValues : initialRegisterValues,
			validationSchema: type === "login" ? loginSchema : registerSchema,
			passwordProps: configurePasswordInput(),
			usernameProps: configureUsernameInput(),
			confirmPasswordProps:
				type === "register"
					? configurePasswordInput({
							name: "confirmPassword",
							label: CONFIRM_PASSWORD,
						})
					: undefined,
		}),
		[],
	);

	const _handleSubmit = useCallback(() => {
		// TODO: Implement form submission logic
		// Handle form submission logic here for login or registration
		// This could involve calling an API, updating state, etc.
	}, []);

	return (
		<FormContainer
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={_handleSubmit}
			submitButtonText={buttonText}
		>
			<Stack spacing={3}>
				<InputField {...usernameProps} />

				<InputField {...passwordProps} />

				{type === "login" && (
					<InputField
						name="rememberMe"
						label={REMEMBER_ME}
						fieldType="checkbox"
					/>
				)}
				{type === "register" && (
					<InputField {...(confirmPasswordProps as InputFieldProps)} />
				)}
			</Stack>
		</FormContainer>
	);
};

export default UserAccessForm;
