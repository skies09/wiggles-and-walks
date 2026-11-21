import Icon from "./icons";

const badges = [
	{ icon: "shield", label: "Fully Insured" },
	{ icon: "firstAid", label: "Pet First Aid Certified" },
	{ icon: "paw", label: "Beagle Specialist" },
];

const TrustBadges = ({ className = "" }) => (
	<div
		className={`flex flex-wrap justify-center md:justify-start gap-3 ${className}`}
	>
		{badges.map((badge) => (
			<span
				key={badge.label}
				className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-50/90 border border-brand-accent/30 rounded-full text-xs md:text-sm font-body font-semibold text-neutral-800 shadow-brand-soft"
			>
				<Icon name={badge.icon} size="sm" className="text-brand-accent" />
				{badge.label}
			</span>
		))}
	</div>
);

export default TrustBadges;
