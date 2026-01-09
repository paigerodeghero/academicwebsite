const Footer = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Paige Rodeghero. All rights reserved.</p>
          <p>School of Computing, Clemson University</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
