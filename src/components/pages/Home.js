import banner from "../../assets/soi-hero-banner-2024.7455aee66183ba225061.jpg";
import { Link } from "react-router-dom";
import { schools } from "../data/data";

function Home() {
  return (
    <div className="container">
      <img src={banner} alt="RP banner" className="hero-banner" />
      <h1>Welcome to the RP Course Portal</h1>
      <p>
        If you’re inspired by new technologies and love solving real‑world
        problems, Republic Polytechnic offers a diverse set of diploma
        programmes across multiple schools. Explore our schools below and find a
        programme that suits you.
      </p>

      <h2>Schools</h2>
      <div className="grid">
        {schools.map((s) => (
          <div key={s.id} className="card">
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <Link to={`/schools/${s.id}`}>View programmes</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;