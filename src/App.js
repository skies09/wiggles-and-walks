import { useState } from "react";
import Menu from "./components/menu";
import Navbar from "./components/navbar";

import Contact from "./pages/contact";
import Hero from "./pages/hero";
import IconCloud from "./components/iconCloud";
import About from "./pages/about";
import Reviews from "./pages/reviews";
import Faqs from "./pages/faqs";
import Meet from "./pages/meet";
import Areas from "./pages/areas";
import Pricing from "./pages/pricing";
import Gallery from "./pages/gallery";
import Footer from "./components/Footer";

export default function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="min-h-screen">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="relative w-full min-h-screen">
				<Hero />
				<IconCloud />
				<Pricing />
				<Reviews />
				<Meet />
				<About />
				<Gallery />
				<Areas />
				<Faqs />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}
