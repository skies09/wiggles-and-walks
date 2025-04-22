import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section
			id="about"
			ref={ref}
			className="flex flex-col md:flex-row items-stretch gap-8 border-b-4 border-t-2 border-colorFour"
		>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={inView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.5 }}
				className="w-full md:w-1/2 bg-colorTwo flex justify-center items-center p-8"
			>
				<img
					src="../../assets/images/beagleAbout.jpeg"
					alt="About Us"
					className="rounded-2xl w-11/12 lg:w-auto shadow-[20px_20px_20px_rgba(0,0,0,0.25),6px_6px_6px_rgba(0,0,0,0.22)]"
				/>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={inView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.5 }}
				className="w-full md:w-1/2 p-4 lg:px-8 lg:pt-8 flex flex-col justify-start"
			>
				<p className="text-2xl lg:text-3xl text-colorTwo font font-fredoka lg:mb-4">
					Caring for your dog like <br />
					<span className="text-4xl lg:text-5xl font-semibold text-center">
						one of the family
					</span>
				</p>
				<p className="lg:text-lg text-colorFour font-semibold font-comforta lg:pr-10">
					I understand that your dog is more than just a pet—they're
					part of the family. That's why I treat every dog with the
					same love, care, and attention that I give to my own.
					Whether it's a walk, playtime, or simply a bit of TLC, your
					dog will receive the best care possible while in our hands.
				</p>
			</motion.div>
		</section>
	);
};

export default About;
