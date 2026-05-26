type Project = {
  title: string;
  description: string;
  highlights?: string[];
  tags: string[];
  color: string;
};

const projects: Project[] = [
  {
    title: "Agentic AI Supply Chain Risk & Procurement Optimizer",
    description:
      "A multi-agent procurement workflow that evaluates supplier risk using live disruption signals, LLM reasoning, and human-in-the-loop review.",
    highlights: [
      "Designed a 6-agent LangGraph pipeline for end-to-end supplier evaluation with 100% task accuracy across 15 regression scenarios.",
      "Achieved F1=0.983 and AUC-ROC=1.00 on 50 real-world disruption events, outperforming a Random Forest baseline.",
      "Integrated NOAA and GDELT APIs with fallback scoring, snapshot replay, and Hypothesis property-based tests to prevent data leakage.",
    ],
    tags: ["Python", "LangGraph", "LangSmith", "Pydantic"],
    color: "from-accent/10 to-primary/10",
  },
  {
    title: "Knee Osteoarthritis Detection & Severity Prediction",
    description:
      "CNN-based X-ray image analysis pipeline improving diagnostic accuracy on 15,000+ medical images.",
    tags: ["PyTorch", "Flask", "Computer Vision", "Model deployment"],
    color: "from-primary/10 to-accent/10",
  },
  {
    title: "Pawsitive Expression – Canine Recognition Hub",
    description:
      "Canine emotion recognition system trained on 10,000+ labeled images, achieving 88% accuracy.",
    tags: ["TensorFlow", "Keras", "React", "Deep learning"],
    color: "from-sage-light to-secondary",
  },
  {
    title: "Analytics & Reporting Dashboards",
    description:
      "Interactive dashboards and visualizations that turn messy datasets into clear, actionable insights.",
    tags: ["Python", "Pandas", "Tableau", "Storytelling"],
    color: "from-accent/10 to-primary/10",
  },
  {
    title: "Applied GenAI Experiments",
    description:
      "Lightweight assistants and workflows built with LLMs, embeddings, and prompt engineering.",
    tags: ["LLMs", "Embeddings", "Prompt engineering", "APIs"],
    color: "from-secondary to-sage-light",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Projects
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Selected work</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <span className="font-serif text-lg text-foreground/40 group-hover:text-foreground/60 transition-colors">
                  Preview
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                {project.highlights && (
                  <ul className="mb-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="pl-4 relative">
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-primary/70" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
