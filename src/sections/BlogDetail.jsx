import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { _id } = useParams(); // Get the blog id from the route
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the blog details by ID
    fetch(`http://localhost:5000/api/v1/blogs/${_id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching blog details:", error));
  }, [_id]);

  if (!blog) return <div>Loading...</div>;
  console.log(blog)

  return (
    <div className="space-x-y h-screen text-center">
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
