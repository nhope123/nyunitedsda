import type { ReactNode } from "react";

interface ConfirmationDialogProps {
	title: string;
	content: ReactNode;
	open: boolean;
	cancelLabel?: string;
	confirmLabel?: string;
	onConfirm: () => void;
	onClose: () => void;
}

export type { ConfirmationDialogProps };
