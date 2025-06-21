import type { ProjectModalProps } from "../ProjectModal/types";

interface RegisterModalProps
	extends Pick<ProjectModalProps, "open" | "onClose"> {}

export type { RegisterModalProps };
