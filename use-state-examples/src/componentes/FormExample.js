import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';

function FormExample() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box p={2}>
      <TextField 
        label="Nome" 
        variant="outlined" 
        fullWidth 
        value={name} 
        onChange={handleChange} 
      />
      <Typography mt={2}>O nome digitado é: {name}</Typography>
    </Box>
  );
}

export default FormExample;