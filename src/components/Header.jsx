import React, { useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import "../css/Header.css";
import { Link } from "react-router-dom";

const Header = ({ setQuery }) => {
  const [localQuery, setLocalQuery] = useState("");

  const handleSearch = () => {
    setQuery(localQuery);
  };

  return (
    <header>
      <nav className="maxWidth">
        <img src={logo} alt="logo" />
        {setQuery && (
          <div className="search-container">
            <input
              type="text"
              placeholder="Search Pokemon or ID"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
            />
            <Link to={`/${localQuery}`}>
              <Button label={"Search"} onClick={handleSearch} />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;















