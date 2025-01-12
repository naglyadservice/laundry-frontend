import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/washer-redux';

import Error from './pages/Error';
import Intro from './pages/Intro';
import Washer from './pages/Washer';
import AllLaunders from './pages/AllLaunders';
import ExternalRedirect from './components/ExternalRedirect';
import OoopsError from './pages/OoopsError';


export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/wash' element={<Intro />} />
          <Route path='/all/:slug' element={<AllLaunders />} />

          <Route path='/wm/:slug' element={<Washer />} />
          <Route path='/washers/:slug' element={<Washer />} />
          <Route path='/washing-machines/:slug' element={<Washer />} />

          <Route path='/error404' element={<Error title="Сторінку не знайдено" />} />
          <Route path='/error500' element={<Error title="Сталася помилка, зверніться до адміністрації" />} />

          <Route path='/support' element={<ExternalRedirect url='https://t.me/info_naglyad_wash' />} />

          <Route path='*' element={<OoopsError />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
