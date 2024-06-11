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
          <Route index element={<Intro />} />
          <Route path='/washers/:slug' element={<Washer />} />
          <Route path='/error' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
