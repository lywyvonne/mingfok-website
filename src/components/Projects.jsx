import "./Projects.css";

const projects = [
  {
    image: "/images/project2.png",
    category: "Airport",
    title: "KLIA Roof Truss",
    description: "Steel Rolling & Curved Roof Structure",
  },
  {
    image: "/images/project3.png",
    category: "Commercial",
    title: "One Utama New Entrance",
    description: "Custom Steel Rolling & Structural Works",
  },
  {
    image: "/images/project1.png",
    category: "Infrastructure",
    title: "Penang Second Bridge",
    description: "Curved Steel Components",
  },
  {
    image: "/images/project6.png",
    category: "Public Facility",
    title: "Zoo Negara Panda House",
    description: "Curved Steel Fabrication",
  },
  {
    image: "/images/project4.png",
    category: "Commercial",
    title: "Setia Eco Park Clubhouse",
    description: "Architectural Steel Works",
  },
  {
    image: "/images/project5.png",
    category: "Commercial",
    title: "Kasturi Walk",
    description: "Steel Canopy Structure",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <span className="section-tag">Our Projects</span>

        <h2>
          Supporting Commercial, Industrial & Infrastructure Projects
        </h2>

        <p className="section-description">
        Ming Fok Steel Rolling provides steel rolling and fabrication
  solutions for commercial, industrial and infrastructure projects across Malaysia.
        </p>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={`${project.title} - ${project.description} | Ming Fok Steel Rolling`}
/>

              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}