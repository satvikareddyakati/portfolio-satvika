const experiences = [
  {
    role: "SDE Intern",
    company: "Amazon Web Services (AWS)",
    period: "Summer 2026 · Minneapolis, MN",
    description:
      "Joining AWS as a Software Development Engineer Intern, contributing to cloud-scale services and data-driven systems.",
  },
  {
    role: "Graduate Research Assistant",
    company: "Texas A&M University · ETID Department",
    period: "Aug 2025 – Present · College Station, TX",
    description:
      "Work on data analysis, cleaning, and management for research projects, turning raw datasets into reliable insights.",
  },
  {
    role: "Data Science Master Virtual Intern",
    company: "Altair",
    period: "Jul 2024 – Sept 2024 · Remote",
    description:
      "Applied ML, predictive modeling, and feature engineering to real-world business problems using Altair's analytics tools.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Experience
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Recent roles
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.role}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center gap-6 md:gap-12`}
              >
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

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
}
