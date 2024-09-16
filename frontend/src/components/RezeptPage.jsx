import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RezeptPage = () => {
  const [rezept, setRezept] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URL;
  

  useEffect(() => {

    (async function () {
      try {
        const response = await fetch(`${url}/rezept`);
        const result = await response.json();
        console.log(result);
        setRezept(result);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="container">
      <h1>Rezepte Page</h1>

      <ul>
        {rezept &&
          rezept.map((rez) => (
            <li key={rez._id}>
              <h2>{rez.title}</h2>
              <p>{rez.zutaten}</p>
              <p>{rez.vorbereitung}</p>
              <p>{rez.zeit}</p>
              
              <Link to={`/rezept/${rez._id}`}>Read more</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RezeptPage;