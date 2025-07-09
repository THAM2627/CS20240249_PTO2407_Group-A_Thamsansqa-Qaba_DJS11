import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import ShowList from './components/ShowList';
import Favourites from './components/Favourites';
import Homepage from './components/Homepage';
import ShowDetail from './components/ShowDetail';
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
  <div className='min-h-screen flex flex-col bg-black text-white font-sans'>
    <Header/>
    <main className='flex-grow px-4 sm:px-6 lg:px-8 py-6'>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Favourites" element={<Favourites/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Shows" element = {<ShowList/>} />
        <Route path="/Shows/:id" element={<ShowDetail/>} />
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
