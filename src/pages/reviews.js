import React from "react";
import { motion } from "framer-motion";
import Icon from "../components/icons";
import { useInView } from "react-intersection-observer";
import SectionCTA from "../components/SectionCTA";

const reviews = [
	{
		name: "Pam C.",
		text: "Our beagle loves her walks with Wiggles & Walks! Super reliable and always on time.",
		rating: 5,
		service: "Dog Walking",
	},
	{
		name: "Sarah J.",
		text: "I receive regular photo updates, and my dog always returns home happy and exhausted from a fun day.",
		rating: 5,
		service: "Dog Walking",
	},
	{
		name: "Caroline P.",
		text: "The only person I trust to watch my dog while I travel. Highly recommended!",
		rating: 5,
		service: "Home Boarding",
	},
];

const Reviews = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section
			id="reviews"
			ref={ref}
			className="section-brand bg-white"
		>
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="section-title"
				>
					What our clients say
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="section-intro"
				>
					5.0 from pet parents across Warrington
				</motion.p>
				<div className="grid md:grid-cols-3 gap-6 md:gap-8">
					{reviews.map((review, index) => (
						<motion.div
							key={index}
							className="card-brand flex flex-col justify-between hover:border-brand-primary/30"
							initial={{ opacity: 0, y: 30 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.15 }}
							viewport={{ once: true }}
						>
							<div>
								<div className="flex items-center justify-between mb-4">
									<div className="flex items-center gap-1">
										{[...Array(review.rating)].map((_, i) => (
											<Icon
												key={i}
												name="star"
												size="md"
												className="text-brand-accent"
											/>
										))}
									</div>
									<span className="text-xs font-body text-neutral-500 bg-brand-secondaryLight/50 px-2 py-1 rounded-full">
										{review.service}
									</span>
								</div>
								<p className="text-base font-body text-neutral-600 mb-6 leading-relaxed">
									&ldquo;{review.text}&rdquo;
								</p>
							</div>
							<p className="font-body font-semibold text-neutral-800">
								&mdash; {review.name}
							</p>
						</motion.div>
					))}
				</div>

				<SectionCTA
					heading="Join our happy pack!"
					subtext="Your dog deserves the same care. Book a free meet & greet today."
					primaryText="Book a free meet & greet"
					primaryAction="contact"
				/>
			</div>
		</section>
	);
};

export default Reviews;
