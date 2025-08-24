import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useScrollAnimation";

const About = () => {
  const [sectionRef, sectionInView] = useInView(0.1);

  return (
    <section id="about" className="py-24 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              future of well-being
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              a podcast exploring how science, philosophy, and culture can help us build 
              lives and societies that are more secure, flourishing, and human.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="border-secondary/50 bg-card hover:scale-105 transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">what we explore</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    how will human well-being evolve in the next 100 years? each episode bridges 
                    deep time and deep future—ancient wisdom, cutting-edge science, and sci-fi futures—
                    always returning to the same question: what kind of world are we building, 
                    and will humans truly flourish there?
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="border-primary/50 bg-card hover:scale-105 transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">our approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    we connect individual flourishing to collective futures. most science/tech 
                    podcasts lean toward hype or critique; we stand in the generative middle, 
                    asking: progress for what purpose, and how do we make it feel like home for humans?
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="border-accent/50 bg-card inline-block hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <blockquote className="text-lg text-foreground italic mb-4">
                  "the future isn't something that happens to us—it's something we actively create 
                  through the choices we make today."
                </blockquote>
                <p className="text-muted-foreground">— the solstice mission</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;