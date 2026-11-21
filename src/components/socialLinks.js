import Icon from "./icons";
import { BUSINESS } from "../config/business";

const links = [
	{ label: "Facebook", href: BUSINESS.facebook, icon: "facebook" },
	{ label: "Instagram", href: BUSINESS.instagram, icon: "instagram" },
];

const SocialLinks = ({ align = "center" }) => {
	return (
		<div
			className={`flex flex-wrap items-center gap-3 ${
				align === "start" ? "justify-start" : "justify-center"
			}`}
		>
			{links.map((link) => (
				<a
					key={link.label}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={link.label}
					className="group inline-flex items-center gap-2.5 h-11 pl-2 pr-4 rounded-full border border-current/25 bg-white/10 text-current hover:bg-brand-accent hover:border-brand-accent hover:text-neutral-900 transition-colors"
				>
					<span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-accent text-neutral-900 group-hover:bg-neutral-900 group-hover:text-brand-accent transition-colors">
						<Icon name={link.icon} size={16} />
					</span>
					<span className="font-body font-semibold text-sm">{link.label}</span>
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
