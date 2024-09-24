// import React, { useState } from "react";
// import {
//   Box, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextFieldVariants,
//   FormControlLabel,
//   Checkbox,
// } from "@mui/material";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { SelectChangeEvent } from '@mui/material/Select';
// import { enGB } from 'date-fns/locale';
// import axios from "axios";


// interface AdmissionForm {
//   firstName: string;
//   middleName: string;
//   lastName: string;
//   admissionBranch: string,
//   admissionSchoolOrCollege: string,
//   isAdminPermitted: boolean,
//   isDKSPermitted: boolean,
//   isAccountantPermitted: boolean,
//   isIDCardCreated: boolean
//   // pincode: string;
//   // admissionBranch: string; // Assuming this is a field you want to include
//   // dateOfBirth: Date | null;
//   //   caste: string;
//   //   bloodGroup: string;
//   //   phoneNumber: string;
//   //   whatsappNumber: string;
//   //   emailAddress: string;
//   //   permanentDiseases: string;
// }

// const AdmissionFormComponent: React.FC = () => {
//   const [formData, setFormData] = useState<AdmissionForm>({
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     admissionBranch: '',
//     admissionSchoolOrCollege: '',
//     isAdminPermitted: false,
//     isDKSPermitted: false,
//     isAccountantPermitted: false,
//     isIDCardCreated: false
//     // pincode: '',
//     // dateOfBirth: null,
//     // caste: '',
//     // bloodGroup: '',
//     // phoneNumber: '',
//     // whatsappNumber: '',
//     // emailAddress: '',
//     // permanentDiseases: '',
//   });

//   // const navigate = useNavigate();

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleAdmin = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = event.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   // const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//   //   const { name, value } = event.target;
//   //   setFormData((prevFormData) => ({
//   //     ...prevFormData,
//   //     [name]: value,
//   //   }));
//   // };

//   const handleSelectChange = (event: SelectChangeEvent<string>) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   // const handleDateChange = (date: Date | null) => {
//   //   setFormData((prevFormData) => ({
//   //     ...prevFormData,
//   //     dateOfBirth: date,
//   //   }));
//   // };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("Form submitted:", formData);

//     axios.post('http://localhost:3000/student/register', {
//       firstName: formData.firstName,
//       middleName: formData.middleName,
//       lastName: formData.lastName,
//       admissionBranch: formData.admissionBranch,
//       admissionSchoolOrCollege: formData.admissionSchoolOrCollege,
//       isAdminPermitted: formData.isAdminPermitted,
//       isDKSPermitted: formData.isDKSPermitted,
//       isAccountantPermitted: formData.isAccountantPermitted,
//       isIDCardCreated: formData.isIDCardCreated
//       // pincode: formData.pincode,
//       // dateOfBirth: formData.dateOfBirth,
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
//     <Box component="form" onSubmit={handleSubmit}>
//       <Box sx={{ border: 1, borderRadius: 2, padding: 4, margin: 2 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField
//               id="firstName"
//               name="firstName"
//               label="First Name"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               id="middleName"
//               name="middleName"
//               label="Middle Name"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={formData.middleName}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               id="lastName"
//               name="lastName"
//               label="Last Name"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
            
//             <FormControl variant="outlined" fullWidth margin="normal">
//               <InputLabel id="caste-label">Admission Branch</InputLabel>
//               <Select
//                 id="admissionBranch"
//                 name="admissionBranch"
//                 label="Admission Branch"
//                 variant="outlined"
//                 value={formData.admissionBranch}
//                 onChange={handleSelectChange}
//                 required
//               >
//                 <MenuItem value="">Select Branch</MenuItem>
//                 <MenuItem value="CE">CE</MenuItem>
//                 <MenuItem value="CSE">CSE</MenuItem>
//                 <MenuItem value="IT">IT</MenuItem>
//                 <MenuItem value="EC">EC</MenuItem>
//                 <MenuItem value="IC">IC</MenuItem>
//                 <MenuItem value="CH">CH</MenuItem>
//                 <MenuItem value="CL">CL</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12}>
            
//             <FormControl variant="outlined" fullWidth margin="normal">
//               <InputLabel id="caste-label">Admission School/College</InputLabel>
//               <Select
//                 id="admissionSchoolOrCollege"
//                 name="admissionSchoolOrCollege"
//                 label="Admission School/College"
//                 variant="outlined"
//                 value={formData.admissionSchoolOrCollege}
//                 onChange={handleSelectChange}
//                 required
//               >
//                 <MenuItem value="">Select School/College</MenuItem>
//                 <MenuItem value="DDU">DDU</MenuItem>
//                 <MenuItem value="CHARUSAT">CHARUSAT</MenuItem>
//                 <MenuItem value="J & J COLLEGE">J & J COLLEGE</MenuItem>
//                 <MenuItem value="Knowledege High School">Knowledege High School</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={formData.isAdminPermitted}
//                   onChange={handleAdmin}
//                   name="isAdminPermitted"
//                   color="primary"
//                 />
//               }
//               label="Admin"
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={formData.isDKSPermitted}
//                   onChange={handleAdmin}
//                   name="isDKSPermitted"
//                   color="primary"
//                 />
//               }
//               label="DKS"
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={formData.isAccountantPermitted}
//                   onChange={handleAdmin}
//                   name="isAccountantPermitted"
//                   color="primary"
//                 />
//               }
//               label="Accountant"
//             />
//           </Grid>
//           {/* <Grid item xs={12}>
//             <LocalizationProvider dateAdapter={AdapterDateFns} >
//               <DatePicker
//                 label="Date of Birth"
//                 value={formData.dateOfBirth}
//                 onChange={handleDateChange}
//                 renderInput={(params: JSX.IntrinsicAttributes & { variant?: TextFieldVariants | undefined; } & Omit<FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps, "variant">) => (
//                   <TextField {...params} fullWidth margin="normal" variant="outlined" />
//                 )}
//               inputFormat="dd-MM-yyyy"
//               />
//             </LocalizationProvider>
//           </Grid> */}

//           <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//             <Button variant="contained" color="primary" type="submit">
//               Submit
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>
//       <Box>
//         <h2>Form Data Preview</h2>
//         <pre>{JSON.stringify(formData, null, 2)}</pre>
//       </Box>
//     </Box>
//   );
// };

// export default AdmissionFormComponent;


import React, { useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface AdmissionForm {
  firstName: string;
  middleName: string;
  lastName: string;
  admissionBranch: string;
  admissionSchoolOrCollege: string;
  isAdminPermitted: boolean;
  isDKSPermitted: boolean;
  isAccountantPermitted: boolean;
  isIDCardCreated: boolean;
}

const AdmissionFormComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<AdmissionForm>();

  const onSubmit: SubmitHandler<AdmissionForm> = async (data) => {
    try {
      const response = await axios.post('http://localhost:3300/student/register', data);
      console.log("Response:", response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  useEffect(() => {
    // Trigger validation on blur for each field
    const validateOnBlur = async (fieldName: keyof AdmissionForm) => {
      await trigger(fieldName);
    };

    Object.keys(errors).forEach((field) => {
      if (errors[field as keyof AdmissionForm]) {
        validateOnBlur(field as keyof AdmissionForm);
      }
    });
  }, [errors, trigger]);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ border: 1, borderRadius: 2, padding: 4, margin: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              id="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("firstName", { required: "First name is required" })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              onBlur={() => trigger("firstName")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="middleName"
              label="Middle Name"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("middleName", { required: "Middle name is required" })}
              error={!!errors.middleName}
              helperText={errors.middleName?.message}
              onBlur={() => trigger("middleName")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("lastName", { required: "Last name is required" })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              onBlur={() => trigger("lastName")}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth margin="normal" error={!!errors.admissionBranch}>
              <InputLabel id="admissionBranch-label">Admission Branch</InputLabel>
              <Select
                id="admissionBranch"
                label="Admission Branch"
                {...register("admissionBranch", { required: "Admission branch is required" })}
                onBlur={() => trigger("admissionBranch")}
              >
                <MenuItem value="">Select Branch</MenuItem>
                <MenuItem value="CE">CE</MenuItem>
                <MenuItem value="CSE">CSE</MenuItem>
                <MenuItem value="IT">IT</MenuItem>
                <MenuItem value="EC">EC</MenuItem>
                <MenuItem value="IC">IC</MenuItem>
                <MenuItem value="CH">CH</MenuItem>
                <MenuItem value="CL">CL</MenuItem>
              </Select>
              {errors.admissionBranch && <FormHelperText>{errors.admissionBranch.message}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth margin="normal" error={!!errors.admissionSchoolOrCollege}>
              <InputLabel id="admissionSchoolOrCollege-label">Admission School/College</InputLabel>
              <Select
                id="admissionSchoolOrCollege"
                label="Admission School/College"
                {...register("admissionSchoolOrCollege", { required: "Admission school or college is required" })}
                onBlur={() => trigger("admissionSchoolOrCollege")}
              >
                <MenuItem value="">Select School/College</MenuItem>
                <MenuItem value="DDU">DDU</MenuItem>
                <MenuItem value="CHARUSAT">CHARUSAT</MenuItem>
                <MenuItem value="J & J COLLEGE">J & J COLLEGE</MenuItem>
                <MenuItem value="Knowledege High School">Knowledege High School</MenuItem>
              </Select>
              {errors.admissionSchoolOrCollege && <FormHelperText>{errors.admissionSchoolOrCollege.message}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  {...register("isAdminPermitted")}
                  onBlur={() => trigger("isAdminPermitted")}
                  name="isAdminPermitted"
                  color="primary"
                />
              }
              label="Admin"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  {...register("isDKSPermitted")}
                  onBlur={() => trigger("isDKSPermitted")}
                  name="isDKSPermitted"
                  color="primary"
                />
              }
              label="DKS"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  {...register("isAccountantPermitted")}
                  onBlur={() => trigger("isAccountantPermitted")}
                  name="isAccountantPermitted"
                  color="primary"
                />
              }
              label="Accountant"
            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <h2>Form Data Preview</h2>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </Box>
    </Box>
  );
};

export default AdmissionFormComponent;

// import React, { useState } from 'react';
// import { Box, Button, Card, CardContent, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { useForm, Controller, SubmitHandler } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// // import styled from 'styled-components';

// // const VisuallyHiddenInput = styled('input')({
// //   clip: 'rect(0 0 0 0)',
// //   clipPath: 'inset(50%)',
// //   height: 1,
// //   overflow: 'hidden',
// //   position: 'absolute',
// //   bottom: 0,
// //   left: 0,
// //   whiteSpace: 'nowrap',
// //   width: 1,
// // });

// interface FormData {
//   surname: string;
//   name: string;
//   fatherName: string;
//   dateOfBirth: string;
//   cast: string;
//   mobileNo: string;
//   whatsappNo: string;
//   email: string;
//   address: string;
//   villageCity: string;
//   taluka: string;
//   district: string;
//   pin: string;
//   bloodGroup: string;
//   permanentIllness: string;
// }

// const schema = yup.object().shape({
//   surname: yup.string().required('Surname is required'),
//   name: yup.string().required('Name is required'),
//   fatherName: yup.string().required('Father Name is required'),
//   dateOfBirth: yup.string().required('Date of Birth is required'),
//   cast: yup.string().required('Cast is required'),
//   mobileNo: yup.string().required('Mobile No. is required').matches(/^[0-9]{10}$/, 'Mobile No. is not valid'),
//   whatsappNo: yup.string().required('Whatsapp No. is required').matches(/^[0-9]{10}$/, 'Whatsapp No. is not valid'),
//   email: yup.string().required('Email is required').email('Email is not valid'),
//   address: yup.string().required('Address is required'),
//   villageCity: yup.string().required('Village/City is required'),
//   taluka: yup.string().required('Taluka is required'),
//   district: yup.string().required('District is required'),
//   pin: yup.string().required('Pin Code is required').matches(/^[0-9]{6}$/, 'Pin Code is not valid'),
//   bloodGroup: yup.string().required('Blood Group is required'),
//   permanentIllness: yup.string().required('Permanent Illness is required'),
// });

// const PersonalInfoStep = ({ control, errors }) => (
//   <Box m={5}>
//     <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
//       <CardContent m={5} sx={{ ml: 2 }}>
//         <Grid container direction="column" spacing={2} textAlign="center">
//           <h3>Personal Information of the Student</h3>
//           <Grid container spacing={2} justifyContent="flex-end" mt={1}>
//             <Grid>
//               <Typography variant="subtitle1" gutterBottom align="left">
//                 Student Passport Size Photo
//               </Typography>
//               <Button
//                 component="label"
//                 variant="contained"
//                 startIcon={<CloudUploadIcon />}
//                 sx={{ alignSelf: 'flex-end' }}
//               >
//                 Student Photo
//                 {/* <VisuallyHiddenInput type="file" /> */}
//               </Button>
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={6} md={4}>
//               <Typography variant="subtitle1" gutterBottom align="left">
//                 Student Full Name
//               </Typography>
//               <Controller
//                 name="surname"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Surname"
//                     fullWidth
//                     InputProps={{ style: { height: '50px' } }}
//                     error={!!errors.surname}
//                     helperText={errors.surname ? errors.surname.message : ''}
//                     {...field}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4} mt={4}>
//               <Controller
//                 name="name"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Name"
//                     fullWidth
//                     InputProps={{ style: { height: '50px' } }}
//                     error={!!errors.name}
//                     helperText={errors.name ? errors.name.message : ''}
//                     {...field}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4} mt={4}>
//               <Controller
//                 name="fatherName"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Father Name"
//                     fullWidth
//                     InputProps={{ style: { height: '50px' } }}
//                     error={!!errors.fatherName}
//                     helperText={errors.fatherName ? errors.fatherName.message : ''}
//                     {...field}
//                   />
//                 )}
//               />
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={6} md={2}>
//               <Controller
//                 name="dateOfBirth"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Date Of Birth"
//                     fullWidth
//                     InputProps={{ style: { height: '50px' } }}
//                     error={!!errors.dateOfBirth}
//                     helperText={errors.dateOfBirth ? errors.dateOfBirth.message : ''}
//                     {...field}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={2}>
//               <Controller
//                 name="cast"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Cast"
//                     fullWidth
//                     InputProps={{ style: { height: '50px' } }}
//                     error={!!errors.cast}
//                     helperText={errors.cast ? errors.cast.message : ''}
//                     {...field}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={2.5}>
//               <Controller
//                 name="mobileNo"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Mobile No."
//                     fullWidth
//                     InputProps={{ style: { height: '50px' } }}
//                     error={!!errors.mobileNo}
//                     helperText={errors.mobileNo ? errors.mobileNo.message : ''}
//                     {...field}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={2.5}>
//               <Controller
//                 name="whatsappNo"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Whatsapp No."
//                     fullWidth
//                     InputProps={{ style: { height: '50px' } }}
//                     error={!!errors.whatsappNo}
//                     helperText={errors.whatsappNo ? errors.whatsappNo.message : ''}
//                     {...field}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Controller
//                 name="email"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Email ID"
//                     fullWidth
//                     InputProps={{ style: { height: '50px' } }}
//                     error={!!errors.email}
//                     helperText={errors.email ? errors.email.message : ''}
//                     {...field}
//                   />
//                 )}
//               />
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12}>
//               <Controller
//                 name="address"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Address"
//                     multiline
//                     rows={4}
//                     fullWidth
//                     InputProps={{ style: { width: '100%', height: '100%' } }}
//                     error={!!errors.address}
//                     helperText={errors.address ? errors.address.message : ''}
//                     {...field}
//                   />
//                 )}
//               />
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={6} md={3}>
//               <Controller
//                 name="villageCity"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Village/City"
//                     fullWidth
//                     InputProps={{ style: { height: '50px' } }}
//                     error={!!errors.villageCity}
//                     helperText={errors.villageCity ? errors.villageCity.message : ''}
//                     {...field}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Controller
//                 name="taluka"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Taluka"
//                     fullWidth
//                     InputProps={{ style: { height: '50px' } }}
//                     error={!!errors.taluka}
//                     helperText={errors.taluka ? errors.taluka.message : ''}
//                     {...field}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Controller
//                 name="district"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="District"
//                     fullWidth
//                     InputProps={{ style: { height: '50px' } }}
//                     error={!!errors.district}
//                     helperText={errors.district ? errors.district.message : ''}
//                     {...field}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Controller
//                 name="pin"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Pin Code"
//                     fullWidth
//                     InputProps={{ style: { height: '50px' } }}
//                     error={!!errors.pin}
//                     helperText={errors.pin ? errors.pin.message : ''}
//                     {...field}
//                   />
//                 )}
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   </Box>
// );

// const HealthInfoStep = ({ control, errors }) => (
//   <Box m={5}>
//     <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
//       <CardContent m={5} sx={{ ml: 2 }}>
//         <Grid container direction="column" spacing={2} textAlign="center">
//           <h3>Health Information of the Student</h3>
//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={6} md={4}>
//               <Controller
//                 name="bloodGroup"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Blood Group"
//                     fullWidth
//                     InputProps={{ style: { height: '50px' } }}
//                     error={!!errors.bloodGroup}
//                     helperText={errors.bloodGroup ? errors.bloodGroup.message : ''}
//                     {...field}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Controller
//                 name="permanentIllness"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Permanent Illness"
//                     fullWidth
//                     InputProps={{ style: { height: '50px' } }}
//                     error={!!errors.permanentIllness}
//                     helperText={errors.permanentIllness ? errors.permanentIllness.message : ''}
//                     {...field}
//                   />
//                 )}
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   </Box>
// );

// const StudentForm: React.FC = () => {
//   const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
//     resolver: yupResolver(schema),
//   });

//   const [activeStep, setActiveStep] = useState(0);
//   const steps = ['Personal Information', 'Health Information'];

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((label, index) => (
//           <Step key={index}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       {activeStep === 0 && <PersonalInfoStep control={control} errors={errors} />}
//       {activeStep === 1 && <HealthInfoStep control={control} errors={errors} />}

//       <Box display="flex" justifyContent="space-between" mt={2}>
//         <Button disabled={activeStep === 0} onClick={handleBack}>
//           Back
//         </Button>
//         {activeStep === steps.length - 1 ? (
//           <Button type="submit" variant="contained" color="primary">
//             Submit
//           </Button>
//         ) : (
//           <Button variant="contained" color="primary" onClick={handleNext}>
//             Next
//           </Button>
//         )}
//       </Box>
//     </form>
//   );
// };

// export default StudentForm;
