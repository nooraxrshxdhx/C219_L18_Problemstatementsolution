import { Search } from "lucide-react";
import { schools } from "../data/data";

function SearchBar({ value, onValueChange, schoolId = "all", onSchoolChange, favsOnly = false, onFavsChange, placeholder }) {
  return (
    <div style={{ width: "100%" }}>
      <div className="search-bar">
        <Search size={18} />
        <input
          type="text"
          value={value}
          onChange={(e) => onValueChange && onValueChange(e.target.value)}
          placeholder={placeholder}
          aria-label="Search"
        />

        <div className="filters">
          <select value={schoolId} onChange={(e) => onSchoolChange && onSchoolChange(e.target.value)} aria-label="Select school">
            <option value="all">All Schools</option>
            {schools.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input type="checkbox" checked={!!favsOnly} onChange={(e) => onFavsChange && onFavsChange(e.target.checked)} />
            <span>Favourites only</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;