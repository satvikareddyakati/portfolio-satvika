const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Company Name",
    period: "2023 — Present",
    description:
      "Led the frontend architecture for a SaaS platform, improving performance by 40% and mentoring a team of 4 developers.",
  },
  {
    role: "Full Stack Developer",
    company: "Company Name",
    period: "2021 — 2023",
    description:
      "Built and maintained multiple client-facing applications using React, Node.js, and PostgreSQL.",
  },
  {
    role: "Junior Developer",
    company: "Company Name",
    period: "2020 — 2021",
    description:
      "Contributed to the development of internal tools and gained expertise in modern web technologies.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Experience</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Where I've worked
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center gap-6 md:gap-12`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <p className="text-xs font-medium text-primary mb-1">{exp.period}</p>
                  <h3 className="font-serif text-xl text-foreground">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
