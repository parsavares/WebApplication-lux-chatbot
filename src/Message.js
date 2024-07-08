import React from 'react';
import { Grid, Box, Button, Typography, TextField, Paper, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Message = ({ sender, text }) => (
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
                color: sender === "user" ? 'white' : 'black'
            }}
        >
            <Typography>
                {text}
            </Typography>

        </Paper>
    </Box>
);

export default Message;