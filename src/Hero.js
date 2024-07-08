import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { useTheme } from '@emotion/react';
import Flag from './assets/luxembourg.png'

const Hero = () => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                backgroundColor: 'white',
                py: 8,
                textAlign: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <img src={Flag} height="200" width="230"></img>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="p" sx={{ color: theme.custom.text.red }}>
                            About
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h1" gutterBottom color="text.main">
                            Luxembourgish Tutoring Chatbot
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="body1" color="text.main" paragraph>
                            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc. Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
                            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc. Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
