import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { List } from '../../pages/List/List';
import { Hotel } from '../../pages/Hotel/Hotel';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotels/:id" element={<Hotel />} />
    </Routes>
  );
};

export default AppRoutes;
