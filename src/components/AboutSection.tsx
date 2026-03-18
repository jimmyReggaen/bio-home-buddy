import { motion } from "framer-motion";
import lobbyImg from "@/assets/lobby.jpg";
import bistroImg from "@/assets/bistro.jpg";
import zenImg from "@/assets/zen-zone.jpg";

const images = [
  { src: lobbyImg, alt: "Lobby with social stairs" },
  { src: bistroImg, alt: "Barista-run bistro" },
  { src: zenImg, alt: "Zen zone for relaxation" },
];

const AboutSection = () => (
  <section id="about" className="section-padding grid-blueprint">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="max-w-3xl mb-16"
      >
        <span className="label-tech mb-4 block">// MOD-01: Identity</span>
        <h2 className="heading-section text-foreground mb-6">
          Where Identity Shapes{" "}
          <span className="text-muted-foreground">Experience</span>
        </h2>
        <p className="body-text">
          Innovatrics HQ is a living demonstration of biometric architecture. 
          Designed from the ground up to showcase what's possible when technology and architecture evolve together. 
          The building's very form reflects our biometric ethos — a bird's-eye view reveals the image of a fingerprint.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="relative aspect-[4/3] overflow-hidden group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
            <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/80">
              {img.alt}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
