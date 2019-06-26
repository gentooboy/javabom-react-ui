import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <Link to="articles"><img src={logo} className="Home-logo" alt="logo" /></Link>
      </header>
    </div>
  );
}

export default Home;
