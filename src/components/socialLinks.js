import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
	return (
		<div className="flex flex-row justify-center items-center pt-6 mb-8">
			<a
				id="facebook"
				href="https://www.facebook.com/profile.php?id=100002920786337"
				className="mx-3 inline-block text-lg text-colorTwo hover:text-colorThree"
			>
				<FontAwesomeIcon icon={faFacebook} size="2x" />
			</a>
			<a
				id="instagram"
				href="https://www.instagram.com/skies009/"
				className="mx-3 inline-block text-lg text-colorTwo hover:text-colorThree"
			>
				<FontAwesomeIcon icon={faInstagram} size="2x" />
			</a>
		</div>
	);
};
export default SocialLinks;
