import { Code, Database, Layout, Server, Smartphone, Globe } from "lucide-react";

const skillCategories = [
  {
    icon: Layout,
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Python", "REST APIs", "GraphQL"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    icon: Code,
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Go"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    skills: ["React Native", "Flutter", "PWA"],
  },
  {
    icon: Globe,
    title: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Linux"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Skills</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Technologies I work with
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
};

export default SkillsSection;
