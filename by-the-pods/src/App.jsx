import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { data } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
React.useEffect(() => {
  fetch ("https://podcast-api.netlify.app")
  .then((response)=>response.json())
  .then((data) => console.log(data));
}, []);

return (
  <div>
    <Header />
    <main>

    </main>
    <Footer />
  </div>
);

};



export default App
