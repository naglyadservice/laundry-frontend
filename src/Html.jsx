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
              <h1>Пралки</h1>
              <p>Гуртожиток</p>

              {/* 
                <h1>{data.label}</h1>
                <p>{data.location}</p>
                {data.status
                  ? <span className={status.color}>{status.text}</span>
                  : <div className="loader-circle small"></div>
                }
              */}

            </div>

            <div className="payment">
              <h2>1 прання - {(data.rent_price / 100)} грн/хв</h2>
              <p>Після оплати у вас буде можливість запустити прання протягом 5 хвилин</p>
              {/* <p>{data.description}</p> */}
              <a href={data.terms_and_conditions_url}>Умови - Тарифи</a>
            </div>

            <div className="buttons" style={{ flexDirection: "column", alignItems: "center" }}>
              <a href="https://wash.npc.com.ua/washers/k1" className="btn">ПРАЛКА ПОВЕРХ №3</a>
              <a href="https://wash.npc.com.ua/washers/k2" className="btn">ПРАЛКА ПОВЕРХ №5</a>
              <a href="https://wash.npc.com.ua/washers/k3" className="btn">ПРАЛКА ПОВЕРХ №8</a>
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
