import Icon from "./icons";
import {
	BUSINESS,
	formatPhoneDisplay,
	formatPhoneLink,
} from "../config/business";

const ContactDetails = ({ variant = "default", className = "" }) => {
	const phoneLink = formatPhoneLink(BUSINESS.phone);
	const phoneDisplay = formatPhoneDisplay(BUSINESS.phone);

	const isCompact = variant === "compact";

	return (
		<div
			className={`flex ${
				isCompact
					? "flex-row flex-wrap justify-center gap-4"
					: "flex-col gap-4"
			} ${className}`}
		>
			{phoneLink && (
				<a
					href={phoneLink}
					className="flex items-center gap-3 text-neutral-800 hover:text-brand-accentDark transition-colors group"
				>
					<span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-accent/15 group-hover:bg-brand-accent/25 transition-colors">
						<Icon name="phone" size="md" />
					</span>
					<span className="font-body font-semibold text-base md:text-lg">
						{phoneDisplay}
					</span>
				</a>
			)}
			<a
				href={`mailto:${BUSINESS.email}`}
				className="flex items-center gap-3 text-neutral-800 hover:text-brand-accentDark transition-colors group"
			>
				<span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-accent/15 group-hover:bg-brand-accent/25 transition-colors">
					<Icon name="envelope" size="md" />
				</span>
				<span className="font-body font-semibold text-base md:text-lg">
					{BUSINESS.email}
				</span>
			</a>
			{!isCompact && (
				<div className="flex items-center gap-3 text-neutral-600">
					<span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-accent/20">
						<Icon name="location" size="md" className="text-brand-accentDark" />
					</span>
					<span className="font-body text-base md:text-lg">
						{BUSINESS.location}, {BUSINESS.region} —{" "}
						{BUSINESS.serviceRadiusMiles}-mile radius
					</span>
				</div>
			)}
		</div>
	);
};

export default ContactDetails;
