import React from 'react'
import Header from './Header';
import Footer from './Footer';

export default function RangeLayout({ data, status }) {
  const [rangeValue, setRangeValue] = React.useState(1);

  const { info, payment } = data;

  const price = (rangeValue * (info.rent_price / 100)).toFixed(2);

  return (
    <div className="wrapper">
      <Header />

      <div className="container" style={{ flexGrow: 1 }}>
        <main>
          <section className="top">
            <div className="title">
              <h1>{info.label}</h1>
              <p>{info.location}</p>
              {payment.status
                ? <span className={status.color}>{status.text}</span>
                : <div className="loader-circle small"></div>
              }
            </div>

            <div className="payment">
              <h2>1 прання - {(info.rent_price / 100)} грн/хв</h2>
              <p>{info.description}</p>
              <a href={"https://example.com/"}>Умови - Тарифи</a>
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
              {payment.status
                ? <a href={payment.pay_url} className={status.disabled ? "btn disabled" : "btn"}>Сплатити за прання</a>
                : <div className="loader-circle"></div>
              }
            </div>

          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
