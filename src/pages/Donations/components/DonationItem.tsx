import DeleteOutline from "@mui/icons-material/DeleteOutline";
import EditOutlined from "@mui/icons-material/EditOutlined";
import IconButton, { type IconButtonProps } from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Stack, type SxProps, type Theme } from "@mui/material";
import type { FC } from "react";
import type { DonationItemProps } from "./types";

const rootSx: SxProps<Theme> = {
	border: "1px solid #e0e0e0",
	borderRadius: 0.5,
	width: "100%",
	maxWidth: "600px",
	gap: 1,
	m: 0,
	"& .MuiListItemText-secondary": {
		textWrap: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
	},
};

const BUTTON_PROPS: Partial<IconButtonProps> = {
	size: "small",
};

const DonationItem: FC<DonationItemProps> = ({
	title,
	subtitle,
	sx,
	onEdit,
	onDelete,
}) => {
	return (
		<ListItem sx={{ ...rootSx, ...sx }}>
			<ListItemText primary={title} secondary={subtitle} />
			<Stack direction="row" alignItems="center">
				<IconButton
					edge="end"
					aria-label="edit"
					color="primary"
					onClick={onEdit}
					{...BUTTON_PROPS}
				>
					<EditOutlined />
				</IconButton>
				<IconButton
					edge="end"
					aria-label="delete"
					color="error"
					onClick={onDelete}
					{...BUTTON_PROPS}
				>
					<DeleteOutline />
				</IconButton>
			</Stack>
		</ListItem>
	);
};

export default DonationItem;
