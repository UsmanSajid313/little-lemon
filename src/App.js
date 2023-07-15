import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Payment from './Payment'




function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/reservations" element={<Payment/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
