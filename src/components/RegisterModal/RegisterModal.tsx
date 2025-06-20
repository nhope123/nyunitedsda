import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import type { FC } from "react";
import UserAccessForm from "../../forms/collection/UserAccessForm/UserAccessForm";
import ProjectModal from "../ProjectModal/ProjectModal";
import type { RegisterModalProps } from "./types";

const containerSx: SxProps<Theme> = {
	borderRadius: 2,
	p: 4,
};

const headerSx: SxProps<Theme> = {
	textAlign: "center",
	color: "primary.light",
	p: 4,
};

const REGISTRATION_HEADER = {
	title: "Register",
	subtitle: "Join our online church community",
};

const RegisterModal: FC<RegisterModalProps> = ({ open, onClose }) => {
	return (
		<ProjectModal ariaText="register" open={open} onClose={onClose}>
			<Stack sx={headerSx} spacing={2}>
				<Typography variant="h2" component="h1" fontWeight="bold">
					{REGISTRATION_HEADER.title}
				</Typography>
				<Typography variant="h6">{REGISTRATION_HEADER.subtitle}</Typography>
			</Stack>
			<Paper elevation={0} sx={containerSx}>
				<UserAccessForm type="register" />
			</Paper>
		</ProjectModal>
	);
};

export default RegisterModal;
