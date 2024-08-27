import React, { useState, useRef, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Paper, IconButton, Card, CardMedia, CardContent } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import Message from './Message';
import { useTheme } from '@emotion/react';
import axios from 'axios';


const initialMessages = [
    {
        id: 1,
        sender: "communicator",
        text: "What are your preferences ?"
    },
    {
        id: 2,
        sender: "communicator",
        text: "1. Reading practice\n2. Conversation Practice\n3. Listening Practice"
    },
    {
        id: 3,
        sender: "user",
        text: "I choose 2. conversation"
    },
    {
        id: 4,
        sender: "communicator",
        text: "Great choice let's practice your reading skills."
    },
    { id: 5, sender: "conversational", text: "Hello today we are going to learn about greetings in Luxembourgish" },
    { id: 6, sender: "conversational", text: "Let's start with a basic question: How do we say 'Hello' in Luxembourgish" },
    { id: 7, sender: "user", text: "Moien" },
    { id: 8, sender: "conversational", text: "That's correct, good job!" },
    { id: 9, sender: "communicator", text: "Now let's practice reading okay?" },
    { id: 10, sender: "user", text: "Yes!" },
    { id: 11, sender: "reader", text: "Read the following sentence and explain what it means: Ech sinn d’Christine Dupont.Ech si Franséisin. Ech kommenaus Frankräich, vu Metz. " }
];

const initialQuestions = [
    { id: 1, question: "How do you say 'Hello' in Luxembourgish?", choices: ["Moien", "Bonjour", "Hola", "Hallo"], correctAnswer: "Moien", answered: false },
    { id: 2, question: "How do you say 'Thank you' in Luxembourgish?", choices: ["Merci", "Danke", "Grazie", "Gracias"], correctAnswer: "Merci", answered: false }
];

function Agent() {
    const [messages, setMessages] = useState([]);
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

    // I added this hook to find messages on component load
    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
        setMessages(savedMessages);
    }, []);

    const fetchAIMessage = async () => {
        try {
            const response = await axios.get('http://localhost:8000/getAIMessage');
            console.log(response)
            const newMessage = {
                sender: response.data.agent_name, 
                text: response.data.content
            }
            console.log(newMessage)
            setMessages(prevMessages => [...prevMessages, newMessage]);

        } catch (error) {
            console.error('Error fetching AI message:', error);
        }
    };

    const acknowledgeMessage = async () => {
        try {
            const response = await axios.post('http://localhost:8000/acknowledgeMessage',
                {
                    "ack": true
                }
            );
            const responseMessage = response.data.message
            console.log(responseMessage)
        } catch (error) {
            console.error('Error acknowledging AI message:', error);
        }
    }

    useEffect(() => {

        fetchAIMessage()
        acknowledgeMessage()

    }, []);

    // Whenever the state of messages will change I will add them to local storage
    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(messages));
    }, [messages]);

    const sendUserInput = async (userInput) => {
        try {
            const response = await axios.post('http://localhost:8000/userInput',
                {
                    "content": userInput
                }
            );
            const responseMessage = response.data.message
            console.log(responseMessage)
        } catch (error) {
            console.error('Error Sending User Input:', error);
        }
    }

    const handleSend = () => {
        if (input.trim()) {
            sendUserInput(input)
            const newMessage = { id: messages.length + 1, sender: "user", text: input };
            setMessages([...messages, newMessage]);
            setInput("");
            fetchAIMessage()
            acknowledgeMessage()
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

    return (
        <Grid container spacing={2} mt={4} style={{ height: '90vh' }} justifyContent="center">
            {/* Recommendation Section */}
            <Grid item xs={12} md={6} style={{ borderLeft: '2px solid red', display: 'flex', flexDirection: 'column', borderRight: '2px solid red' }}>
                <Paper style={{ flex: 1, display: 'flex', flexDirection: 'column', margin: 16, padding: 16, backgroundColor: "#fffde7", textAlign: "center", justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '66.66%', margin: '0 auto' }}>
                        <Typography variant="h4" gutterBottom>Book Review</Typography>
                        <Typography gutterBottom>Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque. Quisque est vel vulputate cursus. Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque. Quisque est vel vulputate cursus.</Typography>
                    </Box>
                    <Box sx={{ mt: 4 }} style={{ paddingLeft: 100, paddingRight: 100 }}>
                        <Typography variant="h5" gutterBottom>Examples</Typography>
                        <Grid container spacing={2} justifyContent="center">
                            {[1, 2, 3, 4].map((example) => (
                                <Grid item xs={6} sm={6} key={example}>
                                    <Card>
                                        <CardMedia component="img" height={250} image={`https://via.placeholder.com/150?text=Example+${example}`} alt={`Example ${example}`} />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary">Dialog between two people Example {example}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Paper>
            </Grid>

            {/* Chat Section */}
            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column' }}>
                <Paper style={{ flex: 1, display: 'flex', flexDirection: 'column', margin: 16, padding: 16 }}>
                    <Typography variant="h6" gutterBottom>Conversation</Typography>
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
