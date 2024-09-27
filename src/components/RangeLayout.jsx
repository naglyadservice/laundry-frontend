import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';

export default function RangeLayout({ status }) {
  const { info, payment } = useSelector(store => store.washer);

  console.log(info)

  return (
    <div className="wrapper">
      <Header />

      <div className="container" style={{ flexGrow: 1 }}>
        <main>
          <section className="top">
            <div className="title">
              <h1>{info?.page?.label || "Пралка"}</h1>
              <p>{info?.location || ""}</p>
              {status
                ? <span className={status.color}>{status.text}</span>
                : <div className="loader-circle small"></div>
              }
            </div>

            <div className="payment">
              {info?.rental?.price_per_wash && <h2>1 прання - {info.rental.price_per_wash / 100} {info?.rental?.currency || "UAH"}</h2>}
              {info?.page?.description && <p>{info.page.description}</p>}
              {info?.page?.terms_and_conditions_url && <a href={info.page.terms_and_conditions_url}>Умови - Тарифи</a>}
            </div>

            <div className="buttons">
              {payment?.detail
                ? <a href={payment.payment_url} className={status.disabled ? "btn disabled" : "btn"}>Сплатити за прання</a>
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
