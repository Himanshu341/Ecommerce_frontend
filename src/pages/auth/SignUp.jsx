import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { FacebookIcon, GoogleIcon } from '../../assets/CustomeIcons';
import AppTheme from '../../theme/AppTheme';
import ColorModeSelect from '../../theme/ColorModeSelect';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  mobileNo: Yup.string().min(10, 'Mobile number should be at least 10 digits').required('Mobile number is required'),
});

const SignUpContainer = styled(Stack)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignUp({ disableCustomTheme }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <AppTheme disableCustomTheme={disableCustomTheme}>
      <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
        <Card variant="outlined" sx={{ padding: 4, margin: 'auto', maxWidth: '600px' }}>
          <Typography component="h1" variant="h4" textAlign="left" mb={2}  sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
            Sign up
          </Typography>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
              mobileNo: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid container spacing={2}>
                  {/* First Name */}
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <Field
                        as={TextField}
                        id="firstName"
                        name="firstName"
                        placeholder="Enter First Name"
                        variant="outlined"
                        fullWidth
                        error={touched.firstName && !!errors.firstName}
                        helperText={touched.firstName && errors.firstName}
                      />
                    </FormControl>
                  </Grid>

                  {/* Last Name */}
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <FormLabel htmlFor="lastName">Last Name</FormLabel>
                      <Field
                        as={TextField}
                        id="lastName"
                        name="lastName"
                        placeholder="Enter Last Name"
                        variant="outlined"
                        fullWidth
                        error={touched.lastName && !!errors.lastName}
                        helperText={touched.lastName && errors.lastName}
                      />
                    </FormControl>
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Field
                        as={TextField}
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        error={touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                      />
                    </FormControl>
                  </Grid>

                  {/* Mobile No */}
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <FormLabel htmlFor="mobileNo">Mobile Number</FormLabel>
                      <Field
                        as={TextField}
                        id="mobileNo"
                        name="mobileNo"
                        placeholder="Enter Mobile Number"
                        variant="outlined"
                        fullWidth
                        error={touched.mobileNo && !!errors.mobileNo}
                        helperText={touched.mobileNo && errors.mobileNo}
                      />
                    </FormControl>
                  </Grid>

                  {/* Password */}
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Field
                        as={TextField}
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter Password"
                        variant="outlined"
                        fullWidth
                        error={touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment sx={{cursor:"Pointer"}} position="end" onClick={toggleShowPassword}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </FormControl>
                  </Grid>

                  {/* Confirm Password */}
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                      <Field
                        as={TextField}
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        variant="outlined"
                        fullWidth
                        error={touched.confirmPassword && !!errors.confirmPassword}
                        helperText={touched.confirmPassword && errors.confirmPassword}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment sx={{cursor:"Pointer"}} position="end" onClick={toggleShowConfirmPassword}>
                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>

                <Box sx={{ marginTop: 2 }}>
                  <Button type="submit" fullWidth variant="contained">
                    Sign Up
                  </Button>
                </Box>

                <Typography sx={{ textAlign: 'center', marginTop: 2 }}>
                  Already have an account?{' '}
                  <Link href="/login" variant="body2">
                    Sign in
                  </Link>
                </Typography>
              </Form>
            )}
          </Formik>

          <Divider sx={{ my: 2 }}>or</Divider>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} onClick={() => alert('Sign up with Google')}>
              Sign up with Google
            </Button>
            <Button fullWidth variant="outlined" startIcon={<FacebookIcon />} onClick={() => alert('Sign up with Facebook')}>
              Sign up with Facebook
            </Button>
          </Box>
        </Card>
      </SignUpContainer>
    </AppTheme>
  );
}
