import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	const images = [
		"../../assets/images/beagle2.jpeg",
		"../../assets/images/beagleSleeping.jpg",
		"../../assets/images/beaglesPlaying.jpg",
		"../../assets/images/beagleSleeping3.jpg",
		"../../assets/images/beaglesPlaying2.jpg",
		"../../assets/images/beagleInField.jpg",
		"../../assets/images/walkingBeagle4.jpg",
		"../../assets/images/walkingBeagle5.jpg",
		"../../assets/images/beaglePlaying.jpg",
	];

	return (
		<section
			id="gallery"
			ref={ref}
			className="section-brand bg-gradient-to-br from-brand-secondaryLight/20 to-neutral-50 border-b-4 border-brand-primary/30"
		>
			<div className="max-w-6xl mx-auto text-center">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4"
				>
					Gallery
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="text-neutral-600 font-body text-lg mb-12"
				>
					See our happy pups in action
				</motion.p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
					{images.map((image, index) => (
						<motion.div
							key={index}
							className="relative overflow-hidden rounded-brand-lg shadow-brand hover:shadow-brand-lg transition-all duration-300"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={inView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.05, y: -5 }}
						>
							<img
								src={image}
								alt={`Gallery ${index + 1}`}
								className="w-full h-full max-h-64 object-cover rounded-brand-lg"
							/>
							<motion.div
								className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-brand-lg"
								whileHover={{ opacity: 1 }}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
