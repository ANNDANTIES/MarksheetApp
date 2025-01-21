import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Add from './components/Add';
import Header from './components/Header';
import Footer from './components/Footer';
import EditStudent from './components/EditStudent'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editStudent" element={<EditStudent/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
