import { type FC, useMemo } from "react";
import * as Yup from "yup";
import type { Donations } from "../../../api/request/types";
import ProjectModal from "../../../components/ProjectModal/ProjectModal";
import EntityEditor from "../../EntityEditor/EntityEditor";
import InputField from "../../Input/FormField";

export interface DonationEditorProps {
	open: boolean;
	entity?: Partial<Donations>;
	onClose: () => void;
}

const defaultValues: Partial<Donations> = {
	title: "",
	description: "",
};

const donationSchema = Yup.object().shape({
	title: Yup.string().required("Title is required"),
	description: Yup.string().required("Description is required"),
});

const EDIT_TITLE = "Edit Donation";
const ADD_TITLE = "Add Donation";
const ENTITY_NAME = "donations";
const BUTTON_TEXT = "Save";
const TITLE_FIELD_LABEL = "How would you like to title this donation?";
const DESCRIPTION_FIELD_LABEL = "Please describe the donation method";

const DonationEditor: FC<DonationEditorProps> = ({ open, entity, onClose }) => {
	const { initialValues, title } = useMemo(
		() =>
			entity && Object.hasOwn(entity, "id")
				? {
						initialValues: entity,
						title: EDIT_TITLE,
					}
				: {
						initialValues: defaultValues,
						title: ADD_TITLE,
					},
		[entity],
	);

	return (
		<ProjectModal open={open} onClose={onClose}>
			<EntityEditor
				defaultValues={initialValues}
				entity={ENTITY_NAME}
				id={entity?.id}
				submitButtonText={BUTTON_TEXT}
				title={title}
				validationSchema={donationSchema}
				onCancel={onClose}
				onSuccess={(data) => {
					console.log("Donation saved successfully:", data);
				}}
			>
				<InputField name="title" label={TITLE_FIELD_LABEL} fieldType="text" />
				<InputField
					name="description"
					label={DESCRIPTION_FIELD_LABEL}
					fieldType="text"
					multiline
					minRows={4}
				/>
			</EntityEditor>
		</ProjectModal>
	);
};

export default DonationEditor;
