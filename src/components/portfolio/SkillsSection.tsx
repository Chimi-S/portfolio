import { motion } from "framer-motion";
import { Server, Monitor, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    category: "Backend",
    icon: Server,
    skills: ["FastAPI", "Laravel", "Lumen", "Python", "PHP", "REST APIs", "Microservices"],
  },
  {
    category: "Frontend",
    icon: Monitor,
    skills: ["Vue.js", "JavaScript", "HTML5", "CSS3", "WordPress", "Responsive Design"],
  },
  {
    category: "Database",
    icon: Database,
    skills: ["PostgreSQL", "Database Administration", "Query Optimisation", "Schema Design"],
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Agile / Scrum", "A/B Testing", "SEO"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-20 section-alt relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">{'<skills />'}</p>
          <h2 className="text-4xl sm:text-6xl font-bold">Tech Stack</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl p-6 sm:p-8 group hover:glow-primary transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <group.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-sans mb-5">{group.category}</h3>
              <ul className="space-y-2.5">
                {group.skills.map((skill, j) => (
                  <motion.li
                    key={skill}
                    className="text-muted-foreground text-sm flex items-center gap-2 group/skill"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.06 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/skill:bg-primary group-hover/skill:scale-125 transition-all" />
                    {skill}
                  </motion.li>
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
