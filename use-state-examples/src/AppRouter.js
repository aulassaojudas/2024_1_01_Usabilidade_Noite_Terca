import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import FormExample from "./componentes/FormExample";
import ThemeToggle from "./componentes/ThemeToggle";
import Counter from "./componentes/Counter";
import TodoList from "./componentes/TodoList";

function AppRouter() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Formulário
          </Button>
          <Button color="inherit" component={Link} to="/theme-toggle">
            Tema
          </Button>
          <Button color="inherit" component={Link} to="/counter">
            Contador
          </Button>
          <Button color="inherit" component={Link} to="/todo-list">
            Lista de Tarefas
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<FormExample />} />
          <Route path="/theme-toggle" element={<ThemeToggle />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default AppRouter;