import Button from "../components/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../components/MotionVariation";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const maxDescriptionLength = 50;

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        "https://portfolio-dashboard-server-kappa.vercel.app/api/v1/projects"
      );
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects(); // Initial fetch

    // Set an interval to fetch projects every 3 seconds
    const interval = setInterval(fetchProjects, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="projects" className="space-x-y">
      <div>
        <motion.h2
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="lg:text-5xl text-2xl lg:text-start text-center text-[#48dd70] font-bold mb-12"
        >
          / projects
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 1.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 place-items-center lg:grid-cols-3 gap-10 justify-center items-center mt-10"
        >
          {projects?.data?.map((project) => (
            <div
              key={project.id}
              className="project-card group lg:w-80 lg:h-96 w-64 bg-black shadow-lg rounded-lg overflow-hidden relative transform transition-transform duration-500 hover:scale-105"
            >
              <img
                src={project.image}
                alt="Project Image"
                className="w-full h-40 object-cover"
              />
              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4 font-code">
                  {project.description.length > maxDescriptionLength
                    ? `${project.description.slice(0, maxDescriptionLength)}...`
                    : project.description}
                </p>
                <div className="">
                  <Link to={`/projects/${project._id}`}>
                    <Button
                      className={"w-full mx-auto"}
                      href={project.githubLink}
                      target="_blank"
                    >
                      <a
                        target="_blank"
                        className="text-white-500 hover:text-blue-600 font-semibold transition-colors duration-300"
                      >
                        View Details
                      </a>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
