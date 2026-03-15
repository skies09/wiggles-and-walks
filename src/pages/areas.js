import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
					<div className="flex items-center gap-3 mb-6">
						<FontAwesomeIcon
							icon={faLocationDot}
							className="text-brand-accent text-3xl"
						/>
						<h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary">
							We Come to You!
						</h2>
					</div>
					<p className="text-lg md:text-xl text-neutral-600 mb-6 font-body leading-relaxed">
						Based in{" "}
						<strong className="text-brand-primary">
							Warrington
						</strong>
						, we cover a wide area across North West England —
						within a 25-mile radius! If your pup is nearby, we'd
						love to meet them. 🐾
					</p>
					<ul className="text-lg md:text-xl text-neutral-600 font-body space-y-3">
						{["Warrington", "Wigan", "Liverpool", "Manchester"].map(
							(area, index) => (
								<motion.li
									key={area}
									initial={{ opacity: 0, x: -20 }}
									animate={inView ? { opacity: 1, x: 0 } : {}}
									transition={{
										duration: 0.5,
										delay: 0.2 + index * 0.1,
									}}
									viewport={{ once: true }}
									className="flex items-center gap-3"
								>
									<FontAwesomeIcon
										icon={faPaw}
										className="text-brand-accent text-lg"
									/>
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
					initial={{ opacity: 0, x: 50 }}
					animate={inView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
				>
					<div className="relative justify-center flex rounded-brand-lg overflow-hidden shadow-brand-lg border-4 border-brand-primary/20">
						<img
							src="../../assets/images/warrington-radius-map.png"
							alt="Warrington 25-mile service area map"
							className="w-full h-full object-cover"
						/>
					</div>
					<p className="text-center text-sm text-neutral-500 font-body mt-3 italic">
						Our 25-mile service radius from Warrington
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Areas;
