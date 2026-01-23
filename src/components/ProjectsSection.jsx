import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Element } from "react-scroll";

const projects = [
  {
    id: 1,
    title: "AI Meal Plan Generator",
    description: "A meal plan generator app using AI, Next.js and TailwindCSS",
    image: "/projects/aimealplan.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    demoUrl: "https://aimealplan.store/",
    githubUrl: "https://github.com/olaszb/ai-meal-plan",
  },
  {
    id: 2,
    title: "Medium Clone",
    description: "A clone of Medium.com built with Laravel and TailwindCSS.",
    image: "/projects/medium-clone.png",
    tags: ["Laravel", "TailwindCSS"],
    demoUrl: "",
    githubUrl: "https://github.com/olaszb/medium-clone",
  },
  {
    id: 3,
    title: "Developer Blog",
    description: "A developer blog made with Laravel and Angular using an integrated markdown editor.",
    image: "/projects/fullstack-blog.png",
    tags: ["Laravel", "Angular", "TailwindCSS"],
    demoUrl: "",
    githubUrl: "https://github.com/olaszb/fullstack-blog",
  }
];

export const ProjectsSection = () => {
  return (
    <Element name="projects">
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidder shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={project.image}
                    alt={project.title}
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, key) => (
                      <span
                        key={key}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 mx-1">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 p-3">
                    {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              href="https://github.com/olaszb"
              target="_blank"
            >
              Check Out My Github <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};
