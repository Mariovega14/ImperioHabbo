import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/footer.css";

const FounderCard = ({ username }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://www.habbo.es/api/public/users?name=${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error al cargar usuario:", username));
  }, [username]);

  if (!user) return null;

  const avatarUrl = `https://www.habbo.com/habbo-imaging/avatarimage?figure=${user.figureString}&headonly=0&size=l`;

  return (
    <div className="founder">
      <div className="founder-name">{user.name}</div>
      <img src={avatarUrl} alt={user.name} className="founder-img" />
    </div>
  );
};

const Founders = () => {
  return (
    <footer className="founders-container">
      <h3 className="liderr">Lider</h3>
      <div className="founders">
        <FounderCard username="-Gera" />
      </div>
    </footer>
  );
};

export default Founders;
