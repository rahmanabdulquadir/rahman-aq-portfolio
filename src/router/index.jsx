import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Projects from "../sections/Projects";
import ProjectDetails from "../sections/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "/projects",
    //     element: <Projects />,
    //   },
    // ],
  },
  {
    path: "/projects",
    element: <Projects/>
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails/>
  },
]);

export default router;
