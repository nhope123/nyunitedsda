import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import type { FC } from "react";
import type { ProjectModalProps } from "./types";

const modalStyle = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "auto",
	maxWidth: "90%",
	maxHeight: "90vh",
	overflow: "auto",
	bgcolor: "background.paper",
	borderRadius: 2,
	boxShadow: 24,
	p: 4,
};

const ProjectModal: FC<ProjectModalProps> = ({
	ariaText,
	children,
	onClose,
	open,
}) => {
	return (
		<Modal
			aria-labelledby={`${ariaText}-modal-title`}
			aria-describedby={`${ariaText}-modal-description`}
			open={open}
			onClose={onClose}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					timeout: 500,
				},
			}}
		>
			<Fade in={open}>
				<Box sx={modalStyle}>{children}</Box>
			</Fade>
		</Modal>
	);
};

export default ProjectModal;
