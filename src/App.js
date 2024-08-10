import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Head from "./component/head";
import Home from "./component/home";
import Work from "./component/workout";
import Cal from "./component/calors";
import Meal from "./component/food";
import AboutPage from "./component/about (1)/About";
import Review from "./component/review/Review";
import MyFooter from "./component/footer/MyFooter";
import ContactUs from "./component/Project";
import Run from './component/exercise/run';
import Login from './component/form/LoginForm';
import Fit from './component/exercise/fitnes/fit';
import Equa from './component/exercise/equapment';
import Loss from './component/exercise/fatloss';
import Meals4000 from './component/Meals/Meals4000';
import Meals3000 from './component/Meals/Meals3000';
import Meals2000 from './component/Meals/Meals2000';
import Meals1500 from './component/Meals/Meals1500';
import Calculator from './component/Calculators/calorie-calaulator';
import Protin from './component/portien';
import Cart from './component/cart';
import MyAccount from './component/account/MyAccount';
import Plans from './component/plans/Plans';

function MainLayout() {
  return (
    <>
      <Head />
      <Home />
      <AboutPage />
      <Work />
      <Cal />
      <Meal />
      <Protin />
      <ContactUs />
      <Review />
      <MyFooter />
    </>
  );
}

function App() {
  const RouterComponent = process.env.REACT_APP_ENV === 'production' ? HashRouter : Router;

  return (
    <RouterComponent basename={process.env.REACT_APP_ENV === 'production' ? '/mygym' : '/'}>
      <Routes>
        <Route path="/run" element={<Run />} />
        <Route path="/LoginForm" element={<Login />} />
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
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </RouterComponent>
  );
}

export default App;
