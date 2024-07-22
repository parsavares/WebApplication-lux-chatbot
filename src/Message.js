import React, { useState } from 'react';
import { Box, Paper, Typography, IconButton } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import axios from 'axios';

const Message = ({ sender, text }) => {
    const [audioUrl, setAudioUrl] = useState(null);

    const handleTextToSpeech = async () => {
        try {
            const response = await axios.post('http://localhost:8000/tts', { message: text }, {
                responseType: 'blob'
            });
            const url = URL.createObjectURL(response.data);
            setAudioUrl(url);
            const audio = new Audio(url);
            audio.play();
        } catch (error) {
            console.error('Error converting text to speech', error);
        }
    };

    return (
        <Box
            display="flex"
            justifyContent={sender === "user" ? "flex-end" : "flex-start"}
            my={1}
        >
            <Paper
                style={{
                    maxWidth: '60%',
                    padding: '8px 16px',
                    backgroundColor: sender === "user" ? '#2196F3' : '#E3F2FD',
                    color: sender === "user" ? 'white' : 'black',
                    display: 'flex',
                    alignItems: 'center', // Center align items vertically
                }}
            >
                <Typography style={{ flex: 1 }}>
                    {text}
                </Typography>
                <IconButton
                    size="small"
                    onClick={handleTextToSpeech}
                    style={{ marginLeft: 8 }}
                >
                    <VolumeUpIcon style={{ color: sender === "user" ? 'white' : 'black' }} />
                </IconButton>
            </Paper>
        </Box>
    );
};

export default Message;
