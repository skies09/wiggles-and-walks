import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faHeart } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import * as Yup from "yup";
import SocialLinks from "../components/socialLinks";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const containerRef = useRef(null);
	const OOS = true; // Out of service
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	function sendEmail(values) {
		values.from = "Wiggles & Walks";
		emailjs
			.send(
				process.env.REACT_APP_EMAIL_SERVICE_KEY,
				process.env.REACT_APP_EMAIL_TEMPLATE_KEY,
				values,
				process.env.REACT_APP_EMAIL_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					setFormSubmitted(true);
					setLoading(false);
				},
				(error) => {
					console.log(error.text);
					setLoading(false);
				}
			);
	}

	const validationSchema = Yup.object({
		user_name: Yup.string().required("Your name is required"),
		dog_name: Yup.string().required("We'd love to know your dog's name!"),
		dog_breed: Yup.string(),
		dog_age: Yup.string(),
		user_email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
		user_mobile: Yup.string().required("Mobile number is required"),
		service: Yup.string().required("Please select a service"),
		preferred_time: Yup.string(),
		message: Yup.string(),
	});

	const ContactForm = () => {
		const initialValues = {
			user_name: "",
			dog_name: "",
			dog_breed: "",
			dog_age: "",
			user_email: "",
			user_mobile: "",
			service: "",
			preferred_time: "",
			message: "",
		};

		const handleSubmit = (values, { setSubmitting }) => {
			setLoading(true);
			sendEmail(values);
			setSubmitting(false);
		};

		return (
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<div className="relative w-full flex flex-col items-center">
					<Form
						className={`flex flex-col items-center w-full gap-6 ${
							OOS ? "blur-sm pointer-events-none" : ""
						}`}
					>
						{/* Welcome Message */}
						<div className="text-center mb-6">
							<div className="flex justify-center mb-3">
								<FontAwesomeIcon
									icon={faPaw}
									className="text-brand-primary text-3xl mr-2"
								/>
								<FontAwesomeIcon
									icon={faHeart}
									className="text-brand-accent text-3xl"
								/>
							</div>
							<p className="text-brand-primary font-body text-lg md:text-xl font-semibold">
								Tell us about your furry friend and let's plan
								the perfect walk!
							</p>
						</div>

						{/* Owner and Dog Names */}
						<div className="flex flex-col lg:flex-row gap-4 w-full lg:w-[90%]">
							<div className="flex flex-col w-full lg:w-1/2">
								<label className="text-lg md:text-xl text-brand-primary font-heading font-bold text-center mb-1">
									Your Name
								</label>
								<p className="text-sm text-neutral-600 text-center font-body mb-2">
									Who will we be chatting with?
								</p>
								<Field
									className="w-5/6 h-12 rounded-brand my-2 pl-4 font-body mx-auto border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
									type="text"
									id="user_name"
									name="user_name"
									placeholder="Your name"
								/>
								<ErrorMessage
									className="text-sm text-red-500 font-body text-center mt-1"
									name="user_name"
									component="div"
								/>
							</div>
							<div className="flex flex-col w-full lg:w-1/2">
								<label className="text-lg md:text-xl text-brand-primary font-heading font-bold text-center mb-1">
									Dog's Name
								</label>
								<p className="text-sm text-neutral-600 text-center font-body mb-2">
									The star of the show! 🐕
								</p>
								<Field
									className="w-5/6 h-12 rounded-brand my-2 pl-4 font-body mx-auto border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
									type="text"
									id="dog_name"
									name="dog_name"
									placeholder="Your dog's name"
								/>
								<ErrorMessage
									className="text-sm text-red-500 font-body text-center mt-1"
									name="dog_name"
									component="div"
								/>
							</div>
						</div>

						{/* Dog Breed and Age */}
						<div className="flex flex-col lg:flex-row gap-4 w-full lg:w-[90%]">
							<div className="flex flex-col w-full lg:w-1/2">
								<label className="text-lg md:text-xl text-brand-primary font-heading font-bold text-center mb-1">
									Breed
								</label>
								<p className="text-sm text-neutral-600 text-center font-body mb-2">
									What type of pup are we walking?
								</p>
								<Field
									className="w-5/6 h-12 rounded-brand my-2 pl-4 font-body mx-auto border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
									type="text"
									id="dog_breed"
									name="dog_breed"
									placeholder="e.g., Golden Retriever, Mixed"
								/>
							</div>
							<div className="flex flex-col w-full lg:w-1/2">
								<label className="text-lg md:text-xl text-brand-primary font-heading font-bold text-center mb-1">
									Age
								</label>
								<p className="text-sm text-neutral-600 text-center font-body mb-2">
									How old is your furry friend?
								</p>
								<Field
									as="select"
									name="dog_age"
									className="w-5/6 h-12 rounded-brand my-2 pl-4 font-body mx-auto border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
								>
									<option value="">Select age</option>
									<option value="puppy">
										Puppy (under 1 year)
									</option>
									<option value="young">
										Young (1-3 years)
									</option>
									<option value="adult">
										Adult (3-7 years)
									</option>
									<option value="senior">
										Senior (7+ years)
									</option>
								</Field>
							</div>
						</div>

						{/* Contact Information */}
						<div className="flex flex-col w-full">
							<label className="text-lg md:text-xl text-brand-primary font-heading font-bold text-center mb-1">
								Email Address
							</label>
							<p className="text-sm text-neutral-600 text-center font-body mb-2">
								Where should we send your booking confirmation?
							</p>
							<Field
								className="w-5/6 h-12 rounded-brand my-2 pl-4 font-body mx-auto border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
								type="email"
								id="user_email"
								name="user_email"
								placeholder="your.email@example.com"
							/>
							<ErrorMessage
								className="text-sm text-red-500 font-body text-center mt-1"
								name="user_email"
								component="div"
							/>
						</div>

						<div className="flex flex-col w-full">
							<label className="text-lg md:text-xl text-brand-primary font-heading font-bold text-center mb-1">
								Mobile Number
							</label>
							<p className="text-sm text-neutral-600 text-center font-body mb-2">
								For quick updates about your walk
							</p>
							<Field
								className="w-5/6 h-12 rounded-brand my-2 pl-4 font-body mx-auto border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
								type="text"
								id="user_mobile"
								name="user_mobile"
								placeholder="07XXX XXX XXX"
							/>
							<ErrorMessage
								className="text-sm text-red-500 font-body text-center mt-1"
								name="user_mobile"
								component="div"
							/>
						</div>

						{/* Service Selection */}
						<div className="flex flex-col w-full">
							<label className="text-lg md:text-xl text-brand-primary font-heading font-bold text-center mb-1">
								What Service Do You Need?
							</label>
							<p className="text-sm text-neutral-600 text-center font-body mb-2">
								Let's find the perfect fit for your pup
							</p>
							<Field
								as="select"
								name="service"
								className="w-5/6 h-12 rounded-brand my-2 pl-4 font-body mx-auto border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
							>
								<option value="">Select a service</option>
								<option value="dog_walking_30">
									🐕 Dog Walking (30 mins) - Perfect for quick
									energy burns
								</option>
								<option value="dog_walking_60">
									🐕 Dog Walking (1 hour) - Adventure time for
									active pups
								</option>
								<option value="home_boarding">
									🏠 Home Boarding - Cozy overnight stays
								</option>
								<option value="home_boarding_weekend">
									🏠 Home Boarding (Weekend) - Weekend
									getaways
								</option>
								<option value="puppy_visit">
									🐾 Puppy Visit - Special care for little
									ones
								</option>
								<option value="enquiry">
									❓ General enquiry - Let's chat about your
									needs
								</option>
							</Field>
							<ErrorMessage
								className="text-sm text-red-500 font-body text-center mt-1"
								name="service"
								component="div"
							/>
						</div>

						{/* Preferred Time */}
						<div className="flex flex-col w-full">
							<label className="text-lg md:text-xl text-brand-primary font-heading font-bold text-center mb-1">
								Preferred Walk Time
							</label>
							<p className="text-sm text-neutral-600 text-center font-body mb-2">
								When does your pup like to get moving?
							</p>
							<Field
								as="select"
								name="preferred_time"
								className="w-5/6 h-12 rounded-brand my-2 pl-4 font-body mx-auto border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
							>
								<option value="">Select preferred time</option>
								<option value="morning">
									🌅 Morning (7-10 AM)
								</option>
								<option value="midday">
									☀️ Midday (10 AM-2 PM)
								</option>
								<option value="afternoon">
									🌤️ Afternoon (2-5 PM)
								</option>
								<option value="evening">
									🌆 Evening (5-8 PM)
								</option>
								<option value="flexible">
									🕐 Flexible - I'm open to suggestions
								</option>
							</Field>
						</div>

						{/* Message */}
						<div className="flex flex-col w-full">
							<label className="text-lg md:text-xl text-brand-primary font-heading font-bold text-center mb-1">
								Tell Us More About Your Pup
							</label>
							<p className="text-sm text-neutral-600 text-center font-body mb-2">
								Any special needs, favorite toys, or things we
								should know?
							</p>
							<Field
								as="textarea"
								className="w-5/6 h-32 rounded-brand my-2 pl-4 pt-3 font-body mx-auto border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 resize-none transition-all"
								id="message"
								name="message"
								placeholder="Tell us about your dog's personality, any special requirements, or questions you have..."
							/>
						</div>

						<button
							className="px-8 py-4 bg-brand-primary text-neutral-50 font-heading font-bold rounded-brand-lg mt-6 hover:bg-brand-primaryLight transition-all duration-300 transform hover:scale-105 shadow-brand-lg text-lg"
							type="submit"
							disabled={loading}
						>
							{loading
								? "Sending..."
								: "🐾 Let's Plan Your Walk! 🐾"}
						</button>
					</Form>

					{OOS && (
						<div className="absolute inset-0 flex items-start md:items-center justify-center bg-black bg-opacity-80 rounded-brand-xl pt-4 md:pt-0">
							<div className="bg-neutral-50 p-6 md:p-8 rounded-brand-xl shadow-brand-xl max-w-md text-center relative z-10 border-4 border-brand-primary/30 mx-4 md:mx-0">
								<h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-4 text-brand-primary">
									Sorry, I am not accepting new clients at the
									moment.
								</h2>
								<p className="text-base md:text-lg text-neutral-600 font-body">
									Please check back later. <br />
									Thank you for your understanding.
								</p>
							</div>
						</div>
					)}
				</div>
			</Formik>
		);
	};

	return (
		<div
			className="w-full overflow-x-hidden bg-gradient-to-br from-neutral-50 to-brand-secondaryLight/20 pb-6 md:pb-12"
			ref={containerRef}
			id="contact"
		>
			<motion.div
				initial={{ opacity: 0, y: -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
				viewport={{ once: true }}
				className="pt-16 md:pt-20 text-3xl md:text-4xl lg:text-5xl text-brand-primary font-heading font-bold flex flex-col md:block justify-center text-center mb-4"
			>
				<span className="block">Ready for a Walk?</span>
				<span className="block text-2xl md:text-3xl lg:text-4xl mt-2">Get in touch!</span>
			</motion.div>

			<div className="flex flex-col items-center w-full lg:w-3/4 xl:w-2/3 mx-auto gap-8 px-4">
				<motion.div
					className="w-full bg-brand-secondaryLight/70 backdrop-blur-sm p-6 md:p-8 rounded-brand-xl shadow-brand-lg border-2 border-brand-primary/20"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				>
					{!formSubmitted && <ContactForm />}
					{formSubmitted && (
						<div className="text-center py-8">
							<div className="flex justify-center mb-4">
								<FontAwesomeIcon
									icon={faHeart}
									className="text-brand-primary text-5xl"
								/>
							</div>
							<p className="text-xl md:text-2xl text-brand-primary font-heading font-bold text-center">
								Thanks for reaching out! I'll get back to you
								shortly with all the details for your pup's
								perfect walk! 🐕✨
							</p>
						</div>
					)}
				</motion.div>

				<motion.div
					className="w-full flex justify-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
				>
					<SocialLinks />
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
