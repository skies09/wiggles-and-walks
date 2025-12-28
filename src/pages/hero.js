import { motion } from "framer-motion";
import Button from "../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
	const renderText = () => {
		return (
			<div className="lg:ml-8 flex flex-col justify-center items-center md:justify-start md:items-start md:rounded-brand-xl w-full md:w-auto py-6 md:p-8 bg-brand-secondary/85 backdrop-blur-sm border-2 border-brand-primary/20 shadow-brand-xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					<div className="flex flex-col items-center md:items-start">
						<h1 className="font-heading text-5xl md:text-7xl lg:text-8xl m-2 text-brand-primary drop-shadow-lg">
							Wiggles & Walks
						</h1>
						<div className="flex items-center gap-2 m-2">
							<span className="font-accent text-lg md:text-2xl text-brand-primary font-medium">
								Beagle Boarding
							</span>
						</div>
					</div>
				</motion.div>
				<motion.p
					className="mt-4 w-full text-center md:text-left"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
				>
					<span className="block font-heading text-2xl md:text-3xl lg:text-4xl m-2 text-neutral-600 font-semibold">
						<span className="block md:inline">Dog Walking</span>
						<span className="hidden md:inline"> & </span>
						<span className="block md:inline">
							Home Boarding Service
						</span>
					</span>
				</motion.p>
			</div>
		);
	};

	const renderButton = () => {
		return (
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, delay: 0.7 }}
			>
				<Button
					text="Book a walk"
					className="lg:ml-8 font-heading px-8 py-4 bg-brand-primary text-xl md:text-2xl text-neutral-50 rounded-brand-lg tracking-wide font-bold shadow-brand-xl hover:shadow-brand-lg transition-all duration-300"
					active={true}
					action={"contact"}
				/>
			</motion.div>
		);
	};

	return (
		<div className="lg:h-full">
			{/* Desktop Hero */}
			<div
				className="hidden md:block w-screen overflow-hidden h-full bg-cover bg-center bg-gradient-to-br from-brand-secondary/30 to-brand-primary/20 mt-14 -mb-12 relative"
				style={{
					backgroundImage: "url(../../assets/images/beagleHero.jpeg)",
				}}
				id="hero"
			>
				{/* Overlay for better text readability */}
				<div className="absolute inset-0 bg-gradient-to-r from-neutral-900/20 to-transparent"></div>

				<motion.div
					className="relative flex flex-col justify-center items-start md:ml-12 lg:ml-16 pt-56 lg:py-40 w-full z-30"
					initial={{ opacity: 0, x: -200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
				>
					{renderText()}
					<div className="my-8 flex flex-row">{renderButton()}</div>
				</motion.div>
			</div>

			{/* Mobile Hero */}
			<div className="md:hidden w-screen mt-14">
				{/* Background Image Section */}
				<div
					className="w-full h-[40vh] bg-cover bg-center relative"
					style={{
						backgroundImage:
							"url(../../assets/images/beagleHero.jpeg)",
					}}
				>
					<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 to-transparent"></div>
				</div>

				{/* Content Section */}
				<div className="w-full bg-gradient-to-br from-brand-secondaryLight/50 to-neutral-50 px-6 py-8">
					<motion.div
						className="flex flex-col items-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<h1 className="font-heading text-4xl text-brand-primary mb-3 text-center">
							Wiggles & Walks
						</h1>
						<div className="flex items-center gap-2 mb-4">
							<span className="font-accent text-lg text-brand-primary font-medium">
								Beagle Boarding
							</span>
						</div>
						<p className="font-heading text-xl text-neutral-600 font-semibold text-center mb-6">
							<span className="block">Dog Walking</span>
							<span className="block">&</span>
							<span className="block">Home Boarding Service</span>
						</p>
						<div className="w-full flex justify-center">
							<Button
								text="Book a walk"
								className="font-heading px-8 py-3 bg-brand-primary text-lg text-neutral-50 rounded-brand-lg tracking-wide font-bold shadow-brand-lg hover:shadow-brand transition-all duration-300 w-full max-w-xs"
								active={true}
								action={"contact"}
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
