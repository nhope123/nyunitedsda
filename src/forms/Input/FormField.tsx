import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { useField } from "formik";
import { type FC, useMemo } from "react";
import SelectField from "./SelectField";

type FormFieldType = "textarea" | "select" | "checkbox" | "radio";

interface InputFieldProps {
	name: string;
	label: string;
	type?: string;
	fieldType: FormFieldType;
	multiline?: boolean;
	rows?: number;
	items?: any[]; // For select fields, the items to display
	valueResolver?: (item: any) => string | number; // Function to resolve the value for select options
	renderItemLabel?: (item: any) => string; // Function to render the label
	[x: string]: any;
}

const InputField: FC<InputFieldProps> = ({
	name,
	label,
	fieldType,
	...props
}) => {
	const [field, meta] = useField(name);

	const errorText = useMemo(
		() => (meta.error && meta.touched ? meta.error : ""),
		[meta.error, meta.touched],
	);

	switch (fieldType) {
		case "textarea":
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
