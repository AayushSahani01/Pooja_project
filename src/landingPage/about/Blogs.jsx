import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import api from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";
import LazyImage from "../../components/LazyImage";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await api.get("/posts");
        console.log("API Response:", res.data);
        setBlogs(res.data.posts || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const loadMore = async () => {
    setLoadingMore(true);
    // Simulate API delay for loading more posts
    setTimeout(() => {
      setVisibleBlogs((prev) => prev + 6);
      setLoadingMore(false);
    }, 500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" text="Loading blogs..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="pt-20 min-h-screen px-6 md:px-12 lg:px-20 py-10">
     <h2 className="text-3xl md:text-4xl mt-5 font-serif font-bold text-center mb-12 underline decoration-amber-600 decoration-4 underline-offset-8">
  Our Blogs & Stories
</h2>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, visibleBlogs).map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <LazyImage
                src={`https://picsum.photos/seed/${blog.id}/400/200`}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{blog.title}</h3>
                <p className="text-gray-600 flex-grow line-clamp-3">
                  {blog.body?.slice(0, 100) + "..."}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition cursor-pointer text-center inline-block"
                  aria-label={`Read more about ${blog.title}`}
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>

        {visibleBlogs < blogs.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className={`px-6 py-3 rounded-lg transition cursor-pointer ${
                loadingMore 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-orange-600 hover:bg-orange-700'
              } text-white`}
            >
              {loadingMore ? (
                <div className="flex items-center gap-2">
                  <LoadingSpinner size="small" color="white" />
                  <span>Loading...</span>
                </div>
              ) : (
                'Load More'
              )}
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
