import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { BiArrowBack } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";

const ProjectDetails = () => {
  const { id } = useParams(); // Get the blog id from the route
  const [projects, setProjects] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the blog details by ID
    fetch(
      `https://portfolio-dashboard-server-kappa.vercel.app/api/v1/projects/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((error) => console.error("Error fetching blog details:", error));
  }, [id]);

  if (!projects)
    return (
      <div className="h-screen flex justify-center items-center ">
        <CgSpinner className="text-cyan-500" />
      </div>
    );
  console.log(projects);

  return (
    <div className="space-x-y text-center">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-3 pb-5 cursor-pointer"
      >
        <BiArrowBack className="text-3xl" />
        <h2 className="text-white">Go Back</h2>
      </div>

      <h1 className="text-3xl font-bold mb-4">{projects?.data?.title}</h1>

      <div className="h-[500px] overflow-y-scroll mb-10">
        <img
          src={projects?.data?.image}
          alt={projects?.data?.title}
          className="w-full   mb-7 rounded"
        />
      </div>

      <p className="text-lg">{projects?.data?.description}</p>

      <div className="lg:flex gap-3 mt-10 justify-center">
        <h2 className="">Tech Stack: </h2>
        {projects?.data?.techStack.map((tech, index) => {
          return (
            <p key={index} className="text-cyan-500">
              {tech}
            </p>
          );
        })}
      </div>

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-y-7 mt-10">
        <a href={projects?.data?.liveLink} target="_blank">
          <Button>Live Link</Button>
        </a>
        <a href={projects?.data?.repoLinkClient} target="_blank">
          <Button>Frontend Repository</Button>
        </a>
        <a href={projects?.data?.repoLinkServer} target="_blank" className="">
          <Button>Backend Repository</Button>
        </a>
        <ButtonGradient />
      </div>
    </div>
  );
};

export default ProjectDetails;
