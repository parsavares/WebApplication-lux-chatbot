// import React from 'react';
// import { Fab } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import ChatIcon from '@mui/icons-material/Chat';
// import chatbotImage from './assets/robot-assistant.png';

// const ChatbotButton = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/conversation');
//   };

//   return (
//     <Fab
//       color="primary"
//       onClick={handleClick}
//       style={{
//         position: 'fixed',
//         bottom: 50,
//         right: 50,
//         zIndex: 1000,
//       }}
//     >
//       <img src={chatbotImage} alt="Chatbot" style={{ width: '100px', height: '100px' }} />
//     </Fab>
//   );
// };

// export default ChatbotButton;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import chatbotImage from './assets/robot-assistant.png';
import { useTheme } from '@emotion/react';

const ChatbotButton = () => {
    const theme = useTheme()
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/conversation');
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

