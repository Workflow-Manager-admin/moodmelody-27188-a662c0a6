import React from "react";

// PUBLIC_INTERFACE
function TrendsSidebar() {
  return (
    <aside style={{
      background: "#F6D6D6",
      borderRadius: 20,
      padding: "28px 20px",
      boxShadow: "0 2px 8px #A8D8EA30",
      marginBottom: 36,
      minHeight: 220
    }}>
      <div style={{
        fontWeight: 600,
        fontSize: "1.1rem",
        color: "#FFB6B9",
        marginBottom: 15
      }}>Your Trends</div>
      <div style={{color: "#666", fontSize: "0.98rem"}}>
        [Chart & stats coming soon!]
      </div>
    </aside>
  );
}

export default TrendsSidebar;
