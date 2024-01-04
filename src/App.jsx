// portfolio-project/src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './App.css'; // Make sure App.css is correctly imported

function App() {
  return (
    <Router>
      <Header />
      <main style={{ paddingTop: '100px', background: 'linear-gradient(to bottom, #273469, #1E2749)', color: 'white', minHeight: 'calc(100vh - 100px)' }}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/about-me" />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

