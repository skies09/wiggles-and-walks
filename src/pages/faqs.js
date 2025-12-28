import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";

const faqs = [
	{
		question: "What areas do you cover for dog walking?",
		answer: "We currently cover Manchester UK and surrounding areas.",
	},
	{
		question: "My dog is reactive, how will you walk them?",
		answer: "No worries at all! I've got plenty of experience with reactive pups. I always walk dogs from the same household only, so your furry friend gets a calm, stress-free stroll without any unexpected surprises. Just us, the leash, and all the good sniffs.",
	},
	{
		question: "What should I pack for home boarding?",
		answer: "Please just bring your dog's food, any meds they're on, their favorite toy, and their bed or blanket if you want them to feel extra cozy (but don't worry, there are plenty of comfy beds here to choose from!). And if you happen to forget something, no problem at all, I've got home-cooked dog food on hand, so your pup will always be well-fed and happy!",
	},
	{
		question: "Will other dogs be staying when my dog is boarding?",
		answer: "Nope! Your dog gets the VIP treatment. No other pups will be staying while yours is here. It's all about one-on-one time, comfy vibes, and lots of attention! And don't worry, your dog will never be left unattended. I'm always there to keep them company and make sure they feel safe and loved.",
	},
	{
		question: "Are you insured and certified?",
		answer: "Yes! I am fully insured and certified in pet first aid and CPR.",
	},
];

const Faqs = () => {
	const [openIndex, setOpenIndex] = useState(null);
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section
			ref={ref}
			className="section-brand bg-gradient-to-br from-neutral-50 to-brand-secondaryLight/20 border-b-4 border-t-4 border-brand-primary/30"
		>
			<div className="max-w-4xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-brand-primary"
				>
					Frequently Asked Questions
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="text-center text-neutral-600 font-body text-lg mb-12"
				>
					Everything you need to know
				</motion.p>
				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							className="card-brand cursor-pointer border-2 border-brand-primary/20 hover:border-brand-primary/50 transition-all duration-300"
							onClick={() => toggleFAQ(index)}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.02 }}
						>
							<div className="flex justify-between items-center">
								<h3 className="text-lg md:text-xl font-heading font-semibold text-brand-primary pr-4">
									{faq.question}
								</h3>
								<FontAwesomeIcon
									icon={
										openIndex === index
											? faChevronUp
											: faChevronDown
									}
									className="text-brand-primary flex-shrink-0"
								/>
							</div>
							<AnimatePresence>
								{openIndex === index && (
									<motion.p
										className="mt-4 text-neutral-600 text-base md:text-lg font-body leading-relaxed"
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.3 }}
									>
										{faq.answer}
									</motion.p>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Faqs;
