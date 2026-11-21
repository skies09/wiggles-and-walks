import { motion } from "framer-motion";
import Button from "../components/button";
import Icon from "../components/icons";
import { BUSINESS } from "../config/business";

const Hero = () => {
	const renderButtons = (className = "") => (
		<motion.div
			className={`flex flex-col sm:flex-row gap-3 ${className}`}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.6, delay: 0.5 }}
		>
			<Button
				text="Book a free meet & greet"
				className="font-body px-6 py-3 md:px-7 md:py-3.5 bg-brand-primary text-base text-white rounded-full font-semibold shadow-brand hover:bg-brand-primaryLight transition-colors duration-200"
				active={true}
				action="contact"
			/>
			<Button
				text="See prices"
				className="font-body px-6 py-3 md:px-7 md:py-3.5 bg-brand-accent text-base text-neutral-900 rounded-full font-semibold shadow-brand-soft hover:bg-brand-accentLight transition-colors duration-200"
				active={true}
				action="services"
			/>
		</motion.div>
	);

	return (
		<div>
			{/* Desktop Hero */}
			<div
				className="hidden md:flex w-full min-h-[calc(100vh-4rem)] bg-cover bg-center mt-16 relative items-center"
				style={{
					backgroundImage: "url(../../assets/images/beagleHero1.png)",
				}}
				id="hero"
			>
				<div className="absolute inset-0 bg-gradient-to-r from-neutral-900/55 via-neutral-900/25 to-neutral-900/10" />

				<motion.div
					className="relative z-30 w-full max-w-6xl mx-auto px-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<div className="rounded-brand-xl py-8 px-8 lg:px-10 bg-neutral-50/95 backdrop-blur-md shadow-brand-xl max-w-xl">
						<p className="font-heading text-lg text-brand-accentDark">
							Beagle walks & home boarding
						</p>
						<h1 className="mt-1 font-heading text-5xl lg:text-6xl text-neutral-800 leading-[1.05]">
							Wiggles & Walks
						</h1>
						<p className="mt-3 font-body text-lg text-neutral-600 leading-relaxed">
							A free meet and greet, then sniff-filled walks, a sofa to nap on, and photos while you're out.
						</p>
						<p className="mt-3 flex items-center gap-2 font-body text-sm text-neutral-500">
							<Icon name="location" size="sm" className="text-brand-accentDark" />
							{BUSINESS.location} · {BUSINESS.serviceRadiusMiles}-mile radius
						</p>
						<div className="mt-6">{renderButtons()}</div>
						<p className="mt-4 font-body text-sm text-neutral-500">
							Insured · Pet first aid · Same-household walks only
						</p>
					</div>
				</motion.div>
			</div>

			{/* Mobile Hero */}
			<div className="md:hidden w-full mt-16" id="hero-mobile">
				<div
					className="w-full h-[28vh] min-h-[180px] bg-cover bg-center relative"
					style={{
						backgroundImage: "url(../../assets/images/beagleHero.jpeg)",
					}}
				>
					<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 to-transparent" />
				</div>

				<div className="w-full bg-neutral-50 px-5 py-7">
					<motion.div
						className="flex flex-col items-center text-center"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<p className="font-heading text-base text-brand-accentDark">
							Beagle walks & home boarding
						</p>
						<h1 className="mt-1 font-heading text-4xl text-neutral-800 leading-tight">
							Wiggles & Walks
						</h1>
						<p className="mt-2 font-body text-base text-neutral-600">
							A free meet and greet, then walks, sofa time, and photos while you're out.
						</p>
						<p className="mt-1 flex items-center gap-1.5 font-body text-xs text-neutral-500">
							<Icon name="location" size="sm" className="text-brand-accentDark" />
							{BUSINESS.location} · {BUSINESS.serviceRadiusMiles}-mile radius
						</p>
						<div className="mt-5 w-full max-w-xs">{renderButtons()}</div>
						<p className="mt-4 font-body text-xs text-neutral-500">
							Insured · Pet first aid · Same-household walks only
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
