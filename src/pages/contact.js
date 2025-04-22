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
		user_email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
		message: Yup.string(),
	});

	const ContactForm = () => {
		const initialValues = {
			user_name: "",
			user_email: "",
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
				<Form className="flex flex-col justify-start items-start w-full md:w-10/12">
					<p className="ml-4 md:ml-0 text-lg md:text-xl text-colorTwo font-bold flex justify-center text-center font-comforta opacity-90">
						Name
					</p>
					<Field
						className="w-11/12 mx-auto md:w-full h-8 z-10 rounded-xl my-2 md:my-4 pl-2 font-comforta"
						type="text"
						id="user_name"
						name="user_name"
					/>
					<p className="ml-4 md:ml-0 text-lg md:text-xl text-colorTwo font-bold flex justify-center text-center font-comforta opacity-90">
						Email
					</p>
					<Field
						className="w-11/12 mx-auto md:w-full h-8 z-10 rounded-xl my-2 md:my-4 pl-2 font-comforta"
						type="email"
						id="user_email"
						name="user_email"
					/>
					<ErrorMessage
						className="ml-4 md:ml-0 text-sm text-colorTwo font-bold flex justify-center text-center font-comforta opacity-90 -mt-2"
						name="user_email"
						component="div"
					/>
					<p className="ml-4 md:ml-0 text-lg md:text-xl text-colorTwo font-bold flex justify-center text-center font-comforta">
						Message
					</p>
					<Field
						as="textarea"
						className="w-11/12 mx-auto md:w-full md:h-24 z-10 rounded-xl my-2 md:my-4 pl-2 pt-2 font-comforta"
						id="message"
						name="message"
						rows="3"
					/>
					<button
						className="flex justify-center items-center mx-auto px-6 py-1 mt-1 bg-colorTwo font-fredoka text-colorFive font-medium border border-colorTwo rounded-xl hover:bg-colorTwo hover:text-colorFive hover:border-2 hover:border-solid hover:border-colorFour"
						type="submit"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</Form>
			</Formik>
		);
	};

	return (
		<div
			className="w-screen h-screen overflow-hidden bg-colorFive pb-6 md:pb-12"
			ref={containerRef}
			id="contact"
		>
			<motion.div
				initial={{ opacity: 0, y: -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
				className="pt-16 md:pt-20 text-lg md:text-2xl text-colorTwo font-bold flex justify-center text-center font-gloria"
			>
				Ready for a Walk?
				<br />
				Get in touch!
			</motion.div>

			<div className="pt-2 md:pt-0 flex flex-col-reverse md:flex-row justify-center items-center w-full md:w-full lg:4/5 xl:4/6 mx-auto">
				<motion.div
					className="w-1/2 flex flex-col justify-center items-center h-auto md:h-[30rem] pt-8 md:pt-0"
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
				>
					<div className="relative flex flex-col justify-start items-start border-b border-dotted border-colorFive">
						<div className="flex flex-row items-center mb-4">
							<FontAwesomeIcon
								icon={faPhone}
								size="lg"
								className="text-colorTwo"
							/>
							<span className="ml-4 text-lg md:text-xl text-colorTwo tracking-wider font-comforta">
								07950981097
							</span>
						</div>
						<div className="flex flex-row items-center">
							<FontAwesomeIcon
								icon={faEnvelope}
								size="lg"
								className="text-colorTwo"
							/>
							<span className="ml-4 text-lg md:text-xl text-colorTwo tracking-wider font-comforta">
								donna.smith08@icloud.com
							</span>
						</div>
					</div>
					<SocialLinks />
				</motion.div>
				<motion.div
					className="w-full md:w-1/2 lg:w-1/3 flex justify-center items-start bg-colorOne py-6 rounded-xl h-auto"
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
				>
					{!formSubmitted && <ContactForm />}
					{formSubmitted && (
						<p className="pt-16 md:pt-28 text-lg md:text-xl text-colorTwo font-bold flex justify-center text-center font-monoTwo">
							Thanks, I'll get back to you shortly!
						</p>
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
