const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photo placeholder */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border overflow-hidden flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-serif text-primary">Y</span>
              </div>
              <p className="text-sm text-muted-foreground">Your photo here</p>
            </div>
          </div>
          {/* Decorative blob */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">About Me</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Passionate about building meaningful software
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a software developer who loves turning complex problems into elegant, 
              user-friendly solutions. With a background in full-stack development, I bridge 
              the gap between design and engineering.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open source, or sketching out ideas for my next project.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
            <div>
              <p className="font-serif text-2xl text-foreground">3+</p>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-foreground">20+</p>
              <p className="text-sm text-muted-foreground mt-1">Projects Built</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-foreground">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
