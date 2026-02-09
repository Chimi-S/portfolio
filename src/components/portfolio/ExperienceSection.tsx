import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

const jobs: Job[] = [
  {
    title: "Software Developer",
    company: "Chilliquest Technology",
    location: "Thimphu, Bhutan",
    period: "May 2024 – Dec 2025",
    highlights: [
      "Built an enterprise ERP platform integrating Finance, Operations, HR, Supply Chain, CRM, and Analytics.",
      "Developed and maintained backend microservices for scalable ERP modules.",
      "Led migration from PHP (Laravel/Lumen) to Python (FastAPI), improving maintainability.",
      "Served as PostgreSQL DBA, supporting database performance and reliability.",
      "Applied modern UI/UX principles to deliver responsive web interfaces.",
    ],
  },
  {
    title: "Software Developer",
    company: "NewEdge Technologies Private Limited",
    location: "Thimphu, Bhutan",
    period: "Jan 2023 – Jun 2024",
    highlights: [
      "Maintained the SAARC Development Fund Secretariat website, ensuring stability and usability.",
      "Delivered system upgrades and technical support for the Education Management Information System (EMIS) for the Ministry of Education.",
    ],
  },
  {
    title: "Associate Developer",
    company: "Chilliquest Technology",
    location: "Thimphu, Bhutan",
    period: "Feb 2020 – Jan 2023",
    highlights: [
      "Designed and developed responsive WordPress websites with custom themes using PHP, HTML, CSS, and JavaScript.",
      "Integrated ticketing, registration, analytics, and SEO plugins.",
      "Conducted A/B testing and user feedback sessions to refine usability.",
      "Maintained site security, updates, backups, and uptime monitoring.",
    ],
  },
  {
    title: "IT Assistant",
    company: "BhutanSync InfoTech Solution",
    location: "Bhutan",
    period: "Jun 2019 – Sep 2019",
    highlights: [
      "Developed the organisation's WordPress website, improving accessibility and navigation.",
      "Implemented booking forms, event listings, and automated email notifications.",
      "Conducted performance audits, mobile responsiveness testing, and SEO enhancements.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      {/* Timeline line - hidden on mobile */}
      <div className="absolute left-6 md:left-1/2 top-[18rem] bottom-20 w-px bg-border hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-primary font-mono text-xs sm:text-sm mb-3 tracking-wider">{'<experience />'}</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold">Where I've Worked</h2>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                <motion.div
                  className="w-4 h-4 rounded-full bg-primary border-4 border-background"
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                />
              </div>

              <div className={`md:w-[45%] ${i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                <motion.div
                  className="glass-card rounded-2xl p-5 sm:p-6 lg:p-8 group hover:glow-primary transition-shadow duration-500 cursor-default"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start justify-between mb-4 gap-3">
                    <div className="min-w-0">
                      <span className="font-mono text-xs text-primary">{job.period}</span>
                      <h3 className="text-lg sm:text-xl font-semibold font-sans mt-1">{job.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">{job.company} · {job.location}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.08 }}
                        className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex gap-2 group/item"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5 text-primary mt-1 shrink-0 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-transform" />
                        <span>{h}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
