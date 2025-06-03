import React, { useState } from "react";

// Import placeholder subcomponents
import MoodSelector from "./components/MoodSelector";
import LanguageSelector from "./components/LanguageSelector";
import RecommendationList from "./components/RecommendationList";
import TrendsSidebar from "./components/TrendsSidebar";
import AdminDashboard from "./components/AdminDashboard";

// Routing-related imports
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// PUBLIC_INTERFACE
/**
 * MainContainer implements routing and controlled flow for mood/language selection and recommendations.
 * After user selects mood and language, navigates to /recommendations with state.
 */
function MainContainer() {
  // State for current view (user/admin), could be based on auth in future
  const [view, setView] = useState("user"); // "user" or "admin"

  // List of supported languages must be in sync with LanguageSelector
  const languageOptions = [
    { value: "English", color: "#A8D8EA" },
    { value: "Hindi", color: "#FFB6B9" },
    { value: "Spanish", color: "#F6D6D6" },
    { value: "French", color: "#FFDDD2" },
    { value: "Chinese", color: "#B9A7D6" }
  ];

  // State for selected language (single string)
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0].value);
  // State for selected mood from MoodSelector
  const [selectedMood, setSelectedMood] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Switch between User and Admin for demo purposes
  const handleSwitchView = () => {
    setView((prev) => (prev === "user" ? "admin" : "user"));
    // Reset navigation when switching views
    if (view === "user") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  // Handler passed to LanguageSelector for updating selected language in MainContainer state
  function handleLanguageChange(newLang) {
    setSelectedLanguage(newLang);
  }

  // Handler for mood selection
  function handleMoodChange(newMood) {
    setSelectedMood(newMood);
  }

  // Handler to proceed to recommendations if both mood and language available
  function handleProceed() {
    if (selectedMood && selectedLanguage) {
      // Use both state and search params for robustness (so refresh/bookmark/direct navigation works)
      navigate(`/recommendations?mood=${encodeURIComponent(selectedMood)}&language=${encodeURIComponent(selectedLanguage)}`, {
        state: {
          mood: selectedMood,
          language: selectedLanguage
        }
      });
    }
  }

  // Remove auto-redirect: now user clicks Recommend explicitly

  // Handler for manual mood selection changed (from MoodSelector child)
  // MoodSelector will call this when user selects or submits a mood
  // PUBLIC_INTERFACE

  // Home user landing: mood/language selection
  function renderHomeSelection() {
    // Button should be enabled only if both mood and language are selected or entered
    const isRecommendEnabled = !!selectedMood && !!selectedLanguage;
    return (
      <div className="container" style={{
          maxWidth: 1100, margin: "0 auto", padding: "32px 0", display: "flex", flexWrap: "wrap", gap: 36
        }}>
        <main style={{flex: 3, minWidth: 280}}>
          <section style={{
            background: "#fff", borderRadius: 20, padding: "32px 24px", marginBottom: 36,
            boxShadow: "0 4px 28px #B9A7D6c0", border: "1px solid #F6D6D6"
          }}>
            <MoodSelector onMoodChange={handleMoodChange} />
            <LanguageSelector selected={selectedLanguage} onChange={handleLanguageChange} />
            <div style={{ textAlign: "center", marginTop: 30 }}>
              <button
                className="btn btn-large"
                style={{
                  background: isRecommendEnabled ? "#A8D8EA" : "#A8D8EA77",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "14px 40px",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  letterSpacing: ".02em",
                  boxShadow: isRecommendEnabled
                    ? "0 2px 12px #A8D8EA55"
                    : "0 2px 8px #A8D8EA22",
                  cursor: isRecommendEnabled ? "pointer" : "not-allowed",
                  opacity: isRecommendEnabled ? 1 : 0.65,
                  transition: "background 0.14s, box-shadow 0.13s, opacity 0.13s"
                }}
                onClick={handleProceed}
                disabled={!isRecommendEnabled}
                data-testid="recommend-button"
                aria-label="Get music recommendations"
              >
                Recommend
              </button>
            </div>
          </section>
        </main>
        <aside style={{flex: 1, minWidth: 230, maxWidth: 350}}>
          <TrendsSidebar />
        </aside>
      </div>
    );
  }

  // Recommendations page: shows RecommendationList, receives state via location
  function renderRecommendationsPage() {
    let mood = selectedMood, language = selectedLanguage;
    // Also query from router state in case page was refreshed after redirect
    if (location.state) {
      mood = location.state.mood || mood;
      language = location.state.language || language;
    }

    return (
      <div className="container" style={{
        maxWidth: 1100, margin: "0 auto", padding: "36px 0", display: "flex", flexWrap: "wrap", gap: 36
      }}>
        <main style={{flex: 3, minWidth: 280}}>
          <section>
            <RecommendationList mood={mood} language={language} />
          </section>
        </main>
        <aside style={{flex: 1, minWidth: 230, maxWidth: 350}}>
          <TrendsSidebar />
        </aside>
      </div>
    );
  }

  // Admin dashboard page
  function renderAdminDashboard() {
    return (
      <div className="container" style={{
        maxWidth: 1200, margin: "0 auto", padding: "32px 0"
      }}>
        <AdminDashboard />
      </div>
    );
  }

  return (
    <div className="main-container" style={{
      background: "linear-gradient(120deg, #A8D8EA 0%, #F6D6D6 100%)",
      minHeight: "100vh",
      paddingTop: 80
    }}>
      <nav className="navbar" style={{
        backgroundColor: "#A8D8EA",
        borderBottom: "1px solid #e0e0e0",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100
      }}>
        <div className="container" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <div className="logo" style={{fontWeight: 600, fontSize: "1.2rem", color: "#333", letterSpacing: "1px"}}>
            <span role="img" aria-label="music" className="logo-symbol" style={{color: "#FFB6B9", fontSize: "1.4em"}}>🎵</span>
            MoodMelody
          </div>
          <div>
            <button className="btn" onClick={handleSwitchView} style={{
              background: "#FFB6B9", color: "#fff", border: "none",
              borderRadius: 4, padding: "8px 16px", fontWeight: 500, cursor: "pointer"
            }}>
              {view === "user" ? "Admin Dashboard" : "User View"}
            </button>
          </div>
        </div>
      </nav>

      {view === "admin" ? (
        renderAdminDashboard()
      ) : (
        <Routes>
          <Route
            path="/"
            element={renderHomeSelection()}
          />
          <Route
            path="/recommendations"
            element={renderRecommendationsPage()}
          />
          <Route
            path="*"
            element={renderHomeSelection()}
          />
        </Routes>
      )}
    </div>
  );
}

export default MainContainer;
