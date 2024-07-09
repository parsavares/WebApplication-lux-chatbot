import React from 'react';
import { Grid, Box, Button, Typography, TextField, Paper, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';
import Curriculum from './Curriculum';

function Dashboard() {
  return (
    <>
      <h1>This is the dashboard</h1>
      <Curriculum />
    </>
  );
}

export default Dashboard;
