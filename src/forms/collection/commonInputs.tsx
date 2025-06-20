import InputAdornment from "@mui/material/InputAdornment";
import { Suspense, lazy } from "react";
import type { InputFieldProps } from "../Input/types";
import PlaceholderIcon from "./PlaceholderIcon";

const LockOutlined = lazy(() => import("@mui/icons-material/LockOutlined"));
const Person3Outlined = lazy(
	() => import("@mui/icons-material/Person3Outlined"),
);

export const configurePasswordInput = ({
	name = "password",
	label = "Password",
} = {}): InputFieldProps => ({
	name: name ?? "password",
	label: label ?? "Password",
	fieldType: "text",
	type: "password",
	InputProps: {
		startAdornment: (
			<InputAdornment position="start">
				<Suspense fallback={<PlaceholderIcon />}>
					<LockOutlined color="primary" />
				</Suspense>
			</InputAdornment>
		),
	},
});

export const configureUsernameInput = (): InputFieldProps => ({
	name: "username",
	label: "Username",
	fieldType: "text",
	InputProps: {
		startAdornment: (
			<InputAdornment position="start">
				<Suspense fallback={<PlaceholderIcon />}>
					<Person3Outlined color="primary" />
				</Suspense>
			</InputAdornment>
		),
	},
});
