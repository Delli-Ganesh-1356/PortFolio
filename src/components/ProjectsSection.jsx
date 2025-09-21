import { ArrowRight, ExternalLink, Github } from "lucide-react";

// ✅ Import images (rename your files in src/assets to match these)
import notesAppImg from "../assets/notesAppImg.png";
import foodDeliveryImg from "../assets/foodDeliveryImg.png";
import ecommerceImg from "../assets/ecommerceImg.png";

const projects = [
  {
    id: 1,
    title: "Notes App",
    description:
      "A full-stack note-taking web application with authentication, CRUD operations, and a clean UI.",
    image: notesAppImg,
    tags: ["Java", "Spring Boot", "React", "Tailwind CSS"],
    demoUrl: "#", // replace with live demo link if deployed
    githubUrl: "https://github.com/Delli-Ganesh-1356/Notes-app",
  },
  {
    id: 2,
    title: "Food Delivery App",
    description:
      "A food ordering app with cart management, real-time order tracking, and secure payments.",
    image: foodDeliveryImg,
    tags: ["React", "Java", "Spring Boot", "Express", "MongoDB", "Tailwind CSS"],
    demoUrl: "#", // replace with live demo link if deployed
    githubUrl: "https://github.com/Delli-Ganesh-1356/Food-Delivery-App",
  },
  {
    id: 3,
    title: "E-Commerce App",
    description:
      "An e-commerce platform with product listings, cart, checkout, and order history features.",
    image: ecommerceImg,
    tags: ["Java", "Spring Boot", "React", "Tailwind CSS", "MySQL"],
    demoUrl: "#", // replace with live demo link if deployed
    githubUrl: "https://github.com/Delli-Ganesh-1356/E-Commerce-App",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with
          attention to detail, performance, and user experience.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title + Description */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        aria-label={`Live demo of ${project.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      aria-label={`View ${project.title} on GitHub`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Delli-Ganesh-1356"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
