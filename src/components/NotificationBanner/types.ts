export type NotificationSeverity =
	| "information" // Neutral, informational messages for users
	| "caution" // Warning messages that advise careful attention
	| "error" // Critical error messages when something goes wrong
	| "success"; // Positive messages confirming an action succeeded
export type NotificationPosition = "top" | "bottom";
export type NotificationVariant = "banner" | "sticky" | "popup";

export interface NotificationType {
	/**
	 * Unique identifier for the notification
	 */
	id: number;
	/**
	 * The main message to display
	 */
	message: string;
	/**
	 * Optional title for the notification
	 */
	title?: string;
	/**
	 * The severity level of the notification
	 */
	severity?: NotificationSeverity;
	/**
	 * The date and time when the notification will expire
	 * If not provided, the notification will not expire automatically
	 */
	expires_at?: Date;

}

export interface NotificationProps extends NotificationType {
	/**
	 * Whether the notification should be shown
	 */
	open?: boolean;
	/**
	 * Callback when notification is closed
	 */
	onClose?: () => void;
}

