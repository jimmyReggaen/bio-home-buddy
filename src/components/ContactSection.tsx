import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", surname: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding border-t border-white/10 grid-blueprint">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="label-tech mb-4 block">// System.Contact</span>
            <h2 className="heading-section text-foreground mb-6">
              Let's Stay{" "}
              <span className="text-muted-foreground">Connected</span>
            </h2>
            <p className="body-text mb-10">
              If you're interested in renting a workspace, fill in the form to reach us directly. 
              We'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="border border-white/10 p-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-2">Book a Tour</h3>
                <p className="text-muted-foreground text-sm">Tours are held on Fridays. Reserve your spot.</p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-2">Subscribe to Updates</h3>
                <p className="text-muted-foreground text-sm">Get news, events, and behind the scenes.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          >
            {submitted ? (
              <div className="border border-primary/30 p-12 text-center">
                <div className="w-3 h-3 bg-primary mx-auto mb-6 animate-pulse-dot" />
                <p className="font-mono text-sm uppercase tracking-wider text-primary mb-2">
                  Transmission_Received
                </p>
                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="stat-label block mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 px-4 bg-card border border-white/10 text-foreground font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="stat-label block mb-2">Surname</label>
                    <input
                      type="text"
                      required
                      value={formData.surname}
                      onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                      className="w-full h-12 px-4 bg-card border border-white/10 text-foreground font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="stat-label block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 px-4 bg-card border border-white/10 text-foreground font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="stat-label block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-white/10 text-foreground font-mono text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send_Message
                </button>
                <p className="font-mono text-[10px] text-muted-foreground">
                  By submitting this form you agree to the processing of your personal data.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
