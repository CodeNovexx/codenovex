import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Remove artificial delay - only show loading while assets load
    // This improves Core Web Vitals significantly
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Minimal delay for smooth transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <main>
        {isLoading ? (
          <Loading />
        ) : (
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
            </Routes>
          </Suspense>
        )}
      </main>
    </Router>
  );
}

export default App;
