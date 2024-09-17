import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material'; 
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <AppBar className="AppBar" position="static">
            <Toolbar className="Toolbar">
                <Typography className="Typography" variant="h6">
                    NASA Planet Exploration
                </Typography>
                <Button className="Button" color="inherit">INICIO</Button>
                <Button className="Button" color="inherit">INFORMATE</Button>
                <Button className="Button" color="inherit">DATOS</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
