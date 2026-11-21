import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Icon from "../components/icons";
import { BUSINESS } from "../config/business";

const Areas = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section
			id="areas"
			ref={ref}
			className="section-brand bg-neutral-100"
		>
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 gap-8">
				<motion.div
					className="w-full md:w-1/2 text-left"
					initial={{ opacity: 0, y: 24 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
				>
					<div className="flex items-center gap-3 mb-6">
						<Icon
							name="location"
							size="xl"
							className="text-brand-accent"
						/>
						<h2 className="text-3xl md:text-4xl font-heading text-neutral-900">
							We Come to You!
						</h2>
					</div>
					<p className="text-lg md:text-xl text-neutral-600 mb-6 font-body leading-relaxed">
						Based in{" "}
						<strong className="text-brand-accentDark">
							{BUSINESS.location}
						</strong>
						, we cover a wide area across {BUSINESS.region} —
						within a {BUSINESS.serviceRadiusMiles}-mile radius! If
						your pup is nearby, we'd love to meet them.
					</p>
					<ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-base text-neutral-700 font-body">
						{BUSINESS.areas.map(
							(area, index) => (
								<motion.li
									key={area}
									initial={{ opacity: 0, y: 12 }}
									animate={inView ? { opacity: 1, y: 0 } : {}}
									transition={{
										duration: 0.5,
										delay: 0.2 + index * 0.1,
									}}
									viewport={{ once: true }}
									className="py-1"
								>
									{area}
								</motion.li>
							),
						)}
					</ul>
					<p className="mt-6 text-base text-neutral-500 font-body italic">
						Not sure if we cover your area? Drop us a message —
						we're always happy to chat!
					</p>
				</motion.div>

				{/* Map */}
				<motion.div
					className="w-full md:w-1/2"
					initial={{ opacity: 0, y: 24 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, delay: 0.1 }}
					viewport={{ once: true }}
				>
					<div className="relative justify-center flex rounded-brand-lg overflow-hidden shadow-brand-lg">
						<img
							src="../../assets/images/warrington-radius-map.png"
							alt="Warrington 25-mile service area map"
							className="w-full h-full object-cover"
						/>
					</div>
					<p className="text-center text-sm text-neutral-500 font-body mt-3 italic">
						Our {BUSINESS.serviceRadiusMiles}-mile service radius from{" "}
						{BUSINESS.location}
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Areas;
