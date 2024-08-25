import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/washer-redux';

import Intro from './pages/Intro';
import Washer from './pages/Washer';
import Error from './pages/Error';


export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/wash' element={<Intro />} />
          <Route path='/washers/:slug' element={<Washer />} />
          <Route path='/error404' element={<Error title="Сторінку не знайдено" />} />
          <Route path='/error500' element={<Error title="Сталася помилка, зверніться до адміністрації" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
