import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ArrowBackIosNewSharp from "@mui/icons-material/ArrowBackIosNewSharp";
import BookmarkAddOutlined from "@mui/icons-material/BookmarkAddOutlined";
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";
import CommentOutlined from "@mui/icons-material/CommentOutlined";
import LocalOfferOutlined from "@mui/icons-material/LocalOfferOutlined";
import RateReviewOutlined from "@mui/icons-material/RateReviewOutlined";
import ShareOutlined from "@mui/icons-material/ShareOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import type { FC } from "react";
import { useParams } from "react-router";
import { performQuery } from "../../api/queryData";
import { getArticleById } from "../../api/request/articles";
import type { Article } from "../../api/request/types";
import Image from "../../components/Image/Image";
import RingLoader from "../../components/Loaders/RingLoader";
import PageTitle from "../../components/PageWrapper/PageTitle";
import { authorMetaInfo } from "./blogData";

const backBtnSx: SxProps<Theme> = {
	maxWidth: "150px",
	width: "auto",
	alignSelf: "flex-start",
};

const ICONS = {
	author: <AccountCircleOutlined />,
	publishDate: <CalendarTodayOutlined />,
	views: <VisibilityOutlined />,
	comments: <CommentOutlined />,
	rating: <RateReviewOutlined />,
	share: <ShareOutlined />,
	save: <BookmarkAddOutlined />,
};

const BlogDetails: FC = () => {
	const { id } = useParams();

	const { isLoading, data } = performQuery<Article>(
		["get-article-id", id],
		({ queryKey }) => getArticleById(queryKey[1] as number),
	);

	return (
		<Stack spacing={2}>
			<PageTitle title="Blog Details" />
			<Stack spacing={2} sx={{ "& a, svg": { color: "primary.light" } }}>
				{/* Back Button */}
				<Button
					variant="text"
					startIcon={<ArrowBackIosNewSharp />}
					color="primary"
					component={"a"}
					href="/blog"
					sx={backBtnSx}
				>
					Back
				</Button>
				<>
					{!isLoading || data ? (
						<>
							{/* Blog Image */}
							{data?.img_src && (
								<Image image={{ src: data?.img_src as string }} />
							)}

							<Typography
								variant="h4"
								component="h1"
								sx={{ color: "primary.light" }}
							>
								{data?.title}
							</Typography>

							{/* Author info */}
							<Stack
								direction="row"
								flexWrap={"wrap"}
								justifyContent={"flex-start"}
								spacing={2}
							>
								{authorMetaInfo.map((i) =>
									data?.[i as keyof Article] ? (
										<Stack
											direction={"row"}
											spacing={1}
											key={i}
											sx={{
												alignItems: "center",
												color: "primary.contrastText",
											}}
										>
											{ICONS[i as keyof typeof ICONS]}
											<Typography
												variant="body2"
												sx={{ fontWeight: "bold", color: "text.secondary" }}
											>
												{(() => {
													const value = (data as Article)?.[i as keyof Article];
													return value instanceof Date
														? value.toLocaleDateString()
														: value;
												})()}
											</Typography>
										</Stack>
									) : (
										<></>
									),
								)}
							</Stack>

							{/* Content */}
							<Box sx={{ mb: 4 }}>
								<Typography
									variant="body1"
									sx={{ lineHeight: 1.8 }}
									dangerouslySetInnerHTML={{
										__html: data?.content as string,
									}}
								/>
							</Box>

							<Box sx={{ mb: 3 }}>
								<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
									<LocalOfferOutlined
										fontSize="small"
										sx={{ mr: 1, color: "primary.light" }}
									/>
									<Typography
										variant="h6"
										sx={{ fontWeight: "bold", color: "primary.light" }}
									>
										Tags
									</Typography>
								</Box>
								<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
									{
										// FEATURE: Update database for multiple categories
										[data?.category]?.map((tag, index) => (
											<Chip
												key={index}
												label={tag}
												size="small"
												variant="outlined"
												sx={{
													"&:hover": {
														bgcolor: "primary.light",
														color: "white",
													},
												}}
											/>
										))
									}
								</Box>
							</Box>
						</>
					) : (
						<RingLoader />
					)}
				</>
			</Stack>
		</Stack>
	);
};

export default BlogDetails;
