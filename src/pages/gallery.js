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
			className="section-brand bg-white"
		>
			<div className="max-w-6xl mx-auto text-center">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="section-title"
				>
					Gallery
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="section-intro"
				>
					See our happy pups in action
				</motion.p>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
					{images.map((image, index) => (
						<motion.div
							key={index}
							className={`overflow-hidden rounded-brand ${
								index >= 8 ? "hidden md:block" : ""
							}`}
							initial={{ opacity: 0 }}
							animate={inView ? { opacity: 1 } : {}}
							transition={{ duration: 0.4, delay: index * 0.05 }}
							viewport={{ once: true }}
						>
							<img
								src={image}
								alt={`Gallery ${index + 1}`}
								className="w-full aspect-[4/3] object-cover"
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
