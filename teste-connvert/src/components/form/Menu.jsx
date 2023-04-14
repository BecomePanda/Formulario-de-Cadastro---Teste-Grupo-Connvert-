import React from "react";
import Logo from "../../images/lazy-panda-logo.jpg";

export default function() {
  return (
    <header>
        <div className="logo">
            <img src={Logo}/>
        </div>

        <div className="menu">
          <ul>
            <li><a href="/#homepage">Home</a></li>
            <li><a href="/#test">About</a></li>
            <li><a href="/form">Forms</a></li>
          </ul>
        </div>
    </header>
  );
}
