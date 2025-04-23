import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqs = [
	{
		question: "What areas do you cover for dog walking?",
		answer: "We currently cover Manchester UK and surrounding areas.",
	},
	{
		question: "My dog is reactive, how will you walk them?",
		answer: "No worries at all! I’ve got plenty of experience with reactive pups. I always walk dogs from the same household only, so your furry friend gets a calm, stress-free stroll without any unexpected surprises. Just us, the leash, and all the good sniffs.",
	},
	{
		question: "What should I pack for home boarding?",
		answer: "Please just bring your dog’s food, any meds they’re on, their favorite toy, and their bed or blanket if you want them to feel extra cozy (but don’t worry—there are plenty of comfy beds here to choose from!). And if you happen to forget something, no problem at all, I’ve got home-cooked dog food on hand, so your pup will always be well-fed and happy!",
	},
	{
		question: "Will other dogs be staying when my dog is boarding?",
		answer: "Nope! Your dog gets the VIP treatment—no other pups will be staying while yours is here. It's all about one-on-one time, comfy vibes, and lots of attention! And don’t worry, your dog will never be left unattended. I’m always there to keep them company and make sure they feel safe and loved.",
	},
	{
		question: "Are you insured and certified?",
		answer: "Yes! I am fully insured and certified in pet first aid and CPR.",
	},
];

const Faqs = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="bg-white py-12 px-4 bg-colorFive border-b-4 border-t-4 border-colorFour">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-8 text-colorTwo font-gloria">
					Frequently Asked Questions
				</h2>
				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							className="border-2 border-colorFour rounded-3xl p-4 shadow-md cursor-pointer bg-colorFive"
							onClick={() => toggleFAQ(index)}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
						>
							<div className="flex justify-between items-center">
								<h3 className="text-lg font-semibold text-colorTwo font-fredoka">
									{faq.question}
								</h3>
								<FontAwesomeIcon
									icon={
										openIndex === index
											? faChevronUp
											: faChevronDown
									}
									className="text-colorTwo"
								/>
							</div>
							<AnimatePresence>
								{openIndex === index && (
									<motion.p
										className="mt-2 text-colorFour text-base font-comforta"
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
