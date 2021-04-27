import React, { useEffect, useState } from "react";
import "./NavBar.css";


function NavBar() {
  const [show, setShow] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);



  return (
    <div className={`nav ${show && "navBlack"}`}>
      <img
        className="navLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/3/36/Netflix_logo_%282%29.svg"
        alt="logo netflix"
      />

      <img
        className="avatarLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar netflix"
      />
    </div>
  );
}

export default NavBar;
