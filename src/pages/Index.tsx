import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ThreeLenses from "@/components/ThreeLenses";
import Formats from "@/components/Formats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ThreeLenses />
      <Formats />
      <Footer />
    </div>
  );
};

export default Index;
