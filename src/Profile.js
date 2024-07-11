import React, { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import { Container, CssBaseline, Box, Avatar, Typography, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Profile = () => {
    const { currentUser, updateProfile } = useContext(AuthContext);

    const [firstName, setFirstName] = useState(currentUser?.firstName || '');
    const [lastName, setLastName] = useState(currentUser?.lastName || '');
    const [nationality, setNationality] = useState(currentUser?.nationality || '');
    const [nativeLanguage, setNativeLanguage] = useState(currentUser?.nativeLanguage || '');
    const [purpose, setPurpose] = useState(currentUser?.purpose || '');
    const [level, setLevel] = useState(currentUser?.level || '');
    const [preferences, setPreferences] = useState(currentUser?.preferences || []);

    const handlePreferencesChange = (event) => {
        const { value } = event.target;
        setPreferences((prev) =>
            prev.includes(value)
                ? prev.filter((preference) => preference !== value)
                : [...prev, value]
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedUserData = {
            firstName,
            lastName,
            nationality,
            nativeLanguage,
            purpose,
            level,
            preferences,
        };
        updateProfile(updatedUserData)
            .then(() => {
                alert('Profile updated successfully');
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
                    Profile
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
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
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
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="nationality"
                                label="Nationality"
                                name="nationality"
                                value={nationality}
                                onChange={(e) => setNationality(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="nativeLanguage"
                                label="Native Language"
                                name="nativeLanguage"
                                value={nativeLanguage}
                                onChange={(e) => setNativeLanguage(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="purpose-label">Purpose of Learning</InputLabel>
                                <Select
                                    labelId="purpose-label"
                                    id="purpose"
                                    name="purpose"
                                    value={purpose}
                                    onChange={(e) => setPurpose(e.target.value)}
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
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="level-label">Level of Luxembourgish</InputLabel>
                                <Select
                                    labelId="level-label"
                                    id="level"
                                    name="level"
                                    value={level}
                                    onChange={(e) => setLevel(e.target.value)}
                                    label="Level of Luxembourgish"
                                >
                                    <MenuItem value="beginner">Beginner</MenuItem>
                                    <MenuItem value="intermediate">Intermediate</MenuItem>
                                    <MenuItem value="advanced">Advanced</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <Typography component="legend">Preferences of Learning</Typography>
                                <FormControlLabel
                                    control={<Checkbox name="preferences" value="conversation" checked={preferences.includes('conversation')} onChange={handlePreferencesChange} />}
                                    label="Conversation"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="preferences" value="listening" checked={preferences.includes('listening')} onChange={handlePreferencesChange} />}
                                    label="Listening"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="preferences" value="reading" checked={preferences.includes('reading')} onChange={handlePreferencesChange} />}
                                    label="Reading"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="preferences" value="questionAndAnswering" checked={preferences.includes('questionAndAnswering')} onChange={handlePreferencesChange} />}
                                    label="Question and Answering"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="preferences" value="grammar" checked={preferences.includes('grammar')} onChange={handlePreferencesChange} />}
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
                        Save
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Profile;
