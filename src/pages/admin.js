import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faCheck, faTimes, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { collection, getDocs, updateDoc, deleteDoc, doc, query, orderBy, where } from "firebase/firestore";
import { db } from "../firebase";
import { format } from "date-fns";

const Admin = () => {
	const [bookings, setBookings] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedBooking, setSelectedBooking] = useState(null);
	const [filter, setFilter] = useState("all"); // all, pending, confirmed, completed, cancelled

	useEffect(() => {
		loadBookings();
	}, []);

	const loadBookings = async () => {
		try {
			setLoading(true);
			const bookingsRef = collection(db, "bookings");
			const q = query(bookingsRef, orderBy("date", "asc"));
			const querySnapshot = await getDocs(q);
			const bookingsData = querySnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			}));
			setBookings(bookingsData);
		} catch (error) {
			console.error("Error loading bookings:", error);
		} finally {
			setLoading(false);
		}
	};

	const updateBookingStatus = async (bookingId, newStatus) => {
		try {
			const bookingRef = doc(db, "bookings", bookingId);
			await updateDoc(bookingRef, {
				status: newStatus,
				updatedAt: new Date()
			});
			loadBookings(); // Refresh the list
		} catch (error) {
			console.error("Error updating booking:", error);
			alert("Error updating booking status");
		}
	};

	const deleteBooking = async (bookingId) => {
		if (window.confirm("Are you sure you want to delete this booking?")) {
			try {
				const bookingRef = doc(db, "bookings", bookingId);
				await deleteDoc(bookingRef);
				loadBookings(); // Refresh the list
			} catch (error) {
				console.error("Error deleting booking:", error);
				alert("Error deleting booking");
			}
		}
	};

	const getStatusColor = (status) => {
		switch (status) {
			case "pending": return "bg-yellow-100 text-yellow-800";
			case "confirmed": return "bg-green-100 text-green-800";
			case "completed": return "bg-blue-100 text-blue-800";
			case "cancelled": return "bg-red-100 text-red-800";
			default: return "bg-gray-100 text-gray-800";
		}
	};

	const filteredBookings = bookings.filter(booking => {
		if (filter === "all") return true;
		return booking.status === filter;
	});

	const upcomingBookings = bookings.filter(booking => {
		const bookingDate = new Date(booking.date);
		const today = new Date();
		return bookingDate >= today && booking.status !== "cancelled";
	});

	if (loading) {
		return (
			<div className="w-screen overflow-hidden bg-colorFive pb-6 md:pb-12" id="admin">
				<div className="pt-16 md:pt-20 text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-colorTwo mx-auto"></div>
					<p className="mt-4 text-colorTwo font-comforta">Loading bookings...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="w-screen overflow-hidden bg-colorFive pb-6 md:pb-12" id="admin">
			<motion.div
				initial={{ opacity: 0, y: -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
				viewport={{ once: true }}
				className="pt-16 md:pt-20 text-lg md:text-2xl text-colorTwo font-bold flex justify-center text-center font-gloria mb-4"
			>
				Admin Dashboard
				<br />
				🐾 Manage Your Bookings 🐾
			</motion.div>

			<div className="w-full lg:w-4/5 xl:w-3/4 mx-auto px-4">
				{/* Stats Cards */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				>
					<div className="bg-white p-4 rounded-xl shadow-lg text-center">
						<h3 className="text-2xl font-bold text-colorTwo">{bookings.length}</h3>
						<p className="text-colorTwo opacity-70 font-comforta">Total Bookings</p>
					</div>
					<div className="bg-white p-4 rounded-xl shadow-lg text-center">
						<h3 className="text-2xl font-bold text-yellow-600">
							{bookings.filter(b => b.status === "pending").length}
						</h3>
						<p className="text-colorTwo opacity-70 font-comforta">Pending</p>
					</div>
					<div className="bg-white p-4 rounded-xl shadow-lg text-center">
						<h3 className="text-2xl font-bold text-green-600">
							{bookings.filter(b => b.status === "confirmed").length}
						</h3>
						<p className="text-colorTwo opacity-70 font-comforta">Confirmed</p>
					</div>
					<div className="bg-white p-4 rounded-xl shadow-lg text-center">
						<h3 className="text-2xl font-bold text-blue-600">
							{upcomingBookings.length}
						</h3>
						<p className="text-colorTwo opacity-70 font-comforta">Upcoming</p>
					</div>
				</motion.div>

				{/* Filter Buttons */}
				<motion.div
					className="flex flex-wrap gap-2 mb-6"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
				>
					{["all", "pending", "confirmed", "completed", "cancelled"].map(status => (
						<button
							key={status}
							onClick={() => setFilter(status)}
							className={`px-4 py-2 rounded-lg font-comforta transition ${
								filter === status
									? "bg-colorTwo text-colorFive"
									: "bg-white text-colorTwo hover:bg-colorFour"
							}`}
						>
							{status.charAt(0).toUpperCase() + status.slice(1)}
						</button>
					))}
				</motion.div>

				{/* Bookings List */}
				<motion.div
					className="bg-white rounded-xl shadow-lg overflow-hidden"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
				>
					<div className="overflow-x-auto">
						<table className="w-full">
							<thead className="bg-colorOne">
								<tr>
									<th className="px-4 py-3 text-left text-colorTwo font-bold font-comforta">Date & Time</th>
									<th className="px-4 py-3 text-left text-colorTwo font-bold font-comforta">Client & Dog</th>
									<th className="px-4 py-3 text-left text-colorTwo font-bold font-comforta">Service</th>
									<th className="px-4 py-3 text-left text-colorTwo font-bold font-comforta">Status</th>
									<th className="px-4 py-3 text-left text-colorTwo font-bold font-comforta">Actions</th>
								</tr>
							</thead>
							<tbody>
								{filteredBookings.map((booking, index) => (
									<tr key={booking.id} className="border-b border-gray-200 hover:bg-gray-50">
										<td className="px-4 py-3">
											<div className="font-comforta">
												<div className="font-bold text-colorTwo">
													{format(new Date(booking.date), "MMM do, yyyy")}
												</div>
												<div className="text-sm text-gray-600">
													{booking.time}
												</div>
											</div>
										</td>
										<td className="px-4 py-3">
											<div className="font-comforta">
												<div className="font-bold text-colorTwo">
													{booking.ownerName}
												</div>
												<div className="text-sm text-gray-600">
													🐕 {booking.dogName}
													{booking.dogBreed && ` (${booking.dogBreed})`}
												</div>
												<div className="text-xs text-gray-500">
													📞 {booking.phone}
												</div>
											</div>
										</td>
										<td className="px-4 py-3">
											<div className="font-comforta">
												<div className="text-colorTwo">
													{booking.serviceName}
												</div>
											</div>
										</td>
										<td className="px-4 py-3">
											<span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(booking.status)}`}>
												{booking.status}
											</span>
										</td>
										<td className="px-4 py-3">
											<div className="flex gap-2">
												<button
													onClick={() => setSelectedBooking(booking)}
													className="p-1 text-blue-600 hover:text-blue-800"
													title="View Details"
												>
													<FontAwesomeIcon icon={faEye} />
												</button>
												{booking.status === "pending" && (
													<>
														<button
															onClick={() => updateBookingStatus(booking.id, "confirmed")}
															className="p-1 text-green-600 hover:text-green-800"
															title="Confirm"
														>
															<FontAwesomeIcon icon={faCheck} />
														</button>
														<button
															onClick={() => updateBookingStatus(booking.id, "cancelled")}
															className="p-1 text-red-600 hover:text-red-800"
															title="Cancel"
														>
															<FontAwesomeIcon icon={faTimes} />
														</button>
													</>
												)}
												{booking.status === "confirmed" && (
													<button
														onClick={() => updateBookingStatus(booking.id, "completed")}
														className="p-1 text-blue-600 hover:text-blue-800"
														title="Mark Complete"
													>
														<FontAwesomeIcon icon={faCheck} />
													</button>
												)}
												<button
													onClick={() => deleteBooking(booking.id)}
													className="p-1 text-red-600 hover:text-red-800"
													title="Delete"
												>
													<FontAwesomeIcon icon={faTrash} />
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					{filteredBookings.length === 0 && (
						<div className="text-center py-8 text-colorTwo font-comforta">
							No bookings found for the selected filter.
						</div>
					)}
				</motion.div>
			</div>

			{/* Booking Details Modal */}
			{selectedBooking && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
					<motion.div
						className="bg-white rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.3 }}
					>
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-xl font-bold text-colorTwo font-fredoka">Booking Details</h2>
							<button
								onClick={() => setSelectedBooking(null)}
								className="text-gray-500 hover:text-gray-700"
							>
								<FontAwesomeIcon icon={faTimes} />
							</button>
						</div>
						
						<div className="space-y-3 font-comforta">
							<div>
								<strong>Date:</strong> {format(new Date(selectedBooking.date), "EEEE, MMMM do, yyyy")}
							</div>
							<div>
								<strong>Time:</strong> {selectedBooking.time}
							</div>
							<div>
								<strong>Service:</strong> {selectedBooking.serviceName}
							</div>
							<div>
								<strong>Owner:</strong> {selectedBooking.ownerName}
							</div>
							<div>
								<strong>Dog:</strong> {selectedBooking.dogName}
								{selectedBooking.dogBreed && ` (${selectedBooking.dogBreed})`}
								{selectedBooking.dogAge && ` - ${selectedBooking.dogAge}`}
							</div>
							<div>
								<strong>Phone:</strong> {selectedBooking.phone}
							</div>
							<div>
								<strong>Email:</strong> {selectedBooking.email}
							</div>
							{selectedBooking.notes && (
								<div>
									<strong>Notes:</strong>
									<p className="mt-1 text-gray-600">{selectedBooking.notes}</p>
								</div>
							)}
							<div>
								<strong>Status:</strong>
								<span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(selectedBooking.status)}`}>
									{selectedBooking.status}
								</span>
							</div>
						</div>
						
						<div className="mt-6 flex gap-2">
							<button
								onClick={() => setSelectedBooking(null)}
								className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg font-comforta hover:bg-gray-400 transition"
							>
								Close
							</button>
						</div>
					</motion.div>
				</div>
			)}
		</div>
	);
};

export default Admin;
