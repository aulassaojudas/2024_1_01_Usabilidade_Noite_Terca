import './App.css';

import Header from './componentes/header';
import Footer from './componentes/footer';
import Aside from './componentes/aside';
import HomePage from './paginas/home';
import AboutPage from './paginas/about';
import ServicesPage from './paginas/services';
import ContactPage from './paginas/contactPage';
import { Routes, Route } from 'react-router-dom';

function App() {  
  return (
    <div>
      <Header />
      <div className='diplayFlex'>
        <Aside />
        <main className='displayFlexMain'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
