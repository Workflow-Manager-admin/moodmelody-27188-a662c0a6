import React from "react";
import MoodLanguageSongManager from "./admin/MoodLanguageSongManager";
import UserTrendsAnalytics from "./admin/UserTrendsAnalytics";

// PUBLIC_INTERFACE
/**
 * AdminDashboard provides a suite of admin tools with a pastel/light theme.
 * Integrates CRUD management for mood-language-song mappings and analytics.
 */
function AdminDashboard() {
  return (
    <section
      style={{
        background: "transparent", // parent sections handle backgrounds
        borderRadius: 0,
        padding: 0,
        boxShadow: "none",
        textAlign: "left",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: "1.36rem",
          marginBottom: 18,
          color: "#333",
          paddingLeft: 7,
        }}
      >
        Admin Dashboard
      </div>
      <MoodLanguageSongManager />
      <UserTrendsAnalytics />
    </section>
  );
}

export default AdminDashboard;
