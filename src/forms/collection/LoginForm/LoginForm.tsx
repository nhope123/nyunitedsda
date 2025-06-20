import Stack from "@mui/material/Stack";
import { type FC, useCallback, useMemo } from "react";
import * as Yup from "yup";
import FormContainer from "../../FormBuilder/FormContainer";
import InputField from "../../Input/FormField";
import {
	configurePasswordInput,
	configureUsernameInput,
} from "../commonInputs";

const initialValues = {
	username: "",
	password: "",
	rememberMe: false,
};

const loginSchema = Yup.object({
	username: Yup.string()
		.min(3, "Username must be at least 3 characters")
		.max(50, "Username must be at most 50 characters")
		.required("Username is required"),
	password: Yup.string().required("Password is required"),
	rememberMe: Yup.boolean(),
});

const SIGN_IN = "Sign In";

const LoginForm: FC = () => {
	const passwordProps = useMemo(() => configurePasswordInput(), []);
	const usernameProps = useMemo(() => configureUsernameInput(), []);

	const _handleSubmit = useCallback(() => {
    // Handle form submission logic here
  }, []);

	return (
		<FormContainer
			initialValues={initialValues}
			validationSchema={loginSchema}
			onSubmit={_handleSubmit}
			submitButtonText={SIGN_IN}
		>
			<Stack spacing={3}>
				<InputField {...usernameProps} />

				<InputField {...passwordProps} />

				<InputField
					name="rememberMe"
					label="Remember me"
					fieldType="checkbox"
				/>
			</Stack>
		</FormContainer>
	);
};

export default LoginForm;
