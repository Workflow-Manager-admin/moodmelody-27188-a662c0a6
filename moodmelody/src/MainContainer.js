import React, { useState } from "react";

// Import placeholder subcomponents
import MoodSelector from "./components/MoodSelector";
import LanguageSelector from "./components/LanguageSelector";
import RecommendationList from "./components/RecommendationList";
import TrendsSidebar from "./components/TrendsSidebar";
import AdminDashboard from "./components/AdminDashboard";

// PUBLIC_INTERFACE
function MainContainer() {
  // State for current view (user/admin), could be based on auth in future
  const [view, setView] = useState("user"); // "user" or "admin"

  // Switch between User and Admin for demo purposes
  const handleSwitchView = () => {
    setView((prev) => (prev === "user" ? "admin" : "user"));
  };

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

      {view === "user" ? (
        <div className="container" style={{
            maxWidth: 1100, margin: "0 auto", padding: "32px 0", display: "flex", flexWrap: "wrap", gap: 36
          }}>
          <main style={{flex: 3, minWidth: 280}}>
            <section style={{
              background: "#fff", borderRadius: 20, padding: "32px 24px", marginBottom: 36,
              boxShadow: "0 4px 28px #B9A7D6c0", border: "1px solid #F6D6D6"
            }}>
              <MoodSelector />
              <LanguageSelector />
            </section>
            <section>
              <RecommendationList />
            </section>
          </main>
          <aside style={{flex: 1, minWidth: 230, maxWidth: 350}}>
            <TrendsSidebar />
          </aside>
        </div>
      ) : (
        <div className="container" style={{
          maxWidth: 1200, margin: "0 auto", padding: "32px 0"
        }}>
          <AdminDashboard />
        </div>
      )}
    </div>
  );
}

export default MainContainer;
