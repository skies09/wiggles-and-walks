import { motion } from "framer-motion";
import { faPaw, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ menuOpen, setMenuOpen }) => {
	return (
		<div className="w-full h-14 bg-brand-secondary fixed top-0 z-50 shadow-brand-soft border-b-2 border-brand-primary/20">
			<div className="flex justify-between items-center h-full">
				<div className="flex items-center justify-center">
					<a
						href="#hero"
						className="flex items-center font-heading text-xl font-bold text-brand-primary ml-6 tracking-tight hover:text-brand-primaryDark transition-colors duration-300"
					>
						<span className="flex items-center gap-2">
							Wiggles & Walks
						</span>
					</a>
				</div>
				<div className="hidden md:flex items-center space-x-8 mr-8">
					<a
						href="#about"
						className="font-heading font-medium text-brand-primary hover:text-brand-primaryDark transition-colors duration-300 relative group"
					>
						About
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
					</a>
					<a
						href="#services"
						className="font-heading font-medium text-brand-primary hover:text-brand-primaryDark transition-colors duration-300 relative group"
					>
						Services
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
					</a>
					<a
						href="#gallery"
						className="font-heading font-medium text-brand-primary hover:text-brand-primaryDark transition-colors duration-300 relative group"
					>
						Gallery
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
					</a>
					<a
						href="#pricing"
						className="font-heading font-medium text-brand-primary hover:text-brand-primaryDark transition-colors duration-300 relative group"
					>
						Pricing
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
					</a>
					<a
						href="#contact"
						className="font-heading font-medium text-brand-primary hover:text-brand-primaryDark transition-colors duration-300 relative group"
					>
						Contact
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
					</a>
				</div>
				<div className="mr-4 w-8 h-8 flex items-center md:hidden">
					<div
						className="relative w-8 h-6 flex flex-col justify-between cursor-pointer"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<motion.div
							initial={{ opacity: 0, rotate: 0 }}
							animate={{
								opacity: menuOpen ? 0 : 1,
								rotate: menuOpen ? 90 : 0,
							}}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="absolute top-0 left-0"
						>
							<FontAwesomeIcon
								icon={faPaw}
								size="2x"
								className="text-brand-primary"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, rotate: -90 }}
							animate={{
								opacity: menuOpen ? 1 : 0,
								rotate: menuOpen ? 0 : -90,
							}}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="absolute top-0 left-[0.25rem]"
						>
							<FontAwesomeIcon
								icon={faXmark}
								size="2x"
								className="text-brand-primary"
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
