import React, { useState } from 'react';
import { TextField, Button, Box, Typography, List, ListItem } from '@mui/material';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <Box p={2}>
      <TextField 
        label="Nova Tarefa" 
        variant="outlined" 
        fullWidth 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        style={{ marginBottom: '10px' }}
      />
      <Button variant="contained" onClick={addTodo} style={{ marginBottom: '10px' }}>
        Adicionar Tarefa
      </Button>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index}>{todo}</ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TodoList;