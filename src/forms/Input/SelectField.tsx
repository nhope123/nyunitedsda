import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectProps } from "@mui/material/Select";
import { useMemo } from "react";

export interface SelectFieldProps<T> extends Omit<SelectProps, "error"> {
	items: T[];
	label: string;
	error?: string;
	valueResolver: (item: T) => string | number;
	renderItemLabel: (item: T) => string;
}

const SelectField = <T,>({
	items,
	error,
	label,
	valueResolver,
	renderItemLabel,
	sx,
	...props
}: SelectFieldProps<T>) => {
	const labelId = useMemo(
		() => `select-${label.toLowerCase().replace(/\s+/g, "-")}`,
		[label],
	);

	return (
		<FormControl sx={sx} error={!!error} fullWidth variant="outlined">
			<InputLabel id={labelId}>{label}</InputLabel>
			<Select labelId={labelId} label={label} {...props}>
				{!items || items.length === 0 ? (
					<MenuItem value="">
						<em>No options available</em>
					</MenuItem>
				) : (
					items.map((item) => (
						<MenuItem key={valueResolver(item)} value={valueResolver(item)}>
							{renderItemLabel(item)}
						</MenuItem>
					))
				)}
			</Select>
			<FormHelperText>{error}</FormHelperText>
		</FormControl>
	);
};

export default SelectField;
