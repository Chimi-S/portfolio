import { useEffect, useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, ArrowDown } from "lucide-react";

const FloatingOrb = ({ delay, size, x, y }: { delay: number; size: number; x: string; y: string }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: isMobile ? size * 0.4 : size * 0.6,
        height: isMobile ? size * 0.4 : size * 0.6,
        left: x,
        top: y,
        background: `radial-gradient(circle, hsla(36, 80%, 50%, 0.15), transparent 70%)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    />
  );
};

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <span className="font-mono text-primary text-xs sm:text-sm">
    {text}
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity }}
      className="ml-0.5 inline-block"
    >
      |
    </motion.span>
  </span>
);

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gradient glow-text">
      {value}
    </div>
    <div className="text-hero-muted text-xs mt-1 uppercase tracking-wider">{label}</div>
  </div>
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
    <section
      ref={sectionRef}
      className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated grid - hidden on mobile */}
      <div
        className="absolute inset-0 opacity-[0.04] hidden sm:block pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--hero-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--hero-foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating orbs - only on desktop */}
      <FloatingOrb delay={0} size={300} x="70%" y="10%" />
      <FloatingOrb delay={2} size={200} x="10%" y="60%" />

      <motion.div style={{ opacity, y }} className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <div className="flex gap-1.5">
              <motion.div
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="w-2 h-2 rounded-full bg-primary/40" />
              <div className="w-2 h-2 rounded-full bg-primary/20" />
            </div>
            <TypewriterText text="// Software Developer" delay={0.5} />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-tight sm:leading-[0.95] mb-6 sm:mb-8">
            <span className="inline-block">Chimi</span>
            <br />
            <span className="text-gradient">Thinly</span>
          </h1>

          <p className="text-hero-muted text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-10 sm:mb-14">
            Building secure, scalable enterprise systems for 5+ years. Specialising in full-stack development, database architecture, and Agile delivery.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 sm:gap-10 lg:gap-16 mb-10 sm:mb-14">
            <StatItem value="5+" label="Years Exp" />
            <StatItem value="4" label="Companies" />
            <StatItem value="10+" label="Projects" />
          </div>

          {/* Contact links */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              { icon: Phone, label: "Call", href: "tel:0452421551" },
              { icon: Mail, label: "Email", href: "mailto:chimithinley705@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/chimithinley", external: true },
              { icon: MapPin, label: "Perth, WA", href: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="glass-card-dark rounded-full px-3 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2 text-xs sm:text-sm text-hero-muted hover:text-primary transition-colors duration-200 whitespace-nowrap"
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex"
      >
        <a
          href="#experience"
          className="flex flex-col items-center gap-2 text-hero-muted hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
