import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Areas = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section
			ref={ref}
			className="section-brand bg-gradient-to-br from-brand-secondaryLight/20 to-neutral-50"
		>
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 gap-8">
				<motion.div
					className="w-full md:w-1/2 text-left"
					initial={{ opacity: 0, x: -50 }}
					animate={inView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-6">
						Areas Covered
					</h2>
					<p className="text-lg md:text-xl text-neutral-600 mb-6 font-body leading-relaxed">
						We provide services across various regions across North
						West England. <br />
						Check out the map to see if we cover your area.
					</p>
					<ul className="text-lg md:text-xl text-neutral-600 font-body space-y-3">
						{["Warrington", "Wigan", "Liverpool", "Manchester"].map((area, index) => (
							<motion.li
								key={area}
								initial={{ opacity: 0, x: -20 }}
								animate={inView ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
								viewport={{ once: true }}
								className="flex items-center gap-3"
							>
								<span className="text-brand-accent text-2xl">•</span>
								{area}
							</motion.li>
						))}
					</ul>
				</motion.div>

				{/* Map */}
				<motion.div
					className="w-full md:w-1/2"
					initial={{ opacity: 0, x: 50 }}
					animate={inView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
				>
					<div className="relative h-64 md:h-80 justify-center flex rounded-brand-lg overflow-hidden shadow-brand-lg border-4 border-brand-primary/20">
						<img
							src="../../assets/images/area.png"
							alt="Service areas map"
							className="w-full h-full object-cover rounded-brand-lg"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Areas;
