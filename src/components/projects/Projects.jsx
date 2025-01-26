import { useState } from "react";
import { Code, Maximize2 } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Voice Billing",
    shortDescription: "An Android app revolutionizing retail point-of-sale operations.",
    description: "An Android app revolutionizing retail point-of-sale operations. This innovative solution allows shop owners to manage inventory and process sales using voice commands, storing product data locally. The app features automated cart management, bill generation, and WhatsApp integration for instant customer billing. By leveraging voice recognition technology, Voice Billing enhances efficiency and accuracy in small retail environments",
    tech: ["Python", "Javascript", "Flask", "MongoDB", "React Native"],
  },
  {
    id: 2,
    title: "Calorie Tracker",
    shortDescription: "A backe-end project to record daily calorie consumption.",
    description: "This is a back-end project where users can sign up, record their daily calorie consumption, and receive a daily email that contains a graphical representation of their data.",
    tech: ["Python", "Flask", "JWT", "MongoDB"],
  },
  {
    id: 3,
    title: "Quizified",
    shortDescription: "A web-based online quiz-taking app.",
    description: "Quizified is a web-based online quiz-taking app, through which one can create and attend quizzes and can check the results of the quiz.",
    tech: ["Javascript", "NodeJS", "EJs", "MaterializeCSS", "MongoDB"],
  }
];

export function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">
        <Code className="icon" />
        Projects
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.shortDescription}</p>
            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              className="view-details-button"
            >
              <Maximize2 className="icon" size={16} />
              {activeProject === project.id ? "Hide Details" : "View Details"}
            </button>
            {activeProject === project.id && (
              <div className="project-details">
                <p>{project.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}