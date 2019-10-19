import React from 'react';
import Header from './Components/Header';
import Listing from './Components/Listing';
import Filter from './Components/Filter';
import './App.css'
function App() {
  return (
    <>
  <Header/>
  <section id ="content-area">
    <Filter/>
     <Listing/>
  </section>
    </>
  );
}

export default App;
