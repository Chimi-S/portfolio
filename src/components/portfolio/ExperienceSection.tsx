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
      "Built enterprise ERP platform integrating Finance, Operations, HR, Supply Chain, CRM, and Analytics",
      "Developed backend microservices for scalable ERP modules",
      "Led migration from PHP (Laravel/Lumen) to Python (FastAPI)",
      "Served as PostgreSQL DBA supporting database performance",
      "Applied modern UI/UX principles for responsive web interfaces",
    ],
  },
  {
    title: "Software Developer",
    company: "NewEdge Technologies Private Limited",
    location: "Thimphu, Bhutan",
    period: "Jan 2023 – Jun 2024",
    highlights: [
      "Maintained SAARC Development Fund Secretariat website",
      "Delivered system upgrades and technical support for Education Management Information System",
    ],
  },
  {
    title: "Associate Developer",
    company: "Chilliquest Technology",
    location: "Thimphu, Bhutan",
    period: "Feb 2020 – Jan 2023",
    highlights: [
      "Designed and developed responsive WordPress websites",
      "Integrated ticketing, registration, analytics, and SEO plugins",
      "Conducted A/B testing and user feedback sessions",
      "Maintained site security, updates, backups, and uptime",
    ],
  },
  {
    title: "IT Assistant",
    company: "BhutanSync InfoTech Solution",
    location: "Bhutan",
    period: "Jun 2019 – Sep 2019",
    highlights: [
      "Developed organization's WordPress website",
      "Implemented booking forms, event listings, and automated email notifications",
      "Conducted performance audits and mobile responsiveness testing",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      {/* Timeline line */}
      <div className="absolute left-6 md:left-1/2 top-[200px] bottom-20 w-px bg-border hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-primary font-mono text-xs sm:text-sm mb-3 tracking-wider">
            {"<experience />"}
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold">Where I've Worked</h2>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
              </div>

              <div className={`md:w-[45%] ${i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                <div className="glass-card rounded-2xl p-5 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4 gap-3">
                    <div className="min-w-0">
                      <span className="font-mono text-xs text-primary">{job.period}</span>
                      <h3 className="text-lg sm:text-xl font-semibold font-sans mt-1">{job.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex gap-2">
                        <ArrowUpRight className="w-3.5 h-3.5 text-primary mt-1 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
