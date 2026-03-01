import { motion } from "framer-motion";
import { Server, Monitor, Database, Wrench } from "lucide-react";

const skillGroups = [
	{
		category: "Backend",
		icon: Server,
		skills: ["FastAPI", "Laravel", "Lumen", "Python", "PHP", "REST APIs"],
	},
	{
		category: "Frontend",
		icon: Monitor,
		skills: ["Vue.js", "JavaScript", "HTML5", "CSS3", "WordPress"],
	},
	{
		category: "Database",
		icon: Database,
		skills: [
			"PostgreSQL",
			"MySQL",
			"MongoDB",
			"Firebase",
			"Database Admin",
			"Query Optimisation",
			"Schema Design",
		],
	},
	{
		category: "DevOps & Tools",
		icon: Wrench,
		skills: ["Git", "GitHub", "Agile/Scrum", "A/B Testing", "SEO"],
	},
];

const SkillsSection = () => {
	return (
		<section className="py-16 sm:py-20 section-alt relative overflow-hidden">
			<div className="container mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "0px 0px -100px 0px" }}
					transition={{ duration: 0.4 }}
					className="text-center mb-12 sm:mb-20"
				>
					<p className="text-primary font-mono text-xs sm:text-sm mb-3 tracking-wider">
						{"<skills />"}
					</p>
					<h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
						Tech Stack
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
					{skillGroups.map((group, i) => (
						<motion.div
							key={group.category}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "0px 0px -50px 0px" }}
							transition={{ duration: 0.4, delay: i * 0.05 }}
							className="glass-card rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300"
						>
							<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
								<group.icon className="w-6 h-6 text-primary" />
							</div>
							<h3 className="text-base sm:text-lg font-semibold font-sans mb-4">
								{group.category}
							</h3>
							<ul className="space-y-2">
								{group.skills.map((skill) => (
									<li
										key={skill}
										className="text-muted-foreground text-xs sm:text-sm flex items-center gap-2"
									>
										<span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
										<span>{skill}</span>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
