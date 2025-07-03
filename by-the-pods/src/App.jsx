import React from 'react';
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
  <div>
    <Header />
    <main>

    </main>
    <Footer />
  </div>
);

};



export default App
