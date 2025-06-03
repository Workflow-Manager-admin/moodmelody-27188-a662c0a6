import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * MoodSelector allows user to select a mood via emoji or text input.
 * Shows visual indication for selected emoji or submitted mood text.
 *
 * Props:
 * - onMoodChange: function(newMood: string) [optional] - called when user selects/enters a mood
 */
function MoodSelector({ onMoodChange }) {
  // Emoji mood options
  const moods = [
    { emoji: "😊", label: "happy" },
    { emoji: "😢", label: "sad" },
    { emoji: "⚡️", label: "energetic" },
    { emoji: "❤️", label: "love" },
    { emoji: "🎉", label: "party" },
  ];
  // State for selected mood (either from emoji or text)
  const [selectedMood, setSelectedMood] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [justSubmitted, setJustSubmitted] = useState(false);

  // PUBLIC_INTERFACE
  // Sets emoji mood with visual indicator, clears text input
  function handleEmojiClick(label) {
    setSelectedMood(label);
    setInputValue("");
    setJustSubmitted(false);
    if (typeof onMoodChange === "function") {
      onMoodChange(label);
    }
  }

  // PUBLIC_INTERFACE
  // Handles typing text
  function handleTextInput(e) {
    setInputValue(e.target.value);
    setJustSubmitted(false);
    setSelectedMood(""); // Deselect emoji if user types
  }

  // PUBLIC_INTERFACE
  // Submits mood text, updates state and visual indicator
  function handleMoodSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setSelectedMood(inputValue.trim());
      setJustSubmitted(true);
    }
  }

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
      }}>
        Select your mood
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: 14
      }}>
        {moods.map((mood) => (
          <span
            key={mood.label}
            style={{
              fontSize: "2rem",
              cursor: "pointer",
              borderRadius: "50%",
              border:
                selectedMood === mood.label
                  ? "2.5px solid #A8D8EA"
                  : "2.5px solid transparent",
              boxShadow:
                selectedMood === mood.label
                  ? "0 0 8px #A8D8EA66"
                  : "none",
              background:
                selectedMood === mood.label
                  ? "#F6D6D6"
                  : "transparent",
              padding: "3px 6px",
              transition: "background 0.18s, box-shadow 0.2s, border 0.2s",
              outline:
                selectedMood === mood.label ? "3px solid #A8D8EA25" : "none",
              userSelect: "none"
            }}
            role="img"
            aria-label={mood.label}
            tabIndex={0}
            onClick={() => handleEmojiClick(mood.label)}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                handleEmojiClick(mood.label);
              }
            }}
            aria-pressed={selectedMood === mood.label}
          >
            {mood.emoji}
          </span>
        ))}
      </div>
      {/* Mood text input, with submit on Enter or button click */}
      <form
        onSubmit={handleMoodSubmit}
        style={{ marginTop: 18, display: "inline-block" }}
      >
        <input
          type="text"
          placeholder="Or type your mood..."
          style={{
            padding: "8px 14px",
            borderRadius: 8,
            border:
              selectedMood && moods.every(m => m.label !== selectedMood) && justSubmitted
                ? "2px solid #A8D8EA"
                : "1px solid #FFDDEE",
            outline: "none",
            fontSize: "1rem",
            background: "#F6D6D6",
            color: "#333",
            width: 200,
            marginRight: 7,
            boxShadow:
              selectedMood && moods.every(m => m.label !== selectedMood) && justSubmitted
                ? "0 0 8px #A8D8EA55"
                : "none",
            transition: "border 0.18s"
          }}
          value={inputValue}
          onChange={handleTextInput}
          aria-label="Type your mood"
        />
        <button
          type="submit"
          style={{
            background: "#A8D8EA",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "8px 16px",
            fontWeight: 500,
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 1px 5px #A8D8EA20",
            transition: "background 0.15s, box-shadow 0.17s",
            outline:
              selectedMood && moods.every(m => m.label !== selectedMood) && justSubmitted
                ? "2px solid #A8D8EA90"
                : "none"
          }}
          aria-label="Submit mood text"
        >
          Submit
        </button>
      </form>
      {/* Visual feedback text */}
      {selectedMood && (
        <div
          style={{
            marginTop: 15,
            fontSize: "1.01em",
            color: "#A8D8EA",
            fontWeight: 500,
            transition: "color 0.12s"
          }}
        >
          {moods.some(m => m.label === selectedMood)
            ? `Selected mood: ${moods.find(m => m.label === selectedMood).emoji} (${selectedMood})`
            : `Custom mood: “${selectedMood}”`}
        </div>
      )}
    </div>
  );
}

export default MoodSelector;
