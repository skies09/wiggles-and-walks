import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TrustBadges from "../components/TrustBadges";

const Meet = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
	return (
		<section
			id="meet"
			ref={ref}
			className="section-brand bg-neutral-50"
		>
			<div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-center">
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="md:col-span-3 order-2 md:order-1"
			>
				<h3 className="text-3xl md:text-4xl font-heading mb-2 text-neutral-900">
					Donna
				</h3>
				<p className="text-lg md:text-xl font-body text-brand-accentDark font-semibold mb-4">
					Founder & Lead Walker
				</p>
				<p className="text-neutral-600 font-body text-base md:text-lg leading-relaxed mb-4">
					Armed with a Pet First Aid cert and a whole lotta love, I
					started Wiggles & Walks because I wanted the kind of care
					I'd trust for my own dogs, safe, snuggly, and full of
					tail-wagging fun. Every pup gets treated like family, with
					plenty of love, play, and pampering along the way!
				</p>
				<p className="mt-4 text-base text-neutral-600 font-body">
					Beagles are the speciality, and every breed is welcome.
				</p>
				<TrustBadges className="mt-5" />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="md:col-span-2 order-1 md:order-2"
			>
				<img
					src="../../assets/images/team1.png"
					alt="Donna - Founder & Lead Walker"
					className="rounded-brand-xl w-full h-72 md:h-96 object-cover object-top shadow-brand-lg"
				/>
			</motion.div>
			</div>
		</section>
	);
};

export default Meet;
