import { useParams, Link } from "react-router-dom";
import { getDiplomaById, getDiplomaByIdInSchool } from "../data/data";

function DiplomaDetails() {
  const { schoolId, diplomaId } = useParams();
  const diploma = schoolId
    ? getDiplomaByIdInSchool(schoolId, diplomaId)
    : getDiplomaById(diplomaId);

  if (!diploma) {
    return (
      <div className="container">
        <h1>Diploma not found</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="detail-grid">
        <div className="detail-main">
          <h1>{diploma.name}</h1>
          <p>{diploma.description}</p>

          <div className="divider" />

          <h2>Modules</h2>
          <div className="tiles">
            {diploma.modules.map((module) => (
              <div key={module.id} className="tile">
                <div className="tile-body">
                  <h3>{module.name}</h3>
                  <p>{module.description}</p>
                  <div style={{ marginTop: 12 }}>
                    {schoolId ? (
                      <Link to={`/schools/${schoolId}/diplomas/${diploma.id}/${module.id}`}>View Module</Link>
                    ) : (
                      <Link to={`/diplomas/${diploma.id}/${module.id}`}>View Module</Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="detail-side">
          <h2>Details</h2>
          <p><strong>Diploma ID:</strong> {diploma.id}</p>
          <p><strong>Number of modules:</strong> {diploma.modules.length}</p>
        </aside>
      </div>
    </div>
  );
}

export default DiplomaDetails;