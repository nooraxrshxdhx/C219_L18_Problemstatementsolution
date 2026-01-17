import { Link, useParams } from "react-router-dom";
import { schools } from "../data/data";
import { useState, useEffect } from "react";
import SearchBar from "../ui/SearchBar";
import FavouriteButton from "../ui/FavouriteButton";

function Diplomas() {
  const { schoolId } = useParams();
  const [query, setQuery] = useState("");
  const [schoolFilter, setSchoolFilter] = useState(schoolId || "all");
  const [favsOnly, setFavsOnly] = useState(false);
  const [favs, setFavs] = useState(() => {
    try {
      const raw = localStorage.getItem("favs:v1");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favs:v1", JSON.stringify(favs));
  }, [favs]);

  // determine base list according to selected school filter or route
  let list = [];
  const effectiveSchool = schoolFilter && schoolFilter !== "all" ? schoolFilter : schoolId ? schoolId : null;
  if (effectiveSchool) {
    const school = schools.find((s) => s.id === effectiveSchool);
    if (school) list = school.diplomas.map((d) => ({ ...d, schoolId: school.id }));
  } else {
    list = schools.flatMap((s) => s.diplomas.map((d) => ({ ...d, schoolId: s.id })));
  }

  const filtered = list.filter((d) => {
    if (favsOnly && !favs.includes(d.id)) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      (d.name && d.name.toLowerCase().includes(q)) ||
      (d.description && d.description.toLowerCase().includes(q))
    );
  });

  return (
    <div className="container">
      <h1>Diplomas</h1>
      <SearchBar
        value={query}
        onValueChange={(v) => setQuery(v)}
        schoolId={schoolFilter}
        onSchoolChange={(s) => setSchoolFilter(s)}
        favsOnly={favsOnly}
        onFavsChange={(b) => setFavsOnly(!!b)}
        placeholder="Search schools, courses, keywords..."
      />

      {filtered.map((diploma) => (
        <div key={diploma.id} className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
            <h2>{diploma.name}</h2>
            <FavouriteButton
              active={favs.includes(diploma.id)}
              onToggle={() => {
                setFavs((prev) =>
                  prev.includes(diploma.id) ? prev.filter((x) => x !== diploma.id) : [...prev, diploma.id]
                );
              }}
            />
          </div>

          <p>{diploma.description}</p>

          {schoolId ? (
            <Link to={`/schools/${schoolId}/diplomas/${diploma.id}`}>
              View Details
            </Link>
          ) : (
            <Link to={`/schools/${diploma.schoolId}/diplomas/${diploma.id}`}>
              View Details
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default Diplomas;