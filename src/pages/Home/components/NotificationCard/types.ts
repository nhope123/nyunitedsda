import type { ReactNode } from "react";
import type { EventAnnouncement } from "../../types";

type NotificationCardProps = EventAnnouncement & {
	className?: string;
};

interface NoteSectionProps {
	icon?: ReactNode;
	content: ReactNode;
	title?: string;
}

export type { NotificationCardProps, NoteSectionProps };
