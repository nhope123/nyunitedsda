import CalendarToday from "@mui/icons-material/CalendarToday";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import { type FC, useCallback, useMemo, useState } from "react";
import { performQuery } from "../../api/queryData";
import { getArticles } from "../../api/request/articles";
import RingLoader from "../../components/Loaders/RingLoader";
import PageTitle from "../../components/PageWrapper/PageTitle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import {
	BLOG_HEADER,
	BLOG_PREVIEW_LENGTH,
	BLOG_SUBHEADER,
	DEFAULT_POST_PER_PAGE,
} from "./blogConstant";

const containerSx: SxProps<Theme> = {
	alignContent: "flex-start",
	display: "flex",
	flexGrow: 1,
	flexWrap: "wrap",
	"& .MuiCard-root": {
		height: (theme) => `${theme.spacing(32.5)}`,
		justifySelf: "center",
		textOverflow: "ellipsis",
		whiteSpace: "break-spaces",
		"& svg, .MuiButton-root": {
			color: "primary.light",
		},
	},
};

const paginationSx: SxProps<Theme> = {
	justifyContent: "center",
	bottom: 0,
	mt: 6,
};

const Blog: FC = () => {
	const [page, setPage] = useState(1);
	const [postsPerPage, _setPostsPerPage] = useState<number>(
		DEFAULT_POST_PER_PAGE,
	);

	const { isLoading, data } = performQuery(["get-articles"], getArticles);

	const totalPages = useMemo(
		() => Math.ceil((data ?? []).length / postsPerPage),
		[data, postsPerPage],
	);

	const currentPosts = useMemo(
		() => ( data ?? []).slice((page - 1) * postsPerPage, page * postsPerPage),
		[data, postsPerPage, page],
	);

	const handlePageChange = useCallback(
		(_event: React.ChangeEvent<unknown>, value: number) => {
			setPage(value);
			window.scrollTo({ top: 0, behavior: "smooth" });
		},
		[],
	);


	return (
		<>
			<PageTitle title={BLOG_HEADER} subtitle={BLOG_SUBHEADER} />
			<Grid container spacing={4} sx={containerSx}>
				{isLoading ? (
					<RingLoader />
				) : (
					currentPosts.map(({ id, title, author_id:author, content, publishDate }) => (
						<Grid size={{ xs: 12, md: 6 }} key={id} className="blog-card">
							<ProjectCard
								header={{
									title,
									subheader: `${new Date(publishDate).toLocaleDateString()} | ${author}`,
									avatar: <CalendarToday />,
								}}
								content={
									<Typography variant="body1">
										{content.length > BLOG_PREVIEW_LENGTH
											? `${content.slice(0, BLOG_PREVIEW_LENGTH)}...`
											: content}
									</Typography>
								}
								actions={
									<Button
										size="small"
										color="primary"
										component={"a"}
										href={`/blog/${id}`}
									>
										Read More
									</Button>
								}
							/>
						</Grid>
					))
				)}
			</Grid>

			<Stack direction={"row"} sx={paginationSx}>
				<Pagination
					count={totalPages}
					page={page}
					onChange={handlePageChange}
					color="primary"
					size="large"
				/>
			</Stack>
		</>
	);
};

export default Blog;
