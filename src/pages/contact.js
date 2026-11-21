import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Icon from "../components/icons";
import { motion } from "framer-motion";
import * as Yup from "yup";
import SocialLinks from "../components/socialLinks";
import ContactDetails from "../components/ContactDetails";
import emailjs from "@emailjs/browser";
import { BUSINESS } from "../config/business";

const fieldClass =
	"w-full h-12 rounded-brand mt-1 px-4 font-body border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all";

const SERVICE_OPTIONS = [
	{ value: "dog_walking_30", label: "Dog walking, 30 mins", detail: "A quick energy burn", icon: "paw" },
	{ value: "dog_walking_60", label: "Dog walking, 1 hour", detail: "A longer adventure", icon: "paw" },
	{ value: "home_boarding", label: "Home boarding", detail: "Overnight stays", icon: "home" },
	{ value: "home_boarding_weekend", label: "Home boarding, weekend", detail: "A weekend stay", icon: "home" },
	{ value: "puppy_visit", label: "Puppy visit", detail: "Extra care for little ones", icon: "dog" },
	{ value: "enquiry", label: "General enquiry", detail: "A chat about what you need", icon: "chat" },
];

const TIME_OPTIONS = [
	{ value: "morning", label: "Morning (7–10 AM)", icon: "sunrise" },
	{ value: "midday", label: "Midday (10 AM–2 PM)", icon: "sun" },
	{ value: "afternoon", label: "Afternoon (2–5 PM)", icon: "weather" },
	{ value: "evening", label: "Evening (5–8 PM)", icon: "moon" },
	{ value: "flexible", label: "Flexible", icon: "clock" },
];

function IconSelect({ value, onChange, options, placeholder }) {
	const [open, setOpen] = useState(false);
	const rootRef = useRef(null);
	const selected = options.find((option) => option.value === value);

	useEffect(() => {
		if (!open) return undefined;
		const close = (event) => {
			if (!rootRef.current?.contains(event.target)) setOpen(false);
		};
		document.addEventListener("mousedown", close);
		return () => document.removeEventListener("mousedown", close);
	}, [open]);

	return (
		<div className="relative mt-1" ref={rootRef}>
			<button
				type="button"
				aria-haspopup="listbox"
				aria-expanded={open}
				onClick={() => setOpen((isOpen) => !isOpen)}
				className={`${fieldClass} mt-0 flex items-center gap-2 text-left ${
					selected ? "text-neutral-800" : "text-neutral-400"
				}`}
			>
				{selected ? (
					<Icon name={selected.icon} size="sm" className="text-brand-accent shrink-0" />
				) : null}
				<span className="min-w-0 flex-1 truncate">{selected ? selected.label : placeholder}</span>
				<Icon name="chevronDown" size="sm" className="shrink-0 text-neutral-500" />
			</button>
			{open ? (
				<ul className="absolute z-30 mt-1 w-full overflow-hidden rounded-brand border-2 border-neutral-300 bg-white shadow-brand-lg">
					{options.map((option) => (
						<li key={option.value}>
							<button
								type="button"
								onClick={() => {
									onChange(option.value);
									setOpen(false);
								}}
								className={`flex w-full items-center gap-3 px-3 py-2.5 text-left hover:bg-neutral-100 ${
									option.value === value ? "bg-neutral-100" : ""
								}`}
							>
								<Icon name={option.icon} size="sm" className="text-brand-accent shrink-0" />
								<span>
									<span className="block font-body font-semibold text-neutral-800">
										{option.label}
									</span>
									{option.detail ? (
										<span className="block font-body text-sm text-neutral-500">
											{option.detail}
										</span>
									) : null}
								</span>
							</button>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
}

export function selectService(contactValue) {
	window.dispatchEvent(
		new CustomEvent("wiggle-service", { detail: contactValue }),
	);
	document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
	window.history.pushState(null, "", "#contact");
}

const Contact = () => {
	const containerRef = useRef(null);
	const OOS = !BUSINESS.acceptingClients;
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [chosenService, setChosenService] = useState("");

	useEffect(() => {
		const onPick = (event) => setChosenService(event.detail || "");
		window.addEventListener("wiggle-service", onPick);
		return () => window.removeEventListener("wiggle-service", onPick);
	}, []);

	function sendEmail(values) {
		const details = [
			values.preferred_date ? `Preferred date: ${values.preferred_date}` : null,
			values.preferred_time ? `Preferred time: ${values.preferred_time}` : null,
			values.message,
		]
			.filter(Boolean)
			.join("\n");

		emailjs
			.send(
				process.env.REACT_APP_EMAIL_SERVICE_KEY,
				process.env.REACT_APP_EMAIL_TEMPLATE_KEY,
				{ ...values, from: "Wiggles & Walks", message: details },
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
		preferred_date: Yup.string(),
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
			service: chosenService,
			preferred_date: "",
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
				enableReinitialize
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
							<div className="flex justify-center mb-3 gap-2">
								<Icon
									name="paw"
									size="xl"
									className="text-brand-accent"
								/>
								<Icon
									name="heart"
									size="xl"
									className="text-brand-accent"
								/>
							</div>
							<p className="text-neutral-800 font-body text-lg md:text-xl font-semibold">
								Tell us about your furry friend and let's plan
								the perfect walk!
							</p>
						</div>

						{/* Owner and Dog Names */}
						<div className="flex flex-col lg:flex-row gap-4 w-full">
							<div className="flex flex-col w-full lg:w-1/2">
								<label className="text-sm text-neutral-800 font-body font-semibold mb-1 w-full text-left">
									Your Name
								</label>
								<p className="text-sm text-neutral-500 font-body mb-1 w-full text-left">
									Who will we be chatting with?
								</p>
								<Field
									className="w-full h-12 rounded-brand mt-1 px-4 font-body border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
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
								<label className="text-sm text-neutral-800 font-body font-semibold mb-1 w-full text-left">
									Dog's Name
								</label>
								<p className="text-sm text-neutral-500 font-body mb-1 w-full text-left inline-flex items-center gap-1.5">
									The star of the show
									<Icon name="paw" size="sm" className="text-brand-accent" />
								</p>
								<Field
									className="w-full h-12 rounded-brand mt-1 px-4 font-body border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
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
						<div className="flex flex-col lg:flex-row gap-4 w-full">
							<div className="flex flex-col w-full lg:w-1/2">
								<label className="text-sm text-neutral-800 font-body font-semibold mb-1 w-full text-left">
									Breed
								</label>
								<p className="text-sm text-neutral-500 font-body mb-1 w-full text-left">
									What type of pup are we walking?
								</p>
								<Field
									className="w-full h-12 rounded-brand mt-1 px-4 font-body border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
									type="text"
									id="dog_breed"
									name="dog_breed"
									placeholder="e.g., Golden Retriever, Mixed"
								/>
							</div>
							<div className="flex flex-col w-full lg:w-1/2">
								<label className="text-sm text-neutral-800 font-body font-semibold mb-1 w-full text-left">
									Age
								</label>
								<p className="text-sm text-neutral-500 font-body mb-1 w-full text-left">
									How old is your furry friend?
								</p>
								<div className="relative mt-1">
								<Field
									as="select"
									name="dog_age"
									className="w-full h-12 appearance-none rounded-brand bg-white pl-4 pr-12 font-body border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
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
								<Icon
									name="chevronDown"
									size="sm"
									className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"
								/>
								</div>
							</div>
						</div>

						{/* Contact Information */}
						<div className="flex flex-col w-full">
							<label className="text-sm text-neutral-800 font-body font-semibold mb-1 w-full text-left">
								Email Address
							</label>
							<p className="text-sm text-neutral-500 font-body mb-1 w-full text-left">
								Where should we send your booking confirmation?
							</p>
							<Field
								className="w-full h-12 rounded-brand mt-1 px-4 font-body border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
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
							<label className="text-sm text-neutral-800 font-body font-semibold mb-1 w-full text-left">
								Mobile Number
							</label>
							<p className="text-sm text-neutral-500 font-body mb-1 w-full text-left">
								For quick updates about your walk
							</p>
							<Field
								className="w-full h-12 rounded-brand mt-1 px-4 font-body border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
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
							<label className="text-sm text-neutral-800 font-body font-semibold mb-1 w-full text-left">
								What Service Do You Need?
							</label>
							<p className="text-sm text-neutral-500 font-body mb-1 w-full text-left">
								Let's find the perfect fit for your pup
							</p>
							<Field name="service">
								{({ field, form }) => (
									<IconSelect
										value={field.value}
										onChange={(next) => form.setFieldValue("service", next)}
										options={SERVICE_OPTIONS}
										placeholder="Select a service"
									/>
								)}
							</Field>
							<ErrorMessage
								className="text-sm text-red-500 font-body text-center mt-1"
								name="service"
								component="div"
							/>
						</div>

						<div className="flex flex-col lg:flex-row gap-4 w-full min-w-0">
							<div className="flex flex-col w-full min-w-0 lg:w-1/2">
								<label className="text-sm text-neutral-800 font-body font-semibold mb-1 w-full text-left">
									Preferred date
								</label>
								<p className="text-sm text-neutral-500 font-body mb-1 w-full text-left">
									Optional. We'll confirm before anything is held.
								</p>
								<div className="relative mt-1 flex h-12 w-full min-w-0 items-center overflow-hidden rounded-brand border-2 border-neutral-300 bg-white pl-4 pr-12 focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-primary/20 transition-all">
									<Field name="preferred_date">
										{({ field }) => {
											const displayDate = field.value
												? new Date(`${field.value}T00:00:00`).toLocaleDateString("en-GB")
												: "dd/mm/yyyy";
											return (
												<>
													<span
														className={`pointer-events-none min-w-0 truncate font-body ${
															field.value ? "text-neutral-800" : "text-neutral-400"
														}`}
													>
														{displayDate}
													</span>
													<input
														{...field}
														id="preferred_date"
														type="date"
														aria-label="Preferred date"
														className="date-field"
													/>
													<Icon
														name="calendar"
														size="sm"
														className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"
													/>
												</>
											);
										}}
									</Field>
								</div>
							</div>
							<div className="flex flex-col w-full min-w-0 lg:w-1/2">
							<label className="text-sm text-neutral-800 font-body font-semibold mb-1 w-full text-left">
								Preferred time
							</label>
							<p className="text-sm text-neutral-500 font-body mb-1 w-full text-left">
								When does your pup like to get moving?
							</p>
							<Field name="preferred_time">
								{({ field, form }) => (
									<IconSelect
										value={field.value}
										onChange={(next) => form.setFieldValue("preferred_time", next)}
										options={TIME_OPTIONS}
										placeholder="Select preferred time"
									/>
								)}
							</Field>
							</div>
						</div>

						{/* Message */}
						<div className="flex flex-col w-full">
							<label className="text-sm text-neutral-800 font-body font-semibold mb-1 w-full text-left">
								Tell Us More About Your Pup
							</label>
							<p className="text-sm text-neutral-500 font-body mb-1 w-full text-left">
								Any special needs, favorite toys, or things we
								should know?
							</p>
							<Field
								as="textarea"
								className="w-full h-32 rounded-brand mt-1 px-4 pt-3 font-body border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 resize-none transition-all"
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
							{loading ? "Sending..." : "Send enquiry"}
						</button>
					</Form>

					{OOS && (
						<div className="absolute inset-0 flex items-start md:items-center justify-center bg-black bg-opacity-80 rounded-brand-xl pt-4 md:pt-0">
							<div className="bg-neutral-50 p-6 md:p-8 rounded-brand-xl shadow-brand-xl max-w-md text-center relative z-10 border border-neutral-200 mx-4 md:mx-0">
								<h2 className="text-xl md:text-2xl lg:text-3xl font-heading mb-4 text-neutral-900">
									Currently fully booked
								</h2>
								<p className="text-base md:text-lg text-neutral-600 font-body mb-4">
									We're not accepting new clients right now,
									but we'd love to hear from you for future
									availability.
								</p>
								<a
									href={`mailto:${BUSINESS.email}?subject=Waitlist%20enquiry`}
									className="inline-block btn-brand text-base px-6 py-3"
								>
									Join the Waitlist
								</a>
							</div>
						</div>
					)}
				</div>
			</Formik>
		);
	};

	return (
		<div
			className="w-full overflow-x-hidden bg-white pb-16 scroll-mt-16"
			ref={containerRef}
			id="contact"
		>
			<div id="booking" className="scroll-mt-16" />
			<motion.div
				initial={{ opacity: 0, y: -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
				viewport={{ once: true }}
				className="pt-16 md:pt-20 section-title"
			>
				<span className="block">Book a free meet & greet</span>
				<span className="block text-lg md:text-xl mt-3 font-body font-normal text-neutral-600">Tell us about your dog. We'll reply to arrange the first visit. Nothing is confirmed until then.</span>
			</motion.div>

			<div className="flex flex-col items-center w-full lg:w-3/4 xl:w-2/3 mx-auto gap-8 px-4">
				<motion.div
					className="w-full"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<ContactDetails className="justify-center" />
				</motion.div>

				<motion.div
					className="w-full min-w-0 overflow-hidden bg-neutral-50 p-5 sm:p-6 md:p-8 rounded-brand-xl shadow-brand-lg border border-neutral-200"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				>
					{!formSubmitted && <ContactForm />}
					{formSubmitted && (
						<div className="text-center py-8">
							<div className="flex justify-center mb-4">
								<Icon
									name="heart"
									size={48}
									className="text-brand-accent"
								/>
							</div>
							<p className="text-xl md:text-2xl text-neutral-800 font-heading font-bold text-center">
								Thanks for reaching out! I'll get back to you
								shortly with all the details for your pup's
								perfect walk.
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
