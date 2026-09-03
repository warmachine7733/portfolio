import React, { useState, useEffect } from "react";
import { Blog } from "../../../data/blog.types";
import "./Blogs.css";

const BLOG_API_URL = "https://prateek-io-server.vercel.app/getBlogsFromDb";

export const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(BLOG_API_URL);
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();
        setBlogs(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error fetching blogs");
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const openBlog = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="blogs" className="blogs">
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>
        <p className="section-subtitle">
          Thoughts on web development, architecture, and technology
        </p>

        {loading && (
          <div className="blogs-loading">
            <div className="loading-spinner"></div>
            <p>Loading latest articles...</p>
          </div>
        )}

        {error && (
          <div className="blogs-error">
            <p>Unable to load blogs at the moment. Please check back later!</p>
          </div>
        )}

        {!loading && blogs.length > 0 && (
          <div className="blogs-grid">
            {blogs.slice(0, 6).map((blog) => (
              <article
                key={blog._id}
                className="blog-card"
                onClick={() => openBlog(blog.guid)}
              >
                <div className="blog-image-wrapper">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-image"
                  />
                  <div className="blog-overlay">
                    <button className="read-more-btn">Read Article</button>
                  </div>
                </div>

                <div className="blog-content">
                  <h3 className="blog-title">{blog.title}</h3>
                  <div className="blog-meta">
                    <span className="blog-author">{blog.creator}</span>
                    <span className="blog-date">{blog.pubDate}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && blogs.length === 0 && !error && (
          <div className="blogs-empty">
            <p>No articles available yet. Check back soon!</p>
          </div>
        )}

        {blogs.length > 0 && (
          <div className="blogs-cta">
            <a
              href="https://medium.com/@prateekjena7733"
              target="_blank"
              rel="noopener noreferrer"
              className="view-all-btn"
            >
              View All Articles on Medium →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
