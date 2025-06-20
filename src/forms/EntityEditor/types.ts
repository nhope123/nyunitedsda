import type { DatabaseEntity } from "../../api/request/types";

interface EntityEditorProps<T extends { id?: number }> {
	/**
	 * The database entity type
	 */
	entity: DatabaseEntity;

	/**
	 * ID of entity to update (if updating existing entity)
	 */
	id?: number;

	/**
	 * Validation schema for form (Yup schema)
	 */
	validationSchema: any;

	/**
	 * Default/initial values for entity
	 */
	defaultValues: T;

	/**
	 * Form fields to render
	 */
	children: React.ReactNode;

	/**
	 * Text for the submit button
	 */
	submitButtonText?: string;

	/**
	 * Optional callback after successful submission
	 */
	onSuccess?: (data: T) => void;

	/**
	 * Optional title for the form
	 */
	title?: string;
}

export type { EntityEditorProps };
