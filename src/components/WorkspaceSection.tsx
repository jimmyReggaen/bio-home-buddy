import { motion } from "framer-motion";

const amenities = [
  "Private offices",
  "Open offices",
  "Meeting rooms",
  "Workshop zones",
  "Auditorium",
  "Social stairs",
  "Terrace",
  "Barista-run bistro",
  "Zen zones",
];

const WorkspaceSection = () => (
  <section id="facilities" className="section-padding border-t border-white/10 grid-blueprint">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="max-w-3xl mb-16"
      >
        <span className="label-tech mb-4 block">// MOD-05: Workspace</span>
        <h2 className="heading-section text-foreground mb-6">
          Your Next Workspace{" "}
          <span className="text-muted-foreground">Awaits</span>
        </h2>
        <p className="body-text">
          The Most Biometric Building offers flexible offices, meeting rooms, and event spaces 
          that are ready to use the moment you arrive. Renting a room or office also unlocks the 
          building's high‑standard shared spaces.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
        {amenities.map((amenity, i) => (
          <motion.div
            key={amenity}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.5 }}
            className="card-instrument py-6 px-4 items-center text-center cursor-default"
          >
            <div className="w-2 h-2 bg-primary/30 group-hover:bg-primary mx-auto mb-4 animate-pulse-dot" 
                 style={{ animationDelay: `${i * 200}ms` }} />
            <p className="font-mono text-xs uppercase tracking-wider text-foreground">{amenity}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a href="#contact" className="btn-primary">
          Inquire_About_Spaces
        </a>
      </motion.div>
    </div>
  </section>
);

export default WorkspaceSection;
