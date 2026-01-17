import { useParams, Link } from "react-router-dom";
import { getSchoolById } from "../data/data";

function SchoolDetails() {
  const { schoolId } = useParams();
  const school = getSchoolById(schoolId);

  if (!school) {
    return (
      <div className="container">
        <h1>School not found</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{school.name}</h1>
      <p>{school.description}</p>

      <h2>Diplomas</h2>
      {school.diplomas.map((d) => (
        <div key={d.id} className="card">
          <h3>{d.name}</h3>
          <p>{d.description}</p>
          <Link to={`/schools/${school.id}/diplomas/${d.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SchoolDetails;
