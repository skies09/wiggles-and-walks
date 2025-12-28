import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
	faCloudSunRain,
	faPaw,
	faShieldDog,
} from "@fortawesome/free-solid-svg-icons";

const IconCloud = () => {
	return (
		<div className="flex flex-row justify-evenly md:justify-between items-center py-10 md:py-12 mt-0 md:mt-12 w-full px-4 md:px-20 bg-gradient-to-br from-brand-secondaryLight/40 to-neutral-50 border-b-4 border-t-8 border-brand-primary/30">
			<motion.a
				id="walking"
				className="flex flex-col items-center text-center group hover:scale-110 transition-transform duration-300 flex-1"
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 150, damping: 10 }}
			>
				<FontAwesomeIcon
					icon={faPaw}
					size="2x"
					className="mb-3 text-brand-primary group-hover:text-brand-accent transition-colors duration-300"
				/>
				<span className="text-sm md:text-md lg:text-lg font-heading font-semibold text-brand-primary group-hover:text-brand-primaryDark transition-colors duration-300 px-2">
					Dog walking service
				</span>
			</motion.a>

			<motion.a
				id="coach"
				className="flex flex-col items-center text-center group hover:scale-110 transition-transform duration-300 flex-1"
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					type: "spring",
					stiffness: 150,
					damping: 10,
					delay: 0.1,
				}}
			>
				<FontAwesomeIcon
					icon={faCloudSunRain}
					size="2x"
					className="mb-3 text-brand-primary group-hover:text-brand-accent transition-colors duration-300"
				/>
				<span className="text-sm md:text-md lg:text-lg font-heading font-semibold text-brand-primary group-hover:text-brand-primaryDark transition-colors duration-300 px-2">
					Any weather
				</span>
			</motion.a>

			<motion.a
				id="FirstAid"
				className="flex flex-col items-center text-center group hover:scale-110 transition-transform duration-300 flex-1"
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					type: "spring",
					stiffness: 150,
					damping: 10,
					delay: 0.2,
				}}
			>
				<FontAwesomeIcon
					icon={faShieldDog}
					size="2x"
					className="mb-3 text-brand-primary group-hover:text-brand-accent transition-colors duration-300"
				/>
				<span className="text-sm md:text-md lg:text-lg font-heading font-semibold text-brand-primary group-hover:text-brand-primaryDark transition-colors duration-300 px-2">
					First aid certified
				</span>
			</motion.a>
		</div>
	);
};
export default IconCloud;
