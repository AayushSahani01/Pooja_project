import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import api from "../../api";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/posts")
      .then((res) => {
        console.log("API Response:", res.data);
        setBlogs(res.data.posts || []); // ✅ dummyjson always returns { posts: [] }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  const loadMore = () => {
    setVisibleBlogs((prev) => prev + 6);
  };

  if (loading) return <p className="text-center mt-10">Loading blogs...</p>;

  return (
    <>
      <Navbar />

      <div className="pt-12 min-h-screen px-6 md:px-12 lg:px-20 py-10">
     <h2 className="text-3xl md:text-4xl mt-5 font-serif font-bold text-center mb-12 underline decoration-amber-600 decoration-4 underline-offset-8">
  Our Blogs & Stories
</h2>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, visibleBlogs).map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={`https://picsum.photos/seed/${blog.id}/400/200`} // ✅ dummy placeholder image
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 flex-grow">
                  {blog.body?.slice(0, 100) + "..."}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition cursor-pointer text-center"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {visibleBlogs < blogs.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
