import Button from "../components/Button";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One.",
    image: "path-to-image", // Replace with actual image path
    link: "https://project-one.com",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "path-to-image",
    link: "https://project-two.com",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "path-to-image",
    link: "https://project-two.com",
  },
];

const Projects = () => {
  return (
    <div className="space-x-y">
      <div>
        <h2 className="lg:text-5xl text-2xl lg:text-start text-center text-[#48dd70] font-bold mb-12">
          / projects
        </h2>

        <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 gap-10 justify-center items-center mt-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group w-80 h-96 bg-black shadow-lg rounded-lg overflow-hidden relative transform transition-transform duration-500 hover:scale-105"
            >
              <img
                src="https://via.placeholder.com/320x180"
                alt="Project Image"
                className="w-full h-40 object-cover"
              />
              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Magic Card</h2>
                <p className="text-gray-600 mb-4">
                  This is a Magic UI-inspired card with smooth hover animations.
                </p>
                <div className="flex justify-between">
                  <Button>
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-600 font-semibold transition-colors duration-300"
                    >
                      Live link
                    </a>
                  </Button>
                  <Button>
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-600 font-semibold transition-colors duration-300"
                    >
                      Github
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
