import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
	{ name: "Blockchain Developer", issuer: "Simplilearn", year: "2020" },
	{ name: "Google IT Support Professional", issuer: "Google", year: "2020" },
	{ name: "Web Applications Specialization", issuer: "Coursera", year: "2020" },
	{ name: "Introduction to Git", issuer: "Google", year: "2020" },
];

const EducationSection = () => {
	return (
		<section className="py-16 sm:py-20">
			<div className="container mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "0px 0px -100px 0px" }}
					transition={{ duration: 0.4 }}
					className="text-center mb-12 sm:mb-20"
				>
					<p className="text-primary font-mono text-xs sm:text-sm mb-3 tracking-wider">{'<education />'}</p>
					<h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold">Learning Path</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
					{/* Education card */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "0px 0px -50px 0px" }}
						transition={{ duration: 0.4 }}
						className="glass-card rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
					>
						<div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
							<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
								<GraduationCap className="w-6 h-6 text-primary" />
							</div>
							<div className="min-w-0">
								<p className="text-primary font-mono text-xs">2017 – 2019</p>
								<h3 className="text-lg sm:text-xl font-semibold font-sans">Education</h3>
							</div>
						</div>
						<div>
							<h4 className="font-semibold font-sans text-base sm:text-lg">Diploma in Computer System and Network</h4>
							<p className="text-muted-foreground text-xs sm:text-sm mt-1">Jigme Namgyel Engineering College</p>
						</div>
					</motion.div>

					{/* Certifications card */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "0px 0px -50px 0px" }}
						transition={{ duration: 0.4, delay: 0.05 }}
						className="glass-card rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
					>
						<div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
							<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
								<Award className="w-6 h-6 text-primary" />
							</div>
							<div className="min-w-0">
								<p className="text-primary font-mono text-xs">Continuous Growth</p>
								<h3 className="text-lg sm:text-xl font-semibold font-sans">Certifications</h3>
							</div>
						</div>
						<ul className="space-y-3">
							{certifications.map((cert, i) => (
								<li key={i} className="group/cert cursor-default">
									<p className="font-medium text-xs sm:text-sm">{cert.name}</p>
									<p className="text-muted-foreground text-xs mt-0.5">
										{cert.issuer} · {cert.year}
									</p>
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default EducationSection;
