import {motion} from 'framer-motion'
import { fadeIn } from '../components/MotionVariation';
import { useEffect, useState } from 'react';


// const blogs = [
//   {
//     id: 1,
//     title: "How to Master React",
//     description:
//       "A comprehensive guide to building complex interfaces using React.js...",
//     image: "blog-image-1.jpg",
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "Best Practices for MongoDB",
//     description:
//       "Learn the key strategies to scale and optimize MongoDB for high-performance apps...",
//     image: "blog-image-2.jpg",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Styling with Tailwind CSS",
//     description:
//       "Understand how to make your project stand out by using Tailwind CSS...",
//     image: "blog-image-3.jpg",
//     link: "#",
//   },
// ];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const maxDescriptionLength = 100;

  // const allBlogs = blogs.blogs

  useEffect(() => {
    // Fetch blogs from backend API
    fetch('http://localhost:5000/api/v1/blogs') // Assuming the API is running locally on port 5000
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setBlogs(data)
      })
      .catch(error => console.error('Error fetching blogs:', error));
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
          <p className="mt-4">
            Sharing insights, tips, and tutorials on web development and more.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2">
          {blogs?.data?.map((blog) => (
            <div
              key={blog.id}
              className="bg-black  shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {blog.title}
                </h3>
                <p className="mt-4">{blog.description}</p>
                <a
                  href={blog.link}
                  className="mt-6 inline-block text-blue-500 hover:text-blue-600 font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
