import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useScrollAnimation";

const formats = [
  {
    title: "conversations",
    duration: "45-60 min",
    description: "deep dives with scientists, philosophers, artists, and founders exploring their views on humanity's future, the direction of their field, and the personal philosophies shaping their work.",
    badge: "featured"
  },
  {
    title: "conjectures",
    duration: "15-20 min",
    description: "field notes and hypotheses on single ideas. quick explorations of concepts like 'what is radical humanity?' or 'the history of accelerationism.'",
    badge: "weekly"
  },
  {
    title: "crossroads",
    duration: "30-45 min",
    description: "panel discussions with 2-3 guests from wildly different fields (climate scientist, poet, robotics engineer) discussing one central question.",
    badge: "monthly"
  }
];

const Formats = () => {
  const [sectionRef, sectionInView] = useInView(0.1);

  return (
    <section id="formats" className="py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            our formats
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            each format is designed to explore different aspects of human flourishing, 
            from intimate conversations to cross-disciplinary panels.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {formats.map((format, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={sectionInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-500 border border-border hover:scale-105 hover:border-primary/30 bg-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-secondary/30 text-foreground border-secondary/50 group-hover:bg-secondary/40 transition-colors duration-300">
                      {format.badge}
                    </Badge>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">{format.duration}</span>
                  </div>
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {format.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {format.description}
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

export default Formats;