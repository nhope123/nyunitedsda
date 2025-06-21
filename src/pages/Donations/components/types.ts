import type { SxProps, Theme } from "@mui/material/styles";

export interface DonationItemProps {
	sx?: SxProps<Theme>;
	title: string;
	subtitle: string;
	onEdit?: () => void;
	onDelete?: () => void;
}
