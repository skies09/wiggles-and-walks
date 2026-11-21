import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section
			id="services"
			ref={ref}
			className="w-full section-brand bg-white overflow-x-hidden"
		>
			<div className="max-w-6xl mx-auto">
				{/* Header section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="w-full text-center"
				>
					<h2 className="section-title">
						Tailored Beagle Care Services
					</h2>
					<p className="section-intro">
						Walks, snuggles, and all the cozy home vibes, because
						your dog deserves nothing less than the absolute best
						(and maybe a treat or two)!
					</p>
				</motion.div>

				{/* Grid section */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
					{/* Box 1 */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className="bg-white rounded-brand-lg overflow-hidden border border-neutral-200 shadow-brand-soft"
					>
						<img
							src="../../assets/images/beagle1.jpeg"
							alt="Expert Beagle Care"
							className="object-cover w-full h-52"
						/>
						<h3 className="text-xl font-heading text-neutral-900 mb-2 px-5 pt-5">
							Expert Beagle Care
						</h3>
						<p className="text-neutral-600 font-body text-base leading-relaxed px-5 pb-5">
							Beagles are our jam! Our services are specially
							tailored for those curious noses and wagging tails,
							making sure every beagle gets the love, care, and
							adventure they crave.
						</p>
					</motion.div>

					{/* Box 2 */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="bg-white rounded-brand-lg overflow-hidden border border-neutral-200 shadow-brand-soft"
					>
						<img
							src="../../assets/images/beagleSleeping2.jpg"
							alt="Home Boarding Options"
							className="object-cover w-full h-52"
						/>
						<h3 className="text-xl font-heading text-neutral-900 mb-2 px-5 pt-5">
							Home Boarding Options
						</h3>
						<p className="text-neutral-600 font-body text-base leading-relaxed px-5 pb-5">
							Your pup can lounge like royalty, sofas, beds, and
							all the comfy spots are fair game! They're free to
							roam just like they do at home (minus the mischief,
							we keep anything tempting out of paw's reach!).
						</p>
					</motion.div>

					{/* Box 3 */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
						className="bg-white rounded-brand-lg overflow-hidden border border-neutral-200 shadow-brand-soft"
					>
						<img
							src="../../assets/images/beagleSleeping.jpg"
							alt="Trusted and Reliable"
							className="object-cover w-full h-52"
						/>
						<h3 className="text-xl font-heading text-neutral-900 mb-2 px-5 pt-5">
							Trusted and Reliable
						</h3>
						<p className="text-neutral-600 font-body text-base leading-relaxed px-5 pb-5">
							Rest assured that your furry friend is getting all
							the love, belly rubs and tail-wagging fun they
							deserve! All dogs are safe, happy and totally
							spoiled in a warm, loving environment.
						</p>
					</motion.div>

					{/* Box 4 */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
						className="bg-white rounded-brand-lg overflow-hidden border border-neutral-200 shadow-brand-soft"
					>
						<img
							src="../../assets/images/walkingBeaglePuppy.jpg"
							alt="Dog Walking Services"
							className="object-cover w-full h-52"
						/>
						<h3 className="text-xl font-heading text-neutral-900 mb-2 px-5 pt-5">
							Dog Walking Services
						</h3>
						<p className="text-neutral-600 font-body text-base leading-relaxed px-5 pb-5">
							Sniffing is totally encouraged, after all, it's your
							dog's version of social media! We only walk pups
							from the same household together, and everyone stays
							safely on-lead for happy, tail-wagging adventures.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Services;
