import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from '../redux/washer-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Intro() {
  const dispatch = useDispatch();
  const info = useSelector(store => store.washer.info);

  React.useEffect(() => {
    dispatch(fetchInfo('k4'));
  }, [])

  return (
    <div className="wrapper">
      <Header />

      <div className="container" style={{ flexGrow: 1 }}>
        <main>
          <section className="top">
            <div className="title">
              <h1>Пралки</h1>
              {(typeof info.location === "string") && <p>{info.location}</p>}
            </div>

            <div className="payment">
              <h2>1 прання - {(info?.rental?.price_per_wash || 6000) / 100} {info?.rental?.currency || "UAH"}</h2>
              <p>Після оплати у вас буде можливість запустити прання протягом 5 хвилин</p>
              {info?.page?.terms_and_conditions_url && <a href={info.page.terms_and_conditions_url}>Умови - Тарифи</a>}
            </div>

            <div className="buttons buttons-column">
              <Link to="/wm/k1" className="btn">ПРАЛКА K1</Link>
              <Link to="/wm/k2" className="btn">ПРАЛКА K2</Link>
              <Link to="/wm/k3" className="btn">ПРАЛКА K3</Link>
              <Link to="/wm/k4" className="btn">ПРАЛКА K4</Link>
              <Link to="/wm/k5" className="btn">ПРАЛКА K5</Link>
              <Link to="/wm/k6" className="btn">ПРАЛКА K6</Link>
              <Link to="/wm/k7" className="btn">ПРАЛКА K7</Link>
              <Link to="/wm/o1" className="btn">ПРАЛКА O1</Link>
              <Link to="/wm/o2" className="btn">ПРАЛКА O2</Link>
              <Link to="/wm/o3" className="btn">ПРАЛКА O3</Link>
              <Link to="/wm/o4" className="btn">ПРАЛКА O4</Link>
              <Link to="/wm/o5" className="btn">ПРАЛКА O5</Link>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
