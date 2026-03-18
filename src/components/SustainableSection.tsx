import { motion } from "framer-motion";

const stats = [
  { value: "0", label: "gas connection" },
  { value: "100%", label: "recycled aluminum facade" },
  { value: "100%", label: "rainwater reuse" },
  { value: "70", label: "kWh/sqm annual energy" },
];

const SustainableSection = () => (
  <section className="section-padding border-t border-white/10 grid-blueprint">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="label-tech mb-4 block">// MOD-03: Sustainable</span>
          <h2 className="heading-section text-foreground mb-6">
            Sustainable
          </h2>
          <p className="body-text mb-6">
            There's no gas hookup. Climate control comes from 44 geothermal boreholes in a closed-loop system 
            beneath the building. Rainwater is captured and reused. Solar panels cover the parking lot.
          </p>
          <p className="body-text">
            Carpet tiles throughout are carbon-negative, storing carbon instead of releasing it. 
            The building breathes, adjusts, and runs on its own rhythm.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-1">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card-instrument aspect-square"
            >
              <span className="font-mono text-[10px] text-muted-foreground">
                SPEC_{String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-display text-4xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary/10 overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                  className="h-full w-1/3 bg-primary/40"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SustainableSection;
