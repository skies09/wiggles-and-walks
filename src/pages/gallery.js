import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
	const images = [
		"../../assets/images/beagle2.jpeg",
		"../../assets/images/beagleSleeping.jpg",
		"../../assets/images/beaglesPlaying.jpg",
		"../../assets/images/beagleSleeping3.jpg",
		"../../assets/images/beaglesPlaying2.jpg",
		"../../assets/images/beagleInField.jpg",
	];

	return (
		<section
			id="gallery"
			className="pb-16 pt-10 px-6 bg-colorFive border-b-4 border-colorFour"
		>
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold text-colorTwo font-gloria mb-8">
					Gallery
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{images.map((image, index) => (
						<motion.div
							key={index}
							className="relative overflow-hidden rounded-lg shadow-lg"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
						>
							<img
								src={image}
								alt={`Gallery ${index + 1}`}
								className="w-full h-full max-h-56 object-cover rounded-lg"
							/>
							<motion.div
								className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"
								whileHover={{ opacity: 0.5 }}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
