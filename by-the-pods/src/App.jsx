import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
React.useEffect(() => {
  fetch ("https://podcast-api.netlify.app")
  .then((response)=>response.json())
  .then((data) => console.log(data));
}, []);

return (
  <BrowserRouter>
  <div>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/favourites" element={<h1>Favourites</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </main>
  </div>
  </BrowserRouter>

);

};



export default App
