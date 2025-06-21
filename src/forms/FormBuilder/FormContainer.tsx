import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Form, Formik } from "formik";
import { type ReactNode } from "react";

interface FormContainerProps<T> {
	cancelButtonText?: string;
	children: ReactNode;
	initialValues: T;
	submitButtonText?: string;
	validationSchema: any;
	onSubmit: (values: T) => void | Promise<any>;
	onCancel?: () => void;
}

const FormContainer = <T extends { id?: number }>({
	initialValues,
	validationSchema,
	onSubmit,
	children,
	submitButtonText = "Submit",
	cancelButtonText = "Cancel",
	onCancel,
}: FormContainerProps<T>) => {
	return (
		<Formik
			enableReinitialize
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{({ isSubmitting }) => (
				<Form>
					{children}

					{/* TODO: add a confirm cancel */}
					<Stack
						direction="row"
						spacing={2}
						justifyContent="flex-end"
						sx={{ mt: 3 }}
					>
						{onCancel && (
							<Button variant="outlined" color="secondary" onClick={onCancel}>
								{cancelButtonText}
							</Button>
						)}
						<Button
							type="submit"
							variant="contained"
							color="primary"
							disabled={isSubmitting}
							fullWidth={!onCancel}
						>
							{isSubmitting ? "Submitting..." : submitButtonText}
						</Button>
					</Stack>
				</Form>
			)}
		</Formik>
	);
};

export default FormContainer;
