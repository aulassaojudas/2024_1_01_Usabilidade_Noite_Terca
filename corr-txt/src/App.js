
import './App.css';
import Home from './paginas/home';
import Header from './componentes/header'
import Aside from './componentes/aside'
import Footer from './componentes/footer'

import { Routes, Route } from 'react-router-dom';
import Sobre from './paginas/sobre';
import Contato from './paginas/contactPages'
import Services from './paginas/services'

function App() {
  return (
    <div>
      <div className='displayFlex'>
        <Header />
        <main>
          <Aside />
          <article>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/contato' element={<Contato />} />
              <Route path='/servico' element={<Services />} />
            </Routes>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
