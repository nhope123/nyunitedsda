import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Form, Formik } from "formik";
import React from "react";

interface FormContainerProps {
	initialValues: Record<string, any>;
	validationSchema: any;
	onSubmit: (values: any) => void | Promise<any>;
	title?: string;
	children: React.ReactNode;
	submitButtonText?: string;
}

const FormContainer = ({
	initialValues,
	validationSchema,
	onSubmit,
	children,
	submitButtonText = "Submit",
}: FormContainerProps) => {
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

					<Box sx={{ mt: 3 }}>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							disabled={isSubmitting}
							fullWidth
						>
							{isSubmitting ? "Submitting..." : submitButtonText}
						</Button>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default FormContainer;
