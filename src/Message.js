import React, { useState } from 'react';
import { Box, Paper, Typography, IconButton, Avatar } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { deepOrange, green, blue, purple, pink, cyan, red, indigo } from '@mui/material/colors';
import axios from 'axios';

const agentColors = {
    communicator: red[500],
    conversational: green[500],
    reader: indigo[500],
    listening: purple[500],
    grammar: pink[500],
    qa: cyan[500]
};

const agentNames = {
    communicator: 'Communicator',
    conversational: 'Conversational',
    reader: 'Reader',
    listening: 'Listening',
    grammar: 'Grammar and Summary',
    question: 'Question Answering'
};

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

    const isAgent = agentNames.hasOwnProperty(sender);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems={sender === "user" ? "flex-end" : "flex-start"}
            my={1}
        >
            {isAgent && (
                <Typography variant="caption" color="textSecondary" style={{ alignSelf: 'flex-start', marginLeft: 46 }} gutterBottom>
                    {agentNames[sender]}
                </Typography>
            )}
            <Box display="flex" alignItems="center" justifyContent={sender === "user" ? "flex-end" : "flex-start"}>
                {isAgent && (
                    <Avatar sx={{ bgcolor: agentColors[sender], marginRight: 1 }}>
                        <SmartToyIcon />
                    </Avatar>
                )}
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
                {sender === "user" && (
                    <Avatar sx={{ bgcolor: blue[500], marginLeft: 1  }}>
                        <PersonIcon />
                    </Avatar>
                )}
            </Box>
        </Box>
    );
};

export default Message;
