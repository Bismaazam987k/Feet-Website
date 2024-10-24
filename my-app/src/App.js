// import logo from './logo.svg';
import './App.css';
import Claim from './components/Claim';
import Features from './components/Features';
import Instagram from './components/instagram';
import Likes from './components/Likes';
import Navbar from './components/Navbar';
import Page1 from './components/Page1';
import Stock from './components/Stock';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Page1/>
     <Features/>
     <Claim/>
     <Stock />
     <Likes />
    <Instagram />
    <Subscribe />
    <div className='text-blue-700'>helloo world</div>
  
    </div>
  );
}

export default App;
