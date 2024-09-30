import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import Footer from './Footer';

export default function RangeLayout({ status }) {
  const { slug } = useParams();
  const { info } = useSelector(store => store.washer);
  const [isError, setIsError] = React.useState(false);

  const onButtonClick = async () => {
    try {
      const req = await fetch(`https://laundry.iotapps.net/api/washing_machine/${slug}/payment`);
      const res = await req.json();

      if (res.payment_url) {
        window.location.assign(res.payment_url);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  }

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
              <button
                className={status.disabled ? "btn disabled" : "btn"}
                onClick={onButtonClick}
              >
                {isError ? 'Что-то пошло не так...' : 'Сплатити за прання'}
              </button>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
