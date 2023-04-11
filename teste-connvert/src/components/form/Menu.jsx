import React from "react";
import Logo from "../../images/lazy-panda-logo.jpg"

export default function Menu() {
  return (
    <header>
        <div className="logo">
            <img src={Logo}/>
        </div>

        <div className="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Forms</a></li>
          </ul>
        </div>
    </header>
  );
}
