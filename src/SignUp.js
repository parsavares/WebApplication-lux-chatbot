import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@emotion/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.uni.lu/en/">
                University of Luxembourg
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignUp() {
    const { signUp } = useContext(AuthContext);
    const theme = useTheme();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (data.get('password') !== data.get('repeatPassword')) {
            alert('Passwords do not match');
            return;
        }

        const userData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
            nationality: data.get('nationality'),
            nativeLanguage: data.get('nativeLanguage'),
            purpose: data.get('purpose') || '',
            level: data.get('level'),
            preferences: Array.from(event.currentTarget.querySelectorAll('[name="preferences"]:checked')).map(checkbox => checkbox.value)
        };

        if (!userData.nationality || !userData.nativeLanguage || !userData.level) {
            alert('Please fill in all required fields: Nationality, Native Language, and Level of Luxembourgish.');
            return;
        }

        signUp(userData)
            .then(() => {
                navigate('/dashboard');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="repeatPassword"
                                label="Repeat Password"
                                type="password"
                                id="repeatPassword"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="nationality"
                                label="Nationality"
                                id="nationality"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="nativeLanguage"
                                label="Native Language"
                                id="nativeLanguage"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="level-label">Level of Luxembourgish*</InputLabel>
                                <Select
                                    labelId="level-label"
                                    id="level"
                                    name="level"
                                    label="Level of Luxembourgish"
                                >
                                    <MenuItem value="beginner">Beginner</MenuItem>
                                    <MenuItem value="intermediate">Intermediate</MenuItem>
                                    <MenuItem value="advanced">Advanced</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="purpose-label">Purpose of Learning</InputLabel>
                                <Select
                                    labelId="purpose-label"
                                    id="purpose"
                                    name="purpose"
                                    label="Purpose of Learning"
                                >
                                    <MenuItem value="work">Work</MenuItem>
                                    <MenuItem value="vacation">Vacation</MenuItem>
                                    <MenuItem value="school">School</MenuItem>
                                    <MenuItem value="business">Business</MenuItem>
                                    <MenuItem value="traveling">Traveling</MenuItem>
                                    <MenuItem value="all above">All Above</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        
                            <FormControl component="fieldset">
                                <Typography component="legend">Preferences of Learning</Typography>
                                <FormControlLabel
                                    control={<Checkbox name="preferences" value="conversation" />}
                                    label="Conversation"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="preferences" value="listening" />}
                                    label="Listening"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="preferences" value="reading" />}
                                    label="Reading"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="preferences" value="questionAndAnswering" />}
                                    label="Question and Answering"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="preferences" value="grammar" />}
                                    label="Grammar"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <NavLink to='/signin' variant="body2" sx={{ color: theme.custom.text.blue }}>
                                Already have an account? Sign in
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    );
}
