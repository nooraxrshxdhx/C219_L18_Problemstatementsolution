import { Link } from "react-router-dom";
import { schools } from "../data/data";

function Schools() {
  return (
    <div className="container">
      <h1>Schools</h1>

      {schools.map((school) => (
        <div key={school.id} className="card">
          <h2>{school.name}</h2>
          <p>{school.description}</p>

          <Link to={`/schools/${school.id}`}>
            View School
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Schools;
