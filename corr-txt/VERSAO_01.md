# Criar um novo projeto React

Para criar um aplicativo React para a web, você pode seguir os seguintes passos, formando um guia prático e introdutório.
Antes de começar, é necessário ter o Node.js instalado no seu computador. Ele vem com o npm (Node Package Manager), que será usado para gerenciar as bibliotecas necessárias.

Para iniciar um novo projeto, abra o terminal e execute o seguinte comando:

```bash
npx create-react-app corr-txt
```

O comando cria um diretório chamado `corr-txt` com todos os arquivos necessários para o projeto. `npx` é um pacote executador que acompanha o npm.

Mude para o diretório do projeto:

```bash
cd corr-txt
```

Execute o seguinte comando para iniciar o servidor de desenvolvimento e abrir o aplicativo no navegador:

```bash
npm start
```

O navegador será aberto automaticamente e uma nova aba apontando para `http://localhost:3000`, onde o aplicativo React estará rodando.

Para começar a editar o aplicativo, pare o servidor pressionando `CTRL-C` no terminal e abra o diretório do projeto no Visual Studio Code com o comando `code .`. O código fonte está localizado no diretório `src`, sendo um bom ponto de partida modificar o arquivo `src/App.js`. Altere o código interno da função `App` para personalizar a interface do usuário:

```javascript
function App() {
  return (
    <div>
      <h1>Olá, mundo React!</h1>
    </div>
  );
}
```

O React é baseado em componentes, que podem ser adicionados para separar a lógica e a User interface (UI) em unidades reutilizáveis. Crie uma pasta chamada `paginas` e um novo arquivo chamado `home.js` dentro do diretório `src` e adicione o seguinte código:

```javascript
import React from "react";

function Home() {
  return (
    <div>
      <h2>Esta é a página principal</h2>
    </div>
  );
}

export default Home;
```

Agora importe e use esse componente `Home` em `App.js`:

```javascript
import React from "react";
import './App.css';
import Home from "./paginas/home";

function App() {
  return (
    <div>
      <h1>Olá, mundo React!</h1>
      <Home />
    </div>
  );
}

export default App;
```

Retorne ao prompt de comando e digite o seguinte comando para iniciar o servidor de desenvolvimento, o que abrirá o aplicativo no navegador:

```bash
npm start
```

---

Para adicionar uma nova página ao seu aplicativo, crie um componente React denominado `services`. Crie um novo arquivo chamado `services.js` na pasta `paginas` e insira o seguinte código para definir o componente:

```javascript
import React from "react";

function Services() {
  return (
    <div>
      <h2>Bem-vindo à Página de Serviços</h2>
      <p>Esta página descreve os serviços oferecidos no site.</p>
    </div>
  );
}

export default Services;
```

Repita o processo anterior para criar mais páginas no aplicativo. Abra o diretório `src` no editor de código e crie dois novos arquivos: `About.js` e `ContactPages.js` na pasta `paginas`. No arquivo `About.js`, insira o seguinte código:

```javascript
import React from "react";

function About() {
  return (
    <div>
      <h2>Sobre Nós</h2>
      <p>Esta página contém informações sobre a empresa e sua história.</p>
    </div>
  );
}

export default About;
```

No arquivo `ContactPages.js`, adicione o seguinte código:

```javascript
import React from "react";

function ContactPages() {
  return (
    <div>
      <h2>Contato</h2>
      <p>Aqui você pode encontrar maneiras de entrar em contato conosco.</p>
    </div>
  );
}

export default ContactPages;Serviços
```

---

Crie uma pasta dedicada aos componentes. No diretório `src`, crie uma nova pasta chamada `componentes`. Dentro desta pasta, crie três arquivos: `Aside.js`, `Footer.js` e `Header.js`. Esses arquivos irão conter os componentes correspondentes ao conteúdo lateral, rodapé e cabeçalho do aplicativo.

Em `Aside.js`, é definido um componente que será usado para um menu lateral:

```javascript
import React from 'react';

function Aside() {
  return (
    <div>
      <nav>
        <a href="/">Home</a> 
        <a href="/sobre">Sobre</a> 
        <a href="/contato">Contato</a>
        <a href="/servicos">Serviços</a>
      </nav>
    </div>
  );
}

export default Aside;
```

No arquivo `Footer.js`, insira o código que servirá como rodapé:

```javascript
import React from "react";

function Footer() {
  return (
    <footer>
      <h3>Rodapé</h3>
      <p>Direitos reservados © Sua Empresa 2024.</p>
    </footer>
  );
}

export default Footer;
```

Por fim, no arquivo `Header.js`, insira o código que será o cabeçalho:

```javascript
import React from "react";

function Header() {
  return (
    <header>
      <h1>Cabeçalho do Site</h1>
    </header>
  );
}

export default Header;
```

Após salvar os arquivos dos componentes `Aside`, `Footer` e `Header`, vamos integrá-los ao seu aplicativo, para isso, abra o arquivo `App.js` localizado no diretório `src`. Comece importando os componentes recém-criados no início do arquivo:

```javascript
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Aside from "./componentes/aside";
```

Em seguida, utilize esses componentes dentro da função `App` montando a estrutura básica da página:

```javascript
function App() {
  return (
    <div>
      <div>
        <Header />
        <main>
          <Aside />
          <article>
            <h1>Olá, mundo React!</h1>
            <Home />
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
```

Agora vamos inserir o codigo no app.css para formatar a aplicação.

```css
html, body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  box-sizing: border-box; 
  height: 100%;
}

header {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px 0; 
}

.displayFlex {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}

nav {
  width: 200px;
  background-color: #f0e8e8;
  padding: 20px;
  overflow-y: auto;
  margin-top: auto;
  height: 100%;
}

main {
  display: flex;
  flex: 1;
  padding-bottom: 50px; 
  position: relative; 
}

article {
  flex-grow: 1; 
  padding: 20px;
  background-color: #fff;
  overflow-y: auto; 
}

nav a {
  display: block;
}

```
# CSS explicação
### CSS para `html, body`:

- `margin: 0;`: Remove as margens padrão de todos os elementos `html` e `body`, garantindo que não haja espaço extra nas bordas da página.
- `padding: 0;`: Elimina o preenchimento interno padrão de `html` e `body` para que o conteúdo possa estender-se até as bordas da janela do navegador.
- `font-family: Arial, sans-serif;`: Define Arial como a fonte principal para o texto, com uma fonte sans-serif como fallback caso Arial não esteja disponível.
- `box-sizing: border-box;`: Altera o modelo de box-sizing para `border-box`, o que faz com que o padding e border dos elementos sejam incluídos no cálculo da largura e altura, facilitando o layout.
- `height: 100%;`: Define a altura de `html` e `body` para 100% da altura da viewport, ajudando a estender o layout verticalmente pela página inteira.

### CSS para `header`:

- `background-color: #333;`: Aplica uma cor de fundo cinza escura (`#333`) ao cabeçalho.
- `color: white;`: Define a cor do texto no cabeçalho para branco, garantindo contraste com o fundo escuro.
- `text-align: center;`: Centraliza o texto dentro do cabeçalho horizontalmente.
- `padding: 20px 0;`: Aplica um preenchimento vertical de 20px acima e abaixo do conteúdo do cabeçalho, sem afetar os lados horizontalmente.

### CSS para `.displayFlex`:

- `display: flex;`: Estabelece um contexto de flexbox para o contêiner, o que permite um layout mais flexível e responsivo dos elementos filhos.
- `flex-direction: column;`: Define a direção principal do flexbox para coluna, o que faz com que os elementos filhos se organizem verticalmente.
- `min-height: 100vh;`: Define a altura mínima do contêiner para 100% da altura da viewport, assegurando que ele ocupe pelo menos toda a tela verticalmente.

### CSS para `footer`:

- `position: fixed;`: Fixa o rodapé na posição, fazendo com que ele permaneça visível na parte inferior da tela ao rolar a página.
- `left: 0;`: Posiciona o rodapé no início do eixo horizontal da página.
- `bottom: 0;`: Ancora o rodapé na parte inferior da viewport.
- `width: 100%;`: Estende a largura do rodapé para cobrir 100% da largura da tela.
- `background-color: #333;`: Aplica a mesma cor de fundo cinza escura do cabeçalho ao rodapé.
- `color: white;`: Define a cor do texto para branco, como no cabeçalho.
- `text-align: center;`: Centraliza o texto dentro do rodapé.
- `padding: 10px 0;`: Aplica um preenchimento vertical de 10px acima e abaixo do conteúdo do rodapé.

### CSS para `nav`:

- `width: 200px;`: Define uma largura fixa de 200px para o menu lateral.
- `background-color: #f0e8e8;`: Aplica uma cor de fundo clara ao menu.
- `padding: 20px;`: Adiciona 20px de preenchimento em todas as direções dentro do `nav`.
- `overflow-y: auto;`: Permite um scroll vertical dentro do `nav` se o conteúdo exceder a altura disponível.
- `margin-top: auto;`: Usa o recurso de auto-margin do flexbox para empurrar o `nav` para baixo, preenchendo qualquer espaço vertical disponível.
- `height: 100%;`: Define a altura do `nav` para cobrir 100% do espaço vertical disponível em seu contêiner.

### CSS para `main`:

- `display: flex;`: Configura `main` como um contêiner flex para permitir um layout flexível de seus elementos filhos.
- `flex: 1;`: Permite que `main` cresça e ocupe todo o espaço disponível em seu contêiner pai.
- `padding-bottom: 50px;`: Adiciona 50px de preenchimento na parte inferior de `main` para garantir que o conteúdo não seja sobre

posto pelo rodapé fixo.
- `position: relative;`: Estabelece `main` como um contêiner de posicionamento para qualquer elemento filho que possa usar posicionamento absoluto.

### CSS para `article`:

- `flex-grow: 1;`: Permite que o `article` cresça e ocupe qualquer espaço disponível além do que seus elementos irmãos consomem.
- `padding: 20px;`: Adiciona preenchimento ao redor do conteúdo dentro de `article`.
- `background-color: #fff;`: Define a cor de fundo para branco, proporcionando um fundo claro para o conteúdo.
- `overflow-y: auto;`: Permite um scroll vertical dentro de `article` se o conteúdo exceder a altura disponível.

### CSS para `nav a`:

- `display: block;`: Faz com que cada link (`a`) dentro do `nav` se comporte como um bloco, ocupando uma linha inteira para si.

# Criando as rotas 

Pare o servidor, pressionando `CTRL-C` no terminal. Em seguida, instale o pacote `react-router-dom` executando o comando `npm install react-router-dom react-dom`.

Abra o arquivo index.js e altera para este conteúdo.

```typescript 
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

- **`root.render`:** Esta é a função de renderização do React, utilizada para montar um componente React no contêiner do DOM. Aqui, `root` é presumivelmente uma referência criada pelo `createRoot` chamado em algum elemento do DOM, tipicamente o elemento `root`.

- **`<React.StrictMode>`:** `StrictMode` ativa as verificações e avisos adicionais para seus descendentes. Isso inclui a verificação de componentes desatualizados, uso depreciado de APIs, e outras práticas que podem levar a problemas de performance ou manutenção. Não afeta a build de produção, sendo uma ferramenta para desenvolvimento.

- **`<BrowserRouter>`:** Este componente fornece um contexto de roteamento baseado na API de Histórico HTML5 (pushState, replaceState e o evento popstate) para seus componentes filhos. É utilizado para envolver o sistema de roteamento que permite navegar entre diferentes páginas em uma aplicação de página única (SPA) sem a necessidade de recarregar a página.

- **`<App />`:** Este é o componente principal da sua aplicação React, que contém toda a lógica e a estrutura da interface do usuário da aplicação. Encapsulando-o dentro de `<BrowserRouter>`, todos os componentes dentro de `App` podem utilizar as funcionalidades do roteador, como `Link`, `Route`, e `Switch` (ou `Routes` na versão 6 do React Router).

Agora vamos para o arquivo `app.js` e alterar configurando as rotas de navegação
```javascript
import React from "react";
import './App.css';

import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Aside from "./componentes/aside";

import { Routes, Route } from 'react-router-dom';
import About from "./paginas/about"
import ContactPages from "./paginas/contactPage"
import Home from "./paginas/home";
import Service from "./paginas/services"


function App() {
  return (
    <div>
      <div className="displayFlex">
        <Header />
        <main>
          <Aside />
          <article>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Service />} />
            <Route path="/contato" element={<ContactPages />} />
          </Routes>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
```
Agora vamos usar o framework Material UI para refatorar o arquiov `aside.js` melhorando o visual do menu lateral, vamos começar instalando os pacotes `npm install @mui/material @mui/icons-material @emotion/react @emotion/styled`, e aplique o código abaixo no arquivo. 

```javascript 
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import menuLinks from '../jsondata/menulinks.json';

function Aside() {
  return (
    <div>
      <nav>
        <List>
          {menuLinks.map((link) => (
            <ListItem key={link.path} disablePadding>
              <ListItemButton component={Link} to={link.path}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </div>
  );
}

export default Aside;
```
