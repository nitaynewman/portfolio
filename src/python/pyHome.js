import React, { useState, useEffect } from "react";
import Section from "../Section.js";
import Footer from "../footer.js";
import Carousel from "./pyCarousel.js";
import Spinner from "../components/Spinner";

// Configuration for API
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

export default function Python() {
  const [pythonProjects, setPythonProjects] = useState({});
  const [loadingCategories, setLoadingCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState(null);

  const PYstring = ["API", "Automations and Selenium", "Basics"];
  const PyP =
    "Here you can see all my journey in Python. This includes API calls, automations, backend projects, Games, GUI apps, and more.";
  const PyTitle = "My Python Journey";

  // Define the order of categories you want to load
  const categoryOrder = [
    "AI",
    "API",
    "Automations and Selenium",
    "Flask",
    "webscraping",
    "Tkinter GUI",
    "Games",
    "Microservices",
  ];

  useEffect(() => {
    // Start loading categories one by one
    loadCategoriesSequentially();
  }, []);

  const loadCategoriesSequentially = async () => {
    setInitialLoading(false);

    // Load categories one at a time
    for (const category of categoryOrder) {
      await fetchCategoryProjects(category);
    }
  };

  const fetchCategoryProjects = async (category) => {
    try {
      setLoadingCategories((prev) => [...prev, category]);

      const response = await fetch(`${API_BASE_URL}/data/python/${category}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Add the loaded category data to state
      setPythonProjects((prev) => ({
        ...prev,
        [category]: data[category] || [],
      }));

      // Add to loaded categories list
      setAllCategories((prev) => [...prev, category]);

      // Remove from loading state
      setLoadingCategories((prev) => prev.filter((cat) => cat !== category));
    } catch (err) {
      console.error(`Error fetching ${category} projects:`, err);
      // Remove from loading state even on error
      setLoadingCategories((prev) => prev.filter((cat) => cat !== category));
    }
  };

  if (initialLoading) {
    return (
      <div className="python">
        <Section Strings={PYstring} Title={PyTitle} Paragraph={PyP} />
        <div style={{ textAlign: "center", padding: "50px" }}>
          <Spinner />
          <h3 style={{ marginTop: "20px" }}>Loading projects...</h3>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="python">
        <Section Strings={PYstring} Title={PyTitle} Paragraph={PyP} />
        <div style={{ textAlign: "center", padding: "50px", color: "red" }}>
          <h3>{error}</h3>
          <button onClick={loadCategoriesSequentially}>Retry</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="python">
      <Section Strings={PYstring} Title={PyTitle} Paragraph={PyP} />

      {/* Render loaded categories in order */}
      {categoryOrder.map((category) => {
        // If category is loaded, show the carousel
        if (
          allCategories.includes(category) &&
          pythonProjects[category]?.length > 0
        ) {
          return (
            <Carousel
              key={category}
              data={pythonProjects[category]}
              title={category}
              apiBaseUrl={API_BASE_URL}
            />
          );
        }

        // If category is currently loading, show spinner
        if (loadingCategories.includes(category)) {
          return (
            <div
              key={category}
              style={{ textAlign: "center", padding: "50px" }}
            >
              <h2 style={{ fontSize: "40px", marginBottom: "30px" }}>
                {category}
              </h2>
              <Spinner />
              <p style={{ marginTop: "20px", color: "#666" }}>
                Loading {category} projects...
              </p>
            </div>
          );
        }

        // Don't render anything for categories not yet started
        return null;
      })}

      <Footer />
    </div>
  );
}
