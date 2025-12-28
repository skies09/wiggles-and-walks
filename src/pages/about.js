import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section
			id="about"
			ref={ref}
			className="overflow-x-hidden flex flex-col md:flex-row items-stretch gap-0 border-b-4 border-t-4 border-brand-primary/30 bg-gradient-to-br from-neutral-50 to-brand-secondaryLight/30"
		>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={inView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="w-full md:w-1/3 bg-brand-secondaryLight/50 flex justify-center items-center p-8 md:p-12"
			>
				<img
					src="../../assets/images/beagleCuddles.jpeg"
					alt="About Us - Happy beagle"
					className="rounded-brand-xl w-auto max-w-full h-auto shadow-brand-xl border-4 border-brand-primary/20"
				/>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={inView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="w-full md:w-2/3 px-6 lg:px-12 py-8 md:py-12 flex flex-col justify-center"
			>
				<h2 className="text-3xl lg:text-4xl text-brand-primary font-heading lg:mb-6">
					<span className="block md:inline">Caring for your dog like</span>
					<span className="block text-4xl lg:text-6xl font-bold text-brand-primaryDark mt-2 md:mt-0">
						one of the family
					</span>
				</h2>
				<p className="text-lg lg:text-xl text-neutral-600 font-body leading-relaxed lg:pr-8 mt-4">
					We totally get it, your dog isn't just a pet, they're
					full-blown family (and probably the favorite, let's be
					honest). That's why we treat every pup like one of my own,
					with plenty of love and belly rubs. Whether we're out for a
					sniff-filled stroll, having a zoomie session, or just
					soaking up some cuddle time, your dog will be showered with
					the best care and attention every step of the way.
				</p>
			</motion.div>
		</section>
	);
};

export default About;
