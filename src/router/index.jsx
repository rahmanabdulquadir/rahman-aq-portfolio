import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Projects from "../sections/Projects";
import ProjectDetails from "../sections/ProjectDetails";
import BlogDetail from "../sections/BlogDetail";

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
  {
    path: "/blogs/:_id",
    element: <BlogDetail/>
  },
]);

export default router;
