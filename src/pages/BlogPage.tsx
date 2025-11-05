import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getPostsByLanguage, getAllCategories } from "../content/blog/posts";
import BlogHeader from "../components/BlogHeader";

const BlogPage: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLanguage = i18n.language as "en" | "ka";
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const posts = getPostsByLanguage(currentLanguage);
  const categories = getAllCategories(currentLanguage);

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  // Sort by date (newest first)
  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(
      currentLanguage === "ka" ? "ka-GE" : "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      const contactElement = document.querySelector('[data-section="contact"]');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <BlogHeader />
      <div className="min-h-screen bg-black pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-sm font-semibold rounded-full">
                {currentLanguage === "en" ? "BLOG" : "ბლოგი"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {currentLanguage === "en"
                ? "Insights & Resources"
                : "ინსაიტები და რესურსები"}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {currentLanguage === "en"
                ? "Expert advice, industry trends, and technical guides to help you build better software."
                : "ექსპერტული რჩევები, ინდუსტრიის ტენდენციები და ტექნიკური გზამკვლევები, რომლებიც დაგეხმარებათ უკეთესი პროგრამული უზრუნველყოფის შექმნაში."}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-brand-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {currentLanguage === "en" ? "All Posts" : "ყველა"}
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-brand-primary text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          {sortedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-primary transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  {/* Post Image */}
                  {post.image && (
                    <div className="relative h-48 bg-gray-800 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.currentTarget.src =
                            "https://via.placeholder.com/400x300/1f2937/3b82f6?text=CodeNovex+Blog";
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-brand-primary text-white text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-brand-primary font-semibold group-hover:gap-4 transition-all">
                      {currentLanguage === "en"
                        ? "Read More"
                        : "წაიკითხეთ მეტი"}
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-xl">
                {currentLanguage === "en"
                  ? "No posts found in this category."
                  : "ამ კატეგორიაში პოსტები ვერ მოიძებნა."}
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 border border-brand-primary/30 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {currentLanguage === "en"
                ? "Ready to Start Your Project?"
                : "მზად ხართ დაიწყოთ თქვენი პროექტი?"}
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {currentLanguage === "en"
                ? "Let's discuss how we can help you build amazing software that drives real business results."
                : "მოდით განვიხილოთ, როგორ შეგვიძლია დაგეხმაროთ საოცარი პროგრამული უზრუნველყოფის შექმნაში, რომელიც რეალურ ბიზნეს შედეგებს მოიტანს."}
            </p>
            <button
              onClick={handleContactClick}
              className="inline-block bg-brand-primary hover:bg-brand-hover text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              {currentLanguage === "en" ? "Get in Touch" : "დაგვიკავშირდით"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
