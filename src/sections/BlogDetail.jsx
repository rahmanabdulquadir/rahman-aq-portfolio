import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { _id } = useParams(); // Get the blog id from the route
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch the blog details by ID
    fetch(
      `https://portfolio-dashboard-server-kappa.vercel.app/api/v1/blogs/${_id}`
    )
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching blog details:", error));
  }, [_id]);

  if (!blog) return <div>Loading...</div>;
  console.log(blog);

  return (
    <div className="space-x-y h-screen text-center">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-3 pb-5 cursor-pointer"
      >
        <BiArrowBack className="text-3xl" />
        <h2 className="text-white">Go Back</h2>
      </div>
      <h1 className="text-3xl font-bold mb-4">{blog?.data?.title}</h1>
      <img
        src={blog?.data?.image}
        alt={blog?.data?.title}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <p>{blog?.data?.description}</p>
    </div>
  );
};

export default BlogDetail;
