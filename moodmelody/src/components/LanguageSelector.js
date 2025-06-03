import React, { useState } from "react";

// PUBLIC_INTERFACE
/**
 * LanguageSelector displays a multi-select dropdown for choosing languages,
 * styled with pastel/brand colors for a consistent, inviting look.
 * Uses multi-select if required (true by default).
 */
function LanguageSelector({ multiSelect = true }) {
  // List of available language options
  const languageOptions = [
    { value: "English", color: "#A8D8EA" },
    { value: "Hindi", color: "#FFB6B9" },
    { value: "Spanish", color: "#F6D6D6" },
    { value: "French", color: "#FFDDD2" },
    { value: "Chinese", color: "#B9A7D6" },
  ];

  // State for selected languages
  const [selected, setSelected] = useState([]);

  /**
   * Handle change event for <select>
   */
  // PUBLIC_INTERFACE
  function handleChange(e) {
    const options = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelected(options);
  }

  // Pastel background gradient for dropdown
  const pastelGradient =
    "linear-gradient(90deg, #A8D8EA 60%, #F6D6D6 100%)";

  const pastelBoxShadow =
    "0 2px 8px #A8D8EA30";

  return (
    <div style={{ marginBottom: 28, textAlign: "center" }}>
      <div
        style={{
          fontSize: "1.13rem",
          fontWeight: 500,
          color: "#666",
          marginBottom: 12,
          letterSpacing: "0.01em",
        }}
      >
        Choose language{multiSelect ? "(s)" : ""}
      </div>
      <select
        multiple={multiSelect}
        value={selected}
        onChange={handleChange}
        style={{
          padding: "10px 18px",
          borderRadius: 10,
          border: "1px solid #A8D8EA",
          background: pastelGradient,
          color: "#294a6c",
          fontSize: "1.03rem",
          minWidth: 184,
          outline: "none",
          fontWeight: 500,
          boxShadow: pastelBoxShadow,
          transition: "border 0.2s",
        }}
        aria-label={`Select language${multiSelect ? "s" : ""}`}
      >
        {languageOptions.map((lang) => (
          <option
            key={lang.value}
            value={lang.value}
            style={{
              background: lang.color,
              color: "#294a6c",
              fontWeight: 500,
              borderRadius: 6,
              padding: "7px 0",
            }}
          >
            {lang.value}
          </option>
        ))}
      </select>
      {selected.length > 0 && (
        <div
          style={{
            marginTop: 11,
            fontSize: "0.97em",
            color: "#A8D8EA",
            fontWeight: 500,
            letterSpacing: ".01em",
          }}
        >
          Selected:{" "}
          {selected.join(", ")}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
