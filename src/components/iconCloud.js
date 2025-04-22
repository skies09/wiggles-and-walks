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
		<div className="flex flex-row justify-between items-center py-8 w-full px-4 md:px-20 bg-[#f2f2f2] border-b-4 border-t-4 border-colorFour">
			<motion.a
				id="walking"
				className="flex flex-col items-center text-center"
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 150, damping: 10 }}
			>
				<FontAwesomeIcon
					icon={faPaw}
					size="2x"
					className="mb-2 text-colorTwo"
				/>
				<span className="text-md md:text-lg font-fredoka font-semibold text-colorTwo">
					Dog walking service
				</span>
			</motion.a>

			<motion.a
				id="coach"
				className="flex flex-col items-center text-center"
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 150, damping: 10 }}
			>
				<FontAwesomeIcon
					icon={faCloudSunRain}
					size="2x"
					className="mb-2 text-colorTwo"
				/>
				<span className="text-md md:text-lg font-fredoka font-semibold text-colorTwo">
					Any weather
				</span>
			</motion.a>

			<motion.a
				id="FirstAid"
				className="flex flex-col items-center text-center"
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 150, damping: 10 }}
			>
				<FontAwesomeIcon
					icon={faShieldDog}
					size="2x"
					className="mb-2 text-colorTwo"
				/>
				<span className="text-md md:text-lg font-fredoka font-semibold text-colorTwo">
					First aid certified
				</span>
			</motion.a>
		</div>
	);
};
export default IconCloud;
