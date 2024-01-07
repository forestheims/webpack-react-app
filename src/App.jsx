import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarChart from './components/Data/d3example';
import { Provider } from 'react-redux';
import store from './store';
import TodosComponent from './components/Todos/TodosComponent.jsx';
import UserProfile from './components/User/UserProfile.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Layout from './components/Layout/Layout.jsx';
import './reset.css';
import './global.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Layout>
            <Routes>
              <Route path="/todos" element={<TodosComponent />} />
              <Route path="/user" element={<UserProfile />} />
              <Route path="/about" element={<About />} />
              <Route path="/barchart" element={<BarChart />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
