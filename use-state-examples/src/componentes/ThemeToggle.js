import React, { useState } from 'react';
import { Button, Box } from '@mui/material';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <Box 
      p={2} 
      style={{ 
        background: isDarkMode ? '#333' : '#FFF', 
        color: isDarkMode ? '#FFF' : '#000', 
        height: '100vh' 
      }}
    >
      <Button variant="contained" onClick={toggleTheme}>
        Alternar para {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
      </Button>
    </Box>
  );
}

export default ThemeToggle;