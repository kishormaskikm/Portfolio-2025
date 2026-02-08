
interface Project {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  technologies: string[];
  borderColor: string;
  githubUrl: string; // Specific GitHub link for each project
}

const Projects = () => {
  const projects: Project[] = [
    {
      icon: "comments",
      iconColor: "green",
      title: "PDF Chatbot RAG",
      description:
        "Built a RAG chatbot using LangChain and OpenAI that answers questions from PDF documents with vector-based semantic search and source citations.",
      technologies: ["RAG", "LangChain" , "Typescript", "OpenAI", "Qdrant", "vectorStore"],
      borderColor: "green",
      githubUrl: "https://github.com/kishormaskikm/Pdf-ChatBot-RAG-Backend"
    },
    {
      icon: "house",
      iconColor: "yellow",
      title: "Agents-Hub",
      description:
        "Developed an AI-powered boilerplate generator with Python and a custom VS Code extension, enabling automated project scaffolding through LLM-driven tool execution.",
      technologies: ["Python", "TypeScript", "OpenAI"],
      borderColor: "yellow",
      githubUrl: "https://github.com/kishormaskikm/Boilerplate-Generator-Agent"
    },
    {
      icon: "robot",
      iconColor: "blue",
      title: "Query-Verse (QnA platform)",
      description:
        "Query Verse is a Senior-Junior Interaction Web Application, developed using the MERN stack. It facilitates knowledge sharing and mentoring within an educational context.",
      technologies: ["Node.js", "React", "MongoDB", "Gemini", "Express.js"],
      borderColor: "blue",
      githubUrl: "https://github.com/kishormaskikm/QueryVerseBackend"
    },
    {
      icon: "rocket",
      iconColor: "gray",
      title: "Upcoming Project",
      description:
        "Currently working on innovative projects that will be added here soon. Stay tuned for updates showcasing new technologies and solutions.",
      technologies: ["Coming Soon"],
      borderColor: "gray",
      githubUrl: "https://github.com/kishormaskikm"
    }

  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="gradient-text">Projects</span>
        </h2>

        <ProjectSection title="Projects" textColor="blue" projects={projects} />
      </div>
    </section>
  );
};

const ProjectSection = ({
  title,
  textColor,
  projects,
}: {
  title: string;
  textColor: string;
  projects: Project[];
}) => (
  <>
    <h3 className={`text-2xl font-semibold mb-8 text-${textColor}-400`}>{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </>
);

const ProjectCard = ({
  icon,
  iconColor,
  title,
  description,
  technologies,
  borderColor,
  githubUrl,
}: Project) => (
  <div
    className={`project-card rounded-xl p-6 border border-gray-700 hover:border-${borderColor}-400 transition duration-300`}
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <i className={`fas fa-${icon} text-3xl text-${iconColor}-400 mb-3`}></i>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      </div>
      <div className="flex space-x-2">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 hover:text-${iconColor}-400 transition duration-300`}
        >
          <i className="fab fa-github text-lg"></i>
        </a>
      </div>
    </div>

    <p className="text-gray-300 mb-4">{description}</p>

    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => {
        let colorClass = "";
        switch (tech) {
          case "FastAPI":
          case "Python":
          case "RAG":
          case "Flask":
          case "OpenCV":
          case "Django":
            colorClass = "bg-blue-900 text-blue-300";
            break;
          case "Google Gemini":
          case "OpenAI":
          case "DLIB":
          case "React":
          case "LangChain":
            colorClass = "bg-purple-900 text-purple-300";
            break;
          case "PGVector":
          case "Enterprise AI":
          case "Cryptography":
            colorClass = "bg-green-900 text-green-300";
            break;
          case "Data Generation":
          case "Chatbot":
          case "YouTube API":
          case "Docker":
          case "Computer Vision":
            colorClass = "bg-yellow-900 text-yellow-300";
            break;
          default:
            colorClass = "bg-blue-900 text-blue-300";
        }
        return (
          <span key={index} className={`text-xs ${colorClass} px-2 py-1 rounded-full`}>
            {tech}
          </span>
        );
      })}
    </div>
  </div>
);

export default Projects;
