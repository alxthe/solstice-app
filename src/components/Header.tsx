import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollY = useScrollAnimation();
  const isScrolled = scrollY > 20;
  const scrollProgress = typeof window !== 'undefined' 
    ? Math.min(scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1) 
    : 0;

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`w-full backdrop-blur-sm border-b sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-solstice-blue/98 border-solstice-sun/30 shadow-lg py-2' 
        : 'bg-solstice-blue/95 border-solstice-sun/20 py-4'
    }`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-solstice-sun to-golden-bronze origin-left"
        style={{
          width: `${scrollProgress * 100}%`,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.1 }}
      />
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => smoothScrollTo('hero')}
          >
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-solstice-sun to-solstice-sun/80 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ 
                scale: 1.1, 
                rotate: 12,
                boxShadow: "0 8px 25px -8px rgba(255, 193, 7, 0.4)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="text-solstice-sun-foreground font-bold text-sm">s</span>
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-solstice-blue-foreground tracking-tight hover:text-cream transition-colors duration-300">
                solstice
              </h1>
              <p className="text-xs text-solstice-blue-foreground/60 -mt-1">future of well-being</p>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['about', 'lenses', 'formats'].map((item, index) => (
              <motion.button
                key={item}
                className="relative text-solstice-blue-foreground/80 hover:text-solstice-blue-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-solstice-blue-foreground/5 group"
                onClick={() => smoothScrollTo(item)}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item === 'lenses' ? 'three lenses' : item}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-solstice-sun scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </motion.button>
            ))}
            <div className="h-6 w-px bg-solstice-blue-foreground/20"></div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="border-solstice-sun/60 text-solstice-sun hover:bg-solstice-sun hover:text-solstice-sun-foreground transition-all duration-300 hover:shadow-lg hover:shadow-solstice-sun/20"
              >
                listen now
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-solstice-blue-foreground hover:text-solstice-sun transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 right-0 bg-solstice-blue/98 backdrop-blur-sm border-b border-solstice-sun/20 shadow-xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <nav className="container mx-auto px-6 py-6 space-y-4">
                {[
                  { id: 'about', label: 'about' },
                  { id: 'lenses', label: 'three lenses' },
                  { id: 'formats', label: 'formats' }
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    className="block w-full text-left text-solstice-blue-foreground hover:text-solstice-sun transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-solstice-blue-foreground/5"
                    onClick={() => {
                      smoothScrollTo(item.id);
                      setIsMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div 
                  className="pt-4 border-t border-solstice-blue-foreground/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Button 
                    className="w-full bg-solstice-sun hover:bg-solstice-sun/90 text-solstice-sun-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    listen now
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;