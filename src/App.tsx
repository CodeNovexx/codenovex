import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loading from "./components/Loading";
import AnimatedPage from "./components/AnimatedPage";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";

const Home = lazy(() => import("./pages/Home"));
const Process = lazy(() => import("./pages/Process"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const FAQ = lazy(() => import("./pages/FAQ"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loading />}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            }
          />
          <Route
            path="/process"
            element={
              <AnimatedPage>
                <Process />
              </AnimatedPage>
            }
          />
          <Route
            path="/blog"
            element={
              <AnimatedPage>
                <BlogPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <AnimatedPage>
                <BlogPostPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/faq"
            element={
              <AnimatedPage>
                <FAQ />
              </AnimatedPage>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <AnimatedPage>
                <PrivacyPolicy />
              </AnimatedPage>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <AnimatedPage>
                <TermsOfService />
              </AnimatedPage>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTopOnMount />
      <main>
        <AnimatedRoutes />
      </main>
    </Router>
  );
}

export default App;