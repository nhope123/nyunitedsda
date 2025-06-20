export type NotificationSeverity =
	| "information" // Neutral, informational messages for users
	| "caution" // Warning messages that advise careful attention
	| "error" // Critical error messages when something goes wrong
	| "success"; // Positive messages confirming an action succeeded
export type NotificationPosition = "top" | "bottom";
export type NotificationVariant = "banner" | "sticky" | "popup";

interface NotificationProps {
	/**
	 * Unique identifier for the notification
	 */
	id: string;
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
	 * Whether the notification should be shown
	 */
	open?: boolean;
	/**
	 * Callback when notification is closed
	 */
	onClose?: () => void;
	/**
	 * The date and time when the notification will expire
	 * If not provided, the notification will not expire automatically
	 */
	expires_at?: Date;
}

export type { NotificationProps };

/**
 create a mysql table  and sequelize model for `notifications`  with  these columns: 
- id: primary key
- message: varchar with an apropriate lenght, not null,, unique
- title: short text nullable
- severity: not null a forigen key table severity (id)
- expires_at: date nullable
- created_date: date not null, created on record creation
- modified_date: nullable set and updated on record update* 
 */
