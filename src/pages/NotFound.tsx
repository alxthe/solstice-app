import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="w-16 h-16 bg-solstice-sun/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">🌱</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          this path doesn't seem to lead to flourishing
        </p>
        <Button asChild className="bg-solstice-sun hover:bg-solstice-sun/90 text-solstice-sun-foreground">
          <a href="/">return to growth</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
