import React from 'react'

export default function Html({ data, status }) {
  const [rangeValue, setRangeValue] = React.useState(1);
  const [price, setPrice] = React.useState(0.75);

  React.useEffect(() => {
    const calculatedPrice = rangeValue * (data.rent_price / 100);

    setPrice(calculatedPrice.toFixed(2))
  }, [rangeValue])

  return (
    <div className="wrapper">
      <div className="container">
        <header>
          <a href="https://www.npc.com.ua/">
            <img src={data.logo_url} alt="" />
          </a>

          <a href={"tel:+" + data.phone}>
            <img src="/images/phone-icon.svg" alt="" />
          </a>
        </header>
      </div>

      <div className="container" style={{ flexGrow: 1 }}>
        <main>
          <section className="top">
            <div className="title">
              <h1>{data.label}</h1>
              <p>{data.location}</p>
              {data.status
                ? <span className={status.color}>{status.text}</span>
                : <div className="loader-circle small"></div>
              }
            </div>

            <div className="payment">
              <h2>1 прання - {(data.rent_price / 100)} грн/хв</h2>
              <p>{data.description}</p>
              <a href={data.terms_and_conditions_url}>Умови - Тарифи</a>
            </div>

            <div className="payment">
              <h2>Ціна - {price}</h2>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={rangeValue}
                onChange={(i) => setRangeValue(i.target.value)}
              />
            </div>

            <div className="buttons">
              {data.status
                ? <a href={data.pay_url} className={status.disabled ? "btn disabled" : "btn"}>Сплатити за прання</a>
                : <div className="loader-circle"></div>
              }
            </div>

          </section>
        </main>
      </div>

      <footer>
        <p>{data.footer_text}</p>
        <div className="links">
          <a href={data.service_description_url}>Опис послуги</a>
          <a href={data.terms_of_refund_url}>Умови повернення</a>
          <a href={data.offer_agreement_url}>Договір оферти</a>
        </div>
        <p>© Copyright 2024. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
