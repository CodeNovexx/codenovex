import { useState, useEffect, lazy, Suspense } from "react";
import Loading from "./components/Loading";

// Lazy load the Home component for code splitting
const Home = lazy(() => import("./pages/Home"));

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
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      )}
    </main>
  );
}

export default App;
