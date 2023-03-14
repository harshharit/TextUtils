import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';


export default function App() {
  return (
    <>
    <Navbar/>
    {/* <Textform heading="Enter the text below to analyze"/> */}
    <About/>
    </>
  );
}
