import { motion } from "framer-motion";
import officeImg from "@/assets/office.jpg";

const stats = [
  { value: "5,500", label: "sqm office space" },
  { value: "8", label: "collaboration zones" },
  { value: "200", label: "sqm auditorium" },
  { value: "4", label: "terraces" },
];

const CollaborativeSection = () => (
  <section className="section-padding border-t border-white/10">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1"
        >
          <img
            src={officeImg}
            alt="Modern collaborative office space"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="order-1 lg:order-2"
        >
          <span className="label-tech mb-4 block">// MOD-04: Collaborative</span>
          <h2 className="heading-section text-foreground mb-6">
            Collaborative
          </h2>
          <p className="body-text mb-10">
            Work flows through spaces designed for movement and connection. Team zones, meeting rooms, and 
            workshops are distributed across four floors. Terraces, the bistro, and common areas create 
            natural points for gathering.
          </p>

          <div className="grid grid-cols-2 gap-6">
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
        </motion.div>
      </div>
    </div>
  </section>
);

export default CollaborativeSection;
