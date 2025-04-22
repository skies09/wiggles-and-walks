import { motion } from "framer-motion";

const Button = ({ text, className, active = true, action }) => {
	const handleClick = (page) => {
		window.location.href = "#" + page;
	};

	return (
		<>
			{active && (
				<motion.button
					whileTap={{ scale: 0.9 }}
					whileHover={{
						scale: 1.1,
						backgroundColor: "#B3DDF2",
						color: "#5C4033",
						border: "solid #5C4033 3px",
					}}
					transition={{ bounceDamping: 10, bounceStiffness: 600 }}
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
