import React from 'react';
import phone from "../images/phone-icon.svg";
import { useSelector } from 'react-redux';

export default function Header() {
  const info = useSelector(store => store.washer.info);

  return (
    <div className="container">
      <header>
        {info?.page?.logo_url && <>
          <a href="https://www.npc.com.ua/">
            <img src={info.page.logo_url} alt="" />
          </a>
        </>}

        {info?.page?.phone_number && <>
          <a href={"tel:+38" + info.page.phone_number}>
            <img src={phone} alt="" />
          </a>
        </>}
      </header>
    </div>
  )
}
