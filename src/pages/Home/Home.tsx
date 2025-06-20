import { Stack, type SxProps, type Theme } from "@mui/material";
import type { FC } from "react";
import Carousel from "../../components/Carousel/Carousel";
import PageAnnouncements from "./components/AnnouncementCard/PageAnnouncements";
import MinistryCard from "./components/MinistryCard";
import SectionWrapper from "./components/SectionWrapper";
import { ministries } from "./constants";
import sliderImages from "./sliderImages";

const imageRootSx: SxProps<Theme> = {
	width: "100%",
	display: "flex",
	justifyContent: "center",
	height: (theme) => `${theme.spacing(11)}`,
	p: 1,
};

const cardContainerSx: SxProps<Theme> = {
	alignItems: { xs: "center", md: "flex-start" },
	flexWrap: "wrap",
	gap: 2,
	width: "100%",
	"& .MuiPaper-root": {
		height: (theme) => `${theme.spacing(36)}`,
		maxWidth: { md: "32%" },
	},
	"& .MuiCardActions-root": {
		p: 0,
	},
};

const rootSx: SxProps<Theme> = {
	flexGrow: 1,
	width: "100%",
	gap: 5,
	pb: 2,
};

const MINISTRIES_HEADER = "Ministries Links";

const Home: FC = () => {
	return (
		<Stack sx={rootSx}>
			{/* Image Slides */}
			<SectionWrapper>
				<Carousel
					options={{
						align: "center",
						startIndex: 0,
					}}
					sx={{
						"& .embla__slide": {
							height: { xs: "350px", sm: "unset" },
						},
					}}
				>
					{sliderImages.map((i) => (
						<Stack direction="row" className="embla__slide" key={i.src}>
							<img
								loading="lazy"
								className="embla__slide__number"
								src={i.src}
								alt={i.alt ?? `${i.src}-image`}
							/>
						</Stack>
					))}
				</Carousel>
			</SectionWrapper>

			{/* Notification Slides */}
			<PageAnnouncements />

			{/* Ministries content */}
			<SectionWrapper header={MINISTRIES_HEADER}>
				<Stack direction={{ xs: "column", md: "row" }} sx={cardContainerSx}>
					{ministries.map((i) => (
						<MinistryCard
							{...{
								header: { title: i.title },
								content: i.content,
								link: i.link,
								image: {
									root: {
										sx: imageRootSx,
									},
									image: {
										src: i.image,
										alt: `${i.title} image`,
									},
								},
							}}
							key={`${i.title} image`}
						/>
					))}
				</Stack>
			</SectionWrapper>
		</Stack>
	);
};

export default Home;
