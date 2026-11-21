import { motion } from "framer-motion";
import Icon from "./icons";

const Navbar = ({ menuOpen, setMenuOpen }) => {
	return (
		<div className="w-full h-16 bg-neutral-50/95 backdrop-blur-md fixed top-0 z-50 border-b border-neutral-200">
			<div className="max-w-6xl mx-auto flex justify-between items-center h-full pl-5 pr-3 md:px-8">
				<div className="flex items-center justify-center min-w-0">
					<a
						href="#hero"
						className="flex items-center font-heading text-xl font-semibold text-neutral-900 tracking-tight hover:text-brand-primary transition-colors duration-200"
					>
						<span className="flex items-center gap-2.5">
							<Icon name="paw" size="md" className="text-brand-accent" />
							Wiggles & Walks
						</span>
					</a>
				</div>
				<div className="hidden lg:flex items-center gap-6">
					{[
						{ label: "Services", href: "#services" },
						{ label: "Reviews", href: "#reviews" },
						{ label: "About", href: "#about" },
						{ label: "Gallery", href: "#gallery" },
					].map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="font-body font-semibold text-neutral-700 hover:text-brand-primary transition-colors duration-200 relative group text-sm"
						>
							{link.label}
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
						</a>
					))}
					<a
						href="#contact"
						className="ml-2 px-5 py-2 bg-brand-primary text-white font-body font-semibold rounded-full text-sm hover:bg-brand-primaryLight transition-colors duration-200 shadow-brand"
					>
						Book now
					</a>
				</div>
				<div className="flex items-center lg:hidden">
					<button
						type="button"
						className="relative flex h-10 w-10 items-center justify-center cursor-pointer"
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						aria-expanded={menuOpen}
					>
						<motion.div
							initial={{ opacity: 0, rotate: 0 }}
							animate={{
								opacity: menuOpen ? 0 : 1,
								rotate: menuOpen ? 90 : 0,
							}}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="absolute"
						>
							<Icon name="paw" size="lg" className="text-brand-accent" />
						</motion.div>
						<motion.div
							initial={{ opacity: 0, rotate: -90 }}
							animate={{
								opacity: menuOpen ? 1 : 0,
								rotate: menuOpen ? 0 : -90,
							}}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="absolute"
						>
							<Icon name="close" size="lg" className="text-brand-accent" />
						</motion.div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
