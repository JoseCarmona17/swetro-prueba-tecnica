import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "./components/header/Header"
import './app.css' 
import { Home } from "./components/home/Home"
import { Services } from "./components/services/Services"
import { Footer } from "./components/footer/Footer"
import { Diagrams } from './components/diagrams/Diagrams';
import { Data } from './components/data/Data';


export const App = () => {
  return (
    <Router>
      <body>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registros" element={<Data />} />
          <Route path="/admin" element={<Diagrams />} />
        </Routes>
        <Services/>
        <Footer />
      </body>
    </Router>
  );
}
