import React from 'react';
import { Grid, Box, Button, Typography, TextField, Paper, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';
import { useTheme } from '@emotion/react';

function Conversation() {
  const theme = useTheme()
  return (
    <Grid container spacing={2} mt={4} style={{ height: '90vh' }}>
      {/* Recommendation Section */}
      <Grid item xs={12} md={6} style={{ borderLeft: '2px solid red', display: 'flex', flexDirection: 'column' }}>
        <Paper style={{ flex: 1, display: 'flex', flexDirection: 'column', margin: 16, padding: 16, backgroundColor: theme.palette.primary.light, textAlign: "center", justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ width: '66.66%', margin: '0 auto' }}>
            <Typography variant="h4" gutterBottom>Recommendation for user</Typography>
            <Typography gutterBottom>Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque. Quisque est vel vulputate cursus.</Typography>
          </Box>

          <Button variant="contained" color="primary" style={{ margin: 8 }}>Yes Start Conversation</Button>
          <Button variant="contained" color="secondary" style={{ margin: 8 }}>NO discuss my Preferences</Button>
        </Paper>
      </Grid>

      {/* Chat Section */}
      <Grid item xs={12} md={6} style={{ borderLeft: '2px solid red', display: 'flex', flexDirection: 'column' }}>
        <Paper style={{ flex: 1, display: 'flex', flexDirection: 'column', margin: 16, padding: 16 }}>
          <Typography variant="h6" gutterBottom>The Communicator Agent</Typography>
          <Box style={{ flex: 1, overflowY: 'auto' }}>
            <Message sender="agent" text="ask about preferences and what the user want evel" />
            <Message sender="agent" text="List of Preferences" />
            <Message sender="user" text="Choose Preferences" />
            <Message sender="agent" text="Okay check the new recommendation" />
          </Box>
          <Box component="form" display="flex" mt={2}>
            <TextField fullWidth variant="outlined" placeholder="Input..." />
            <IconButton color="primary" type="submit"><SendIcon /></IconButton>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Conversation;
