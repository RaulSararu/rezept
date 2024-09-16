import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateRezept = () => {
  const [title, setTitle] = useState("");
  const [zutaten, setZutaten] = useState("");
  const [zubereitung, setZubereitung] = useState("");
  const [zeit, setZeit] = useState(0);
  const navigate = useNavigate();

  const url = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRezept = { title, zutaten, zubereitung, zeit };

    await fetch(`${url}/rezept`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRezept),
    });

    navigate("/");
  };

  return (
    <div className="container">
      <h1>Create a new Rezept</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Zutaten:</label>
          <input
            type="text"
            value={zutaten}
            onChange={(e) => setZutaten(e.target.value)}
          />
        </div>
        <div>
          <label>Zubereitung:</label>
          <input
            type="text"
            value={zubereitung}
            onChange={(e) => setZubereitung(e.target.value)}
          />
        </div>
        <div>
          <label>Zeit:</label>
          <input
            type="number"
            value={zeit}
            onChange={(e) => setZeit(e.target.value)}
          />
        </div>
        <button type="submit"> Create Article</button>
      </form>
    </div>
  );
};

export default CreateRezept;