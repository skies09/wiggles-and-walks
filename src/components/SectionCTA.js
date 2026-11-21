import Button from "./button";

const SectionCTA = ({
	heading = "Ready to give your pup the care they deserve?",
	subtext = "Book a free meet & greet — no obligation.",
	primaryText = "Get in Touch",
	primaryAction = "contact",
	secondaryText,
	secondaryAction,
	className = "",
}) => (
	<div
		className={`text-center mt-14 ${className}`}
	>
		<h3 className="text-2xl md:text-3xl font-heading text-neutral-900 mb-2">
			{heading}
		</h3>
		<p className="text-neutral-600 font-body mb-6">{subtext}</p>
		<div className="flex flex-col sm:flex-row gap-4 justify-center">
			<Button
				text={primaryText}
				className="btn-brand text-lg px-8 py-3"
				active={true}
				action={primaryAction}
			/>
			{secondaryText && secondaryAction && (
				<Button
					text={secondaryText}
					className="btn-brand-secondary text-lg px-8 py-3"
					active={true}
					action={secondaryAction}
				/>
			)}
		</div>
	</div>
);

export default SectionCTA;
