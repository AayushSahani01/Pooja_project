// BlogDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import api from "../../api";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/posts/${id}`)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading blog...</p>;
  if (!blog) return <p className="text-center mt-10">Blog not found.</p>;

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          {/* Title */}
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Body */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {blog.body}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {blog.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full border"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
