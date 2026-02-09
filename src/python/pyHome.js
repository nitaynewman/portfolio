import React, { useState, useEffect, useRef } from "react";
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
  const [visibleCategories, setVisibleCategories] = useState(new Set());

  const categoryRefs = useRef({});

  const PYstring = [
    "API",
    "Automations and Selenium",
    "Microservices",
    "AI Integration",
    "FastApi and Flask",
    "SQL, Postgres, Elastic, MongoDB, S3 Integration",
  ];
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

  // Intersection Observer to detect visible categories
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "200px", // Start loading 200px before element comes into view
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const category = entry.target.dataset.category;
          setVisibleCategories((prev) => new Set([...prev, category]));
        }
      });
    }, observerOptions);

    // Observe all category placeholders
    Object.values(categoryRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [allCategories]);

  useEffect(() => {
    // Load first 2 categories immediately, rest when visible
    loadInitialCategories();
  }, []);

  // Load visible categories when they come into view
  useEffect(() => {
    visibleCategories.forEach((category) => {
      if (!pythonProjects[category] && !loadingCategories.includes(category)) {
        fetchCategoryProjects(category);
      }
    });
  }, [visibleCategories]);

  const loadInitialCategories = async () => {
    // Add all categories to the list immediately (for placeholders)
    setAllCategories(categoryOrder);
    setInitialLoading(false);

    // Load first 2 categories immediately (above the fold)
    const initialCategories = categoryOrder.slice(0, 2);
    for (const category of initialCategories) {
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

      // Remove from loading state
      setLoadingCategories((prev) => prev.filter((cat) => cat !== category));
    } catch (err) {
      console.error(`Error fetching ${category} projects:`, err);
      setLoadingCategories((prev) => prev.filter((cat) => cat !== category));
      setError(`Failed to load ${category} projects. Please try again.`);
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

  return (
    <div className="python">
      <Section Strings={PYstring} Title={PyTitle} Paragraph={PyP} />

      {error && (
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            color: "#ff6b6b",
            background: "rgba(255, 107, 107, 0.1)",
            border: "2px solid #ff6b6b",
            margin: "20px auto",
            borderRadius: "8px",
            maxWidth: "600px",
          }}
        >
          <p>{error}</p>
        </div>
      )}

      {/* Render categories in order */}
      {categoryOrder.map((category) => {
        const isLoaded = pythonProjects[category]?.length > 0;
        const isLoading = loadingCategories.includes(category);

        return (
          <div
            key={category}
            ref={(el) => (categoryRefs.current[category] = el)}
            data-category={category}
            style={{ minHeight: isLoaded ? "auto" : "400px" }}
          >
            {isLoaded ? (
              <Carousel
                data={pythonProjects[category]}
                title={category}
                apiBaseUrl={API_BASE_URL}
              />
            ) : isLoading ? (
              <div style={{ textAlign: "center", padding: "50px" }}>
                <h2 style={{ fontSize: "40px", marginBottom: "30px" }}>
                  {category}
                </h2>
                <Spinner />
                <p style={{ marginTop: "20px", color: "#999" }}>
                  Loading {category} projects...
                </p>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "50px" }}>
                <h2
                  style={{
                    fontSize: "40px",
                    marginBottom: "30px",
                    color: "#555",
                  }}
                >
                  {category}
                </h2>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "0 auto",
                    border: "4px solid #063d65",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
            )}
          </div>
        );
      })}

      <Footer />
    </div>
  );
}
