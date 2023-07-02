import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Component/redux/theme';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Contact from './Component/Contact/Contact';
import Service from './Component/Service/Service';
import Home from './Component/Home/Home';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
