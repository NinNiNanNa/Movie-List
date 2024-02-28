import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className="wrap">
          <div className="gap">
            <div className="container">
              <h2 className={style.logo}>Movie</h2>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
