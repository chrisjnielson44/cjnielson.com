import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import UnderConstruct from './UnderContruct';
import './Style/App.css';



function App() {
  return (
    <div className="App">
        <Header />
        <UnderConstruct />
        {/* <Body /> */}
        <Footer />
    </div>
  );
}

export default App;