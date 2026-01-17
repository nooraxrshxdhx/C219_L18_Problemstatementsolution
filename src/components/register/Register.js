import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { schools } from "../data/data";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    school: "",
    diploma: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "school") {
      setForm({ ...form, school: value, diploma: "" });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/confirmation", { state: form });
  }

  return (
    <div className="container">
      <h1>Register</h1>

      <form className="form panel" onSubmit={handleSubmit} style={{ maxWidth: 560 }}>
        <div>
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div>
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>

        <div>
          <label>School</label>
          <select name="school" value={form.school} onChange={handleChange}>
            <option value="">All schools</option>
            {schools.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Diploma</label>
          <select name="diploma" value={form.diploma} onChange={handleChange} required>
            <option value="">Select a diploma</option>
            {(() => {
              const list = form.school
                ? schools.find((s) => s.id === form.school)?.diplomas || []
                : schools.flatMap((s) => s.diplomas.map((d) => ({ ...d, schoolId: s.id })));

              return list.map((d) => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ));
            })()}
          </select>
        </div>

        <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-ghost" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Register;