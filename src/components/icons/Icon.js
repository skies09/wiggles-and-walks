const iconPaths = {
	paw: (
		<>
			<ellipse cx="5.55" cy="8.9" rx="2.05" ry="2.35" transform="rotate(-32 5.55 8.9)" />
			<ellipse cx="9.35" cy="5.55" rx="2.05" ry="2.45" transform="rotate(-10 9.35 5.55)" />
			<ellipse cx="14.65" cy="5.55" rx="2.05" ry="2.45" transform="rotate(10 14.65 5.55)" />
			<ellipse cx="18.45" cy="8.9" rx="2.05" ry="2.35" transform="rotate(32 18.45 8.9)" />
			<ellipse cx="12" cy="17.15" rx="6.3" ry="4.25" />
		</>
	),
	heart: (
		<path d="M12 19.7c-.4-.3-7.2-4.4-7.2-9a3.85 3.85 0 0 1 6.7-2.55L12 8.7l.5-.55a3.85 3.85 0 0 1 6.7 2.55c0 4.6-6.8 8.7-7.2 9z" />
	),
	shield: (
		<path
			fillRule="evenodd"
			d="M12 2.6 4.8 5.4v6.6c0 4.5 3 7.6 7.2 8.8 4.2-1.2 7.2-4.3 7.2-8.8V5.4L12 2.6zm-3.7 9.55 1.25-1.2 2.15 2.15 3.9-4.15 1.3 1.2-5.2 5.5-3.4-3.5z"
		/>
	),
	firstAid: (
		<path
			fillRule="evenodd"
			d="M7 3.6h10A3.4 3.4 0 0 1 20.4 7v10A3.4 3.4 0 0 1 17 20.4H7A3.4 3.4 0 0 1 3.6 17V7A3.4 3.4 0 0 1 7 3.6zM9.9 7.1v2.8H7.1v4.2h2.8v2.8h4.2v-2.8h2.8V9.9h-2.8V7.1H9.9z"
		/>
	),
	location: (
		<path
			fillRule="evenodd"
			d="M12 2.4a6.6 6.6 0 0 0-6.6 6.6c0 4.9 6.6 12.2 6.6 12.2s6.6-7.3 6.6-12.2A6.6 6.6 0 0 0 12 2.4zm0 3.6a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
		/>
	),
	calendar: (
		<path
			fillRule="evenodd"
			d="M8 3.2h1.6V5h4.8V3.2H16V5h2.2A1.8 1.8 0 0 1 20 6.8V19a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 19V6.8A1.8 1.8 0 0 1 5.8 5H8V3.2zM5.6 9.2h12.8V19a.2.2 0 0 1-.2.2H5.8a.2.2 0 0 1-.2-.2V9.2zM8.4 12.2h2v2h-2v-2zm3.6 0h2v2h-2v-2zm3.6 0h2v2h-2v-2zM8.4 15.6h2v2h-2v-2zm3.6 0h2v2h-2v-2z"
		/>
	),
	check: (
		<path
			d="M6.5 12.5 10 16l7.5-8"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	),
	close: (
		<path
			d="M7 7l10 10M17 7 7 17"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
		/>
	),
	chevronDown: (
		<path
			d="M7 10l5 5 5-5"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	),
	chevronUp: (
		<path
			d="M7 14l5-5 5 5"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	),
	star: (
		<path d="M12 3.2 14.2 8.2l5.4.5-4.1 3.5 1.3 5.3L12 15.1 7.2 17.5l1.3-5.3-4.1-3.5 5.4-.5L12 3.2z" />
	),
	dog: (
		<>
			<ellipse cx="5.4" cy="15" rx="3.2" ry="6" transform="rotate(-6 5.4 15)" />
			<ellipse cx="16.2" cy="12.4" rx="5.4" ry="3.15" />
			<path
				fillRule="evenodd"
				d="M9.2 3.3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zM11 6.25a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1z"
			/>
		</>
	),
	envelope: (
		<path
			fillRule="evenodd"
			d="M4.2 6h15.6A1.8 1.8 0 0 1 21.6 7.8v9.6a1.8 1.8 0 0 1-1.8 1.8H4.2a1.8 1.8 0 0 1-1.8-1.8V7.8A1.8 1.8 0 0 1 4.2 6zm7.8 6.9 6.9-4.4H5.1l6.9 4.4z"
		/>
	),
	user: (
		<>
			<circle cx="12" cy="8" r="3.4" />
			<path d="M5.2 19.8c.5-3.6 3.2-5.9 6.8-5.9s6.3 2.3 6.8 5.9c.1.5-.3.9-.8.9H6c-.5 0-.9-.4-.8-.9z" />
		</>
	),
	gallery: (
		<>
			<path
				fillRule="evenodd"
				d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm.4 2.4v11.2h13.2V6.4H5.4z"
			/>
			<circle cx="8.6" cy="9.2" r="1.25" />
			<path d="M5.8 16.6 9.2 12.8l2.4 2.2 2.8-3.1 3.8 4.7H5.8z" />
		</>
	),
	price: (
		<path
			fillRule="evenodd"
			d="M13.1 3.3 20.7 10.9 11.4 20.2a1.6 1.6 0 0 1-2.3 0L3.8 14.9a1.6 1.6 0 0 1 0-2.3L13.1 3.3zm2.5 4.3a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7z"
		/>
	),
	home: (
		<path
			fillRule="evenodd"
			d="M12 3 3.2 10.2V20a1.6 1.6 0 0 0 1.6 1.6h14.4a1.6 1.6 0 0 0 1.6-1.6v-9.8L12 3zm-1.7 11.4h3.4v6.6h-3.4v-6.6zM7.4 12.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm7.4 0a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"
		/>
	),
	weather: (
		<>
			<circle cx="17.2" cy="5.8" r="2.35" />
			<path d="M8.1 16.6h7.4a3.15 3.15 0 0 0 .4-6.28 4.15 4.15 0 0 0-8-1.05 3.05 3.05 0 0 0 .2 7.33z" />
			<path
				d="M8.2 18.6v1.7M12 19v1.9M15.8 18.6v1.7"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.7"
				strokeLinecap="round"
			/>
		</>
	),
	phone: (
		<path d="M8 3.7h1.7c.55 0 .95.4 1.05.95l.45 2.15c.1.45-.1.9-.5 1.1l-1.15.55a8.6 8.6 0 0 0 4.05 4.05l.55-1.15c.2-.4.65-.6 1.1-.5l2.15.45c.55.1.95.5.95 1.05V14.6c0 .7-.55 1.25-1.25 1.15a13.4 13.4 0 0 1-11.15-11.15c-.1-.7.45-1.25 1.15-1.25z" />
	),
	facebook: (
		<path d="M13.4 21v-7.1h2.4l.35-2.7h-2.75V9.5c0-.8.22-1.3 1.35-1.3h1.45V5.75c-.25-.03-1.1-.1-2.1-.1-2.08 0-3.5 1.27-3.5 3.6v2h-2.35v2.7H10.6V21h2.8z" />
	),
	instagram: (
		<>
			<path
				fillRule="evenodd"
				d="M8 3.25h8A4.75 4.75 0 0 1 20.75 8v8A4.75 4.75 0 0 1 16 20.75H8A4.75 4.75 0 0 1 3.25 16V8A4.75 4.75 0 0 1 8 3.25zm4 4.15a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2z"
			/>
			<circle cx="12" cy="12" r="2.15" />
			<circle cx="16.85" cy="7.2" r="0.95" />
		</>
	),
	eye: (
		<>
			<path d="M3.5 12s3-6 8.5-6 8.5 6 8.5 6-3 6-8.5 6-8.5-6-8.5-6z" />
			<circle cx="12" cy="12" r="2.5" fill="currentColor" opacity="0.3" />
		</>
	),
	sun: (
		<>
			<circle cx="12" cy="12" r="3.6" />
			<path
				d="M12 3.2v2.1M12 18.7v2.1M3.2 12h2.1M18.7 12h2.1M5.8 5.8l1.5 1.5M16.7 16.7l1.5 1.5M18.2 5.8l-1.5 1.5M7.3 16.7l-1.5 1.5"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.7"
				strokeLinecap="round"
			/>
		</>
	),
	sunrise: (
		<>
			<path d="M6.5 16.2a5.5 5.5 0 0 1 11 0" />
			<path
				d="M4 16.2h16M12 4.2v2.2M6.4 7.6l1.6 1.6M17.6 7.6l-1.6 1.6M4 19.2h16"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.7"
				strokeLinecap="round"
			/>
		</>
	),
	moon: (
		<path d="M14.8 3.6a7.4 7.4 0 1 0 5.4 12.6A6.3 6.3 0 1 1 14.8 3.6z" />
	),
	clock: (
		<path
			fillRule="evenodd"
			d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm1.1 4.2v5.2l3.3 2-1.1 1.7-4.4-2.6V7.2h2.2z"
		/>
	),
	chat: (
		<path
			fillRule="evenodd"
			d="M5 4.8h14a2 2 0 0 1 2 2v7.4a2 2 0 0 1-2 2H11l-4.4 3.4v-3.4H5a2 2 0 0 1-2-2V6.8a2 2 0 0 1 2-2zm2.6 4.1h8.8V10H7.6V8.9zm0 2.8h5.6v1.1H7.6v-1.1z"
		/>
	),
	trash: (
		<>
			<path d="M6 7.5h12M9 7.5V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			<path d="M7 7.5l.8 11.5a1.5 1.5 0 0 0 1.5 1.5h5.4a1.5 1.5 0 0 0 1.5-1.5L17 7.5" />
			<path d="M10 11v5.5M14 11v5.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
		</>
	),
};

const strokeIcons = new Set([
	"check",
	"close",
	"chevronDown",
	"chevronUp",
]);

const sizeMap = {
	sm: 16,
	md: 20,
	lg: 24,
	xl: 32,
	"2x": 32,
};

const Icon = ({ name, size = "lg", className = "", ...props }) => {
	const paths = iconPaths[name];
	if (!paths) return null;

	const px = typeof size === "number" ? size : sizeMap[size] || 24;
	const isStroke = strokeIcons.has(name);

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={px}
			height={px}
			fill={isStroke ? "none" : "currentColor"}
			stroke={isStroke ? "currentColor" : "none"}
			strokeWidth={isStroke ? 1.6 : 0}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`inline-block shrink-0 ${className}`}
			aria-hidden="true"
			{...props}
		>
			{paths}
		</svg>
	);
};

export default Icon;
