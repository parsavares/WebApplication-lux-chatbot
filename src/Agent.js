import React, { useState, useRef } from 'react';
import { Grid, Box, Button, Typography, TextField, Paper, IconButton, Card, CardMedia, CardContent, Radio, RadioGroup, FormControlLabel, FormControl, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Message from './Message';
import { useTheme } from '@emotion/react';

const initialMessages = [
    { id: 1, sender: "agent", text: "Hello today we are going to learn about greetings in Luxembourgish" },
    { id: 2, sender: "agent", text: "Let's start with a basic question: How do we say 'Hello' in Luxembourgish" },
    { id: 3, sender: "user", text: "Moien" },
    { id: 4, sender: "agent", text: "That's correct, good job!" }
];

const initialQuestions = [
    { id: 1, question: "How do you say 'Hello' in Luxembourgish?", choices: ["Moien", "Bonjour", "Hola", "Hallo"], correctAnswer: "Moien", answered: false },
    { id: 2, question: "How do you say 'Thank you' in Luxembourgish?", choices: ["Merci", "Danke", "Grazie", "Gracias"], correctAnswer: "Merci", answered: false }
];

function Agent() {
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [unansweredQuestions, setUnansweredQuestions] = useState(initialQuestions);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [questions, setQuestions] = useState(initialQuestions);
    const [showAlert, setShowAlert] = useState(false);
    const [showError, setShowError] = useState(false);
    const mediaStream = useRef(null);
    const mediaRecorder = useRef(null);
    const chunks = useRef([]);
    const theme = useTheme();

    const handleSend = () => {
        if (input.trim()) {
            const newMessage = { id: messages.length + 1, sender: "user", text: input };
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
            setIsRecording(true);
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaStream.current = stream;
            mediaRecorder.current = new MediaRecorder(stream);
            mediaRecorder.current.ondataavailable = (e) => {
                if (e.data.size > 0) chunks.current.push(e.data);
            };
            mediaRecorder.current.onstop = () => {
                const recordedBlob = new Blob(chunks.current, { type: 'audio/webm' });
                const url = URL.createObjectURL(recordedBlob);
                const newMessage = { id: messages.length + 1, sender: "user", text: <audio controls src={url} /> };
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
        if (mediaRecorder.current && mediaRecorder.current.state === 'recording') mediaRecorder.current.stop();
        if (mediaStream.current) mediaStream.current.getTracks().forEach((track) => track.stop());
    };

    const handleNextQuestion = () => {
        // const nextQuestionIndex = questions.findIndex(q => !q.answered);
        const nextQuestionIndex = currentQuestion + 1
        setCurrentQuestion(nextQuestionIndex);
        setSelectedAnswer("");
    };

    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const handleSubmit = () => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            // const updatedQuestions = questions.map((q, index) => (index === currentQuestion ? { ...q, answered: true } : q));
            // setQuestions(updatedQuestions);
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 2000);
            // setUnansweredQuestions(updatedQuestions.filter(q => !q.answered))
            if (currentQuestion < unansweredQuestions.length) {
                handleNextQuestion();
            }   
        }
        else {
            setShowError(true);
            setTimeout(() => setShowError(false), 2000);
            if (currentQuestion < unansweredQuestions.length) {
                handleNextQuestion();
            }   
        }
    };

    // const unansweredQuestions = questions.filter(q => !q.answered);

    return (
        <Grid container spacing={2} mt={4} style={{ height: '90vh' }} justifyContent="center">
            {/* Recommendation Section */}
            <Grid item xs={12} md={6} style={{ borderLeft: '2px solid red', display: 'flex', flexDirection: 'column', borderRight: '2px solid red' }}>
                <Paper style={{ flex: 1, display: 'flex', flexDirection: 'column', margin: 16, padding: 16, backgroundColor: "#fffde7", textAlign: "center", justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '66.66%', margin: '0 auto' }}>
                        <Typography variant="h4" gutterBottom>Dynamic Practice Section</Typography>
                        <Typography gutterBottom>Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque. Quisque est vel vulputate cursus. Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque. Quisque est vel vulputate cursus.</Typography>
                    </Box>
                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h5" gutterBottom>Examples</Typography>
                        <Grid container spacing={2} justifyContent="center">
                            {[1, 2, 3, 4].map((example) => (
                                <Grid item xs={6} sm={3} key={example}>
                                    <Card>
                                        <CardMedia component="img" height="140" image={`https://via.placeholder.com/150?text=Example+${example}`} alt={`Example ${example}`} />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary">Dialog between two people Example {example}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h5" gutterBottom>Practice</Typography>
                        {currentQuestion != unansweredQuestions.length ? (
                            <Paper sx={{ p: 2 }}>
                                <Typography variant="h6">{unansweredQuestions[currentQuestion].question}</Typography>
                                <FormControl component="fieldset">
                                    <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
                                        {unansweredQuestions[currentQuestion].choices.map((choice, index) => (
                                            <FormControlLabel key={index} value={choice} control={<Radio />} label={choice} />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                    <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                                    <Button variant="contained" color="secondary" onClick={handleNextQuestion} sx={{ ml: 2 }}>Next</Button>
                                </Box>
                            </Paper>
                        ) : (
                            <Box sx={{ textAlign: 'center', mt: 4 }}>
                                <CheckCircleIcon style={{ fontSize: 50, color: theme.palette.success.main }} />
                                <Typography variant="h6">You're all done, great job!</Typography>
                            </Box>
                        )}
                        {showAlert && (
                            <Alert severity="success" sx={{ mt: 2 }}>Correct answer!</Alert>
                        )}
                        {showError && (
                            <Alert severity="error" sx={{ mt: 2 }}>Wrong answer!</Alert>
                        )}
                    </Box>
                </Paper>
            </Grid>

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
                        <TextField fullWidth variant="outlined" placeholder="Input..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} />
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

export default Agent;
