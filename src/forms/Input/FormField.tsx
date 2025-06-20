import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { useField } from "formik";
import { type FC, useMemo } from "react";
import SelectField from "./SelectField";
import type { InputFieldProps } from "./types";

const InputField: FC<InputFieldProps> = ({
	name,
	label,
	type = "text",
	fieldType,
	...props
}) => {
	const [field, meta] = useField(name);

	const errorText = useMemo(
		() => (meta.error && meta.touched ? meta.error : ""),
		[meta.error, meta.touched],
	);

	switch (fieldType) {
		case "text":
			return (
				<TextField
					{...field}
					{...props}
					label={label}
					type={type}
					error={!!errorText}
					helperText={errorText}
					fullWidth
					margin="normal"
				/>
			);

		case "select":
			return (
				<SelectField
					{...field}
					{...props}
					label={label}
					error={errorText}
					items={props.items || []}
					valueResolver={
						props.valueResolver ||
						((item: { value: number | string }) => item.value)
					}
					renderItemLabel={
						props.renderItemLabel ||
						((item: { value: string | number }) => String(item.value))
					}
				/>
			);

		case "checkbox":
			return (
				<FormControlLabel
					{...field}
					{...props}
					control={<Checkbox />}
					label={label}
				/>
			);

		default:
			break;
	}

	return (
		<TextField
			{...field}
			{...props}
			label={label}
			error={!!errorText}
			helperText={errorText}
			fullWidth
			margin="normal"
		/>
	);
};

export default InputField;
