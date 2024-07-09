import React from 'react';
import { Grid, Box, Button, Typography, TextField, Paper, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';
import Curriculum from './Curriculum';
import Container from '@mui/material/Container';
import ProgressBar from './ProgressBar';
import { useTheme } from '@emotion/react';
import ChatbotButton from './ChatbotButton';

function Dashboard() {
  const theme = useTheme()
  const progress = 35
  return (
    <>
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
              <Typography variant="h4" component="h1" gutterBottom color="text.main">
                Course Curriculum
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" color="text.main" paragraph>
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc. Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc. Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
              </Typography>
            </Grid>
          </Grid>
          <Typography color={theme.custom.text.red}>Your Current Progress</Typography>
          <ProgressBar value={progress} />
        </Container>
      </Box>
      <Curriculum />
      <ChatbotButton />
    </>
  );
}

export default Dashboard;
