import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import { theme } from './theme';
import { useTheme } from '@emotion/react';

const features = [
  {
    name: 'Feature 1',
    description: 'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: SchoolIcon,
  },
  {
    name: 'Feature 2',
    description: 'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet. Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: MenuBookIcon,
  },
  {
    name: 'Feature 3',
    description: 'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque. Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: SpeakerNotesIcon,
  },
];

const Features = () => {
  const theme = useTheme()
  return (
    <Box sx={{ py: 8, textAlign: 'center', backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.name}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <feature.icon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ color: theme.custom.text.red }}>
                  {feature.name}
                </Typography>
                <Typography variant="body1" color="text.main">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
