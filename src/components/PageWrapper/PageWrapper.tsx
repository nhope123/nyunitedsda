import Stack from "@mui/material/Stack";
import { type SxProps, type Theme, useTheme } from "@mui/material/styles";
import { type FC, useContext } from "react";
import { Outlet } from "react-router";
import ScrollToTop from "react-scroll-to-top";
import MessageContext from "../../contexts/MessageContext/context";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NotificationBanner from "../NotificationBanner/NotificationBanner";
import ProjectSuspense from "../ProjectSuspense/ProjectSuspense";
import PageContentContainer from "./PageContentContainer";

const containerSx: SxProps<Theme> = {
	display: "flex",
	flexDirection: "column",
	flexGrow: 1,
	height: "auto",
	justifyContent: "flex-start",
	maxWidth: "1200px",
	ml: "auto",
	mr: "auto",
	p: 2,
	width: "100%",
};

const rootSx: SxProps<Theme> = {
	backgroundColor: (theme) => theme.palette.background.paper,
	height: "auto",
	minHeight: "100%",
	overflowY: "auto",
	width: "100%",
};

const PageWrapper: FC = () => {
	const theme = useTheme();
	const { notifications } = useContext(MessageContext);
	return (
		<Stack sx={rootSx}>
			{notifications.map((i) => (
				<NotificationBanner
					dismissible
					id={i.id}
					key={i.id}
					message="Learn about Material 3"
					open
					severity="success"
					showIcon
					title="The latest version of MUI"
				/>
				// <Notification {...i} key={i.id} />
			))}
			<Header />
			<PageContentContainer sx={containerSx}>
				<ProjectSuspense>
					<Outlet />
				</ProjectSuspense>
			</PageContentContainer>

			<ScrollToTop smooth top={30} color={theme.palette.primary.light} />
			<Footer />
		</Stack>
	);
};

export default PageWrapper;
