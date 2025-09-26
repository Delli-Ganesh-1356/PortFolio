import React from "react";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import notesAppImg from "../assets/notesAppImg.png";
import foodDeliveryImg from "../assets/foodDeliveryImg.png";
import ecommerceImg from "../assets/ecommerceImg.png";

const allProjects = [
  {
    id: 1,
    title: "Notes App",
    description: "A full-stack note-taking app with authentication, CRUD, and clean UI.",
    image: notesAppImg,
    tags: ["Java", "Spring Boot", "React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Delli-Ganesh-1356/Notes-app",
  },
  {
    id: 2,
    title: "Food Delivery App",
    description: "Food ordering app with cart, real-time tracking, and payments.",
    image: foodDeliveryImg,
    tags: ["React", "Java", "Spring Boot", "Express", "MongoDB", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Delli-Ganesh-1356/Food-Delivery-App",
  },
  {
    id: 3,
    title: "E-Commerce App",
    description: "E-commerce platform with cart, checkout, and order history.",
    image: ecommerceImg,
    tags: ["Java", "Spring Boot", "React", "Tailwind CSS", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/Delli-Ganesh-1356/E-Commerce-App",
  },
];

const AllProjects = () => {
  return (
    <section className="relative py-24 px-4  overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="stars"></div>
        <div className="meteors"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-start mb-6">
          <Link
            to="/"
            className="cosmic-button w-fit flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          All <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here’s a full list of my projects including featured and side projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex space-x-3">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
