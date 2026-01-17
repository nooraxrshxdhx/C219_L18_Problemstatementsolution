import { useLocation } from "react-router-dom";
import { getDiplomaById, getDiplomaByIdInSchool, getSchoolById } from "../data/data";

function Confirmation() {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="container">
        <h1>No registration data found</h1>
      </div>
    );
  }

  let diplomaName = state.diploma;
  let schoolName = "";

  if (state.school) {
    const school = getSchoolById(state.school);
    schoolName = school ? school.name : "";
    const d = getDiplomaByIdInSchool(state.school, state.diploma);
    if (d) diplomaName = d.name;
  } else {
    const d = getDiplomaById(state.diploma);
    if (d) diplomaName = d.name;
  }

  return (
    <div className="container">
      <h1>Registration Successful</h1>

      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      {schoolName && <p><strong>School:</strong> {schoolName}</p>}
      <p><strong>Diploma:</strong> {diplomaName}</p>
    </div>
  );
}

export default Confirmation;