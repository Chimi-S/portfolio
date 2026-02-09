import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const contactLinks = [
	{
		icon: Mail,
		label: "Email",
		href: "mailto:chimithinley705@gmail.com",
	},
	{
		icon: Phone,
		label: "0452 421 551",
		href: "tel:0452421551",
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/chimithinley",
		external: true,
	},
	{
		icon: MapPin,
		label: "Perth, WA",
		href: "#",
	},
];

const ContactSection = () => {
	return (
		<section className="hero-section py-16 sm:py-24 lg:py-32 relative overflow-hidden">
			{/* Ambient glow */}
			<div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full opacity-[0.07] pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, hsl(36, 80%, 50%), transparent 70%)",
				}}
			/>

			<div className="container mx-auto px-4 sm:px-6 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "0px 0px -100px 0px" }}
					transition={{ duration: 0.4 }}
					className="text-center mb-12 sm:mb-16"
				>
					<p className="text-primary font-mono text-xs sm:text-sm mb-3 tracking-wider">
						{"<contact />"}
					</p>
					<h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-hero-foreground mb-4">
						Let's Build Something
					</h2>
					<p className="text-hero-muted text-base sm:text-lg max-w-xl mx-auto">
						Open to software development opportunities in Perth and beyond.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
					{contactLinks.map((item, i) => (
						<motion.a
							key={i}
							href={item.href}
							target={item.external ? "_blank" : undefined}
							rel={item.external ? "noreferrer" : undefined}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.3, delay: i * 0.05 }}
							className="glass-card-dark rounded-2xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 hover:shadow-lg transition-shadow duration-300 min-h-[70px] sm:min-h-auto"
						>
							<div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
								<item.icon className="w-5 h-5 text-primary" />
							</div>
							<div className="flex-1 min-w-0">
								<p className="text-hero-foreground text-xs sm:text-sm font-medium truncate">
									{item.label}
								</p>
							</div>
							<ArrowUpRight className="w-4 h-4 text-hero-muted shrink-0 hidden sm:block" />
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
