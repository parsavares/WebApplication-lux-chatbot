import React, { useState, useEffect } from 'react';
import { Grid, Box, Button, Typography, TextField, Paper, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';
import { useTheme } from '@emotion/react';

const messages = [
  {
    id: 1,
    sender: "agent",
    text: "What are your preferences ?"
  },
  {
    id: 2,
    sender: "agent",
    text: "1. Reading practice\n2. Speaking Practice\n3. Listening Practice"
  },
  {
    id: 3,
    sender: "user",
    text: "I choose 1. Reading"
  },
  {
    id: 4,
    sender: "agent",
    text: "Great choice let's practice your reading skills."
  }
]

function Conversation() {
  const [isOpen, setIsOpen] = useState(true)
  const theme = useTheme()
  const handleRecommendationChoice = (e) => {
    setIsOpen(false)
  }
  return (
    <Grid container spacing={2} mt={4} style={{ height: '90vh' }} justifyContent="center">
      {/* Recommendation Section */}
      {isOpen ? 
        (
          <Grid item xs={12} md={6} style={{ borderLeft: '2px solid red', display: 'flex', flexDirection: 'column', borderRight: '2px solid red'}}>
            <Paper style={{ flex: 1, display: 'flex', flexDirection: 'column', margin: 16, padding: 16, backgroundColor: theme.palette.primary.light, textAlign: "center", justifyContent: 'center', alignItems: 'center' }}>
              <Box sx={{ width: '66.66%', margin: '0 auto' }}>
                <Typography variant="h4" gutterBottom>Recommendation for user</Typography>
                <Typography gutterBottom>Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque. Quisque est vel vulputate cursus.</Typography>
              </Box>

              <Button variant="contained" color="primary" style={{ margin: 8 }} onClick={handleRecommendationChoice}>Yes Start Conversation</Button>
              <Button variant="contained" color="secondary" style={{ margin: 8 }} onClick={handleRecommendationChoice}>No discuss my Preferences</Button>
            </Paper>
          </Grid>
        )
        : 
        (
          <></>
        )
      }
      {/* Chat Section */}
      <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column' }}>
        <Paper style={{ flex: 1, display: 'flex', flexDirection: 'column', margin: 16, padding: 16 }}>
          <Typography variant="h6" gutterBottom>The Communicator Agent</Typography>
          <Box style={{ flex: 1, overflowY: 'auto' }}>
            {messages.map(message => (
              <Message key={message.id} sender={message.sender} text={message.text}/>
            ))}
          </Box>
          <Box component="form" display="flex" mt={2}>
            <TextField fullWidth variant="outlined" placeholder="Input..." />
            <IconButton color="secondary" type="submit"><SendIcon /></IconButton>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Conversation;
