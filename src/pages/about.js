import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Icon from "../components/icons";

const About = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section
			id="about"
			ref={ref}
			className="section-brand bg-neutral-50"
		>
			<div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-center">
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="md:col-span-2"
			>
				<img
					src="../../assets/images/beagleCuddles.jpeg"
					alt="About Us - Happy beagle"
					className="rounded-brand-xl w-full h-72 md:h-96 object-cover shadow-brand-lg"
				/>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="md:col-span-3"
			>
				<h2 className="text-3xl md:text-4xl text-neutral-800 font-heading">
					Caring for your dog like{" "}
					<span className="text-brand-accentDark">one of the family</span>
				</h2>
				<p className="text-base md:text-lg text-neutral-600 font-body leading-relaxed mt-4">
					We totally get it — your dog isn't just a pet, they're
					full-blown family (and probably the favourite, let's be
					honest). That's why we treat every pup like one of our own,
					with plenty of love and belly rubs. Whether we're out for a
					sniff-filled stroll, having a zoomie session, or just
					soaking up some cuddle time, your dog will be showered with
					the best care and attention every step of the way.
				</p>
				<div className="mt-6 flex items-center gap-2 text-brand-accentDark font-heading font-semibold text-lg">
					<Icon name="heart" size="md" className="text-brand-accent" />
					<span>Happy dogs, happy hearts!</span>
				</div>
			</motion.div>
			</div>
		</section>
	);
};

export default About;
