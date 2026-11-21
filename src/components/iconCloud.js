import React from "react";
import Icon from "./icons";
import { motion } from "framer-motion";

const features = [
	{
		id: "walking",
		icon: "paw",
		label: "Expert Dog Walking",
		sub: "Sniff-filled adventures daily",
	},
	{
		id: "boarding",
		icon: "home",
		label: "Cosy Home Boarding",
		sub: "Sofas, cuddles & all the comforts",
	},
	{
		id: "weather",
		icon: "weather",
		label: "Rain or Shine",
		sub: "We walk whatever the weather",
	},
	{
		id: "firstaid",
		icon: "shield",
		label: "Insured & First Aid",
		sub: "Fully covered, certified care",
	},
];

const IconCloud = () => {
	return (
		<div className="w-full bg-neutral-100 border-y border-neutral-200">
			<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-5 py-8">
			{features.map((feature, index) => (
				<motion.div
					key={feature.id}
					id={feature.id}
					className="flex flex-col items-center text-center"
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: index * 0.08 }}
				>
					<Icon
						name={feature.icon}
						size="xl"
						className="mb-3 text-brand-accent"
					/>
					<span className="text-sm md:text-base font-body font-semibold text-neutral-800 px-2">
						{feature.label}
					</span>
					<span className="text-xs md:text-sm text-neutral-500 font-body mt-1 px-2">
						{feature.sub}
					</span>
				</motion.div>
			))}
			</div>
		</div>
	);
};
export default IconCloud;
