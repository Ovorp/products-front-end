import React from 'react';
import Nav from './components/Nav';
import Shop from './components/Shop';
import './App.css';
// need to add react router

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Shop />
    </div>
  );
}
