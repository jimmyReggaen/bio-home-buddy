import { motion } from "framer-motion";
import heroImage from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Biometrics House - The Most Biometric Building in the World"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      {/* Scan Line */}
      <motion.div
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-[2px] scan-line z-10 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-20 container pb-16 md:pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-4xl"
        >
          <span className="label-tech mb-4 block">
            // Welcome_To
          </span>
          <h1 className="heading-hero text-foreground mb-6">
            The Most Biometric{" "}
            <span className="text-muted-foreground">Building in the World</span>
          </h1>
          <p className="body-text max-w-2xl mb-8">
            The Innovatrics headquarters redefines how buildings recognize, respond, and secure. 
            Visitors enter without physical credentials. The building identifies them and adapts in real time.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="btn-primary">
              Explore_Building
            </a>
            <a href="#contact" className="btn-outline">
              Book_A_Tour
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
