import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/washer-redux';

import Error from './pages/Error';
import Intro from './pages/Intro';
import Washer from './pages/Washer';
import AllLaunders from './pages/AllLaunders';
import ExternalRedirect from './components/ExternalRedirect';


export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Existing Routes */}
          <Route path='/all/:slug' element={<AllLaunders />} />
          <Route path='/wash' element={<Intro />} />
          <Route path='/washers/:slug' element={<Washer />} />
          <Route path='/error404' element={<Error title="Сторінку не знайдено" />} />
          <Route path='/error500' element={<Error title="Сталася помилка, зверніться до адміністрації" />} />

          {/* Redirect from /ws/:slug to /washers/:slug */}
          <Route path='/wm/:slug' element={<Washer />} />
          <Route path='/washing-machines/:slug' element={<Washer />} />

          <Route path='/support' element={<ExternalRedirect url='https://t.me/info_naglyad_wash' />} />

          <Route path='*' element={<Error title="Сторінку не знайдено" />} />

          {/* Optional: Redirect undefined paths to /error404 */}
          {/* <Route path='*' element={<Navigate to="/error404" replace />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
