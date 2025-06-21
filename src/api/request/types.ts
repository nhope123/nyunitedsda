export type DatabaseEntity =
	| "donations"
	| "users"
	| "articles"
	| "announcements";

/**
 * Represents an donation payment method in the system
 */
export interface Donations {
	id: number;
	title: string;
	description: string;
}

/**
 * Represents an article in the system
 */
export type Article = {
	/** Unique identifier (auto-incremented) */
	id: number;
	/** Article title */
	title: string;
	/** ID of the author who wrote the article */
	author_id: number;
	/** Date when the article was published */
	publishDate: Date | string;
	/** Number of views the article has received */
	views?: number;
	/** Number of comments on the article */
	comments?: number;
	/** Rating of the article (out of 5.00) */
	rating?: number | null;
	/** Article category */
	category?: string | null;
	/** Path or URL to the article's image */
	img_src?: string | null;
	/** Full HTML/text content of the article */
	content: string;
	/** Timestamp when the article was created */
	created_at?: Date;
	/** Timestamp when the article was last modified */
	modified_at?: Date;
};

/**
 * Represents an announcement in the system
 */
export type Announcement = {
	/** Unique identifier (auto-incremented) */
	id: number;
	/** Announcement title */
	title: string;
	/** Type of announcement */
	type: "event" | "service" | "virtual";
	/** Optional description of the announcement */
	description?: string;
	/** Physical location where the event will take place */
	location?: string;
	/** Conference code for virtual events */
	conference_code?: string;
	/** Contact phone number */
	phone_number?: string;
	/** Sermon title or topic */
	sermon?: string;
	/** Name of the speaker */
	speaker?: string;
	/** Whether the event is recurring */
	recurring?: boolean;
	/** When the announcement was created */
	created_at?: Date;
	/** ID of the author who created the announcement */
	author_id: number;
	/** Date and time when the event will occur */
	event_date?: Date;
	/** Display date format for event_date */
	date_format: string;
};
