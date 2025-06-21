import type { ReactNode } from "react";
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
	children: ReactNode;

	/**
	 * Text for the cancel button
	 * Defaults to "Cancel"
	 */

	cancelButtonText?: string;

	/**
	 *
	 * @returns void
	 * Optional callback when the form is closed without submission
	 */
	onCancel?: () => void;

	/**
	 * Text for the submit button
	 * Defaults to "Submit"
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
