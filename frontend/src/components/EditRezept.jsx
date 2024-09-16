import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditRezept = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [zutaten, setZutaten] = useState("");
  const [zubereitung, setZubereitung] = useState("");
  const [zeit, setZeit] = useState(0);
  const navigate = useNavigate();

  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`https://rezept.onrender.com/rezept/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setZutaten(data.zutaten);
        setZubereitung(data.zubereitung);
        setZeit(data.zeit);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedRezept = { title, zutaten, zubereitung, zeit };

    await fetch(`${url}/rezept/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRezept),
    });

    navigate(`/rezept/${id}`);
  };

  return (
    <div className="container">
      <h1>Edit Recipe</h1>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRezept;