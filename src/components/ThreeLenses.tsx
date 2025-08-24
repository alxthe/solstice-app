import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useScrollAnimation";

const lenses = [
  {
    title: "wholeness",
    description: "psychologists, neuroscientists, and philosophers on the scaffolding of a good life: contribution, purpose, meaning, and self-security.",
    color: "cream",
    icon: "🌱"
  },
  {
    title: "radical humanity",
    description: "artists, ethicists, anthropologists, and ai researchers wrestling with what makes us irreducibly human—and how to protect it.",
    color: "mauve",
    icon: "🦋"
  },
  {
    title: "accelerationism",
    description: "scientists, entrepreneurs, and policymakers guiding innovation toward futures where tech accelerates flourishing.",
    color: "solstice-sun",
    icon: "⚡"
  }
];

const ThreeLenses = () => {
  const [sectionRef, sectionInView] = useInView(0.1);

  return (
    <section id="lenses" className="py-24 bg-secondary/20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            three lenses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            we explore the future of human well-being through three interconnected perspectives, 
            each offering unique insights into how we can build more flourishing lives and societies.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {lenses.map((lens, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card 
                className="group hover:shadow-lg transition-all duration-500 border-2 hover:scale-105 bg-card border-border hover:border-primary/50"
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4 group-hover:animate-float">{lens.icon}</div>
                  <CardTitle className="text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {lens.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {lens.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeLenses;