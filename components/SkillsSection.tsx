import { Code, Database, Layout, Server, Sparkles } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming & ML Libraries",
    skills: [
      "Python (NumPy, Pandas, scikit-learn)",
      "PyTorch / TensorFlow",
      "R (tidyverse, ggplot2)",
      "Java",
    ],
  },
  {
    icon: Database,
    title: "Data & Databases",
    skills: ["SQL", "MySQL", "Feature engineering", "Data cleaning"],
  },
  {
    icon: Server,
    title: "Deployment & Tools",
    skills: ["Flask / FastAPI", "Git", "AWS (basic)", "Spark (basic)"],
  },
  {
    icon: Layout,
    title: "Visualization & Storytelling",
    skills: ["Tableau", "Matplotlib", "Seaborn"],
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    skills: [
      "LLMs & embeddings",
      "Prompt engineering",
      "Assistant / tool design",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Skills
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Technologies & workflows I enjoy
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <cat.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
