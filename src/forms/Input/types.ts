export type FormFieldType = "text" | "select" | "checkbox" | "radio";

export interface InputFieldProps {
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
