import React, { FormEvent } from 'react';
import { Box, Button, Checkbox, CssBaseline, FormControlLabel, Paper, TextField, Typography, Grid2, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';
import AuthPageCopyright from '../../components/footer/AuthPageCopyright';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  borderRadius: '2rem',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));



// Login Component
const Login: React.FC = () => {
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login button clicked');
  };

  return (
    <Box sx={{  height: '100vh' , display:'flex', justifyContent:'center', alignItems:'center', }}>
      <CssBaseline />
      <Grid2 container spacing={2} columns={24}>
        <Grid2>
          <Item elevation={6} square sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 4 }}>
            <Avatar sx={{ margin: 1, backgroundColor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ width: '100%', mt: 1 }} onSubmit={handleLogin}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              </Box>
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Box>
                  <Link to="/signup">{'Don\'t have an account? Sign Up'}</Link>
              </Box>
              <Box sx={{ mt: 5 }}>
                <AuthPageCopyright /> 
              </Box>
            </Box>
          </Item>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Login;
