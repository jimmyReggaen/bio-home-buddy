const Footer = () => (
  <footer className="border-t border-white/10 py-12">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="font-mono text-sm uppercase tracking-[0.15em] text-foreground">
        Biometrics<span className="text-primary">_</span>House
      </div>
      <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
        © {new Date().getFullYear()} Innovatrics. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="#" className="font-mono text-[10px] text-muted-foreground hover:text-primary uppercase tracking-wider transition-colors">
          Privacy Policy
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
