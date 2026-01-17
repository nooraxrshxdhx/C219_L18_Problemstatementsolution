import { useParams } from "react-router-dom";
import { getModuleById, getModuleByIdInSchool } from "../data/data";

function ModuleDetails() {
  const { schoolId, diplomaId, moduleId } = useParams();
  const module = schoolId
    ? getModuleByIdInSchool(schoolId, diplomaId, moduleId)
    : getModuleById(diplomaId, moduleId);

  if (!module) {
    return (
      <div className="container">
        <h1>Module not found</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="detail-grid">
        <div className="detail-main">
          <h1>{module.name}</h1>
          <p>{module.description}</p>
        </div>

        <aside className="detail-side">
          <div className="panel">
            {module.duration && (
              <p><strong>Duration:</strong> {module.duration}</p>
            )}
            {module.credits && (
              <p><strong>Credits:</strong> {module.credits}</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ModuleDetails;