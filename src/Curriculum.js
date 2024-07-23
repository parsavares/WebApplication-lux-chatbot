import React from 'react';
import { Grid, Typography, Box, Accordion, AccordionSummary, AccordionDetails, CircularProgress, Chip, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { theme } from './theme';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const chapters = [
  {
    number: "Chapter 1",
    title: "Moien! …an Äddi!",
    description: "Learn basic greetings and farewells in Luxembourgish.",
    progress: 100,
    topics: [
      { name: "Moien!", status: "Done" },
      { name: "Äddi!", status: "Done" },
      { name: "Gudden Owend!", status: "Done" }
    ]
  },
  {
    number: "Chapter 2",
    title: "Wéi geet et?",
    description: "Asking and responding to 'How are you?' in Luxembourgish.",
    progress: 60,
    topics: [
      { name: "Wéi geet et?", status: "Done" },
      { name: "Et geet, Merci!", status: "In Progress" },
      { name: "Net esou gutt", status: "Upcoming" }
    ]
  },
  {
    number: "Chapter 3",
    title: "Wéi heescht Dir?",
    description: "Introducing yourself and asking for someone's name.",
    progress: 0,
    topics: [
      { name: "Wéi heescht Dir?", status: "Upcoming" },
      { name: "Ech heeschen...", status: "Upcoming" },
      { name: "Wéi heeschs Du?", status: "Upcoming" }
    ]
  },
  {
    number: "Chapter 4",
    title: "Meng Famill",
    description: "Talking about family members and relationships.",
    progress: 0,
    topics: [
      { name: "Meng Famill", status: "Upcoming" },
      { name: "Meng Elteren", status: "Upcoming" },
      { name: "Meng Geschwëster", status: "Upcoming" }
    ]
  },
  {
    number: "Chapter 5",
    title: "Meng Frënn",
    description: "Describing friends and friendships.",
    progress: 0,
    topics: [
      { name: "Meng Frënn", status: "Upcoming" },
      { name: "Beschreiw däi Frënd", status: "Upcoming" },
      { name: "Wou kenne mir eis?", status: "Upcoming" }
    ]
  },
  {
    number: "Chapter 6",
    title: "Ech ginn akafen",
    description: "Shopping vocabulary and phrases.",
    progress: 0,
    topics: [
      { name: "Ech ginn akafen", status: "Upcoming" },
      { name: "Am Supermarché", status: "Upcoming" },
      { name: "Wat kascht dat?", status: "Upcoming" }
    ]
  },
  {
    number: "Chapter 7",
    title: "Meng Aarbecht",
    description: "Talking about your job and workplace.",
    progress: 0,
    topics: [
      { name: "Meng Aarbecht", status: "Upcoming" },
      { name: "Ech sinn e Léierin", status: "Upcoming" },
      { name: "Meng Kollegen", status: "Upcoming" }
    ]
  },
  {
    number: "Chapter 8",
    title: "Meng Fräizäit",
    description: "Discussing hobbies and leisure activities.",
    progress: 0,
    topics: [
      { name: "Meng Fräizäit", status: "Upcoming" },
      { name: "Sport", status: "Upcoming" },
      { name: "Reesen", status: "Upcoming" }
    ]
  },
  {
    number: "Chapter 9",
    title: "Beim Dokter",
    description: "Describing symptoms and visiting the doctor.",
    progress: 0,
    topics: [
      { name: "Beim Dokter", status: "Upcoming" },
      { name: "Meng Symptomer", status: "Upcoming" },
      { name: "Rezept a Medikamenter", status: "Upcoming" }
    ]
  }
];



const Curriculum = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Done":
        return "success";
      case "In Progress":
        return "warning";
      case "Upcoming":
        return "primary";
      default:
        return "default";
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" style={{ padding: 24 }}>
      {chapters.map((chapter, index) => (
        <Grid item key={index} xs={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                <Box>
                  <Typography variant="h6">{chapter.number}</Typography>
                  <Typography variant="subtitle1">{chapter.title}</Typography>
                  <Typography paragraph color="text.secondary">{chapter.description}</Typography>
                </Box>
                {/* <CircularProgress
                  variant="determinate"
                  value={chapter.progress}
                  sx={{
                    color: theme.palette.text.secondary
                  }}
                /> */}
                <div style={{ width: 80, height: 80 }}>
                  <CircularProgressbar value={chapter.progress} text={`${chapter.progress}%`} />
                </div>
                
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box mt={2}>
                {chapter.topics.map((topic, topicIndex) => (
                  <>
                    <Divider style={{ marginBottom: 12 }} />
                    <Box key={topicIndex} display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                      <Typography>{topic.name}</Typography>
                      {
                        topic.status === "Done"
                          ? <Chip label={topic.status} color={getStatusColor(topic.status)} size="small" />
                          : <Chip label={topic.status} color={getStatusColor(topic.status)} variant="outlined" size="small" />
                      }

                    </Box>
                  </>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        </Grid>
      ))}
    </Grid>
  );
};

export default Curriculum;

