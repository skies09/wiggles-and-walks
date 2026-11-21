import { useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "./icons";

const menuItems = [
	{ label: "Services", href: "#services", icon: "paw" },
	{ label: "Reviews", href: "#reviews", icon: "star" },
	{ label: "About", href: "#about", icon: "user" },
	{ label: "Gallery", href: "#gallery", icon: "gallery" },
];

const Menu = ({ menuOpen, setMenuOpen }) => {
	useEffect(() => {
		if (!menuOpen) return undefined;
		const onKey = (event) => {
			if (event.key === "Escape") setMenuOpen(false);
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [menuOpen, setMenuOpen]);

	return (
		<div
			className={`lg:hidden fixed top-16 inset-x-0 z-40 ${
				menuOpen ? "" : "pointer-events-none"
			}`}
			aria-hidden={!menuOpen}
		>
			<button
				type="button"
				aria-label="Close menu"
				tabIndex={menuOpen ? 0 : -1}
				className="fixed inset-0 top-16 -z-10"
				onClick={() => setMenuOpen(false)}
			/>
			<motion.nav
				initial={false}
				animate={
					menuOpen
						? { opacity: 1, y: 0 }
						: { opacity: 0, y: -12 }
				}
				transition={{ duration: 0.2, ease: "easeOut" }}
				className="border-b border-neutral-200 bg-neutral-50 shadow-brand-lg"
			>
				<ul className="mx-auto w-full max-w-6xl px-4 py-2 md:px-6">
					{menuItems.map((item) => (
						<li key={item.href}>
							<a
								href={item.href}
								onClick={() => setMenuOpen(false)}
								className="flex items-center gap-3 rounded-brand px-3 py-3 text-neutral-800 hover:bg-neutral-100"
							>
								<Icon
									name={item.icon}
									size="md"
									className="text-brand-accent"
								/>
								<span className="font-body text-base font-semibold">
									{item.label}
								</span>
							</a>
						</li>
					))}
				</ul>
				<div className="mx-auto w-full max-w-6xl px-6 pb-4 md:px-8">
					<a
						href="#contact"
						onClick={() => setMenuOpen(false)}
						className="btn-brand w-full text-base"
					>
						Book a free meet & greet
					</a>
				</div>
			</motion.nav>
		</div>
	);
};

export default Menu;
