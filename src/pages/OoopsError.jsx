import React from 'react'
import search from "../images/search.svg"
import code from "../images/wash-code.jpg"



export default function OoopsError() {
  const [value, setValue] = React.useState("");

  const onSearchButtonClick = () => {
    const v = value.trim().toLowerCase();
    if (!v) return;
    window.location.assign("/wm/" + v);
  }

  return (
    <div className='loader ooops'>
      <div className="error">УПС! <br /> Чогось ми не можемо знайти потрібну пралку...</div>
      <p>Спробуйте через пошук: </p>
      <div className="ooops__form">
        <input type="text" value={value} onChange={e => setValue(e.target.value.trim())} />
        <button onClick={onSearchButtonClick} disabled={!value}>
          <img src={search} alt="" />
        </button>
      </div>
      <p>(Номер пралки написан під QR-кодом, наприклад: <b>K1</b>) </p>
      <img className='ooops__image' src={code} alt="" />
      <p>Або напишіть нам <a target='_blank' href="http://t.me/naglyad_pro">@naglyad_pro</a> ми з радістю допоможемо 😉</p>
    </div>
  )
}
