import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
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
		user_name: Yup.string(),
		dog_name: Yup.string(),
		user_email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
		user_mobile: Yup.string().required("Mobile number is required"),
		service: Yup.string().required("Please select a service"),
		message: Yup.string(),
	});

	const ContactForm = () => {
		const initialValues = {
			user_name: "",
			dog_name: "",
			user_email: "",
			user_mobile: "",
			service: "",
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
						className={`flex flex-col items-center w-full gap-4 ${
							OOS ? "blur-sm pointer-events-none" : ""
						}`}
					>
						<>
							<div className="flex flex-col lg:flex-row gap-4 w-full lg:w-[90%]">
								<div className="flex flex-col w-full lg:w-1/2">
									<label className="text-lg md:text-xl text-colorTwo font-bold text-center font-comforta opacity-90">
										Name
									</label>
									<Field
										className="w-5/6 h-10 rounded-xl my-2 pl-2 font-comforta mx-auto"
										type="text"
										id="user_name"
										name="user_name"
									/>
								</div>
								<div className="flex flex-col w-full lg:w-1/2">
									<label className="text-lg md:text-xl text-colorTwo font-bold text-center font-comforta opacity-90">
										Dog Name
									</label>
									<Field
										className="w-5/6 h-10 rounded-xl my-2 pl-2 font-comforta mx-auto"
										type="text"
										id="dog_name"
										name="dog_name"
									/>
								</div>
							</div>

							<div className="flex flex-col w-full">
								<label className="text-lg md:text-xl text-colorTwo font-bold text-center font-comforta opacity-90">
									Email
								</label>
								<Field
									className="w-5/6 h-10 rounded-xl my-2 pl-2 font-comforta mx-auto"
									type="email"
									id="user_email"
									name="user_email"
								/>
								<ErrorMessage
									className="text-sm text-red-500 font-comforta"
									name="user_email"
									component="div"
								/>
							</div>

							<div className="flex flex-col w-full">
								<label className="text-lg md:text-xl text-colorTwo font-bold text-center font-comforta opacity-90">
									Mobile
								</label>
								<Field
									className="w-5/6 h-10 rounded-xl my-2 pl-2 font-comforta mx-auto"
									type="text"
									id="user_mobile"
									name="user_mobile"
								/>
								<ErrorMessage
									className="text-sm text-red-500 font-comforta"
									name="user_mobile"
									component="div"
								/>
							</div>

							<div className="flex flex-col w-full">
								<label className="text-lg md:text-xl text-colorTwo font-bold text-center font-comforta opacity-90">
									Service
								</label>
								<Field
									as="select"
									name="service"
									className="w-5/6 h-10 rounded-xl my-2 pl-2 font-comforta mx-auto"
								>
									<option value="">Select a service</option>
									<option value="dog_walking_30">
										Dog Walking (30 mins)
									</option>
									<option value="dog_walking_60">
										Dog Walking (1 hour)
									</option>
									<option value="home_boarding">
										Home Boarding
									</option>
									<option value="home_boarding_weekend">
										Home Boarding (Weekend)
									</option>
									<option value="puppy_visit">
										Puppy Visit
									</option>
									<option value="enquiry">
										General enquiry
									</option>
								</Field>
							</div>

							<div className="flex flex-col w-full">
								<label className="text-lg md:text-xl text-colorTwo font-bold text-center font-comforta opacity-90">
									Message
								</label>
								<Field
									as="textarea"
									className="w-5/6 h-24 rounded-xl my-2 pl-2 font-comforta mx-auto"
									id="message"
									name="message"
								/>
							</div>

							<button
								className="px-6 py-2 bg-colorTwo text-colorFive font-fredoka rounded-xl mt-4 hover:bg-colorFour transition"
								type="submit"
							>
								Send
							</button>
						</>
					</Form>

					{OOS && (
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
							<div className="background-white p-6 rounded-xl shadow-md max-w-md text-center relative z-10">
								<h2 className="text-2xl font-medium mb-2 text-colorFour font-fredoka">
									Sorry, I am not accepting new clients at the
									moment.
								</h2>
								<p className="text-lg text-colorFour font-fredoka">
									Please check back later. Thank you for your
									understanding.
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
			className="w-screen overflow-hidden bg-colorFive pb-6 md:pb-12"
			ref={containerRef}
			id="contact"
		>
			<motion.div
				initial={{ opacity: 0, y: -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
				className="pt-16 md:pt-20 text-lg md:text-2xl text-colorTwo font-bold flex justify-center text-center font-gloria mb-4"
			>
				Ready for a Walk?
				<br />
				Get in touch!
			</motion.div>

			<div className="flex flex-col-reverse md:flex-row justify-between items-start w-full lg:w-3/4 xl:w-2/3 mx-auto gap-8">
				<motion.div
					className="w-full md:w-2/5 flex flex-col justify-start items-start space-y-4 bg-white p-6 rounded-xl shadow-lg"
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				>
					<div className="flex flex-col space-y-2">
						<div className="flex items-center">
							<FontAwesomeIcon
								icon={faPhone}
								size="lg"
								className="text-colorTwo"
							/>
							<span className="ml-3 text-lg text-colorTwo font-comforta">
								07950981097
							</span>
						</div>
						<div className="flex items-center">
							<FontAwesomeIcon
								icon={faEnvelope}
								size="lg"
								className="text-colorTwo"
							/>
							<span className="ml-3 text-lg text-colorTwo font-comforta">
								donna.smith08@icloud.com
							</span>
						</div>
					</div>
					<SocialLinks />
				</motion.div>

				<motion.div
					className="w-full md:w-3/5 bg-colorOne p-6 rounded-xl shadow-lg"
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				>
					{!formSubmitted && <ContactForm />}
					{formSubmitted && (
						<p className="text-lg text-colorTwo font-bold text-center">
							Thanks, I'll get back to you shortly!
						</p>
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
