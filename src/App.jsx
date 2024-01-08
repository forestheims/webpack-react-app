import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarChart from './components/Data/d3example';
import { Provider } from 'react-redux';
import store from './store';
import TodosComponent from './components/Todos/TodosComponent.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Layout from './components/Layout/Layout.jsx';
import './reset.css';
import './global.css';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Profile from './components/Profile/Profile.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import CookiePolicy from './components/CookieConsent/CookiePolicy.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/user/:username" element={<Profile />} />
              <Route path="/todos" element={<TodosComponent />} />
              <Route path="/about" element={<About />} />
              <Route path="/barchart" element={<BarChart />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
