import { motion } from "framer-motion";
import { faPaw, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ menuOpen, setMenuOpen }) => {
	return (
		<div className="w-full h-12 bg-colorOne fixed top-0 z-50">
			<div className="flex justify-between items-center">
				<div className="flex items-center justify-center">
					<a
						href="#hero"
						className="flex font-fugaz text-lg font-semibold text-colorTwo ml-6 tracking-tight  mt-2"
					>
						Wiggles & Walks
					</a>
					<FontAwesomeIcon
						icon={faPaw}
						size="sm"
						className="flex justify-center items-center ml-2 mt-2 text-colorTwo"
					/>
				</div>
				<div className="hidden md:flex items-center space-x-6 mr-6 mt-3">
					<a
						href="#about"
						className="font-fredoka font-medium text-colorTwo hover:text-colorFour hover:underline"
					>
						About
					</a>
					<a
						href="#services"
						className="font-fredoka font-medium text-colorTwo hover:text-colorFour hover:underline"
					>
						Services
					</a>
					<a
						href="#gallery"
						className="font-fredoka font-medium text-colorTwo hover:text-colorFour hover:underline"
					>
						Gallery
					</a>
					<a
						href="#pricing"
						className="font-fredoka font-medium text-colorTwo hover:text-colorFour hover:underline"
					>
						Pricing
					</a>
					<a
						href="#contact"
						className="font-fredoka font-medium text-colorTwo hover:text-colorFour hover:underline"
					>
						Contact
					</a>
				</div>
				<div className="mr-4 mt-2 w-8 h-8 flex items-center md:hidden">
					<div
						className="relative w-8 h-6 flex flex-col justify-between cursor-pointer"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: menuOpen ? 0 : 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="absolute top-0 left-0"
						>
							<FontAwesomeIcon
								icon={faPaw}
								size="2x"
								className="mb-2 text-colorTwo"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: menuOpen ? 1 : 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="absolute top-0 left-[0.25rem]"
						>
							<FontAwesomeIcon
								icon={faXmark}
								size="2x"
								className="mb-2 text-colorTwo"
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
