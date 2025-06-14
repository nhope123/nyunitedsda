import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import type { FC } from "react";
import PageTitle from "../../components/PageWrapper/PageTitle";
import contactInfo from "../../constants/contactInfo";
import services from "../../constants/services";
import NoteSection from "../Home/components/NotificationCard/NoteSection";
import ContactSection from "./components/ContactSection";
import MapDirection from "./components/MapDirection";
import {
	COMPANY,
	HEADER,
	MAILING_ADDRESS_TITLE,
	SERVICES,
	SUBHEADER,
} from "./constants";

const contactDetailSx: SxProps<Theme> = {
	display: "flex",
	flexDirection: "column",
	gap: 2,
	p: 3,
	my: 2,
	"& svg": {
		fontSize: 22,
	},
};

const Contact: FC = () => {
	return (
		<>
			<PageTitle title={HEADER} subtitle={SUBHEADER} />
			{/* <ContactForm /> */}

			<Paper elevation={3} sx={contactDetailSx}>
				{/* address */}
				<ContactSection title={COMPANY}>
					{[
						{
							icon: <LocationOnOutlined />,
							content: (
								<>
									<Typography variant="body1">{contactInfo.street}</Typography>
									<Typography variant="body1">
										{`${contactInfo.city}, ${contactInfo.zipCode}, ${contactInfo.country}`}
									</Typography>
								</>
							),
						},
						{
							icon: <PhoneOutlined />,
							content: contactInfo.phone,
						},
						{
							icon: <EmailOutlined />,
							content: contactInfo.email,
						},
					].map((i) => (
						<NoteSection {...i} key={i?.content?.toString()} />
					))}
				</ContactSection>

				<ContactSection title={MAILING_ADDRESS_TITLE}>
					<Typography variant="body1">{contactInfo.mailingAddress}</Typography>
				</ContactSection>

				{/* Services */}
				<ContactSection title={SERVICES}>
					{services.map((i) => (
						<NoteSection content={i.time} key={i.title} title={`${i.title}:`} />
					))}
				</ContactSection>
			</Paper>

			<MapDirection />
		</>
	);
};

export default Contact;
