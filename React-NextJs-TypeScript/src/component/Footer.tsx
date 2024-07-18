import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Container, Grid, IconButton, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      gap={2}
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        marginTop:'10px',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Company Name
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Address: 1234 Street Name, City, State, 56789
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone: (123) 456-7890
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" variant="body2" display="block" gutterBottom>
              About Us
            </Link>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Services
            </Link>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Contact
            </Link>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Privacy Policy
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex">
              <IconButton href="https://www.facebook.com" target="_blank" rel="noopener">
                <Facebook />
              </IconButton>
              <IconButton href="https://www.twitter.com" target="_blank" rel="noopener">
                <Twitter />
              </IconButton>
              <IconButton href="https://www.instagram.com" target="_blank" rel="noopener">
                <Instagram />
              </IconButton>
              <IconButton href="https://www.linkedin.com" target="_blank" rel="noopener">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'© '}
            {new Date().getFullYear()}{' '}
            <Link color="inherit" href="https://mui.com/">
              Your Website
            </Link>{' '}
            {' All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
