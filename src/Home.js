import { useTheme } from '@emotion/react';
import { Paper, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Features from './Features';

function Home() {
    const theme = useTheme()
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#ffffff"
            }}
            elevation={0}
        >
            <Hero />
            <Features />
        </Paper>
    );
}

export default Home;