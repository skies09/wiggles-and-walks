import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPaw,
	faHeart,
	faCalendar,
	faClock,
	faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";
import { format, addDays, isSameDay, isBefore, startOfDay } from "date-fns";
// import { collection, addDoc, getDocs, query, where, orderBy, serverTimestamp } from "firebase/firestore";
// import { db } from "../firebase";
import "react-calendar/dist/Calendar.css";

const Booking = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState("");
	const [selectedService, setSelectedService] = useState("");
	const [bookings, setBookings] = useState([]);
	const [loading, setLoading] = useState(false);
	const [bookingSubmitted, setBookingSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		ownerName: "",
		dogName: "",
		dogBreed: "",
		dogAge: "",
		phone: "",
		email: "",
		notes: "",
	});

	// OOS flag - set to true to disable booking
	const OOS = true; // Out of service

	// Available time slots
	const timeSlots = [
		"07:00",
		"08:00",
		"09:00",
		"10:00",
		"11:00",
		"12:00",
		"13:00",
		"14:00",
		"15:00",
		"16:00",
		"17:00",
		"18:00",
	];

	// Services
	const services = [
		{
			id: "walk_30",
			name: "Dog Walking (30 mins)",
			price: "£12",
			emoji: "🐕",
		},
		{
			id: "walk_60",
			name: "Dog Walking (1 hour)",
			price: "£18",
			emoji: "🐕",
		},
		{ id: "puppy_visit", name: "Puppy Visit", price: "£15", emoji: "🐾" },
		{
			id: "home_boarding",
			name: "Home Boarding",
			price: "£35",
			emoji: "🏠",
		},
	];

	// Load existing bookings (demo data for now)
	useEffect(() => {
		// Demo bookings for testing
		setBookings([
			{ id: "1", date: "2024-01-15", time: "09:00", status: "confirmed" },
			{ id: "2", date: "2024-01-15", time: "14:00", status: "pending" },
			{ id: "3", date: "2024-01-16", time: "10:00", status: "confirmed" },
		]);
	}, []);

	// Check if a date is available
	const isDateAvailable = (date) => {
		const dateStr = format(date, "yyyy-MM-dd");
		const dayBookings = bookings.filter(
			(booking) => booking.date === dateStr
		);
		return dayBookings.length < 6; // Max 6 bookings per day
	};

	// Check if a specific time slot is available
	const isTimeSlotAvailable = (date, time) => {
		if (!date || !time) return false;
		const dateStr = format(date, "yyyy-MM-dd");
		return !bookings.some(
			(booking) => booking.date === dateStr && booking.time === time
		);
	};

	// Get available time slots for selected date
	const getAvailableTimeSlots = (date) => {
		if (!date) return [];
		const dateStr = format(date, "yyyy-MM-dd");
		const dayBookings = bookings.filter(
			(booking) => booking.date === dateStr
		);
		const bookedTimes = dayBookings.map((booking) => booking.time);
		return timeSlots.filter((time) => !bookedTimes.includes(time));
	};

	// Handle date selection
	const handleDateChange = (date) => {
		setSelectedDate(date);
		setSelectedTime(""); // Reset time when date changes
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!selectedDate || !selectedTime || !selectedService) {
			alert("Please select a date, time, and service");
			return;
		}

		setLoading(true);
		try {
			// For demo purposes, just simulate a booking
			const newBooking = {
				id: Date.now().toString(),
				...formData,
				date: format(selectedDate, "yyyy-MM-dd"),
				time: selectedTime,
				service: selectedService,
				serviceName: services.find((s) => s.id === selectedService)
					?.name,
				status: "pending",
			};

			// Add to local state for demo
			setBookings((prev) => [...prev, newBooking]);
			setBookingSubmitted(true);

			// In real implementation, this would save to Firebase
			// await addDoc(collection(db, "bookings"), bookingData);
		} catch (error) {
			console.error("Error creating booking:", error);
			alert("Error creating booking. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	// Handle input changes
	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	// Tile content for calendar
	const tileContent = ({ date, view }) => {
		if (view === "month") {
			const dateStr = format(date, "yyyy-MM-dd");
			const dayBookings = bookings.filter(
				(booking) => booking.date === dateStr
			);

			if (dayBookings.length > 0) {
				return (
					<div className="text-xs text-red-500 font-bold">
						{dayBookings.length}/6
					</div>
				);
			}
		}
		return null;
	};

	// Tile disabled function
	const tileDisabled = ({ date, view }) => {
		if (view === "month") {
			return (
				isBefore(date, startOfDay(new Date())) || !isDateAvailable(date)
			);
		}
		return false;
	};

	return (
		<div
			className="w-full overflow-x-hidden bg-gradient-to-br from-neutral-50 to-brand-secondaryLight/20 pb-6 md:pb-12"
			id="booking"
		>
			<motion.div
				initial={{ opacity: 0, y: -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
				viewport={{ once: true }}
				className="pt-16 md:pt-20 text-3xl md:text-4xl lg:text-5xl text-brand-primary font-heading font-bold flex flex-col md:block justify-center text-center mb-4"
			>
				<span className="block">Book Your Walk</span>
				<span className="block text-2xl md:text-3xl lg:text-4xl mt-2">🐾 Schedule with ease! 🐾</span>
			</motion.div>

			{!bookingSubmitted ? (
				<div className="relative w-full lg:w-4/5 xl:w-3/4 mx-auto px-4">
					<div
						className={`flex flex-col lg:flex-row justify-center items-start gap-8 ${
							OOS ? "blur-sm pointer-events-none" : ""
						}`}
					>
						{/* Calendar Section */}
						<motion.div
							className="w-full lg:w-1/2 bg-neutral-50 p-6 md:p-8 rounded-brand-xl shadow-brand-lg border-2 border-brand-primary/20 flex flex-col items-center"
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.6,
								ease: "easeOut",
								delay: 0.2,
							}}
						>
							<div className="text-center mb-6 w-full">
								<FontAwesomeIcon
									icon={faCalendar}
									className="text-brand-primary text-4xl mb-3"
								/>
								<h2 className="text-2xl font-heading font-bold text-brand-primary">
									Choose Your Date
								</h2>
								<p className="text-sm text-neutral-600 font-body mt-2">
									Greyed out dates are fully booked
								</p>
							</div>

							<div className="w-full flex justify-center">
								<Calendar
									onChange={handleDateChange}
									value={selectedDate}
									tileContent={tileContent}
									tileDisabled={tileDisabled}
									minDate={new Date()}
									className="w-full max-w-sm border-0"
								/>
							</div>

							{selectedDate && (
								<div className="mt-6 p-5 bg-brand-secondaryLight/50 rounded-brand-lg w-full border-2 border-brand-primary/20">
									<h3 className="font-heading font-bold text-brand-primary mb-3 text-lg">
										Available Times for{" "}
										{format(selectedDate, "EEEE, MMMM do")}
									</h3>
									<div className="grid grid-cols-3 gap-2">
										{getAvailableTimeSlots(
											selectedDate
										).map((time) => (
											<button
												key={time}
												onClick={() =>
													setSelectedTime(time)
												}
												className={`p-3 rounded-brand text-sm font-body font-semibold transition-all duration-300 ${
													selectedTime === time
														? "bg-brand-primary text-neutral-50 shadow-brand"
														: "bg-neutral-50 text-brand-primary hover:bg-brand-secondaryLight border-2 border-brand-primary/30"
												}`}
											>
												{time}
											</button>
										))}
									</div>
									{getAvailableTimeSlots(selectedDate)
										.length === 0 && (
										<p className="text-red-500 text-sm mt-2">
											No available time slots for this
											date
										</p>
									)}
								</div>
							)}
						</motion.div>

						{/* Booking Form */}
						<motion.div
							className="w-full lg:w-1/2 bg-brand-secondaryLight/70 backdrop-blur-sm p-6 md:p-8 rounded-brand-xl shadow-brand-lg border-2 border-brand-primary/20"
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.6,
								ease: "easeOut",
								delay: 0.4,
							}}
						>
							<div className="text-center mb-6">
								<FontAwesomeIcon
									icon={faPaw}
									className="text-brand-primary text-4xl mb-3"
								/>
								<h2 className="text-2xl font-heading font-bold text-brand-primary">
									Complete Your Booking
								</h2>
							</div>

							<form onSubmit={handleSubmit} className="space-y-4">
								{/* Service Selection */}
								<div>
									<label className="block text-brand-primary font-heading font-bold mb-2">
										Select Service
									</label>
									<div className="grid grid-cols-1 gap-2">
										{services.map((service) => (
											<button
												key={service.id}
												type="button"
												onClick={() =>
													setSelectedService(
														service.id
													)
												}
												className={`p-4 rounded-brand-lg text-left transition-all duration-300 border-2 ${
													selectedService ===
													service.id
														? "bg-brand-primary text-neutral-50 border-brand-primary shadow-brand"
														: "bg-neutral-50 text-brand-primary hover:bg-brand-secondaryLight border-brand-primary/30"
												}`}
											>
												<div className="flex justify-between items-center">
													<span className="font-comforta">
														{service.emoji}{" "}
														{service.name}
													</span>
													<span className="font-bold">
														{service.price}
													</span>
												</div>
											</button>
										))}
									</div>
								</div>

								{/* Owner Information */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="block text-brand-primary font-heading font-bold mb-1">
											Your Name *
										</label>
										<input
											type="text"
											name="ownerName"
											value={formData.ownerName}
											onChange={handleInputChange}
											required
											className="w-full p-3 rounded-brand border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 font-body transition-all"
										/>
									</div>
									<div>
										<label className="block text-brand-primary font-heading font-bold mb-1">
											Dog's Name *
										</label>
										<input
											type="text"
											name="dogName"
											value={formData.dogName}
											onChange={handleInputChange}
											required
											className="w-full p-3 rounded-brand border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 font-body transition-all"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="block text-brand-primary font-heading font-bold mb-1">
											Dog Breed
										</label>
										<input
											type="text"
											name="dogBreed"
											value={formData.dogBreed}
											onChange={handleInputChange}
											className="w-full p-3 rounded-brand border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 font-body transition-all"
										/>
									</div>
									<div>
										<label className="block text-brand-primary font-heading font-bold mb-1">
											Dog Age
										</label>
										<select
											name="dogAge"
											value={formData.dogAge}
											onChange={handleInputChange}
											className="w-full p-3 rounded-brand border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 font-body transition-all"
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
										</select>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="block text-brand-primary font-heading font-bold mb-1">
											Phone Number *
										</label>
										<input
											type="tel"
											name="phone"
											value={formData.phone}
											onChange={handleInputChange}
											required
											className="w-full p-3 rounded-brand border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 font-body transition-all"
										/>
									</div>
									<div>
										<label className="block text-brand-primary font-heading font-bold mb-1">
											Email *
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className="w-full p-3 rounded-brand border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 font-body transition-all"
										/>
									</div>
								</div>

								<div>
									<label className="block text-brand-primary font-heading font-bold mb-1">
										Special Notes
									</label>
									<textarea
										name="notes"
										value={formData.notes}
										onChange={handleInputChange}
										rows="3"
										placeholder="Any special requirements, favorite toys, or things we should know about your pup?"
										className="w-full p-3 rounded-brand border-2 border-neutral-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 font-body resize-none transition-all"
									/>
								</div>

								{/* Booking Summary */}
								{selectedDate &&
									selectedTime &&
									selectedService && (
										<div className="bg-neutral-50 p-5 rounded-brand-lg border-2 border-brand-primary/20">
											<h3 className="font-heading font-bold text-brand-primary mb-3 text-lg">
												Booking Summary
											</h3>
											<div className="space-y-2 text-base font-body text-neutral-600">
												<p>
													<strong>Date:</strong>{" "}
													{format(
														selectedDate,
														"EEEE, MMMM do, yyyy"
													)}
												</p>
												<p>
													<strong>Time:</strong>{" "}
													{selectedTime}
												</p>
												<p>
													<strong>Service:</strong>{" "}
													{
														services.find(
															(s) =>
																s.id ===
																selectedService
														)?.name
													}
												</p>
												<p>
													<strong>Price:</strong>{" "}
													{
														services.find(
															(s) =>
																s.id ===
																selectedService
														)?.price
													}
												</p>
											</div>
										</div>
									)}

								<button
									type="submit"
									disabled={
										loading ||
										!selectedDate ||
										!selectedTime ||
										!selectedService
									}
									className="w-full py-4 bg-brand-primary text-neutral-50 font-heading font-bold rounded-brand-lg hover:bg-brand-primaryLight transition-all duration-300 transform hover:scale-105 shadow-brand-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
								>
									{loading
										? "Booking..."
										: "🐾 Confirm Booking 🐾"}
								</button>
							</form>
						</motion.div>
					</div>

					{/* OOS Overlay */}
					{OOS && (
						<div className="absolute inset-0 flex items-start md:items-center justify-center bg-black bg-opacity-80 rounded-brand-xl pt-4 md:pt-0">
							<div className="bg-neutral-50 p-6 md:p-8 rounded-brand-xl shadow-brand-xl max-w-md text-center relative z-10 border-4 border-brand-primary/30 mx-4 md:mx-0">
								<h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-4 text-brand-primary">
									Sorry, I am not accepting new bookings at
									the moment.
								</h2>
								<p className="text-base md:text-lg text-neutral-600 font-body">
									Please check back later. <br />
									Thank you for your understanding.
								</p>
							</div>
						</div>
					)}
				</div>
			) : (
				/* Success Message */
				<motion.div
					className="w-full lg:w-2/3 mx-auto text-center"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<div className="bg-neutral-50 p-8 md:p-10 rounded-brand-xl shadow-brand-xl border-2 border-brand-primary/20">
						<div className="flex justify-center mb-4">
							<FontAwesomeIcon
								icon={faCheck}
								className="text-brand-primary text-6xl"
							/>
						</div>
						<h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">
							Booking Confirmed! 🎉
						</h2>
						<p className="text-lg md:text-xl text-neutral-600 mb-6 font-body">
							Thank you for booking with Wiggles & Walks! I'll be
							in touch shortly to confirm all the details for your
							pup's perfect walk.
						</p>
						<button
							onClick={() => {
								setBookingSubmitted(false);
								setSelectedDate(null);
								setSelectedTime("");
								setSelectedService("");
								setFormData({
									ownerName: "",
									dogName: "",
									dogBreed: "",
									dogAge: "",
									phone: "",
									email: "",
									notes: "",
								});
							}}
							className="px-8 py-3 bg-brand-primary text-neutral-50 font-heading font-bold rounded-brand-lg hover:bg-brand-primaryLight transition-all duration-300 transform hover:scale-105 shadow-brand-lg"
						>
							Book Another Walk
						</button>
					</div>
				</motion.div>
			)}
		</div>
	);
};

export default Booking;
