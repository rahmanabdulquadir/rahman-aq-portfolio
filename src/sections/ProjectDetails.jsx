import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import ButtonGradient from "../assets/svg/ButtonGradient";

const ProjectDetails = () => {
  const { id } = useParams(); // Get the blog id from the route
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    // Fetch the blog details by ID
    fetch(`http://localhost:5000/api/v1/projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((error) => console.error("Error fetching blog details:", error));
  }, [id]);

  // if (!projects) return <div>Loading...</div>;
  // console.log(projects);

  return (
    <div className="space-x-y text-center">
      <h1 className="text-3xl font-bold mb-4">{projects?.data?.title}</h1>
      <img
        src={projects?.data?.image}
        alt={projects?.data?.title}
        className="w-full h-96 object-cover mb-4 rounded"
      />
      <p>{projects?.data?.description}</p>

      <div className="grid grid-cols-2 gap-5 w-[50%] mx-auto mt-10">
        <Button>
          <a href={projects?.data?.liveLink} target="_blank">
            Live Link
          </a>
        </Button>
        <Button>
          <a href={projects?.data?.liveLink} target="_blank">
            Frontend Repository
          </a>
        </Button>
        <Button></Button>

        <ButtonGradient />
      </div>
      <Button className="">Backend Repository</Button>
    </div>
  );
};

export default ProjectDetails;
