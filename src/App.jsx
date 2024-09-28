import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { store } from './redux/washer-redux';

import Error from './pages/Error';
import Intro from './pages/Intro';
import Washer from './pages/Washer';


export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Existing Routes */}
          <Route path='/wash' element={<Intro />} />
          <Route path='/washers/:slug' element={<Washer />} />
          <Route path='/error404' element={<Error title="Сторінку не знайдено" />} />
          <Route path='/error500' element={<Error title="Сталася помилка, зверніться до адміністрації" />} />

          {/* Redirect from /ws/:slug to /washers/:slug */}
          <Route path='/ws/:slug' element={<Navigate to="/washers/:slug" replace />} />

          {/* Optional: Redirect undefined paths to /error404 */}
          <Route path='*' element={<Navigate to="/error404" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
