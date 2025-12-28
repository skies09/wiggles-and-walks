import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section
			id="services"
			ref={ref}
			className="w-full section-brand bg-gradient-to-br from-neutral-50 to-brand-secondaryLight/20 overflow-x-hidden"
		>
			<div className="max-w-7xl mx-auto">
				{/* Header section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="w-full mb-8 md:mb-12 text-center"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-primary mb-4">
						Tailored Beagle Care Services
					</h2>
					<p className="text-lg md:text-xl text-neutral-600 font-body max-w-2xl mx-auto">
						Walks, snuggles, and all the cozy home vibes, because your
						dog deserves nothing less than the absolute best (and maybe
						a treat or two)!
					</p>
				</motion.div>

				{/* Grid section */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
					{/* Box 1 */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className="card-brand hover:border-brand-primary/30"
					>
						<img
							src="../../assets/images/beagle1.jpeg"
							alt="Expert Beagle Care"
							className="object-cover mb-6 rounded-brand-lg w-full h-64 shadow-brand-soft"
						/>
						<h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-primary mb-4">
							Expert Beagle Care
						</h3>
						<p className="text-neutral-600 font-body text-base md:text-lg leading-relaxed">
							Beagles are our jam! Our services are specially tailored
							for those curious noses and wagging tails, making sure
							every beagle gets the love, care, and adventure they
							crave.
						</p>
					</motion.div>

					{/* Box 2 */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="card-brand hover:border-brand-primary/30"
					>
						<img
							src="../../assets/images/beagleSleeping2.jpg"
							alt="Home Boarding Options"
							className="object-cover mb-6 rounded-brand-lg w-full h-64 shadow-brand-soft"
						/>
						<h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-primary mb-4">
							Home Boarding Options
						</h3>
						<p className="text-neutral-600 font-body text-base md:text-lg leading-relaxed">
							Your pup can lounge like royalty, sofas, beds, and all
							the comfy spots are fair game! They're free to roam just
							like they do at home (minus the mischief, we keep
							anything tempting out of paw's reach!).
						</p>
					</motion.div>

					{/* Box 3 */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
						className="card-brand hover:border-brand-primary/30"
					>
						<img
							src="../../assets/images/beagleSleeping.jpg"
							alt="Trusted and Reliable"
							className="object-cover mb-6 rounded-brand-lg w-full h-64 shadow-brand-soft"
						/>
						<h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-primary mb-4">
							Trusted and Reliable
						</h3>
						<p className="text-neutral-600 font-body text-base md:text-lg leading-relaxed">
							Rest assured that your furry friend is getting all the
							love, belly rubs and tail-wagging fun they deserve! All
							dogs are safe, happy and totally spoiled in a warm,
							loving environment.
						</p>
					</motion.div>

					{/* Box 4 */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
						className="card-brand hover:border-brand-primary/30"
					>
						<img
							src="../../assets/images/walkingBeaglePuppy.jpg"
							alt="Dog Walking Services"
							className="object-cover mb-6 rounded-brand-lg w-full h-64 shadow-brand-soft"
						/>
						<h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-primary mb-4">
							Dog Walking Services
						</h3>
						<p className="text-neutral-600 font-body text-base md:text-lg leading-relaxed">
							Sniffing is totally encouraged, after all, it's your
							dog's version of social media! We only walk pups from
							the same household together, and everyone stays safely
							on-lead for happy, tail-wagging adventures.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Services;
