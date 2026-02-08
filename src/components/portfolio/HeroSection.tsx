import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, ArrowDown, Code2, Database, Server } from "lucide-react";

const FloatingOrb = ({ delay, size, x, y }: { delay: number; size: number; x: string; y: string }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: `radial-gradient(circle, hsla(36, 80%, 50%, 0.15), transparent 70%)`,
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <motion.span className="font-mono text-primary text-sm">
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + i * 0.05, duration: 0.05 }}
      >
        {char}
      </motion.span>
    ))}
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity }}
      className="ml-0.5"
    >
      |
    </motion.span>
  </motion.span>
);

const StatItem = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="text-center"
  >
    <div className="text-3xl sm:text-4xl font-serif font-bold text-gradient glow-text">{value}</div>
    <div className="text-hero-muted text-xs mt-1 uppercase tracking-wider">{label}</div>
  </motion.div>
);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 100]);

  return (
    <section ref={sectionRef} className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsl(var(--hero-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--hero-foreground)) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Floating orbs */}
      <FloatingOrb delay={0} size={300} x="70%" y="10%" />
      <FloatingOrb delay={2} size={200} x="10%" y="60%" />
      <FloatingOrb delay={4} size={150} x="80%" y="70%" />

      {/* Gradient line accent */}
      <motion.div
        className="absolute left-[10%] top-0 w-px h-full line-gradient opacity-20"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      <motion.div style={{ opacity, y }} className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex gap-1.5">
              <motion.div
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="w-2 h-2 rounded-full bg-primary/40" />
              <div className="w-2 h-2 rounded-full bg-primary/20" />
            </div>
            <TypewriterText text="// Software Developer" delay={0.5} />
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl lg:text-[6.5rem] font-bold leading-[0.92] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <motion.span
              className="inline-block"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Chimi
            </motion.span>
            <br />
            <motion.span
              className="text-gradient"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Thinley
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-hero-muted text-lg sm:text-xl max-w-2xl leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Building secure, scalable enterprise systems for 5+ years.
            Specialising in full-stack development, database architecture, and Agile delivery.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="flex gap-10 sm:gap-16 mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <StatItem value="5+" label="Years Exp" delay={0.9} />
            <StatItem value="4" label="Companies" delay={1.0} />
            <StatItem value="10+" label="Projects" delay={1.1} />
          </motion.div>

          {/* Contact links as glass pills */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            {[
              { icon: Phone, label: "0452 421 551", href: "tel:0452421551" },
              { icon: Mail, label: "Email", href: "mailto:chimithinley705@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/chimithinley", external: true },
              { icon: MapPin, label: "Perth, WA", href: "#" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="glass-card-dark rounded-full px-5 py-2.5 flex items-center gap-2.5 text-sm text-hero-muted hover:text-primary hover:border-primary/30 transition-all duration-300 group"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                <span>{item.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Floating tech icons */}
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 opacity-20">
        {[Code2, Database, Server].map((Icon, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, delay: i * 0.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="w-8 h-8 text-primary" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#experience"
          className="flex flex-col items-center gap-2 text-hero-muted hover:text-primary transition-colors"
          whileHover={{ y: -3 }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
