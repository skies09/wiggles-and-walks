import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SERVICES } from "../config/business";
import { selectService } from "./contact";
import SectionCTA from "../components/SectionCTA";

const offers = [
	{
		...SERVICES.find((service) => service.id === "walk_30"),
		name: "Dog walking",
		description:
			"On-lead walks for one household, with water, treats, and a photo update after every outing.",
		prices: ["£20 / 30 mins", "£35 / 1 hour"],
	},
	SERVICES.find((service) => service.id === "home_boarding"),
	SERVICES.find((service) => service.id === "puppy_visit"),
].map((service) => ({
	...service,
	prices: service.prices.map((price) =>
		typeof price === "string" ? price : price.display,
	),
}));

const Pricing = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section
			id="services"
			ref={ref}
			className="section-brand bg-white scroll-mt-16"
		>
			<div id="pricing" className="scroll-mt-16" />
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="section-title"
				>
					Choose a service
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="section-intro"
				>
					Prices are upfront. Every new dog starts with a free meet and greet.
				</motion.p>
				<div className="grid md:grid-cols-3 gap-5 md:items-stretch">
					{offers.map((service, index) => (
						<motion.div
							key={service.id}
							className="card-brand p-0 overflow-hidden flex flex-col h-full"
							initial={{ opacity: 0, y: 30 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.15 }}
							viewport={{ once: true }}
						>
							<img
								src={service.image}
								alt={service.name}
								className="w-full h-48 object-cover shrink-0"
							/>
							<div className="p-5 flex flex-col flex-1 min-h-0">
								<h3 className="text-xl font-heading mb-2 text-neutral-900">
									{service.name}
								</h3>
								<p className="text-neutral-600 font-body mb-4 leading-relaxed flex-1">
									{service.description}
								</p>
								<div className="mt-auto border-t border-neutral-200 pt-4 flex flex-col gap-1">
									{service.prices.map((price) => (
										<div
											key={price}
											className="text-brand-accentDark font-body text-lg font-semibold"
										>
											{price}
										</div>
									))}
								</div>
								<button
									type="button"
									onClick={() => selectService(service.contactValue)}
									className="mt-4 btn-brand text-base py-2.5"
								>
									Book this
								</button>
							</div>
						</motion.div>
					))}
				</div>

				<SectionCTA
					heading="Not sure which service is right?"
					subtext="Tell us about your dog and we'll recommend the perfect fit — free meet & greet included."
					primaryText="Book a free meet & greet"
					primaryAction="contact"
				/>
			</div>
		</section>
	);
};

export default Pricing;
