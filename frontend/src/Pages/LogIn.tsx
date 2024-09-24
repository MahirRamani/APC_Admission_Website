import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    Container, Box, Typography, TextField, Button, Card, MenuItem, Select, InputLabel, FormControl
} from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// Define the form schema using yup
const schema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
}).required();


// Define the types for form values
type LogInFormInputs = {
    username: string;
    password: string;
};

const LogInForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, trigger } = useForm<LogInFormInputs>({
        resolver: yupResolver(schema)
    });

    // const navigate = useNavigate();

    const onSubmit: SubmitHandler<LogInFormInputs> = data => {
        console.log(data);
        // Handle login logic here
        // navigate('/Dashboard');
    };

    return (
        <div style={{ backgroundImage: ``, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container maxWidth="xs">
                <Card sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.95)', boxShadow: 8 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img alt="logo" height="80" style={{ marginBottom: '1rem' }} />
                        <Typography variant="h5" component="h1" gutterBottom fontWeight="bold">
                            APC Nadiad
                        </Typography>
                        <Typography variant="subtitle1" component="h2" gutterBottom>
                            (A Place for Development Character)
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <TextField
                                fullWidth
                                label="Username"
                                margin="normal"
                                {...register('username')}
                                onBlur={() => trigger('username')}
                                error={!!errors.username}
                                helperText={errors.username?.message}
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                margin="normal"
                                {...register('password')}
                                onBlur={() => trigger('password')}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />


                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                sx={{ mt: 2, backgroundColor: 'orange', '&:hover': { backgroundColor: 'darkorange' } }}
                            >
                                Sign Up
                            </Button>
                        </form>
                    </Box>
                </Card>
            </Container>
        </div>
    );
};

export default LogInForm;

