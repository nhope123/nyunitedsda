import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC, PropsWithChildren } from "react";

const ContactSection: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title,
}) => (
	<Stack sx={{ gap: 1 }}>
		<Typography fontWeight="bold" variant="h5" sx={{ color: "primary.light" }}>
			{title}
		</Typography>
		<Stack sx={{ pl: 2, gap: 1 }}>{children}</Stack>
	</Stack>
);

export default ContactSection;
