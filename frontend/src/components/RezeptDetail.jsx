import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RezeptDetail = () => {
  const { id } = useParams();
  const [rezept, setRezept] = useState(null);
  const navigate = useNavigate();

  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${url}/rezept/${id}`)
      .then((response) => response.json())
      .then((data) => setRezept(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`${url}/rezept/${id}`, {
        method: "DELETE",
      });

      navigate("/");
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  if (!rezept) return <div className="container">Loading...</div>;
  return (
    <div className="container">
      <h1>{rezept?.title}</h1>
      <p>{rezept?.zutaten}</p>
      <p>{rezept?.zubereitung}</p>
      <p>{rezept?.zeit}</p>
      <p>
        <em>{new Date(rezept?.date).toLocaleDateString()}</em>
      </p>
     
      <button onClick={handleDelete} style={{ background: "red" }}>
        Delete Article
      </button>
      <button onClick={handleEdit} style={{ background: "blue", color: "white" }}>
        Edit Recipe
      </button>
    </div>


  );
};

export default RezeptDetail;