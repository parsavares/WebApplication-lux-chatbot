import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import chatbotImage from './assets/robot-assistant.png';
import { useTheme } from '@emotion/react';
import axios from 'axios';

const ChatbotButton = () => {
    const theme = useTheme()
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const response = await axios.post('http://localhost:8000/startConversation',
                {
                    "startBool": true,
                    "userID": "001"
                },
                { 
                    responseType: 'json'
                }
            );
            const responseMessage = response.data.message
            console.log(responseMessage)
        } catch (error) {
            console.error('Error starting conversation', error);
        } finally {
            navigate('/conversation');   
        }
    };

    return (
        <Box
            onClick={handleClick}
            sx={{
                position: 'fixed',
                bottom: 50,
                right: 50,
                zIndex: 1000,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'white',
                    border: '1px solid',
                    borderColor: theme.palette.primary.main,
                    borderRadius: '10px',
                    padding: '8px 16px',
                    marginRight: '8px',
                    textAlign: 'center',
                }}
            >
                <Typography variant="body1" sx={{ color: theme.palette.primary.main }}>
                    Let's start Learning
                </Typography>
            </Box>
            <img src={chatbotImage} alt="Chatbot" style={{ width: '100px', height: '100px' }} />
        </Box>
    );
};

export default ChatbotButton;

