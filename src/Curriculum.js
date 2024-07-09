import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const chapters = [
  {
    number: "Chapter 1",
    title: "Greetings in Luxembourgish",
    description: "Learn how to greet people in Luxembourgish and basic polite expressions.",
    image: "https://via.placeholder.com/150"
  },
  {
    number: "Chapter 2",
    title: "Numbers and Counting",
    description: "Master the numbers in Luxembourgish, from zero to a million.",
    image: "https://via.placeholder.com/150"
  },
  {
    number: "Chapter 3",
    title: "Common Phrases",
    description: "Useful phrases for everyday conversations in Luxembourgish.",
    image: "https://via.placeholder.com/150"
  },
  {
    number: "Chapter 4",
    title: "Introducing Yourself",
    description: "Learn how to introduce yourself and ask about others in Luxembourgish.",
    image: "https://via.placeholder.com/150"
  },
  {
    number: "Chapter 5",
    title: "Food and Drinks",
    description: "Vocabulary for food, drinks, and ordering at a restaurant.",
    image: "https://via.placeholder.com/150"
  },
  {
    number: "Chapter 6",
    title: "Travel and Directions",
    description: "Essential vocabulary for traveling and asking for directions.",
    image: "https://via.placeholder.com/150"
  },
  {
    number: "Chapter 7",
    title: "Shopping",
    description: "Learn useful phrases and vocabulary for shopping.",
    image: "https://via.placeholder.com/150"
  },
  {
    number: "Chapter 8",
    title: "Time and Dates",
    description: "Understanding how to tell time and discuss dates in Luxembourgish.",
    image: "https://via.placeholder.com/150"
  },
  {
    number: "Chapter 9",
    title: "Emergency Situations",
    description: "Important phrases and vocabulary for emergencies.",
    image: "https://via.placeholder.com/150"
  }
];

const Curriculum = () => {
  return (
    <Grid container spacing={4} justifyContent="center" style={{ padding: 24 }}>
      {chapters.map((chapter, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card style={{ display: 'flex', height: '100%' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <CardContent style={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h6">
                  {chapter.number}
                </Typography>
                <Typography component="div" variant="h5">
                  {chapter.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {chapter.description}
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              style={{ width: 150 }}
              image={chapter.image}
              alt={chapter.title}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Curriculum;
