import React from "react";

/**
 * PUBLIC_INTERFACE
 * TrendChart visualizes recent user mood & language trends as a simple static chart.
 * Props:
 *  - moods: Array<{ label: string, count: number, color: string }>
 *  - languages: Array<{ label: string, count: number, color: string }>
 */
function TrendChart({
  moods = [
    { label: "😊 Happy", count: 10, color: "#A8D8EA" },
    { label: "😢 Sad", count: 4, color: "#FFB6B9" },
    { label: "⚡️ Energetic", count: 7, color: "#F6D6D6" },
    { label: "❤️ Love", count: 3, color: "#FFDDD2" },
    { label: "🎉 Party", count: 5, color: "#B9A7D6" }
  ],
  languages = [
    { label: "English", count: 12, color: "#A8D8EA" },
    { label: "Hindi", count: 6, color: "#FFB6B9" },
    { label: "Spanish", count: 4, color: "#F6D6D6" },
    { label: "French", count: 2, color: "#FFDDD2" }
  ]
}) {
  // Find maximums for scaling bar chart
  const maxMood = Math.max(...moods.map(m => m.count), 1);
  const maxLang = Math.max(...languages.map(l => l.count), 1);

  return (
    <div>
      <div style={{ fontSize: "1.04rem", color: "#294a6c", marginBottom: 8, fontWeight: 500 }}>
        Recent Moods
      </div>
      <div style={{ marginBottom: 22 }}>
        {moods.map((mood, idx) => (
          <div key={mood.label} style={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
            <div style={{ minWidth: 68, color: "#333", fontWeight: 400, fontSize: "0.96em" }}>{mood.label}</div>
            <div
              style={{
                marginLeft: 7,
                height: 11,
                borderRadius: 5,
                background: mood.color,
                boxShadow: "0 1px 5px #a8d8ea33",
                width: (mood.count / maxMood) * 92 + 35 // pastel width scaling
              }}
              title={`${mood.count} times`}
            />
            <span style={{ marginLeft: 8, fontSize: "0.92em", color: "#888" }}>{mood.count}</span>
          </div>
        ))}
      </div>
      <div style={{ fontSize: "1.04rem", color: "#a94442", marginBottom: 8, fontWeight: 500 }}>
        Languages Used
      </div>
      <div>
        {languages.map(language => (
          <div key={language.label} style={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
            <div style={{ minWidth: 50, color: "#555", fontSize: "0.95em" }}>{language.label}</div>
            <div
              style={{
                marginLeft: 7,
                height: 11,
                borderRadius: 5,
                background: language.color,
                boxShadow: "0 1px 5px #f6d6d660",
                width: (language.count / maxLang) * 70 + 28
              }}
              title={`${language.count} times`}
            />
            <span style={{ marginLeft: 8, fontSize: "0.92em", color: "#aaa" }}>{language.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendChart;
