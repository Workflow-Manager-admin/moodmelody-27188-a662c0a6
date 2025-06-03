import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * RecommendationCard displays an individual music recommendation with media embed, like/save/share.
 * Props:
 * - title: Song title
 * - artist: Artist name
 * - coverUrl: Song cover image URL (optional)
 * - mediaType: "spotify" or "youtube" (controls placeholder embed style)
 * - mediaSrc: URL to embed
 * - onLike: callback for like button
 * - onSave: callback for save button
 * - onShare: callback for share button
 */
function RecommendationCard({
  title,
  artist,
  coverUrl,
  mediaType,
  mediaSrc,
  onLike,
  onSave,
  onShare
}) {
  // Internal state - like & save are local for demo; share invokes parent mock handler
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);

  const pastelBoxShadow = "0 2px 12px #A8D8EA60";

  // Fake embed for placeholders; real implementation would use <iframe> for mediaSrc & type
  function renderMediaEmbed() {
    if (mediaType === "spotify" && !!mediaSrc) {
      return (
        <div style={{
          background: "linear-gradient(90deg, #A8D8EA 80%, #92A9BD 100%)",
          borderRadius: 10,
          height: 90,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#294a6c",
          fontWeight: 500,
        }}>
          {/* Replace below with <iframe ...> in a real implementation */}
          [Spotify player]
        </div>
      );
    }
    if (mediaType === "youtube" && !!mediaSrc) {
      return (
        <div style={{
          background: "linear-gradient(90deg, #F6D6D6 80%, #A8D8EA20 100%)",
          borderRadius: 10,
          height: 90,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#a94442",
          fontWeight: 500,
        }}>
          [YouTube player]
        </div>
      );
    }
    return (
      <div style={{
        background: "#F6D6D6",
        borderRadius: 10,
        height: 90,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#888",
        fontWeight: 500,
      }}>
        [Media preview coming soon]
      </div>
    );
  }

  return (
    <div style={{
      background: "#fff",
      borderRadius: 16,
      boxShadow: pastelBoxShadow,
      padding: 20,
      minWidth: 230,
      maxWidth: 310,
      flex: "1 1 220px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      border: "1px solid #F6D6D6"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {coverUrl &&
          <img
            src={coverUrl}
            alt={`${title} cover`}
            style={{
              width: 48, height: 48, borderRadius: 8, objectFit: "cover",
              border: "1px solid #A8D8EA"
            }}
          />}
        <div>
          <div style={{
            fontWeight: 600, fontSize: "1.07rem", color: "#333", marginBottom: 3
          }}>{title}</div>
          <div style={{
            color: "#A8D8EA",
            fontSize: "0.97rem",
            fontWeight: 500
          }}>{artist}</div>
        </div>
      </div>
      <div style={{ margin: "8px 0" }}>
        {renderMediaEmbed()}
      </div>
      {/* Interactive buttons row */}
      <div style={{
        display: "flex", gap: 12, marginTop: 10
      }}>
        <button
          className="btn"
          style={{
            background: liked ? "#FFB6B9cc" : "#FFB6B9",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "7px 16px",
            fontWeight: 500,
            cursor: "pointer",
            outline: liked ? "2px solid #FFB6B950" : "none"
          }}
          aria-label="Like this song"
          onClick={() => {
            setLiked((l) => !l);
            if (onLike) onLike(!liked);
          }}
        >
          {liked ? "♥ Liked" : "♡ Like"}
        </button>
        <button
          className="btn"
          style={{
            background: saved ? "#A8D8EA" : "#A8D8EA88",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "7px 16px",
            fontWeight: 500,
            cursor: "pointer",
            outline: saved ? "2px solid #A8D8EA30" : "none"
          }}
          aria-label="Save this song"
          onClick={() => {
            const newSaved = !saved;
            setSaved(newSaved);
            if (onSave) onSave(newSaved);
          }}
        >
          {saved ? "✓ Saved" : "💾 Save"}
        </button>
        <button
          className="btn"
          style={{
            background: shared ? "#FFF2CC" : "#F6D6D6",
            color: "#a9832c",
            border: "none",
            borderRadius: 4,
            padding: "7px 14px",
            fontWeight: 500,
            cursor: "pointer",
            outline: shared ? "2px solid #FFB6B950" : "none"
          }}
          aria-label="Share this song"
          onClick={() => {
            setShared(true);
            if (onShare) onShare();
            setTimeout(() => setShared(false), 1200);
          }}
        >
          {shared ? "✔ Shared" : "⇪ Share"}
        </button>
      </div>
    </div>
  );
}

export default RecommendationCard;
