import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "chimithinley705@gmail.com",
    href: "mailto:chimithinley705@gmail.com",
    sublabel: "Drop me an email",
  },
  {
    icon: Phone,
    label: "0452 421 551",
    href: "tel:0452421551",
    sublabel: "Give me a call",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/chimithinley",
    href: "https://www.linkedin.com/in/chimithinley",
    sublabel: "Connect on LinkedIn",
    external: true,
  },
  {
    icon: MapPin,
    label: "Perth, WA",
    href: "#",
    sublabel: "Based in Australia",
  },
];

const ContactSection = () => {
  return (
    <section className="hero-section py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07]" style={{
        background: "radial-gradient(circle, hsl(36, 80%, 50%), transparent 70%)",
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">{'<contact />'}</p>
          <h2 className="text-4xl sm:text-6xl font-bold text-hero-foreground mb-4">
            Let's Build Something
          </h2>
          <p className="text-hero-muted text-lg max-w-xl mx-auto">
            Open to software development opportunities in Perth and beyond.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contactLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card-dark rounded-2xl p-6 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-hero-muted text-xs">{item.sublabel}</p>
                <p className="text-hero-foreground text-sm font-medium truncate">{item.label}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-hero-muted opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
