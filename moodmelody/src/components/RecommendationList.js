import React from "react";

// PUBLIC_INTERFACE
function RecommendationList() {
  return (
    <div>
      <div style={{
        fontWeight: 600,
        fontSize: "1.1rem",
        marginBottom: 12,
        color: "#333"
      }}>
        Your Recommendations
      </div>
      {/* Placeholder cards */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 18
      }}>
        {["Sample Song 1", "Sample Song 2", "Sample Song 3"].map((song, i) => (
          <div key={i} style={{
            background: "#fff",
            padding: 18,
            borderRadius: 14,
            boxShadow: "0 2px 10px #A8D8EA40",
            minWidth: 220,
            flex: 1
          }}>
            <div style={{fontWeight: 500, fontSize: "1rem", color: "#222"}}>{song}</div>
            <div style={{margin: "12px 0", height: 92,
              background: "#A8D8EA40", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#888"
            }}>
              [Embedded Player coming soon]
            </div>
            <div>
              <button className="btn" style={{
                background: "#FFB6B9", color: "#fff", border: "none", borderRadius: 4, padding: "6px 16px", marginRight: 7, cursor: "pointer"
              }}>Like</button>
              <button className="btn" style={{
                background: "#A8D8EA", color: "#fff", border: "none", borderRadius: 4, padding: "6px 16px", cursor: "pointer"
              }}>Save</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationList;
