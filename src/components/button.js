import { motion } from "framer-motion";

const Button = ({ text, className, active = true, action }) => {
	const handleClick = (page) => {
		window.location.href = "#" + page;
	};

	return (
		<>
			{active && (
				<motion.button
					whileTap={{ scale: 0.95 }}
					whileHover={{
						scale: 1.05,
					}}
					transition={{ 
						bounceDamping: 15, 
						bounceStiffness: 400,
						duration: 0.2
					}}
					className={className}
					onClick={() => handleClick(action)}
				>
					{text}
				</motion.button>
			)}
		</>
	);
};

export default Button;
