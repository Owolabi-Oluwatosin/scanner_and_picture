import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const ResponsiveAppBar = (props) => {

    return (
        <AppBar position="static">
            <Container maxWidth="xl" variant='#074c00'>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 0 }}>
                        <Link to={'/camera-to-cw1/home'} style={{ textDecoration: 'none' }}>
                            <IconButton sx={{ p: 0 }}>
                                <Typography
                                    color="#fff"
                                    noWrap
                                    component="div"
                                    sx={{ flexGrow: 1, pr: 4, display: { xs: 'flex', md: 'flex' } }}
                                >
                                    Home
                                </Typography>
                            </IconButton>
                        </Link>
                        <Link to={'/camera-to-cw1/scan-qr-code'} style={{ textDecoration: 'none' }}>
                            <IconButton sx={{ p: 0 }}>
                                <Typography
                                    color="#fff"
                                    noWrap
                                    component="div"
                                    sx={{ flexGrow: 1, pr: 4, display: { xs: 'flex', md: 'flex' } }}
                                >
                                    Scan QRCode
                                </Typography>
                            </IconButton>
                        </Link>
                        <Link to={'/camera-to-cw1/take-picture'} style={{ textDecoration: 'none' }}>
                            <IconButton sx={{ p: 0 }}>
                                <Typography
                                    color="#fff"
                                    noWrap
                                    component="div"
                                    sx={{ flexGrow: 1, pr: 4, display: { xs: 'flex', md: 'flex' } }}
                                >
                                    Take Picture
                                </Typography>
                            </IconButton>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;

