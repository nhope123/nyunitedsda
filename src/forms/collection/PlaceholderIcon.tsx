import type { FC } from "react";

interface PlaceholderIconProps {
	size?: number;
	color?: string;
}

const PlaceholderIcon: FC<PlaceholderIconProps> = ({
	size = 24,
	color = "currentColor",
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="12"
				cy="12"
				r="10"
				stroke={color}
				strokeWidth="2"
				fill="none"
			/>
			<rect
				x="8"
				y="8"
				width="8"
				height="8"
				rx="1"
				stroke={color}
				strokeWidth="2"
				fill="none"
			/>
		</svg>
	);
};

export default PlaceholderIcon;
