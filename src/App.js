import React from 'react';
import Home from './components/Home'; 
import { Provider } from 'react-redux';
import store from './store';

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </Provider>
  );
};

export default App;

