import React from "react";

// PUBLIC_INTERFACE
function LanguageSelector() {
  return (
    <div style={{marginBottom: 28, textAlign: "center"}}>
      <div style={{
        fontSize: "1.1rem",
        fontWeight: 500,
        color: "#666",
        marginBottom: 10
      }}>Choose language(s)</div>
      {/* Placeholder for future multi-select language dropdown */}
      <select multiple style={{
        padding: "8px 16px",
        borderRadius: 8,
        border: "1px solid #A8D8EA",
        background: "#A8D8EA",
        color: "#333",
        fontSize: "1rem",
        minWidth: 180,
        outline: "none"
      }}>
        <option>English</option>
        <option>Hindi</option>
        <option>Spanish</option>
        <option>French</option>
        <option>Chinese</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
