import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { useEffect, useMemo, useState } from "react";
import { createEntity, updateEntity } from "../../api/request/commonMutations";
import { getDatabaseItem } from "../../api/request/commonQueries";
import RingLoader from "../../components/Loaders/RingLoader";
import FormContainer from "../FormBuilder/FormContainer";
import type { EntityEditorProps } from "./types";

const EntityEditor = <T extends { id?: number }>({
	entity,
	id,
	validationSchema,
	defaultValues,
	children,
	cancelButtonText,
	submitButtonText,
	onSuccess,
	title,
	onCancel,
}: EntityEditorProps<T>) => {
	const [initialValues, setInitialValues] = useState<T>(defaultValues);
	const [isLoading, setIsLoading] = useState<boolean>(!!id);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	const isEditMode = !!id;

	// Fetch data if in edit mode
	useEffect(() => {
		if (id) {
			setIsLoading(true);
			setError(null);

			getDatabaseItem<T & { id: number }>(entity, id)
				.then((data) => {
					setInitialValues(data);
				})
				.catch((err) => {
					setError(
						`Failed to load ${entity}: ${err.message || "Unknown error"}`,
					);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [entity, id]);

	const handleSubmit = async (values: T) => {
		try {
			setError(null);
			setSuccess(null);

			let result: T;

			if (isEditMode && id) {
				// Update existing entity
				result = await updateEntity<T & { id: number }>(
					entity,
					id,
					values as T & { id: number },
				);

				setSuccess(`${entity} updated successfully`);
			} else {
				// Create new entity
				result = await createEntity<T>(entity, values as Omit<T, "id">);
				setSuccess(`New ${entity} created successfully`);
			}

			// Call success callback if provided
			if (onSuccess) {
				onSuccess(result);
			}
		} catch (err: any) {
			setError(
				`Failed to ${isEditMode ? "update" : "create"} ${entity}: ${err.message || "Unknown error"}`,
			);
		}
	};

	// Default submit button text based on mode if not provided
	const buttonText = useMemo(
		() =>
			submitButtonText ??
			(isEditMode ? `Update ${entity}` : `Create ${entity}`),
		[submitButtonText, isEditMode, entity],
	);

	return (
		<>
			{title && (
				<Typography variant="h6" gutterBottom>
					{title}
				</Typography>
			)}

			{/* TODO: replace error and success with message context */}
			{error && (
				<Alert severity="error" sx={{ mb: 2 }}>
					{error}
				</Alert>
			)}
			{success && (
				<Alert severity="success" sx={{ mb: 2 }}>
					{success}
				</Alert>
			)}

			{isLoading ? (
				<>
					<RingLoader />
					<Typography variant="body1">{`Loading ${entity} data...`}</Typography>
				</>
			) : (
				<FormContainer
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
					submitButtonText={buttonText}
					onCancel={onCancel}
					cancelButtonText={cancelButtonText}
				>
					{children}
				</FormContainer>
			)}
		</>
	);
};

export default EntityEditor;
