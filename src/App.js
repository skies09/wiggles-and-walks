import { useState } from "react";
import Menu from "./components/menu";
import Navbar from "./components/navbar";

import Contact from "./pages/contact";
import Hero from "./pages/hero";
import IconCloud from "./components/iconCloud";
import About from "./pages/about";

export default function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div>
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="relative w-full h-screen snap-mandatory snap-y -mt-8">
				<Hero />
				<IconCloud />
				<About />
				<Contact />
			</div>
		</div>
	);
}
