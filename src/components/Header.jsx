import React from 'react';
import logo from "../images/naglyad-wash.svg";
import phone from "../images/phone-icon.svg";

export default function Header() {
  return (
    <div className="container">
      <header>
        <a href="https://www.npc.com.ua/">
          <img src={logo} alt="" />
        </a>

        <a href="tel:+380960007603">
          <img src={phone} alt="" />
        </a>
      </header>
    </div>
  )
}
