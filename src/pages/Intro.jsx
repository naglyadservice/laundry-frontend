import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Intro() {
  return (
    <div className="wrapper">
      <Header />

      <div className="container" style={{ flexGrow: 1 }}>
        <main>
          <section className="top">
            <div className="title">
              <h1>Пралки</h1>
              <p>Гуртожиток</p>
            </div>

            <div className="payment">
              <h2>1 ПРАННЯ - 1 ГРН/ХВ</h2>
              <p>Після оплати у вас буде можливість запустити прання протягом 5 хвилин</p>
              <a href="/docs/details.html">Умови - Тарифи</a>
            </div>

            <div className="buttons buttons-column">
              <a href="https://wash.npc.com.ua/washers/k1" className="btn">ПРАЛКА ПОВЕРХ №3</a>
              <a href="https://wash.npc.com.ua/washers/k2" className="btn">ПРАЛКА ПОВЕРХ №5</a>
              <a href="https://wash.npc.com.ua/washers/k3" className="btn">ПРАЛКА ПОВЕРХ №8</a>
            </div>

          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
