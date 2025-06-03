import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * MoodLanguageSongManager manages CRUD operations for mood-language-song mappings.
 * Now includes mock add/edit/delete with user feedback, modal forms, and snackbars.
 */
function MoodLanguageSongManager() {
  // Sample initial data
  const [mappings, setMappings] = useState([
    {
      mood: "😊 Happy",
      language: "English",
      song: "Lost in the Light",
    },
    {
      mood: "😢 Sad",
      language: "Hindi",
      song: "Rainy Evening",
    },
    {
      mood: "⚡️ Energetic",
      language: "Spanish",
      song: "Viva Beat",
    }
  ]);

  // UI states
  const [statusMsg, setStatusMsg] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editIdx, setEditIdx] = useState(null);
  const [form, setForm] = useState({ mood: "", language: "", song: "" });

  // Options (for demo, static - in a real app, would sync with main app state)
  const moodOptions = ["😊 Happy", "😢 Sad", "⚡️ Energetic", "❤️ Love", "🎉 Party"];
  const languageOptions = [
    "English",
    "Hindi",
    "Spanish",
    "French",
    "Chinese"
  ];

  // PUBLIC_INTERFACE
  function handleOpenAdd() {
    setShowAdd(true);
    setForm({ mood: "", language: "", song: "" });
  }

  // PUBLIC_INTERFACE
  function handleCloseAdd() {
    setShowAdd(false);
    setForm({ mood: "", language: "", song: "" });
  }

  // PUBLIC_INTERFACE
  function handleOpenEdit(idx) {
    setShowEdit(true);
    setEditIdx(idx);
    setForm({ ...mappings[idx] });
  }
  function handleCloseEdit() {
    setShowEdit(false);
    setEditIdx(null);
    setForm({ mood: "", language: "", song: "" });
  }

  // PUBLIC_INTERFACE
  function handleFormChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // PUBLIC_INTERFACE
  function handleAddSubmit(e) {
    e.preventDefault();
    if (!form.mood || !form.language || !form.song) {
      setStatusMsg("Please fill all fields.");
      setTimeout(() => setStatusMsg(""), 1600);
      return;
    }
    setMappings([...mappings, { ...form }]);
    setShowAdd(false);
    setStatusMsg("Mapping added!");
    setTimeout(() => setStatusMsg(""), 1600);
    setForm({ mood: "", language: "", song: "" });
  }

  // PUBLIC_INTERFACE
  function handleEditSubmit(e) {
    e.preventDefault();
    const updated = [...mappings];
    updated[editIdx] = { ...form };
    setMappings(updated);
    setShowEdit(false);
    setEditIdx(null);
    setStatusMsg("Mapping updated!");
    setTimeout(() => setStatusMsg(""), 1600);
    setForm({ mood: "", language: "", song: "" });
  }

  // PUBLIC_INTERFACE
  function handleDelete(idx) {
    const newArr = mappings.filter((_, i) => i !== idx);
    setMappings(newArr);
    setStatusMsg("Mapping deleted.");
    setTimeout(() => setStatusMsg(""), 1500);
  }

  // Simple modal
  function renderModal(children, onDismiss) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(160,180,255,0.16)",
          zIndex: 1001,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        onClick={onDismiss}
      >
        <div
          style={{
            background: "#fff",
            padding: "30px 24px 20px 24px",
            borderRadius: 17,
            minWidth: 300,
            minHeight: 120,
            boxShadow: "0 4px 32px #A8D8EA60",
            display: "flex",
            flexDirection: "column",
            gap: 13,
            position: "relative"
          }}
          onClick={e => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <section
      style={{
        background: "#F6D6D6",
        borderRadius: 20,
        padding: "34px 24px",
        boxShadow: "0 2px 10px #A8D8EA30",
        border: "1px solid #A8D8EA",
        marginBottom: 38,
        position: "relative"
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: "1.15rem",
          marginBottom: 18,
          color: "#A8D8EA",
        }}
      >
        Mood-Language-Song Management
      </div>
      <div
        style={{
          color: "#444",
          fontSize: "1rem",
          marginBottom: 15,
        }}
      >
        Add, Edit, or Remove mappings between moods, languages, and recommended songs.
      </div>
      <div>
        <button
          className="btn"
          style={{
            background: "#A8D8EA",
            color: "#fff",
            marginRight: 8,
            borderRadius: 6,
            fontWeight: 600,
            outline: showAdd ? "2px solid #A8D8EA50" : "none",
            boxShadow: showAdd ? "0 0 0 2px #A8D8EA50" : "none"
          }}
          data-testid="add-mapping"
          onClick={handleOpenAdd}
        >
          + Add Mapping
        </button>
      </div>
      <div style={{
        marginTop: 20,
        borderCollapse: "collapse",
        width: "100%",
        overflowX: "auto"
      }}>
        {/* Pastel table for mapping list */}
        <table style={{
          width: "100%",
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 1px 7px #b9a7d620",
          border: "1px solid #eee"
        }}>
          <thead>
            <tr style={{background: "#A8D8EA10", color: "#333"}}>
              <th style={{padding: 10}}>Mood</th>
              <th style={{padding: 10}}>Language</th>
              <th style={{padding: 10}}>Song</th>
              <th style={{padding: 10}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mappings.length === 0 && (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", color: "#bbb", padding: 15}}>No mappings yet.</td>
              </tr>
            )}
            {mappings.map((row, idx) => (
              <tr key={idx}>
                <td style={{padding: 8}}>{row.mood}</td>
                <td style={{padding: 8}}>{row.language}</td>
                <td style={{padding: 8}}>{row.song}</td>
                <td style={{padding: 8, display: "flex", gap: 8}}>
                  <button
                    className="btn"
                    style={{
                      background: "#FFB6B9",
                      color: "#fff",
                      marginRight: 2,
                      borderRadius: 5,
                      fontWeight: 500,
                      outline: showEdit && editIdx === idx ? "2px solid #FFB6B9" : "none"
                    }}
                    onClick={() => handleOpenEdit(idx)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn"
                    style={{
                      background: "#F6D6D6",
                      color: "#a94442",
                      border: "1px solid #FFB6B9",
                      borderRadius: 5,
                      fontWeight: 500
                    }}
                    onClick={() => handleDelete(idx)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* More rows (dynamic in future) */}
          </tbody>
        </table>
      </div>
      {/* --- Add Modal --- */}
      {showAdd &&
        renderModal(
          <form onSubmit={handleAddSubmit} style={{display:"flex",flexDirection:"column",gap:12}}>
            <div style={{fontWeight:600, fontSize:"1.07em",color:"#A8D8EA",marginBottom:2}}>Add Mapping</div>
            <label style={{display:"flex",flexDirection:"column",gap:3}}>
              Mood
              <select
                name="mood"
                value={form.mood}
                onChange={handleFormChange}
                style={{padding:"8px 2px",borderRadius:7,border:"1px solid #A8D8EA",fontWeight:500,background:"#F6D6D6"}}
                required
              >
                <option value="">Select Mood</option>
                {moodOptions.map((m) => (
                  <option value={m} key={m}>{m}</option>
                ))}
              </select>
            </label>
            <label style={{display:"flex",flexDirection:"column",gap:3}}>
              Language
              <select
                name="language"
                value={form.language}
                onChange={handleFormChange}
                style={{padding:"8px 2px",borderRadius:7,border:"1px solid #A8D8EA",fontWeight:500,background:"#F6D6D6"}}
                required
              >
                <option value="">Select Language</option>
                {languageOptions.map((l) => (
                  <option value={l} key={l}>{l}</option>
                ))}
              </select>
            </label>
            <label style={{display:"flex",flexDirection:"column",gap:3}}>
              Song
              <input
                type="text"
                name="song"
                value={form.song}
                onChange={handleFormChange}
                required
                style={{padding:"7px 3px",borderRadius:7,border:"1px solid #A8D8EA", fontWeight:500,background:"#fff"}}
                placeholder="Song Title"
              />
            </label>
            <div style={{display:"flex",gap:8,marginTop:6,justifyContent:"flex-end"}}>
              <button
                type="button"
                className="btn"
                style={{background:"#F6D6D6",color:"#294a6c",border:"1px solid #A8D8EA",borderRadius:6}}
                onClick={handleCloseAdd}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn"
                style={{background:"#A8D8EA",color:"#fff",borderRadius:6,fontWeight:600}}
              >
                Save
              </button>
            </div>
          </form>,
          handleCloseAdd
        )
      }
      {/* --- Edit Modal --- */}
      {showEdit &&
        renderModal(
          <form onSubmit={handleEditSubmit} style={{display:"flex",flexDirection:"column",gap:12}}>
            <div style={{fontWeight:600, fontSize:"1.07em",color:"#FFB6B9",marginBottom:2}}>Edit Mapping</div>
            <label style={{display:"flex",flexDirection:"column",gap:3}}>
              Mood
              <select
                name="mood"
                value={form.mood}
                onChange={handleFormChange}
                style={{padding:"8px 2px",borderRadius:7,border:"1px solid #FFB6B9",fontWeight:500,background:"#F6D6D6"}}
                required
              >
                <option value="">Select Mood</option>
                {moodOptions.map((m) => (
                  <option value={m} key={m}>{m}</option>
                ))}
              </select>
            </label>
            <label style={{display:"flex",flexDirection:"column",gap:3}}>
              Language
              <select
                name="language"
                value={form.language}
                onChange={handleFormChange}
                style={{padding:"8px 2px",borderRadius:7,border:"1px solid #FFB6B9",fontWeight:500,background:"#F6D6D6"}}
                required
              >
                <option value="">Select Language</option>
                {languageOptions.map((l) => (
                  <option value={l} key={l}>{l}</option>
                ))}
              </select>
            </label>
            <label style={{display:"flex",flexDirection:"column",gap:3}}>
              Song
              <input
                type="text"
                name="song"
                value={form.song}
                onChange={handleFormChange}
                required
                style={{padding:"7px 3px",borderRadius:7,border:"1px solid #FFB6B9", fontWeight:500,background:"#fff"}}
                placeholder="Song Title"
              />
            </label>
            <div style={{display:"flex",gap:8,marginTop:6,justifyContent:"flex-end"}}>
              <button
                type="button"
                className="btn"
                style={{background:"#F6D6D6",color:"#294a6c",border:"1px solid #FFB6B9",borderRadius:6}}
                onClick={handleCloseEdit}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn"
                style={{background:"#FFB6B9",color:"#fff",borderRadius:6,fontWeight:600}}
              >
                Save
              </button>
            </div>
          </form>,
          handleCloseEdit
        )
      }
      {/* Snackbar/status message */}
      {statusMsg && (
        <div
          style={{
            position: "fixed",
            left: "50%",
            bottom: 38,
            transform: "translateX(-50%)",
            background: "#fff",
            color: "#A8D8EA",
            padding: "10px 32px",
            borderRadius: 24,
            boxShadow: "0 4px 24px #A8D8EA33",
            fontWeight: 600,
            fontSize: "1rem",
            zIndex: 1205,
            border: "1px solid #A8D8EA",
            textAlign: "center",
            letterSpacing: ".01em"
          }}
          role="alert"
        >
          {statusMsg}
        </div>
      )}
    </section>
  );
}

export default MoodLanguageSongManager;
