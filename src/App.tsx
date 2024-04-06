import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Home from "./pages/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return <main>{isLoading ? <Loading /> : <Home />}</main>;
}

export default App;
