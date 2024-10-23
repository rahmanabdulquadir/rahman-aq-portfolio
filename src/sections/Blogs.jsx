import { motion } from "framer-motion";
import { fadeIn } from "../components/MotionVariation";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const maxDescriptionLength = 100;

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://portfolio-dashboard-server-kappa.vercel.app/api/v1/blogs"
      );
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();

    // Set an interval to fetch blogs every 3 seconds
    const interval = setInterval(fetchBlogs, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="space-x-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:text-5xl text-2xl lg:text-start text-center text-[#48dd70] font-bold mb-12"
          >
            / blogs
          </motion.h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2">
          {blogs?.data?.map((blog) => (
            <div
              key={blog.id}
              className="bg-black shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{blog.title}</h3>
                <p className="mt-4">
                  {blog.description.length > maxDescriptionLength
                    ? `${blog.description.slice(0, maxDescriptionLength)}...`
                    : blog.description}
                </p>
                <Link to={`/blogs/${blog._id}`}>
                  <a
                    href={blog.link}
                    className="mt-6 inline-block text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Read More →
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
