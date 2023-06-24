import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Containers/Layout/Layout';

import './App.scss';
import Home from '../Components/Home/Home';
import Projects from '../Components/Projects/Projects';
// import Fade from '../Containers/Navbar/Fade/Fade';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          <Route path='/projets' Component={Projects}></Route>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
