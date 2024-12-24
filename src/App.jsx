import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OverallView from "./components/OverallView";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  // Scroll to top on navigation
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  // Update page title and meta description
  useEffect(() => {
    let title = "Default Title"; // Default title
    let metaDescription = "Default description"; // Default meta description

    switch (pathname) {
      case "/":
        title = "Home Page";
        metaDescription = "Welcome to the home page.";
        break;
      // Add more cases as needed
    }

    // Update the document title
    if (title) {
      document.title = title;
    }

    // Update the meta description
    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      } else {
        // Create meta tag if it doesn't exist
        const metaTag = document.createElement("meta");
        metaTag.name = "description";
        metaTag.content = metaDescription;
        document.head.appendChild(metaTag);
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<OverallView />} />
    </Routes>
  );
}

export default App;
