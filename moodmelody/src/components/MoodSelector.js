import React from "react";

// PUBLIC_INTERFACE
function MoodSelector() {
  return (
    <div style={{
      marginBottom: 24,
      textAlign: "center"
    }}>
      <div style={{
        fontSize: "1.2rem",
        color: "#666",
        fontWeight: 500,
        marginBottom: 10
      }}>Select your mood</div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: 14
      }}>
        {/* Placeholder emoji grid; will be made dynamic */}
        <span style={{fontSize: "2rem", cursor: "pointer"}} role="img" aria-label="happy">😊</span>
        <span style={{fontSize: "2rem", cursor: "pointer"}} role="img" aria-label="sad">😢</span>
        <span style={{fontSize: "2rem", cursor: "pointer"}} role="img" aria-label="energetic">⚡️</span>
        <span style={{fontSize: "2rem", cursor: "pointer"}} role="img" aria-label="love">❤️</span>
        <span style={{fontSize: "2rem", cursor: "pointer"}} role="img" aria-label="party">🎉</span>
      </div>
      {/* Placeholder for mood text input */}
      <div style={{marginTop: 18}}>
        <input
          type="text"
          placeholder="Or type your mood..."
          style={{
            padding: "8px 14px",
            borderRadius: 8,
            border: "1px solid #FFDDEE",
            outline: "none",
            fontSize: "1rem",
            background: "#F6D6D6",
            color: "#333",
            width: 200
          }}
        />
      </div>
    </div>
  );
}

export default MoodSelector;
