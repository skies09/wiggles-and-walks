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
				className="w-full md:w-1/2 bg-colorOne flex justify-center items-center p-8"
			>
				<img
					src="../../assets/images/beagleCuddles.jpeg"
					alt="About Us"
					className="rounded-2xl w-auto shadow-[20px_20px_20px_rgba(0,0,0,0.25),6px_6px_6px_rgba(0,0,0,0.22)]"
				/>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={inView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.5 }}
				className="w-full md:w-1/2 px-6 lg:px-8 py-4 flex flex-col justify-start -mt-6 md:mt-0"
			>
				<p className="text-2xl lg:text-3xl text-colorTwo font font-fredoka lg:mb-4">
					Caring for your dog like <br />
					<span className="text-4xl lg:text-5xl font-semibold text-center">
						one of the family
					</span>
				</p>
				<p className="lg:text-lg text-colorFour font-semibold font-comforta lg:pr-10">
					We totally get it, your dog isn’t just a pet, they’re
					full-blown family (and probably the favorite, let’s be
					honest). That’s why we treat every pup like one of my own,
					with plenty of love and belly rubs. Whether we’re out for a
					sniff-filled stroll, having a zoomie session, or just
					soaking up some cuddle time, your dog will be showered with
					the best care and attention every step of the way.
				</p>
			</motion.div>
		</section>
	);
};

export default About;
