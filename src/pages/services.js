import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section
			id="services"
			className="w-full flex flex-col md:flex-row gap-6 p-6"
		>
			{/* Text section */}
			<div className="w-full md:w-1/5 md:mt-8">
				<h2 className="text-2xl font-semibold text-colorTwo mb-4 font-gloria">
					Tailored Beagle Care Services
				</h2>
				<p className="text-colorFour font-medium font-fredoka">
					Walks, snuggles, and all the cozy home vibes, because your
					dog deserves nothing less than the absolute best (and maybe
					a treat or two)!
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
						Beagles are our jam! Our services are specially tailored
						for those curious noses and wagging tails, making sure
						every beagle gets the love, care, and adventure they
						crave.
					</p>
				</div>

				{/* Box 2 */}
				<div className=" p-4 flex flex-col items-center text-center">
					<img
						src="../../assets/images/beagleSleeping2.jpg"
						alt="Dog laying down"
						className="object-cover mb-4 rounded-3xl w-full sm:max-h-40 lg:max-h-80"
					/>
					<h2 className="text-2xl font-semibold text-colorTwo mb-4 font-comforta">
						Home Boarding Options
					</h2>
					<p className="text-colorFour font-medium font-fredoka">
						Your pup can lounge like royalty, sofas, beds, and all
						the comfy spots are fair game! They’re free to roam just
						like they do at home (minus the mischief, we keep
						anything tempting out of paw’s reach!).
					</p>
				</div>

				{/* Box 3 */}
				<div className=" p-4 flex flex-col items-center text-center">
					<img
						src="../../assets/images/beagleSleeping.jpg"
						alt="Dog laying down"
						className="object-cover mb-4 rounded-3xl w-full sm:max-h-40 lg:max-h-80"
					/>
					<h2 className="text-2xl font-semibold text-colorTwo mb-4 font-comforta">
						Trusted and Reliable
					</h2>
					<p className="text-colorFour font-medium font-fredoka">
						Rest assured that your furry friend is getting all the
						love, belly rubs and tail-wagging fun they deserve! All
						dogs are safe, happy and totally spoiled in a warm,
						loving environment.
					</p>
				</div>

				{/* Box 4 */}
				<div className=" p-4 flex flex-col items-center text-center">
					<img
						src="../../assets/images/walkingBeaglePuppy.jpg"
						alt="Dog laying down"
						className="object-cover mb-4 rounded-3xl w-full sm:max-h-40 lg:max-h-80"
					/>
					<h2 className="text-2xl font-semibold text-colorTwo mb-4 font-comforta">
						Dog Walking Services
					</h2>
					<p className="text-colorFour font-medium font-fredoka">
						Sniffing is totally encouraged, after all, it’s your
						dog’s version of social media! We only walk pups from
						the same household together, and everyone stays safely
						on-lead for happy, tail-wagging adventures.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Services;
