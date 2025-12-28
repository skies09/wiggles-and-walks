import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";

const reviews = [
	{
		name: "Pam C.",
		text: "Our beagle loves her walks with Wiggles & Walks! Super reliable and always on time.",
		rating: 5,
	},
	{
		name: "Sarah J.",
		text: "I receive regular photo updates, and my dog always returns home happy and exhausted from a fun day.",
		rating: 5,
	},
	{
		name: "Caroline P.",
		text: "The only person I trust to watch my dog while I travel. Highly recommended!",
		rating: 5,
	},
];

const Reviews = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section
			ref={ref}
			className="section-brand bg-gradient-to-br from-neutral-50 to-brand-secondaryLight/20 border-b-4 border-brand-primary/30"
		>
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-brand-primary"
				>
					What Our Clients Say
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="text-center text-neutral-600 font-body text-lg mb-12"
				>
					Real feedback from happy pet parents
				</motion.p>
				<div className="grid md:grid-cols-3 gap-6 md:gap-8">
					{reviews.map((review, index) => (
						<motion.div
							key={index}
							className="card-brand flex flex-col justify-between border-2 border-brand-primary/20 hover:border-brand-primary/40"
							initial={{ opacity: 0, y: 30 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.15 }}
							viewport={{ once: true }}
						>
							<div>
								<div className="flex items-center gap-1 mb-4">
									{[...Array(review.rating)].map((_, i) => (
										<FontAwesomeIcon
											key={i}
											icon={faStar}
											className="text-brand-accent w-5 h-5"
										/>
									))}
								</div>
								<p className="text-lg font-body text-neutral-600 mb-6 leading-relaxed italic">
									"{review.text}"
								</p>
							</div>
							<p className="font-heading font-semibold text-right text-brand-primary text-lg">
								— {review.name}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Reviews;
