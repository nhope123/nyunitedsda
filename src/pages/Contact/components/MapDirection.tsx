import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import type { FC } from "react";
import {
	BRIDGE,
	DRIVING_DIRECTION,
	LENOX_AVE,
	METRO,
	TRIP_PLANNER,
} from "../constants";
import ContactSection from "./ContactSection";

const rootSx: SxProps<Theme> = {
	p: 2,
	minHeight: "450px",
	overflow: "hidden",
	display: "flex",
	flexDirection: { xs: "column", md: "row" },
	gap: 2,
	mt: 2,
};

const directionSx: SxProps<Theme> = {
	p: 2,
	height: { xs: "auto", md: "100%" },
	gap: 2,
	width: { xs: "100%", md: "50%" },
};

const plannerSx: SxProps<Theme> = {
	textDecoration: "none",
	color: "primary.light",
};
const mapSx: SxProps<Theme> = { width: { xs: "100%", md: "50%" } };

const styleSx = { borderRadius: 4, width: "100%", maxWidth: "600px" };

const MapDirection: FC = () => {
	return (
		<Paper elevation={3} sx={rootSx}>
			<Box sx={mapSx}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6039.397082262674!2d-73.9473282235637!3d40.812617831449124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f673ca97d269%3A0xb0125493deeebd8b!2sNY%20United%20SDA%20Church!5e0!3m2!1sen!2sca!4v1747803640476!5m2!1sen!2sca"
					height="450"
					style={styleSx}
					allowFullScreen
					referrerPolicy="no-referrer-when-downgrade"
					title="Google Maps Location"
				></iframe>
			</Box>

			<Stack sx={directionSx}>
				<ContactSection title={METRO}>
					<Typography
						component={"a"}
						sx={plannerSx}
						href="http://www.mta.info/nyct"
					>
						{TRIP_PLANNER}
					</Typography>
				</ContactSection>

				<ContactSection title={DRIVING_DIRECTION}>
					<List>
						<ListItem>{LENOX_AVE}</ListItem>
						<ListItem>{BRIDGE}</ListItem>
					</List>
				</ContactSection>
			</Stack>
		</Paper>
	);
};

export default MapDirection;
