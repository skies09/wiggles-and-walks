import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Meet = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
	return (
		<section
			id="meet"
			ref={ref}
			className="overflow-x-hidden flex flex-col md:flex-row items-stretch gap-0 border-b-4 border-t-4 border-brand-primary/30 bg-gradient-to-br from-neutral-50 to-brand-secondaryLight/30"
		>
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={inView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="w-full md:w-3/5 px-6 lg:px-12 py-8 md:py-12 flex flex-col justify-center"
			>
				<h3 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-brand-primary">
					Donna
				</h3>
				<p className="text-lg md:text-xl font-body text-brand-accent font-semibold mb-4">
					Founder & Lead Walker
				</p>
				<p className="text-neutral-600 font-body text-base md:text-lg leading-relaxed mb-4">
					Armed with a Pet First Aid cert and a whole lotta love, I
					started Wiggles & Walks because I wanted the kind of care
					I'd trust for my own dogs, safe, snuggly, and full of
					tail-wagging fun. Every pup gets treated like family, with
					plenty of love, play, and pampering along the way!
				</p>
				<div className="mt-4 p-4 bg-brand-secondaryLight/50 rounded-brand-lg border-2 border-brand-primary/20">
					<p className="text-base md:text-lg text-brand-primary font-heading font-semibold">
						<span className="text-neutral-600 font-body">
							Specialities:
						</span>{" "}
						Beagles
					</p>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={inView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="w-full md:w-2/5 pb-6 md:bg-brand-secondaryLight/50 flex justify-center items-center p-8 md:p-12"
			>
				<img
					src="../../assets/images/team.jpeg"
					alt="Donna - Founder & Lead Walker"
					className="rounded-brand-xl w-auto max-w-full shadow-brand-xl border-4 border-brand-primary/20"
				/>
			</motion.div>
		</section>
	);
};

export default Meet;
