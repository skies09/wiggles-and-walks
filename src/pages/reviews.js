import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const reviews = [
	{
		name: "Pam C.",
		text: "Our beagle loves her walks with Wiggles & Walks! Super reliable and always on time.",
		rating: 5,
	},
	{
		name: "Sarah J.",
		text: "I receive regular photo updates, and my dog always returns home happy and exhausted from a fun day.",
		rating: 5,
	},
	{
		name: "Caroline P.",
		text: "The only person I trust to watch my dog while I travel. Highly recommended!",
		rating: 5,
	},
];

const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.2 },
	}),
};

const Reviews = () => {
	return (
		<section className="bg-colorFive py-12 px-4 pb-16 border-b-4 border-colorFour">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-8 text-colorTwo font-gloria">
					What Our Clients Say
				</h2>
				<div className="grid md:grid-cols-3 gap-6">
					{reviews.map((review, index) => (
						<motion.div
							key={index}
							className="bg-colorOne p-6 rounded-2xl shadow-md flex flex-col justify-between"
							custom={index}
							initial="hidden"
							animate="visible"
							variants={fadeIn}
						>
							<div>
								<div className="flex items-center gap-2 mb-2">
									{[...Array(review.rating)].map((_, i) => (
										<FontAwesomeIcon
											key={i}
											icon={faStar}
											className="text-colorTwo w-5 h-5"
										/>
									))}
								</div>
								<p className="text-lg font-comforta text-colorFour mb-4">
									“{review.text}”
								</p>
							</div>
							<p className="font-semibold text-right font-lobster text-colorTwo">
								{review.name}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Reviews;
