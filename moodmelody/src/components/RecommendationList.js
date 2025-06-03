import React from "react";
import RecommendationCard from "./RecommendationCard";

// Dummy data for music recommendations
const dummyRecommendations = [
  {
    title: "Lost in the Light",
    artist: "Paper Sounds",
    coverUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=96&q=80",
    mediaType: "spotify",
    mediaSrc: "https://open.spotify.com/track/example1"
  },
  {
    title: "Today Feels Right",
    artist: "Sunset Drive",
    coverUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=96&q=80",
    mediaType: "youtube",
    mediaSrc: "https://www.youtube.com/watch?v=video2"
  },
  {
    title: "Shades of Spring",
    artist: "Amara",
    coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=96&q=80",
    mediaType: "spotify",
    mediaSrc: "https://open.spotify.com/track/example3"
  },
  {
    title: "Breeze",
    artist: "Nova Blue",
    // No cover for demo
    mediaType: "youtube",
    mediaSrc: "https://www.youtube.com/watch?v=video4"
  }
];

/**
 * PUBLIC_INTERFACE
 * RecommendationList renders a list of music recommendations based on user input.
 * Props:
 *   - mood: string (optional) - the user's selected mood
 *   - language: string (optional) - the user's selected language
 */
function RecommendationList({ mood, language }) {
  // In the future, filter or fetch recommendations using mood/language.
  // For now, still display dummy recommendations.
  return (
    <div>
      <div style={{
        fontWeight: 600,
        fontSize: "1.1rem",
        marginBottom: 16,
        color: "#333",
        letterSpacing: ".01em"
      }}>
        {mood && language
          ? `Recommendations for "${mood}" in ${language}`
          : "Your Recommendations"}
      </div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 22,
        justifyContent: "flex-start"
      }}>
        {dummyRecommendations.map((rec, idx) => (
          <RecommendationCard
            key={idx}
            {...rec}
            onLike={() => { /* could handle like globally */ }}
            onSave={() => { /* could handle save globally */ }}
            onShare={() => {
              // Mock alert for share button
              window.alert("Share functionality coming soon!\n(You clicked share on: " + rec.title + ")");
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendationList;
