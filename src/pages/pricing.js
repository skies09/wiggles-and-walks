import React from "react";
import { motion } from "framer-motion";

const services = [
	{
		name: "Dog Walking",
		description:
			"Daily walks tailored to your dog’s needs. Includes water, treats, and plenty of love.",
		prices: ["\u00a320 / 30 mins", "\u00a335 / 1 hour"],
		image: "../../assets/images/walkingBeagle.jpg",
	},
	{
		name: "Home Boarding",
		description:
			"Your pup stays in a loving, home environment while you're away.",
		prices: ["\u00a350 / night", "\u00a390 / weekend"],
		image: "../../assets/images/beagleOnSofa.jpg",
	},
	{
		name: "Puppy Visits",
		description:
			"Short visits to check in on your puppy, feed them, play, and reinforce training.",
		prices: ["\u00a325 / 30 mins"],
		image: "../../assets/images/beaglePuppy.jpg",
	},
];

const Pricing = () => {
	return (
		<section
			id="pricing"
			className="bg-colorFive py-12 px-4 border-t-4 border-colorFour"
		>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-10 text-colorTwo font-gloria">
					Our Services
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={index}
							className="bg-colorOne rounded-2xl shadow-md overflow-hidden"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
						>
							<img
								src={service.image}
								alt={service.name}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2 text-colorFour font-fredoka">
									{service.name}
								</h3>
								<p className="text-colorTwo font-poppins mb-2">
									{service.description}
								</p>
								<ul className="text-colorFour font-comforta text-lg font-bold space-y-1">
									{service.prices.map((price, i) => (
										<li key={i}>{price}</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
