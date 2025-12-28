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
import Services from "./pages/services";
import Areas from "./pages/areas";
import Pricing from "./pages/pricing";
import Gallery from "./pages/gallery";
import Booking from "./pages/booking";

export default function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="overflow-x-hidden min-h-screen">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="relative w-full min-h-screen snap-mandatory snap-y -mt-8 overflow-x-hidden">
				<Hero />
				<IconCloud />
				<About />
				<Services />
				<Meet />
				<Reviews />
				<Gallery />
				<Areas />
				<Pricing />
				<Booking />
				<Faqs />
				<Contact />
			</div>
		</div>
	);
}
