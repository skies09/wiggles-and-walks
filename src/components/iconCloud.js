import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
	faCloudSunRain,
	faPaw,
	faShieldDog,
	faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";

const features = [
	{
		id: "walking",
		icon: faPaw,
		label: "Expert Dog Walking",
		sub: "Sniff-filled adventures daily",
	},
	{
		id: "boarding",
		icon: faHouseChimney,
		label: "Cosy Home Boarding",
		sub: "Sofas, cuddles & all the comforts",
	},
	{
		id: "weather",
		icon: faCloudSunRain,
		label: "Rain or Shine",
		sub: "We walk whatever the weather",
	},
	{
		id: "firstaid",
		icon: faShieldDog,
		label: "First Aid Certified",
		sub: "Your pup is in safe paws",
	},
];

const IconCloud = () => {
	return (
		<div className="flex flex-row flex-wrap justify-evenly md:justify-between items-start py-10 md:py-12 mt-0 md:mt-12 w-full px-4 md:px-16 bg-gradient-to-br from-brand-secondaryLight/40 to-neutral-50 border-b-4 border-t-8 border-brand-primary/30 gap-y-6">
			{features.map((feature, index) => (
				<motion.div
					key={feature.id}
					id={feature.id}
					className={`flex flex-col items-center text-center group hover:scale-110 transition-transform duration-300 flex-1 min-w-[6rem] ${
						feature.id === "weather" ? "hidden md:flex" : ""
					}`}
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 150,
						damping: 10,
						delay: index * 0.1,
					}}
				>
					<FontAwesomeIcon
						icon={feature.icon}
						size="2x"
						className="mb-3 text-brand-primary group-hover:text-brand-accent transition-colors duration-300"
					/>
					<span className="text-sm md:text-base lg:text-lg font-heading font-semibold text-brand-primary group-hover:text-brand-primaryDark transition-colors duration-300 px-2">
						{feature.label}
					</span>
					<span className="text-xs md:text-sm text-neutral-500 font-body mt-1 px-2 hidden md:block">
						{feature.sub}
					</span>
				</motion.div>
			))}
		</div>
	);
};
export default IconCloud;
