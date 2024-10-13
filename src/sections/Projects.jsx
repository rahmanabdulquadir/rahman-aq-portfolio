

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project One.',
    image: 'path-to-image', // Replace with actual image path
    link: 'https://project-one.com'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: 'path-to-image',
    link: 'https://project-two.com'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 font-semibold">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
