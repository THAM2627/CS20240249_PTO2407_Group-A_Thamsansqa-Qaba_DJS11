import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import ShowList from './components/ShowList';
import Favourites from './components/Favourites';
import { FavouritesProvider } from './components/FavouritesFunction';

const App = () => {
React.useEffect(() => {
  fetch ("https://podcast-api.netlify.app")
  .then((response)=>response.json())
  .then((data) => console.log(data));
}, []);

return (
  <BrowserRouter>
  <FavouritesProvider>
  <div className='App'>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/Favourites" element={<h1><Favourites/></h1>} />
        <Route path="/About" element={<h1><About/></h1>} />
        <Route path="/Shows" element = {<h1><ShowList/></h1>} />
      </Routes>
    </main>
    <Footer/>
  </div>
  </FavouritesProvider>
  </BrowserRouter>

);

};



export default App
