import React from 'react';
import { Typography, Box } from '@mui/material';

function Footer() {
    return (
        <Box sx={{ bgcolor: 'primary.main', p: 2, mt: 'auto', color: 'white' }}>
            <Typography variant="body2" align="center">
                © 2023 Minha Empresa
            </Typography>
        </Box>
    );
}

export default Footer;