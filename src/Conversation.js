import React, { useState, useEffect, useRef } from 'react';
import { Grid, Box, Button, Typography, TextField, Paper, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import Message from './Message';
import { useTheme } from '@emotion/react';

const initialMessages = [
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
];

function Conversation() {
  const [messages, setMessages] = useState(initialMessages);
  const [isOpen, setIsOpen] = useState(true);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const mediaStream = useRef(null);
  const mediaRecorder = useRef(null);
  const chunks = useRef([]);
  const theme = useTheme();

  const handleRecommendationChoice = (e) => {
    setIsOpen(false);
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "user",
        text: input,
      };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  };

  const startRecording = async () => {
    try {
      setIsRecording(true)
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStream.current = stream;
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.current.push(e.data);
        }
      };
      mediaRecorder.current.onstop = () => {
        const recordedBlob = new Blob(chunks.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(recordedBlob);
        const newMessage = {
          id: messages.length + 1,
          sender: "user",
          text: <audio controls src={url} />,
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setIsRecording(false);
        chunks.current = [];
      };
      mediaRecorder.current.start();
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.stop();
    }
    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  return (
    <Grid container spacing={2} mt={4} style={{ height: '90vh' }} justifyContent="center">
      {/* Recommendation Section */}
      {isOpen ?
        (
          <Grid item xs={12} md={6} style={{ borderLeft: '2px solid red', display: 'flex', flexDirection: 'column', borderRight: '2px solid red' }}>
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
              <Message key={message.id} sender={message.sender} text={message.text} />
            ))}
          </Box>
          <Box component="form" display="flex" mt={2} onSubmit={(e) => e.preventDefault()}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Input..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <IconButton color="secondary" onClick={handleSend}><SendIcon /></IconButton>
            <IconButton color="primary">
              {isRecording ? <StopIcon onClick={stopRecording} /> : <MicIcon onClick={startRecording} />}
            </IconButton>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Conversation;