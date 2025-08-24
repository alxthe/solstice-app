import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import acropolisHero from "@/assets/acropolis-athens.jpg";

const Hero = () => {
  const scrollY = useScrollAnimation();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0">
        {/* Background stars/sky - slowest parallax */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ 
            backgroundImage: `url(${acropolisHero})`,
            y: scrollY * 0.5
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-solstice-blue/40 via-solstice-blue/20 to-transparent"></div>
        </motion.div>
        
        {/* Mid-ground cosmic elements - medium parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: scrollY * 0.3 }}
        >
          <div className="absolute top-20 left-10 w-2 h-2 bg-cream rounded-full animate-float opacity-70"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-solstice-sun rounded-full animate-pulse-slow opacity-60"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-mauve rounded-full animate-float opacity-50"></div>
          <div className="absolute top-60 left-3/4 w-1 h-1 bg-cream rounded-full animate-pulse-slow opacity-40"></div>
        </motion.div>
        
        {/* Foreground floating particles - fastest parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: scrollY * 0.1 }}
        >
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-solstice-sun rounded-full animate-float opacity-30"></div>
          <div className="absolute bottom-1/2 left-1/2 w-0.5 h-0.5 bg-cream rounded-full animate-pulse-slow opacity-25"></div>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Dark overlay behind text */}
        <div className="absolute inset-0 bg-black/20 rounded-3xl backdrop-blur-sm"></div>
        
        <div className="relative z-10 space-y-8 py-16">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-solstice-blue-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              a turning point
            </motion.span>
            <br />
            <motion.span 
              className="text-golden-bronze inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              for a better future
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-cream/90 leading-relaxed font-light">
              a future-focused exploration of human well-being through science, philosophy, and culture
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button size="lg" className="bg-solstice-sun hover:bg-solstice-sun/90 text-solstice-sun-foreground px-8 py-6 text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg">
              start listening
            </Button>
            <Button variant="outline" size="lg" className="border-foreground bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg hover:scale-105 transition-all duration-300">
              learn more
            </Button>
          </motion.div>
          
          <motion.div 
            className="pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <p className="text-sm text-cream/70 font-light">
              where darkness turns to light<br />
              the longest night becomes<br />
              the first day of return
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator with parallax */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ y: scrollY * -0.1 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/50 rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;