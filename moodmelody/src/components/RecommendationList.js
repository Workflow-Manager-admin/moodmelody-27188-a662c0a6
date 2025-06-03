import React from "react";
import RecommendationCard from "./RecommendationCard";

// PUBLIC_INTERFACE
/**
 * RecommendationList renders a list of music recommendations filtered by mood and language,
 * with an aesthetically pastel music card UI and interactive controls.
 *
 * Props:
 *   - mood: string (user's selected mood)
 *   - language: string (user's selected language)
 */
function RecommendationList({ mood, language }) {
  // Mock recommendation data with moods & languages for demo filtering
  const sampleRecommendations = [
    {
      title: "Lost in the Light",
      artist: "Paper Sounds",
      coverUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=96&q=80",
      mediaType: "spotify",
      mediaSrc: "https://open.spotify.com/track/example1",
      mood: "happy",
      language: "English",
    },
    {
      title: "Rainy Evening",
      artist: "Amit Gupta",
      coverUrl: "https://images.unsplash.com/photo-1465101178521-c84b7cd6617e?auto=format&fit=facearea&w=96&q=80",
      mediaType: "youtube",
      mediaSrc: "https://www.youtube.com/watch?v=rain123",
      mood: "sad",
      language: "Hindi",
    },
    {
      title: "Energy Boost",
      artist: "Nova Blue",
      coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=96&q=80",
      mediaType: "spotify",
      mediaSrc: "https://open.spotify.com/track/energy003",
      mood: "energetic",
      language: "English",
    },
    {
      title: "Fiesta",
      artist: "Luis Domingo",
      coverUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=96&q=80",
      mediaType: "youtube",
      mediaSrc: "https://www.youtube.com/watch?v=fiesta789",
      mood: "party",
      language: "Spanish",
    },
    {
      title: "Coeur Doux",
      artist: "Amélie",
      coverUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=facearea&w=96&q=80",
      mediaType: "spotify",
      mediaSrc: "https://open.spotify.com/track/heartfr001",
      mood: "love",
      language: "French",
    },
    {
      title: "Today Feels Right",
      artist: "Sunset Drive",
      coverUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=96&q=80",
      mediaType: "youtube",
      mediaSrc: "https://www.youtube.com/watch?v=video2",
      mood: "happy",
      language: "English",
    },
    {
      title: "Viva Beat",
      artist: "Carlos Rio",
      coverUrl: "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=facearea&w=96&q=80",
      mediaType: "spotify",
      mediaSrc: "https://open.spotify.com/track/viva123",
      mood: "energetic",
      language: "Spanish",
    },
    {
      title: "Peaceful Flow",
      artist: "Liu Wen",
      coverUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=facearea&w=96&q=80",
      mediaType: "youtube",
      mediaSrc: "https://www.youtube.com/watch?v=peace456",
      mood: "happy",
      language: "Chinese",
    },
    {
      title: "Breeze",
      artist: "Nova Blue",
      mediaType: "youtube",
      mediaSrc: "https://www.youtube.com/watch?v=video4",
      mood: "happy",
      language: "English",
      // No cover for demo
    },
    {
      title: "Shades of Spring",
      artist: "Amara",
      coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=96&q=80",
      mediaType: "spotify",
      mediaSrc: "https://open.spotify.com/track/example3",
      mood: "love",
      language: "English",
    },
  ];

  // Return TRUE if a recommendation matches mood/language (case-insensitive contains)
  function isMatch(rec) {
    // Accept fuzzy matches; exact match for language, substring match for mood
    if (!mood || !language) return true;
    const moodNorm = ("" + mood).toLowerCase();
    const langNorm = ("" + language).toLowerCase();
    const recMood = (rec.mood || "").toLowerCase();
    const recLang = (rec.language || "").toLowerCase();
    // Mood (selected) can be custom text input; look for substring match
    return recLang.indexOf(langNorm) >= 0 && (
      recMood.indexOf(moodNorm) >= 0 ||
      moodNorm.indexOf(recMood) >= 0
    );
  }
  // Filter the mock data (simulate API filtering)
  const filtered = sampleRecommendations.filter(isMatch);

  // Pastel background and header styles for themed UI
  const pastelBanner =
    "linear-gradient(82deg, #A8D8EA 50%, #F6D6D6 100%)";

  return (
    <div>
      <div
        style={{
          fontWeight: 600,
          fontSize: "1.23rem",
          marginBottom: 23,
          color: "#294a6c",
          letterSpacing: ".01em",
          background: pastelBanner,
          borderRadius: 14,
          padding: "19px 24px 11px 20px",
          boxShadow: "0 2px 12px #A8D8EA12",
          textShadow: "0 1px 4px #F6D6D6AA",
          border: "1px solid #F6D6D6"
        }}
      >
        {mood && language
          ? (
            <>
              <span role="img" aria-label="music">&nbsp;🎶&nbsp;</span>
              Recommendations for <b style={{ color: "#FFB6B9" }}>"{mood}"</b>
              {" in "}
              <span style={{ color: "#A8D8EA" }}>{language}</span>
            </>
          )
          : "Your Recommendations"}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 26,
          justifyContent: filtered.length > 2 ? "flex-start" : "center",
          background: "#FFF6FB",
          borderRadius: 17,
          padding: filtered.length === 0 ? "38px 0" : "23px 14px 19px 14px",
          minHeight: 180,
          boxShadow: "0 1px 12px #A8D8EA18",
          border: "1px solid #F6D6D6"
        }}
      >
        {filtered.length === 0 ? (
          <div
            style={{
              color: "#FFB6B9",
              fontWeight: 500,
              fontSize: "1.07rem",
              textAlign: "center",
              flex: 1,
              margin: "12px 0"
            }}
          >
            Sorry, no recommendations found for mood "<b>{mood}</b>" in <b>{language}</b>.<br />
            Try another mood or language!
          </div>
        ) : (
          filtered.map((rec, idx) => (
            <RecommendationCard
              key={idx}
              {...rec}
              onLike={() => {}}
              onSave={() => {}}
              onShare={() => {
                window.alert(
                  "Share functionality coming soon!\n(You clicked share on: " + rec.title + ")"
                );
              }}
            />
          ))
        )}
      </div>
      {/* Save for future: allow more UX features (history, etc) */}
    </div>
  );
}

export default RecommendationList;
