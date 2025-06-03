import React from "react";
import TrendChart from "./TrendChart";

// PUBLIC_INTERFACE
/**
 * TrendsSidebar summarizes the user's recent mood and language selection history,
 * featuring the TrendChart and recent stats in a pastel sidebar.
 */
function TrendsSidebar() {
  // In a real app, this would pull recent user history/statistics
  const moodTrends = [
    { label: "😊 Happy", count: 12, color: "#A8D8EA" },
    { label: "😢 Sad", count: 3, color: "#FFB6B9" },
    { label: "⚡️ Energetic", count: 7, color: "#F6D6D6" },
    { label: "❤️ Love", count: 5, color: "#FFDDD2" },
    { label: "🎉 Party", count: 2, color: "#B9A7D6" }
  ];
  const languageTrends = [
    { label: "English", count: 13, color: "#A8D8EA" },
    { label: "Hindi", count: 7, color: "#FFB6B9" },
    { label: "Spanish", count: 3, color: "#F6D6D6" },
    { label: "French", count: 1, color: "#FFDDD2" }
  ];

  // Example textual stats (could be dynamic)
  const mostFrequentMood = moodTrends.reduce((a, b) => (a.count > b.count ? a : b), moodTrends[0]);
  const mostFrequentLanguage = languageTrends.reduce((a, b) => (a.count > b.count ? a : b), languageTrends[0]);

  return (
    <aside
      style={{
        background: "#F6D6D6",
        borderRadius: 20,
        padding: "28px 20px",
        boxShadow: "0 2px 8px #A8D8EA30",
        marginBottom: 36,
        minHeight: 265
      }}
    >
      <div
        style={{
          fontWeight: 600,
          fontSize: "1.14rem",
          color: "#FFB6B9",
          marginBottom: 12,
          letterSpacing: ".01em"
        }}
      >
        Your Trends
      </div>
      <div style={{ color: "#555", fontSize: "0.97rem", marginBottom: 16 }}>
        <span>
          <b>Most frequent mood:</b> <span style={{color: mostFrequentMood.color}}>{mostFrequentMood.label}</span>
        </span>
        <br />
        <span>
          <b>Top language:</b> <span style={{color: mostFrequentLanguage.color}}>{mostFrequentLanguage.label}</span>
        </span>
      </div>
      <TrendChart moods={moodTrends} languages={languageTrends} />
    </aside>
  );
}

export default TrendsSidebar;
