import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <Box p={2}>
      <Typography mb={2}>Contador: {count}</Typography>
      <Button variant="contained" onClick={increment} style={{ marginRight: '10px' }}>
        Incrementar
      </Button>
      <Button variant="contained" onClick={decrement}>
        Decrementar
      </Button>
    </Box>
  );
}

export default Counter;