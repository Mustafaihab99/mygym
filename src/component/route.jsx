import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Run from '../component/exercise/run';
import LoginForm from "./form/LoginForm";
import Fit from './exercise/fitnes/fit';
import Equa from './exercise/equapment';
import Loss from './exercise/fatloss';
import Meals4000 from './Meals/Meals4000';
import Meals3000 from './Meals/Meals3000';
import Meals2000 from './Meals/Meals2000';
import Meals1500 from './Meals/Meals1500';
import Calculator from './Calculators/calorie-calaulator';
import Cart from './cart';
import MyAccount from './account/MyAccount';
import Plans from './plans/Plans';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/run" element={<Run />} />
      <Route path="/LoginForm" element={<LoginForm />} />
      <Route path="/fit" element={<Fit />} />
      <Route path="/equa" element={<Equa />} />
      <Route path="/loss" element={<Loss />} />
      <Route path="/meal4" element={<Meals4000 />} />
      <Route path="/meal3" element={<Meals3000 />} />
      <Route path="/meal2" element={<Meals2000 />} />
      <Route path="/meal1" element={<Meals1500 />} />
      <Route path="/calc" element={<Calculator />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect unknown paths to home */}
    </Routes>
  );
}

export default AppRoutes;
