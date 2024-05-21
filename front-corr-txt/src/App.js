import React, { Suspense, lazy } from "react";
import "./App.css";

import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Aside from "./componentes/aside";

import { Routes, Route } from "react-router-dom";

// Importação do JSON de configuração das rotas
import routesConfig from "./jsondata/menulinks.json";

// Função para carregar componentes dinamicamente com base no nome
const lazyLoadComponent = (componentName) => lazy(() => import(`./paginas/${componentName}`));

function App() {
  return (
    <div>
      <div className="displayFlex">
        <Header />
        <main>
          <Aside />
          <article>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {routesConfig.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={React.createElement(lazyLoadComponent(route.component))}
                  />
                ))}
              </Routes>
            </Suspense>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
