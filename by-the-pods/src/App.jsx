import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import ShowList from './components/ShowList';
import Favourites from './components/Favourites';
import { FavouritesProvider } from './components/FavouritesFunction';
import { NowPlayingProvider } from './components/NowPlayingGlobal';

const App = () => {
React.useEffect(() => {
  fetch ("https://podcast-api.netlify.app")
  .then((response)=>response.json())
  .then((data) => console.log(data));
}, []);

return (
  <BrowserRouter>
  <NowPlayingProvider>
  <FavouritesProvider>
  <div className='max-w-screen-md mx-auto p-4 md:p-6 lg:p-8'>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/Favourites" element={<Favourites/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Shows" element = {<ShowList/>} />
      </Routes>
    </main>
    <Footer/>
  </div>
  </FavouritesProvider>
  </NowPlayingProvider>
  </BrowserRouter>

);

};



export default App
