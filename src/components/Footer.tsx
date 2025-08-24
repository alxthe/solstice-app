import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">join the conversation</h3>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            be part of a community exploring the future of human flourishing. 
            subscribe to stay updated on new episodes and insights.
          </p>
          <Button variant="secondary" size="lg" className="bg-solstice-sun hover:bg-solstice-sun/90 text-solstice-sun-foreground">
            subscribe now
          </Button>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-solstice-sun rounded-full flex items-center justify-center">
              <span className="text-solstice-sun-foreground font-bold text-sm">s</span>
            </div>
            <span className="text-xl font-bold">solstice</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-primary-foreground transition-colors">privacy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">terms</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">contact</a>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-primary-foreground/60">
            <p>© 2024 solstice. exploring the future of human well-being.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;