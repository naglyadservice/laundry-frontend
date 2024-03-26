import React from 'react'

export default function Html({ data, status }) {
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

            <div className="buttons">
              {data.status
                ? <a href={data.pay_url} className={status.disabled ? "btn disabled" : "btn"}>Сплатити за прання</a>
                : <div className="loader-circle"></div>
              }
            </div>

          </section>

          {/* 
          <section className="transactions">
            <h2>Останні транзакції</h2>

            <table>
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Сума</th>
                  <th>Чек</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>21.01.2024 <span>20:21</span></td>
                  <td>10 грн.</td>
                  <td><a href="/"><button>Отримати</button></a></td>
                </tr>

                <tr>
                  <td>21.01.2024 <span>20:21</span></td>
                  <td>100 грн.</td>
                  <td><a href="/"><button>Отримати</button></a></td>
                </tr>
              </tbody>
            </table>

            <p>0015</p>
          </section> 
          */}

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
