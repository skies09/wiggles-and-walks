import Icon from "./icons";
import { BUSINESS } from "../config/business";
import SocialLinks from "./socialLinks";
import ContactDetails from "./ContactDetails";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-neutral-900 text-neutral-50 py-14 px-6">
			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-3 gap-10 mb-10">
					<div>
						<a
							href="#hero"
							className="flex items-center gap-2 font-heading text-xl font-bold text-neutral-50 mb-4 hover:opacity-90"
						>
							<Icon name="paw" className="text-brand-accent" />
							{BUSINESS.name}
						</a>
						<p className="font-body text-neutral-50/80 text-sm leading-relaxed">
							Beagle-specialist dog walking and home boarding in{" "}
							{BUSINESS.location}. Fully insured and pet first
							aid certified.
						</p>
					</div>

					<div>
						<h3 className="font-heading text-lg mb-4 text-brand-accent">
							Quick Links
						</h3>
						<nav className="flex flex-col gap-2 font-body text-sm">
							{[
								["Services", "#services"],
								["Reviews", "#reviews"],
								["About", "#about"],
								["Book a walk", "#contact"],
							].map(([label, href]) => (
								<a
									key={href}
									href={href}
									className="text-neutral-50/80 hover:text-neutral-50 transition-colors"
								>
									{label}
								</a>
							))}
						</nav>
					</div>

					<div>
						<h3 className="font-heading text-lg mb-4 text-brand-accent">
							Get in Touch
						</h3>
						<ContactDetails
							variant="compact"
							className="[&_a]:text-neutral-50/90 [&_a:hover]:text-neutral-50 [&_span]:text-neutral-50/90"
						/>
						<div className="mt-6">
							<SocialLinks align="start" />
						</div>
					</div>
				</div>

				<div className="border-t border-neutral-50/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-body text-neutral-50/60">
					<p>
						&copy; {year} {BUSINESS.name}. All rights reserved.
					</p>
					<a
						href="#contact"
						className="inline-flex items-center px-6 py-2.5 bg-brand-accent text-neutral-900 font-body font-semibold rounded-full text-sm hover:bg-brand-accentLight transition-colors"
					>
						Book a free meet & greet
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
