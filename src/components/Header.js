import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className={style.header}>
        <div className="wrap">
          <div className="gap">
            <div className="container">
              <Link to="/" style={{ textDecoration: "none" }}>
                <h2 className={style.title}>Movie</h2>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
