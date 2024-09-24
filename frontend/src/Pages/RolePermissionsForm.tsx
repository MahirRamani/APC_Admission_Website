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
  role: yup.string().required('Role is required'),
  permission: yup.string().required('Permission is required')
}).required();


// Define the types for form values
type SignUpFormInputs = {
  role: string;
  permission: string;
};

const SignUpForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, trigger } = useForm<SignUpFormInputs>({
    resolver: yupResolver(schema)
  });

  // const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignUpFormInputs> = data => {
    console.log(data);
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
              
              <FormControl sx={{width:304}} margin="normal" error={!!errors.role}>
                <InputLabel>Role</InputLabel>
                <Select
                  label="Role"
                  defaultValue=""
                  {...register('role')}
                  onBlur={() => trigger('role')}
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="guest">Guest</MenuItem>
                </Select>
                <Typography variant="caption" color="error">
                  {errors.role?.message}
                </Typography>
              </FormControl>
              <FormControl sx={{width:304}} margin="normal" error={!!errors.permission}>
                <InputLabel>Permission</InputLabel>
                <Select
                  label="Permission"
                  defaultValue=""
                  {...register('permission')}
                  onBlur={() => trigger('permission')}
                >
                  <MenuItem value="read">Read</MenuItem>
                  <MenuItem value="write">Write</MenuItem>
                  <MenuItem value="execute">Execute</MenuItem>
                </Select>
                <Typography variant="caption" color="error">
                  {errors.permission?.message}
                </Typography>
              </FormControl>
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

export default SignUpForm;

