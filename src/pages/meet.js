import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Meet = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
	return (
		<section
			id="meet"
			ref={ref}
			className="overflow-x-hidden flex flex-col md:flex-row items-stretch gap-8 border-b-4 border-t-4 border-colorFour"
		>
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={inView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.5 }}
				className="w-full md:w-3/5 px-6 lg:px-8 py-4 flex flex-col justify-start"
			>
				<h3 className="text-xl md:text-2xl font-semibold mb-1 font-lobster text-colorTwo">
					Donna
				</h3>
				<p className="text-sm md:text-base font-comforta text-colorFour mb-2">
					Founder & Lead Walker
				</p>
				<p className="text-colorFour font-poppins text-base mb-2">
					Armed with a Pet First Aid cert and a whole lotta love, I
					started Wiggles & Walks because I wanted the kind of care
					I’d trust for my own dogs, safe, snuggly, and full of
					tail-wagging fun. Every pup gets treated like family, with
					plenty of love, play, and pampering along the way!
				</p>
				<p className="text-base text-colorTwo mb-2">
					<span className="font-medium text-colorFour">
						Specialities:
					</span>{" "}
					Beagles
				</p>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={inView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.5 }}
				className="w-5/6 mx-auto md:w-2/5 pb-6 md:pb-0 md:bg-colorOne flex justify-center items-center"
			>
				<img
					src="../../assets/images/team.jpeg"
					alt="About Us"
					className="rounded-2xl w-auto max-w-[90%] h-4/5 shadow-[20px_20px_20px_rgba(0,0,0,0.25),6px_6px_6px_rgba(0,0,0,0.22)]"
				/>
			</motion.div>
		</section>
	);
};

export default Meet;
