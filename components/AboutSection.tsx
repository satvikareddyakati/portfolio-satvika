import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photo / visual */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border overflow-hidden flex items-center justify-center">
            <Image
              src="/satvika-latest.jpg"
              alt="Portrait of Akati Satvika Reddy"
              width={640}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            About
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Data scientist & engineer who enjoys building real-world ML products
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
              I&apos;m a Master&apos;s student in Data Science at Texas A&amp;M University with a background
              in computer science and applied machine learning. I enjoy working across the full
              lifecycle of ML projects: understanding the problem, exploring data, building models,
              and shipping them as usable tools.
            </p>
            <p>
              Recently I&apos;ve focused on medical imaging, computer vision, and generative AI,
              building systems that improve decision making for both technical and non-technical
              stakeholders.
            </p>
            <p>
              I&apos;m also deeply interested in generative AI, especially large language models and
              applied GenAI systems, and I enjoy experimenting with building small assistants,
              tools, and workflows that make data work more intuitive and collaborative.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border text-sm">
            <div>
              <p className="font-serif text-2xl text-foreground">4+</p>
              <p className="text-xs text-muted-foreground mt-1">Years coding</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-foreground">10+</p>
              <p className="text-xs text-muted-foreground mt-1">ML / data projects</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-foreground">3</p>
              <p className="text-xs text-muted-foreground mt-1">Industry experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
