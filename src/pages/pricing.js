import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
	{
		name: "Dog Walking",
		description:
			"Daily walks tailored to your dog's needs. Includes water, treats, and plenty of love.",
		prices: ["\u00a320 / 30 mins", "\u00a335 / 1 hour"],
		image: "../../assets/images/walkingBeagle.jpg",
	},
	{
		name: "Home Boarding",
		description:
			"Your pup stays in a loving, home environment while you're away.",
		prices: ["\u00a350 / night", "\u00a390 / weekend"],
		image: "../../assets/images/beagleOnSofa.jpg",
	},
	{
		name: "Puppy Visits",
		description:
			"Short visits to check in on your puppy, feed them, play, and reinforce training.",
		prices: ["\u00a325 / 30 mins"],
		image: "../../assets/images/beaglePuppy.jpg",
	},
];

const Pricing = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section
			id="pricing"
			ref={ref}
			className="section-brand bg-gradient-to-br from-brand-secondaryLight/30 to-neutral-50 border-t-4 border-brand-primary/30"
		>
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-brand-primary"
				>
					Our Services
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="text-center text-neutral-600 font-body text-lg mb-12 max-w-2xl mx-auto"
				>
					Transparent pricing for all our care services
				</motion.p>
				<div className="grid md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={index}
							className="card-brand overflow-hidden border-2 border-brand-primary/20 hover:border-brand-primary/50"
							initial={{ opacity: 0, y: 30 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.15 }}
							viewport={{ once: true }}
						>
							<img
								src={service.image}
								alt={service.name}
								className="w-full h-56 object-cover rounded-brand-lg mb-6"
							/>
							<div className="p-2">
								<h3 className="text-2xl font-heading font-bold mb-3 text-brand-primary">
									{service.name}
								</h3>
								<p className="text-neutral-600 font-body mb-4 leading-relaxed">
									{service.description}
								</p>
								<div className="border-t-2 border-brand-primary/20 pt-4">
									<ul className="text-brand-primaryDark font-body text-lg font-semibold space-y-2">
										{service.prices.map((price, i) => (
											<li key={i} className="flex items-center gap-2">
												<span className="text-brand-accent">•</span>
												{price}
											</li>
										))}
									</ul>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
