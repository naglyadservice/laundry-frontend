import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import Footer from './Footer';

export default function RangeLayout({ status }) {
  const { slug } = useParams();
  const { info } = useSelector(store => store.washer);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isAdditionalInfo, setIsAdditionalInfo] = React.useState(false);

  const onButtonClick = async () => {
    try {
      setIsLoading(true);
      const req = await fetch(`https://laundry.iotapps.net/api/washing_machine/${slug}/payment`);
      const res = await req.json();

      if (res.payment_url) {
        window.location.assign(res.payment_url);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="wrapper">
      <Header />

      <div className="container">
        <main>
          <section className="top">
            <div className="title">
              <h1>{info?.page?.label || "Пралка"}</h1>
              <p>{info?.location || ""}</p>
              <p style={{ textTransform: "uppercase" }}><b>{slug}</b></p>
              {status.text
                ? <span className={status.color}>{status.text}</span>
                : <div className="loader-circle small"></div>
              }
            </div>

            <div className="payment">
              {info?.rental?.price_per_minute && <h2>1 хвилина - {info.rental.price_per_minute / 100} {info?.rental?.currency || "UAH"}</h2>}
              {info?.rental?.price_per_wash && <h2>1 прання - {info.rental.price_per_wash / 100} {info?.rental?.currency || "UAH"}</h2>}

              {(info?.rental?.price_per_minute && info?.rental?.hold_amount) &&
                <>
                  <p>
                    Шановні користувачі, вартість прання {info.rental.price_per_minute / 100} грн хвилина, <b>але не більше ніж {info.rental.hold_amount / 100} гривень</b>
                  </p>

                  <p
                    className={isAdditionalInfo ? 'more-description-trigger active' : 'more-description-trigger'}
                    onClick={() => setIsAdditionalInfo(!isAdditionalInfo)}
                  >
                    Детальніше <span>▼</span>
                  </p>

                  <div className={isAdditionalInfo ? 'wrapper-for-hidden-content active' : 'wrapper-for-hidden-content'}>
                    <div className='hidden-content'>
                      <p>
                        Система предавторизує {info.rental.hold_amount / 100} гривень. Залежно від обраного режиму та тривалості прання, з вашого рахунку буде знято кошти за тарифом {info.rental.price_per_minute / 100} грн/хвилина, а решта автоматично повернеться на рахунок.
                      </p>

                      <p>
                        <b>УВАГА 1: </b>
                        Час прання на пральній машині є розрахунковим і залежить від багатьох факторів. Детальніше в <a href="https://t.me/info_naglyad_wash">INFO</a>.
                        <br />
                        <b>УВАГА 2: </b>
                        Термін повернення грошей залежить від вашого банку. Орієнтовні терміни повернення:
                        <br />
                        <b>ПриватБанк</b> - протягом декількох годин.
                        <br />
                        <b>Інші банки</b> - від декількох годин до декількох днів.
                        <br />
                        Точну інформацію можна отримати в техпідтримці вашого банку або на платформі еквайрингу <a href="https://www.liqpay.ua/uk">LiqPay</a>.
                      </p>
                    </div>
                  </div>
                </>
              }

              {info?.page?.description && <p dangerouslySetInnerHTML={{ __html: info.page.description }}></p>}

              {/* {info?.page?.terms_and_conditions_url && <a href={info.page.terms_and_conditions_url}>Умови - Тарифи</a>} */}
            </div>

            <div className="buttons">
              {isLoading ? (
                <button
                  className={"btn"}
                >
                  <span className="loader-circle small --white"></span>
                </button>
              ) : (
                <button
                  className={status.disabled ? "btn disabled" : "btn"}
                  onClick={onButtonClick}
                >
                  {isError ? 'Что-то пошло не так...' : 'Сплатити за прання'}
                </button>
              )}
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div >
  );
}
