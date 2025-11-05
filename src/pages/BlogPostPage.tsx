import React, { Suspense, useEffect } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getPostBySlug, getRecentPosts } from '../content/blog/posts';
import { getPostComponent } from '../content/blog/postComponents';
import BlogHeader from '../components/BlogHeader';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLanguage = i18n.language as 'en' | 'ka';

  const post = slug ? getPostBySlug(slug) : undefined;
  const PostComponent = slug ? getPostComponent(slug) : null;

  // Redirect to alternate language version when language changes
  useEffect(() => {
    if (post && post.language !== currentLanguage && post.alternateSlug) {
      navigate(`/blog/${post.alternateSlug}`, { replace: true });
    }
  }, [currentLanguage, post, navigate]);

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  // If post not found or component not found, redirect to blog
  if (!post || !PostComponent) {
    return <Navigate to="/blog" replace />;
  }

  const recentPosts = getRecentPosts(currentLanguage, 3).filter(p => p.slug !== slug);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLanguage === 'ka' ? 'ka-GE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <BlogHeader />
      <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-hover transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {currentLanguage === 'en' ? 'Back to Blog' : 'დაბრუნება ბლოგში'}
          </Link>
        </nav>

        {/* Post Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-sm font-semibold rounded-full">
              {post.category}
            </span>
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div className="bg-gray-900 rounded-3xl p-6 md:p-12 border border-gray-800">
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-primary mb-4"></div>
                <p className="text-gray-400 text-lg">
                  {currentLanguage === 'en' ? 'Loading article...' : 'იტვირთება სტატია...'}
                </p>
              </div>
            }
          >
            <PostComponent />
          </Suspense>
        </div>

        {/* Share Section */}
        <div className="mt-12 p-6 bg-gray-900 rounded-2xl border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-4">
            {currentLanguage === 'en' ? 'Share this article' : 'გააზიარეთ ეს სტატია'}
          </h3>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title + ' - ' + post.excerpt)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-brand-primary text-white rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(post.excerpt)}&title=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-brand-primary text-white rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(post.title + ' - ' + post.excerpt)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-brand-primary text-white rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-8">
              {currentLanguage === 'en' ? 'More Articles' : 'მეტი სტატია'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-brand-primary transition-all duration-300"
                >
                  <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-semibold rounded-full">
                    {relatedPost.category}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-4 mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-brand-primary text-sm mt-4 font-semibold">
                    {currentLanguage === 'en' ? 'Read More' : 'წაიკითხეთ'}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default BlogPostPage;
