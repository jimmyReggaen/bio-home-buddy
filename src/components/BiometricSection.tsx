import { motion } from "framer-motion";
import topViewImg from "@/assets/top-view.jpg";

const stats = [
  { value: "0", label: "physical credentials" },
  { value: "24/7", label: "living lab" },
  { value: "<1", label: "sec recognition time" },
  { value: "12", label: "biometric checkpoints" },
];

const BiometricSection = () => (
  <section className="section-padding border-t border-white/10">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="label-tech mb-4 block">// MOD-02: Biometric</span>
          <h2 className="heading-section text-foreground mb-6">
            Biometric
          </h2>
          <p className="body-text mb-8">
            Your identity is your key. From doors to elevators, everything opens up once you're recognized. 
            No security desk. No forgotten cards. Just seamless identity-based access everywhere you go.
          </p>
          <p className="body-text mb-10">
            Security works quietly in the background, giving employees and visitors the same effortless experience. 
            The building learns as it goes, testing new tools, refining its systems, and adapting in real time.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border border-white/10 p-4"
              >
                <p className="font-display text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <a href="https://www.innovatrics.com" target="_blank" rel="noopener noreferrer" className="btn-outline inline-block">
            Explore_The_Tech
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="relative aspect-square overflow-hidden"
        >
          <img
            src={topViewImg}
            alt="Aerial view of biometric building shaped like a fingerprint"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          {/* Scan overlay */}
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-[1px] bg-primary/40 shadow-[0_0_10px_hsl(172_100%_50%/0.3)]"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default BiometricSection;
