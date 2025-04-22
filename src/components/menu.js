import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBriefcase,
	faEnvelope,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

const Menu = ({ menuOpen, setMenuOpen }) => {
	const mainControls = useAnimation();
	useEffect(() => {
		if (menuOpen) {
			mainControls.start("visible");
		}
	}, [menuOpen, mainControls]);

	return (
		<motion.div
			animate={menuOpen ? "open" : "closed"}
			variants={{
				open: { opacity: 1, y: 0 },
				closed: { opacity: 0, y: "-100%" },
			}}
			initial="closed"
			transition={{ duration: 1, ease: "easeInOut" }}
			className="w-full md:w-1/5 h-[40vh] bg-colorOne fixed top-0 left-0 flex flex-col items-center justify-center z-40"
		>
			<ul className="flex items-start justify-center flex-col">
				<li className="mt-3" onClick={() => setMenuOpen(false)}>
					<a
						href="#about"
						className="flex justify-center items-center"
					>
						<FontAwesomeIcon
							icon={faUser}
							size="lg"
							className="text-colorTwo hover:text-colorFour hover:underline"
						/>
						<span className="font-fredoka font-medium ml-4 text-colorTwo hover:text-colorFour hover:underline text-xl">
							About
						</span>
					</a>
				</li>
				<li className="mt-3" onClick={() => setMenuOpen(false)}>
					<a
						href="#portfolio"
						className="flex justify-center items-center"
					>
						<FontAwesomeIcon
							icon={faBriefcase}
							size="lg"
							className="text-colorTwo hover:text-colorFour hover:underline"
						/>
						<span className="font-fredoka font-medium ml-3 text-colorTwo hover:text-colorFour hover:underline text-xl">
							Services
						</span>
					</a>
				</li>

				<li className="mt-3" onClick={() => setMenuOpen(false)}>
					<a
						href="#contact"
						className="flex justify-center items-center"
					>
						<FontAwesomeIcon
							icon={faEnvelope}
							size="lg"
							className="text-colorTwo hover:text-colorFour hover:underline"
						/>
						<span className="font-fredoka font-medium ml-3 text-colorTwo hover:text-colorFour hover:underline text-xl">
							Contact
						</span>
					</a>
				</li>
			</ul>
		</motion.div>
	);
};

export default Menu;
