import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceOverview = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section
			id="serviceOverview"
			className="w-full flex flex-col md:flex-row gap-6 p-6"
		>
			{/* Text section */}
			<div className="w-full md:w-1/5 md:mt-8">
				<h2 className="text-2xl font-semibold text-colorTwo mb-4 font-comforta">
					Tailored Beagle Care Services
				</h2>
				<p className="text-colorFour font-medium font-fredoka">
					Walks, cuddles & home comforts - because your dog deserves
					the best.
				</p>
			</div>

			{/* Grid section */}
			<div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
				{/* Box 1 */}
				<div className=" p-4 flex flex-col items-center text-center">
					<img
						src="../../assets/images/beagle1.jpeg"
						alt="Dog laying down"
						className="object-cover mb-4 rounded-3xl w-full sm:max-h-40 lg:max-h-80"
					/>
					<h2 className="text-2xl font-semibold text-colorTwo mb-4 font-comforta">
						Expert Beagle Care
					</h2>
					<p className="text-colorFour font-medium font-fredoka">
						Our services are tailored to meet the specific needs of
						beagles, ensuring they receive the care and attention
						they deserve.
					</p>
				</div>

				{/* Box 2 */}
				<div className=" p-4 flex flex-col items-center text-center">
					<img
						src="../../assets/images/beagle2.jpeg"
						alt="Dog laying down"
						className="object-cover mb-4 rounded-3xl w-full sm:max-h-40 lg:max-h-80"
					/>
					<h2 className="text-2xl font-semibold text-colorTwo mb-4 font-comforta">
						Flexible Booking Options
					</h2>
					<p className="text-colorFour font-medium font-fredoka">
						Easily schedule and manage your bookings online,
						providing you with the flexibility to plan your dog's
						adventures.
					</p>
				</div>

				{/* Box 3 */}
				<div className=" p-4 flex flex-col items-center text-center">
					<img
						src="../../assets/images/beagle3.jpeg"
						alt="Dog laying down"
						className="object-cover mb-4 rounded-3xl w-full sm:max-h-40 lg:max-h-80"
					/>
					<h2 className="text-2xl font-semibold text-colorTwo mb-4 font-comforta">
						Trusted and Reliable Service
					</h2>
					<p className="text-colorFour font-medium font-fredoka">
						Rest assured that your furry friend is in safe hands
						with our experienced and reliable team, dedicated to
						providing top-notch care.
					</p>
				</div>

				{/* Box 4 */}
				<div className=" p-4 flex flex-col items-center text-center">
					<img
						src="../../assets/images/beagle4.jpeg"
						alt="Dog laying down"
						className="object-cover mb-4 rounded-3xl w-full sm:max-h-40 lg:max-h-80"
					/>
					<h2 className="text-2xl font-semibold text-colorTwo mb-4 font-comforta">
						Personalised Customer Support
					</h2>
					<p className="text-colorFour font-medium font-fredoka">
						Unlike other services, we offer personalised customer
						support to address any questions or concerns you may
						have promptly.
					</p>
				</div>
			</div>
		</section>
	);
};

export default ServiceOverview;
