import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Abstract warm-toned background"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-24">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4 animate-fade-up">
          Data Science 
          <span className="mx-1">•</span>
          Machine Learning 
          <span className="mx-1">•</span>
          AI
        </p>
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-4 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Akati Satvika
          <br />
          <span className="text-gradient">Reddy</span>
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          SDE Intern @ Amazon (AWS) and
          Data Science graduate student at Texas A&M 
          building end-to-end ML solutions from data to deployment.
        </p>
        <div
          className="flex flex-wrap gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border bg-background/60 text-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float"
        aria-label="Scroll down to about section"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
