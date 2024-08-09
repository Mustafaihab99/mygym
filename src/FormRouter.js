// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './component/form/LoginForm';
import MyAccount from './component/account/MyAccount';
import Plans from './component/plans/Plans';

const FormRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </Router>
  );
};

export default FormRouter;
