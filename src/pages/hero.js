import { motion } from "framer-motion";
import Button from "../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
	const renderText = () => {
		return (
			<div className="lg:ml-8 flex flex-col justify-center items-center md:justify-start md:items-start md:rounded-md w-full md:w-auto py-4 md:p-6 bg-colorOne md:bg-opacity-70">
				<motion.p
					className=""
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<div className="flex flex-col items-center md:items-left">
						<span className="font-fredoka text-4xl md:text-6xl m-1 text-colorTwo">
							Wiggles & Walks
						</span>
						<span className="font-gloria text-md md:text-xl m-1 text-colorTwo font-medium">
							Beagle Boarding
							<FontAwesomeIcon
								icon={faPaw}
								size="xs"
								className="text-colorTwo ml-3"
							/>
						</span>
					</div>
				</motion.p>
				<motion.p
					className="mt-3 w-full text-center md:text-left"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<span className="block font-fredoka text-xl md:text-2xl m-1 text-colorFour font-medium">
						Dog Walking & Home Boarding Service
					</span>
				</motion.p>
			</div>
		);
	};

	const renderButton = () => {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<Button
					text="Book a walk"
					className="lg:ml-8 font-fredoka px-6 py-2 bg-colorOne text-2xl text-colorFour border-2 border-colorFour rounded-xl tracking-wider font-semibold lg:overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.25),0_6px_6px_rgba(0,0,0,0.22)]"
					active={true}
					action={"contact"}
				/>
			</motion.div>
		);
	};

	return (
		<div className="lg:h-full mb-8 lg:-mb-12">
			<div
				className="w-screen overflow-hidden h-[50vh] md:h-full bg-cover bg-center mt-8 -mb-12"
				style={{
					backgroundImage: "url(../../assets/images/beagleHero.jpeg)",
				}}
				id="hero"
			>
				{/*Desktop*/}
				<motion.div
					className="relative hidden md:flex flex-col justify-center items-start md:ml-12 lg:ml-16 pt-56 lg:pt-40 w-full z-30"
					initial={{ opacity: 0, x: -200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
				>
					{renderText()}

					<div className="my-6 flex flex-row">{renderButton()}</div>
				</motion.div>
			</div>
			{/*Mobile*/}
			<motion.div
				className="relative flex flex-col justify-center items-center md:hidden w-full lg:py-8 z-30"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.5 }}
			>
				{renderText()}

				<div className="my-6 flex flex-row justify-center">
					{renderButton()}
				</div>
			</motion.div>
		</div>
	);
};

export default Hero;
