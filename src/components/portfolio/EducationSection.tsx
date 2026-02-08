import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

const certifications = [
  { name: "Blockchain Developer", issuer: "Simplilearn (Sponsored by GovTech)", year: "2020" },
  { name: "Google IT Support Professional Certificate", issuer: "Google", year: "2020" },
  { name: "Web Applications for Everybody Specialization", issuer: "Coursera", year: "2020" },
  { name: "Introduction to Git and GitHub", issuer: "Google", year: "2020" },
];

const EducationSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">{'<education />'}</p>
          <h2 className="text-4xl sm:text-6xl font-bold">Learning Path</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl p-8 group hover:glow-primary transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-primary font-mono text-xs">2017 – 2019</p>
                <h3 className="text-xl font-semibold font-sans">Education</h3>
              </div>
            </div>
            <div className="pl-16">
              <h4 className="font-semibold font-sans text-lg">Diploma in Computer System and Network</h4>
              <p className="text-muted-foreground mt-1">Jigme Namgyel Engineering College (JNEC)</p>
            </div>
          </motion.div>

          {/* Certifications card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 hover:glow-primary transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-primary font-mono text-xs">Continuous Growth</p>
                <h3 className="text-xl font-semibold font-sans">Certifications</h3>
              </div>
            </div>
            <ul className="space-y-4 pl-16">
              {certifications.map((cert, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="group/cert cursor-default"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-sm">{cert.name}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{cert.issuer} · {cert.year}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
