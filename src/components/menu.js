import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDog,
	faEnvelope,
	faUser,
	faImages,
	faTags,
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
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className="w-full md:w-1/4 h-[50vh] bg-brand-secondary/95 backdrop-blur-md fixed top-14 left-0 flex flex-col items-center justify-center z-40 shadow-brand-xl border-b-4 border-brand-primary/30"
		>
			<ul className="flex items-start justify-center flex-col w-full px-8">
				<li className="mt-4 w-full" onClick={() => setMenuOpen(false)}>
					<a
						href="#about"
						className="flex justify-start items-center w-full py-3 px-4 rounded-brand hover:bg-brand-primary/20 transition-all duration-300 group"
					>
						<FontAwesomeIcon
							icon={faUser}
							size="lg"
							className="text-brand-primary group-hover:text-brand-primaryDark transition-colors"
						/>
						<span className="font-heading font-semibold ml-4 text-brand-primary group-hover:text-brand-primaryDark text-xl transition-colors">
							About
						</span>
					</a>
				</li>
				<li className="mt-2 w-full" onClick={() => setMenuOpen(false)}>
					<a
						href="#services"
						className="flex justify-start items-center w-full py-3 px-4 rounded-brand hover:bg-brand-primary/20 transition-all duration-300 group"
					>
						<FontAwesomeIcon
							icon={faDog}
							size="lg"
							className="text-brand-primary group-hover:text-brand-primaryDark transition-colors"
						/>
						<span className="font-heading font-semibold ml-4 text-brand-primary group-hover:text-brand-primaryDark text-xl transition-colors">
							Services
						</span>
					</a>
				</li>
				<li className="mt-2 w-full" onClick={() => setMenuOpen(false)}>
					<a
						href="#gallery"
						className="flex justify-start items-center w-full py-3 px-4 rounded-brand hover:bg-brand-primary/20 transition-all duration-300 group"
					>
						<FontAwesomeIcon
							icon={faImages}
							size="lg"
							className="text-brand-primary group-hover:text-brand-primaryDark transition-colors"
						/>
						<span className="font-heading font-semibold ml-4 text-brand-primary group-hover:text-brand-primaryDark text-xl transition-colors">
							Gallery
						</span>
					</a>
				</li>
				<li className="mt-2 w-full" onClick={() => setMenuOpen(false)}>
					<a
						href="#pricing"
						className="flex justify-start items-center w-full py-3 px-4 rounded-brand hover:bg-brand-primary/20 transition-all duration-300 group"
					>
						<FontAwesomeIcon
							icon={faTags}
							size="lg"
							className="text-brand-primary group-hover:text-brand-primaryDark transition-colors"
						/>
						<span className="font-heading font-semibold ml-4 text-brand-primary group-hover:text-brand-primaryDark text-xl transition-colors">
							Pricing
						</span>
					</a>
				</li>
				<li className="mt-2 w-full" onClick={() => setMenuOpen(false)}>
					<a
						href="#contact"
						className="flex justify-start items-center w-full py-3 px-4 rounded-brand hover:bg-brand-primary/20 transition-all duration-300 group"
					>
						<FontAwesomeIcon
							icon={faEnvelope}
							size="lg"
							className="text-brand-primary group-hover:text-brand-primaryDark transition-colors"
						/>
						<span className="font-heading font-semibold ml-4 text-brand-primary group-hover:text-brand-primaryDark text-xl transition-colors">
							Contact
						</span>
					</a>
				</li>
			</ul>
		</motion.div>
	);
};

export default Menu;
