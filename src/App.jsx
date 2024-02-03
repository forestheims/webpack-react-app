import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarChart from './components/Data/d3example';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import TodosComponent from './components/Todos/TodosComponent.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Layout from './components/Layout/Layout.jsx';
import './reset.css';
import './tailwind.css';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Profile from './components/Profile/Profile.jsx';
import Auth from './components/Auth/Auth.jsx';
import CookiePolicy from './components/CookieConsent/CookiePolicy.jsx';
import PrivacyPolicy from './components/Privacy/PrivacyPolicy.jsx';
import TermsOfService from './components/Terms/TermsOfService.jsx';
import User from './components/User/User.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Layout>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/user/:username" element={<Profile />} />
              <Route path="/user" element={<User />} />
              <Route path="/todos" element={<TodosComponent />} />
              <Route path="/about" element={<About />} />
              <Route path="/barchart" element={<BarChart />} />
            </Route>
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/termsofservice" element={<TermsOfService />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </PersistGate>
  );
};

export default App;
