import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack shopping experience with real-time inventory, payments, and a beautiful storefront.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    color: "from-primary/10 to-accent/10",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop boards, real-time updates, and team features.",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    color: "from-sage-light to-secondary",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization platform with interactive charts, custom reports, and automated insights.",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    color: "from-accent/10 to-primary/10",
  },
  {
    title: "Social Media App",
    description: "Modern social platform with stories, real-time chat, and content recommendation engine.",
    tags: ["React Native", "GraphQL", "MongoDB", "Redis"],
    color: "from-secondary to-sage-light",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Projects</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Selected work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Project visual */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="font-serif text-lg text-foreground/40 group-hover:text-foreground/60 transition-colors">
                  Preview
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-xl text-foreground">{project.title}</h3>
                  <div className="flex gap-2">
                    <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                      <Github size={16} />
                    </button>
                    <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Live site">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
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
};

export default ProjectsSection;
