import React from "react";
import { motion } from "framer-motion";

const Areas = () => {
	return (
		<section className="pb-16 pt-10 px-6 bg-colorFive">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 lg:w-2/3">
				<motion.div
					className="w-full md:w-1/2 text-center md:text-left lg:pl-12 md:pr-4"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7 }}
				>
					<h2 className="text-3xl font-bold text-colorTwo font-gloria mb-4">
						Areas Covered
					</h2>
					<p className="text-lg text-colorFour mb-6 font-fredoka">
						We provide services across various regions across North
						West England. <br />
						Check out the map to see if we cover your area.
					</p>
					<ul className="text-lg text-colorFour font-fredoka list-disc pl-6 space-y-2">
						<li>Warrington</li>
						<li>Wigan</li>
						<li>Liverpool</li>
						<li>Manchester</li>
					</ul>
				</motion.div>

				{/* Map */}
				<motion.div
					className="w-full md:w-1/2"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7 }}
				>
					<div className="relative h-64 justify-center flex rounded-lg">
						<img
							src="../../assets/images/areas.png"
							alt="Map"
							className="w-full h-full object-cover rounded-xl border border-colorFour"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Areas;
