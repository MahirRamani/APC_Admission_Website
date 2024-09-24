// import React, { useState } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import {
//   Container, Box, Typography, TextField, Button, Card, MenuItem, Select, InputLabel, FormControl
// } from '@mui/material';
// import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // Define the form schema using yup
// const schema = yup.object({
//   fullName: yup.string().required('Full name is required'),
//   username: yup.string().required('Username is required'),
//   password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
//   confirmPassword: yup.string()
//     .oneOf([yup.ref('password'), undefined], 'Passwords must match')
//     .required('Confirm Password is required'),
//   role: yup.string().required('Role is required'),
//   // permission: yup.string().required('Permission is required')
// }).required();


// // Define the types for form values
// // type SignUpFormInputs = {
// //   fullName: string;
// //   username: string;
// //   password: string;
// //   confirmPassword: string;
// //   role: string;
// //   permission: string;
// // };

// interface SignUpFormInputs {
//   fullName: string;
//   username: string;
//   password: string;
//   confirmPassword: string;
//   role: string;
// }

// const SignUpForm: React.FC = () => {
//   const { register, handleSubmit, formState: { errors }, trigger } = useForm<SignUpFormInputs>({
//     resolver: yupResolver(schema)
//   });

//   // const navigate = useNavigate();

//   const [formData, setFormData] = useState<SignUpFormInputs>({
//     fullName: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//     role: '',
//   });

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     // console.log(data);
//     // navigate('/Dashboard');
//     event.preventDefault();
//     console.log("Form submitted:", formData);

//     axios.post('http://localhost:3000/Khajur/registerUser', {
//       fullName: formData.fullName,
//       username: formData.username,
//       password: formData.password,
//       role: formData.role
//     })
//       .then((res) => {
//         console.log(res.data);
//         console.log("Hello axios.post");
//         // navigate('/about');
//       })
//       .catch((error) => {
//         console.error('There was an error!', error);
//       });
//   };


//   return (
//     <div style={{ backgroundImage: ``, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <Container maxWidth="xs">
//         <Card sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.95)', boxShadow: 8 }}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <img alt="logo" height="80" style={{ marginBottom: '1rem' }} />
//             <Typography variant="h5" component="h1" gutterBottom fontWeight="bold">
//               APC Nadiad
//             </Typography>
//             <Typography variant="subtitle1" component="h2" gutterBottom>
//               (A Place for Development Character)
//             </Typography>
//             <form onSubmit={onSubmit}>
//               <TextField
//                 fullWidth
//                 label="Full Name"
//                 margin="normal"
//                 value={formData.fullName}
//                 onBlur={() => trigger('fullName')}
//                 error={!!errors.fullName}
//                 helperText={errors.fullName?.message}
//               />
//               <TextField
//                 fullWidth
//                 label="Username"
//                 margin="normal"
//                 value={formData.username}
//                 onBlur={() => trigger('username')}
//                 error={!!errors.username}
//                 helperText={errors.username?.message}
//                 />
//               <TextField
//                 fullWidth
//                 label="Password"
//                 type="password"
//                 margin="normal"
//                 {...register('password')}
//                 value={formData.password}
//                 onBlur={() => trigger('password')}
//                 error={!!errors.password}
//                 helperText={errors.password?.message}
//               />
//               <TextField
//                 fullWidth
//                 label="Confirm Password"
//                 type="password"
//                 margin="normal"
//                 onBlur={() => trigger('confirmPassword')}
//                 error={!!errors.confirmPassword}
//                 helperText={errors.confirmPassword?.message}
//               />
//               <FormControl fullWidth margin="normal" error={!!errors.role}>
//                 <InputLabel>Role</InputLabel>
//                 <Select
//                   label="Role"
//                   defaultValue=""
//                   {...register('role')}
//                   onBlur={() => trigger('role')}
//                 >
//                   <MenuItem value="admin">Admin</MenuItem>
//                   <MenuItem value="user">User</MenuItem>
//                   <MenuItem value="guest">Guest</MenuItem>
//                 </Select>
//                 <Typography variant="caption" color="error">
//                   {errors.role?.message}
//                 </Typography>
//               </FormControl>
//               {/* <FormControl fullWidth margin="normal" error={!!errors.permission}>
//                 <InputLabel>Permission</InputLabel>
//                 <Select
//                   label="Permission"
//                   defaultValue=""
//                   {...register('permission')}
//                   onBlur={() => trigger('permission')}
//                 >
//                   <MenuItem value="read">Read</MenuItem>
//                   <MenuItem value="write">Write</MenuItem>
//                   <MenuItem value="execute">Execute</MenuItem>
//                 </Select>
//                 <Typography variant="caption" color="error">
//                   {errors.permission?.message}
//                 </Typography>
//               </FormControl> */}
//               <Button
//                 fullWidth
//                 type="submit"
//                 variant="contained"
//                 sx={{ mt: 2, backgroundColor: 'orange', '&:hover': { backgroundColor: 'darkorange' } }}
//               >
//                 Sign Up
//               </Button>
//             </form>
//           </Box>
//         </Card>
//       </Container>
//     </div>
//   );
// };


// import React, { useState } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import {
//   Container, Box, Typography, TextField, Button, Card, MenuItem, Select, InputLabel, FormControl
// } from '@mui/material';
// import axios from 'axios';
// import { SelectChangeEvent } from '@mui/material/Select';

// // Define the form schema using yup
// const schema = yup.object({
//   fullName: yup.string().required('Full name is required'),
//   username: yup.string().required('Username is required'),
//   password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
//   confirmPassword: yup.string()
//     .oneOf([yup.ref('password')], 'Passwords must match')
//     .required('Confirm Password is required'),
//   role: yup.string().required('Role is required'),
// }).required();

// // Define the types for form values
// interface SignUpFormInputs {
//   fullName: string;
//   username: string;
//   password: string;
//   confirmPassword: string;
//   role: string;
// }

// const SignUpForm: React.FC = () => {
//   const { handleSubmit, formState: { errors }, trigger, setValue } = useForm<SignUpFormInputs>({
//     resolver: yupResolver(schema)
//   });

//   const [formData, setFormData] = useState<SignUpFormInputs>({
    // fullName: '',
    // username: '',
    // password: '',
    // confirmPassword: '',
    // role: '',
//   });

//   const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
//     console.log("Form submitted:", data);

//     axios.post('http://localhost:3000/Khajur/registerUser', 
//       {
//         fullName: formData.fullName,
//         username: formData.username,
//         password: formData.password,
//         role: formData.role,
//       }
//     )
//       .then((res) => {
//         console.log(res.data);
//         // navigate('/about');
//       })
//       .catch((error) => {
//         console.error('There was an error!', error);
//       });
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//     setValue(name as keyof SignUpFormInputs, value);
//     trigger(name as keyof SignUpFormInputs);
//   };
  
//   const handleSelectChange = (event: SelectChangeEvent<string>) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//     setValue(name as keyof SignUpFormInputs, value);
//   };

//   return (
//     <div style={{ backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <Container maxWidth="xs">
//         <Card sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.95)', boxShadow: 8 }}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <Typography variant="h5" component="h1" gutterBottom fontWeight="bold">
//               APC Nadiad
//             </Typography>
//             <Typography variant="subtitle1" component="h2" gutterBottom>
//               (A Place for Development Character)
//             </Typography>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <TextField
//                 fullWidth
//                 label="Full Name"
//                 name="fullName"
//                 margin="normal"
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//                 onBlur={() => { 'fullname'}}
//                 error={!!errors.fullName}
//                 helperText={errors.fullName?.message}
//               />
//               <TextField
//                 fullWidth
//                 label="Username"
//                 name="username"
//                 margin="normal"
//                 value={formData.username}
//                 onChange={handleInputChange}
//                 error={!!errors.username}
//                 helperText={errors.username?.message}
//               />
//               <TextField
//                 fullWidth
//                 label="Password"
//                 name="password"
//                 type="password"
//                 margin="normal"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 error={!!errors.password}
//                 helperText={errors.password?.message}
//               />
//               <TextField
//                 fullWidth
//                 label="Confirm Password"
//                 name="confirmPassword"
//                 type="password"
//                 margin="normal"
//                 value={formData.confirmPassword}
//                 onChange={handleInputChange}
//                 error={!!errors.confirmPassword}
//                 helperText={errors.confirmPassword?.message}
//               />
//               <FormControl fullWidth margin="normal" error={!!errors.role}>
//                 <InputLabel>Role</InputLabel>
//                 <Select
//                   label="Role"
//                   name="role"
//                   value={formData.role}
//                   onChange={handleSelectChange}
//                 >
//                   <MenuItem value="admin">Admin</MenuItem>
//                   <MenuItem value="user">User</MenuItem>
//                   <MenuItem value="guest">Guest</MenuItem>
//                 </Select>
//                 <Typography variant="caption" color="error">
//                   {errors.role?.message}
//                 </Typography>
//               </FormControl>
//               <Button
//                 fullWidth
//                 type="submit"
//                 variant="contained"
//                 sx={{ mt: 2, backgroundColor: 'orange', '&:hover': { backgroundColor: 'darkorange' } }}
//               >
//                 Sign Up
//               </Button>
//             </form>
//           </Box>
//         </Card>
//       </Container>
//     </div>
//   );
// };

// export default SignUpForm;


// src/SignUpForm.tsx

// import React, { useEffect } from 'react';
// import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
// import {
//   TextField,
//   Button,
//   Grid,
//   Typography,
//   Container,
// } from '@mui/material';

// interface IFormInput {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// const SignUpForm: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     setError,
//     trigger,
//     formState: { errors },
//   } = useForm<IFormInput>();

//   const onSubmit: SubmitHandler<IFormInput> = (data) => {
//     console.log(data);
//   };

//   const password = watch('password');

//   useEffect(() => {
//     // Trigger validation on blur for each field
//     const validateOnBlur = async (fieldName: keyof IFormInput) => {
//       await trigger(fieldName);
//     };

//     Object.keys(errors).forEach((field) => {
//       if (errors[field as keyof IFormInput]) {
//         validateOnBlur(field as keyof IFormInput);
//       }
//     });
//   }, [errors, trigger]);

//   return (
//     <Container component="main" maxWidth="xs">
//       <Typography component="h1" variant="h5" gutterBottom>
//         Sign Up
//       </Typography>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               label="First Name"
//               fullWidth
//               {...register('firstName', { required: 'First name is required' })}
//               error={!!errors.firstName}
//               helperText={errors.firstName?.message}
//               onBlur={() => trigger('firstName')}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Last Name"
//               fullWidth
//               {...register('lastName', { required: 'Last name is required' })}
//               error={!!errors.lastName}
//               helperText={errors.lastName?.message}
//               onBlur={() => trigger('lastName')}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Email"
//               fullWidth
//               {...register('email', {
//                 required: 'Email is required',
//                 pattern: {
//                   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                   message: 'Invalid email address',
//                 },
//               })}
//               error={!!errors.email}
//               helperText={errors.email?.message}
//               onBlur={() => trigger('email')}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Password"
//               type="password"
//               fullWidth
//               {...register('password', {
//                 required: 'Password is required',
//                 minLength: {
//                   value: 6,
//                   message: 'Password must be at least 6 characters',
//                 },
//               })}
//               error={!!errors.password}
//               helperText={errors.password?.message}
//               onBlur={() => trigger('password')}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Confirm Password"
//               type="password"
//               fullWidth
//               {...register('confirmPassword', {
//                 required: 'Confirm Password is required',
//                 validate: (value) =>
//                   value === password || 'Passwords do not match',
//               })}
//               error={!!errors.confirmPassword}
//               helperText={errors.confirmPassword?.message}
//               onBlur={() => trigger('confirmPassword')}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button type="submit" fullWidth variant="contained" color="primary">
//               Sign Up
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default SignUpForm;


// src/SignUpForm.tsx

// import React, { useEffect } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import {
//   TextField,
//   Button,
//   Grid,
//   Typography,
//   Container,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   FormHelperText,
// } from '@mui/material';
// import axios from 'axios';

// interface IFormInput {
//   name: string;
//   username: string;
//   password: string;
//   confirmPassword: string;
//   role: string;
// }

// const SignUpForm: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     setError,
//     trigger,
//     formState: { errors },
//   } = useForm<IFormInput>();

//   const onSubmit: SubmitHandler<IFormInput> = async (data) => {
//     try {
//       const response = await axios.post('http://localhost:3000/Khajur/registerUser', data);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const password = watch('password');

//   useEffect(() => {
//     // Trigger validation on blur for each field
//     const validateOnBlur = async (fieldName: keyof IFormInput) => {
//       await trigger(fieldName);
//     };

//     // Object.keys(errors).forEach((field) => {
//     //   if (errors[field as keyof IFormInput]) {
//     //     validateOnBlur(field as keyof IFormInput);
//     //   }
//     // });
//   }, [errors, trigger]);

//   return (
//     <Container component="main" maxWidth="xs">
//       <Typography component="h1" variant="h5" gutterBottom>
//         Sign Up
//       </Typography>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               label="Name"
//               fullWidth
//               {...register('name', { required: 'Name is required' })}
//               error={!!errors.name}
//               helperText={errors.name?.message}
//               onBlur={() => trigger('name')}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Username"
//               fullWidth
//               {...register('username', { required: 'Username is required' })}
//               error={!!errors.username}
//               helperText={errors.username?.message}
//               onBlur={() => trigger('username')}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Password"
//               type="password"
//               fullWidth
//               {...register('password', {
//                 required: 'Password is required',
//                 minLength: {
//                   value: 6,
//                   message: 'Password must be at least 6 characters',
//                 },
//               })}
//               error={!!errors.password}
//               helperText={errors.password?.message}
//               onBlur={() => trigger('password')}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Confirm Password"
//               type="password"
//               fullWidth
//               {...register('confirmPassword', {
//                 required: 'Confirm Password is required',
//                 validate: (value) =>
//                   value === password || 'Passwords do not match',
//               })}
//               error={!!errors.confirmPassword}
//               helperText={errors.confirmPassword?.message}
//               onBlur={() => trigger('confirmPassword')}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <FormControl fullWidth error={!!errors.role}>
//               <InputLabel>Role</InputLabel>
//               <Select
//                 label="Role"
//                 defaultValue=""
//                 {...register('role', { required: 'Role is required' })}
//                 onBlur={() => trigger('role')}
//               >
//                 <MenuItem value="admin">Admin</MenuItem>
//                 <MenuItem value="user">User</MenuItem>
//                 <MenuItem value="guest">Guest</MenuItem>
//               </Select>
//               {errors.role && <FormHelperText>{errors.role?.message}</FormHelperText>}
//             </FormControl>
//           </Grid>
//           <Grid item xs={12}>
//             <Button type="submit" fullWidth variant="contained" color="primary">
//               Sign Up
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default SignUpForm;

