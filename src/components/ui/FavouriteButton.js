import { Heart } from "lucide-react";

function FavouriteButton({ active, onToggle }) {
  return (
    <button className="fav-btn" onClick={onToggle}>
      <Heart
        size={20}
        color={active ? "var(--primary)" : "#666"}
        fill={active ? "var(--primary)" : "none"}
      />
    </button>
  );
}

export default FavouriteButton;