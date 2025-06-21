import type { PropsWithChildren } from "react";

type ProjectModalProps = PropsWithChildren<{
	ariaText?: string;
	open: boolean;
	onClose: () => void;
}>;

export type { ProjectModalProps };
