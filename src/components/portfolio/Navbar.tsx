import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const logoRef = useRef<HTMLImageElement | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.setAttribute("fetchpriority", "high");
    }
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-hero/90 backdrop-blur-xl border-b border-hero-foreground/5 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
          <img
            src="/logo.png"
            alt="Chimi Thinly"
            className="h-8 w-auto"
            width={32}
            height={32}
            decoding="async"
            ref={logoRef}
            loading="eager"
          />
        </a>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-hero-muted hover:text-hero-foreground text-sm transition-colors rounded-lg hover:bg-hero-foreground/5"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <motion.button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-hero-foreground p-2 rounded-lg hover:bg-hero-foreground/5"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden overflow-hidden bg-hero/95 backdrop-blur-xl border-b border-hero-foreground/5"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    setTimeout(() => {
                      window.location.hash = l.href;
                    }, 100);
                  }}
                  className="block text-hero-muted hover:text-hero-foreground hover:bg-hero-foreground/5 text-sm transition-colors py-3 px-4 rounded-lg"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
