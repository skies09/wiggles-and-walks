/**
 * Single source of truth for business details, pricing, and availability.
 * Update contact details via .env: REACT_APP_CONTACT_PHONE, REACT_APP_CONTACT_EMAIL
 */
export const BUSINESS = {
	name: "Wiggles & Walks",
	tagline: "Beagle Boarding",
	location: "Warrington",
	region: "North West England",
	serviceRadiusMiles: 25,
	areas: [
		"Warrington",
		"Wigan",
		"Liverpool",
		"Manchester",
		"Chester",
		"St Helens",
	],
	phone: process.env.REACT_APP_CONTACT_PHONE || "",
	email:
		process.env.REACT_APP_CONTACT_EMAIL || "hello@wigglesandwalks.co.uk",
	acceptingClients: true,
	facebook:
		"https://www.facebook.com/profile.php?id=100002920786337",
	instagram: "https://www.instagram.com/skies009/",
};

export const SERVICES = [
	{
		id: "walk_30",
		name: "Dog Walking",
		shortName: "Dog Walking (30 mins)",
		description:
			"Daily walks tailored to your dog's needs. Includes water, treats, and plenty of love.",
		prices: [{ label: "30 mins", amount: 20, display: "£20 / 30 mins" }],
		image: "../../assets/images/walkingBeagle.jpg",
		icon: "paw",
		contactValue: "dog_walking_30",
	},
	{
		id: "walk_60",
		name: "Dog Walking",
		shortName: "Dog Walking (1 hour)",
		description:
			"Longer adventures for active pups who need extra exercise and sniffing time.",
		prices: [{ label: "1 hour", amount: 35, display: "£35 / 1 hour" }],
		image: "../../assets/images/walkingBeaglePuppy.jpg",
		icon: "paw",
		contactValue: "dog_walking_60",
	},
	{
		id: "home_boarding",
		name: "Home Boarding",
		shortName: "Home Boarding",
		description:
			"Your pup stays in a loving, home environment while you're away.",
		prices: [
			{ label: "per night", amount: 50, display: "£50 / night" },
			{ label: "weekend", amount: 90, display: "£90 / weekend" },
		],
		image: "../../assets/images/beagleOnSofa.jpg",
		icon: "home",
		contactValue: "home_boarding",
	},
	{
		id: "puppy_visit",
		name: "Puppy Visits",
		shortName: "Puppy Visit",
		description:
			"Short visits to check in on your puppy, feed them, play, and reinforce training.",
		prices: [{ label: "30 mins", amount: 25, display: "£25 / 30 mins" }],
		image: "../../assets/images/beaglePuppy.jpg",
		icon: "dog",
		contactValue: "puppy_visit",
	},
];

/** Pricing cards shown on the pricing section */
export const PRICING_CARDS = [
	SERVICES.find((s) => s.id === "walk_30"),
	SERVICES.find((s) => s.id === "home_boarding"),
	SERVICES.find((s) => s.id === "puppy_visit"),
].map((service) => ({
	...service,
	prices: service.prices.map((p) => p.display),
}));

/** Services available in the booking calendar */
export const BOOKING_SERVICES = SERVICES.filter((s) =>
	["walk_30", "walk_60", "puppy_visit", "home_boarding"].includes(s.id),
).map((s) => ({
	id: s.id,
	name: s.shortName,
	price: s.prices[0].display.replace(/ \/.*$/, ""),
	icon: s.icon,
}));

export const formatPhoneLink = (phone) =>
	phone ? `tel:${phone.replace(/\s/g, "")}` : null;

export const formatPhoneDisplay = (phone) => phone || null;
