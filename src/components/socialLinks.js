import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
	return (
		<div className="flex flex-row justify-center items-center pt-6 mb-8 gap-6">
			<a
				id="facebook"
				href="https://www.facebook.com/profile.php?id=100002920786337"
				target="_blank"
				rel="noopener noreferrer"
				className="mx-3 inline-block text-lg text-brand-primary hover:text-brand-accent transition-colors duration-300 transform hover:scale-110"
			>
				<FontAwesomeIcon icon={faFacebook} size="2x" />
			</a>
			<a
				id="instagram"
				href="https://www.instagram.com/skies009/"
				target="_blank"
				rel="noopener noreferrer"
				className="mx-3 inline-block text-lg text-brand-primary hover:text-brand-accent transition-colors duration-300 transform hover:scale-110"
			>
				<FontAwesomeIcon icon={faInstagram} size="2x" />
			</a>
		</div>
	);
};
export default SocialLinks;
