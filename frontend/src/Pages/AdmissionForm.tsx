// import PropTypes from 'prop-types';
// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import CardContent from '@mui/material/CardContent';

// interface PersonalInfoStepProps {
//   formData: FormData;
//   onFormDataChange: (newData: FormData) => void;
// }

// const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ formData, onFormDataChange }) => {
//   const initialFormData: FormData = {
//     surname: '',
//     name: '',
//     fatherName: '',
//     dateOfBirth: '',
//     cast: '',
//     mobileNo: '',
//     whatsappNo: '',
//     emailId: '',
//     address: '',
//     villageCity: '',
//     taluka: '',
//     district: '',
//     pin: '',
//     bloodGroup: '',
//     permanentIllness: '',
//   };

//   const [localFormData, setLocalFormData] = useState<FormData>(initialFormData);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setLocalFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//     onFormDataChange({
//       ...localFormData,
//       [name]: value,
//     });
//   };

//   return (
//     <Box sx={{ margin: 5 }}>
//       <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
//         <CardContent sx={{ margin: 5, ml: 2 }}>
//           <Grid container direction="column" spacing={2} textAlign="center">
//             <Typography variant="h6" gutterBottom>
//               Personal Information of the Student
//             </Typography>
//             <Grid container spacing={2} justifyContent="flex-end" mt={1}>
//               <Grid item>
//                 <Typography variant="subtitle1" gutterBottom align="left">
//                   Student Passport Size Photo
//                 </Typography>
//                 <Button
//                   component="label"
//                   role={undefined}
//                   variant="contained"
//                   tabIndex={-1}
//                   startIcon={<CloudUploadIcon />}
//                   sx={{ alignSelf: 'flex-end' }}
//                 >
//                   Student Photo
//                   <input type="file" hidden />
//                 </Button>
//               </Grid>
//             </Grid>

//             <Grid container spacing={2} alignItems="center" mt={1}>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle1" gutterBottom align="left">
//                   Student Full Name
//                 </Typography>
//                 <TextField
//                   name="surname"
//                   label="Surname"
//                   value={localFormData.surname}
//                   onChange={handleChange}
//                   fullWidth
//                   InputProps={{ style: { height: '50px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={4} mt={4}>
//                 <TextField
//                   name="name"
//                   label="Name"
//                   value={localFormData.name}
//                   onChange={handleChange}
//                   fullWidth
//                   InputProps={{ style: { height: '50px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={4} mt={4}>
//                 <TextField
//                   name="fatherName"
//                   label="Father Name"
//                   value={localFormData.fatherName}
//                   onChange={handleChange}
//                   fullWidth
//                   InputProps={{ style: { height: '50px' } }}
//                 />
//               </Grid>
//             </Grid>

//             <Grid container spacing={2} alignItems="center" mt={1}>
//               <Grid item xs={12} sm={6} md={2}>
//                 <TextField
//                   name="dateOfBirth"
//                   label="Date Of Birth"
//                   value={localFormData.dateOfBirth}
//                   onChange={handleChange}
//                   fullWidth
//                   InputProps={{ style: { height: '50px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={2}>
//                 <TextField
//                   name="cast"
//                   label="Cast"
//                   value={localFormData.cast}
//                   onChange={handleChange}
//                   fullWidth
//                   InputProps={{ style: { height: '50px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={2.5}>
//                 <TextField
//                   name="mobileNo"
//                   label="Mobile No."
//                   value={localFormData.mobileNo}
//                   onChange={handleChange}
//                   fullWidth
//                   InputProps={{ style: { height: '50px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={2.5}>
//                 <TextField
//                   name="whatsappNo"
//                   label="Whatsapp No."
//                   value={localFormData.whatsappNo}
//                   onChange={handleChange}
//                   fullWidth
//                   InputProps={{ style: { height: '50px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <TextField
//                   name="emailId"
//                   label="Email ID"
//                   value={localFormData.emailId}
//                   onChange={handleChange}
//                   fullWidth
//                   InputProps={{ style: { height: '50px' } }}
//                 />
//               </Grid>
//             </Grid>

//             <Grid container spacing={2} alignItems="center" mt={1}>
//               <Grid item xs={12}>
//                 <TextField
//                   name="address"
//                   label="Address"
//                   multiline
//                   rows={4}
//                   value={localFormData.address}
//                   onChange={handleChange}
//                   fullWidth
//                   InputProps={{ style: { width: '100%', height: '100%' } }}
//                 />
//               </Grid>
//             </Grid>

//             <Grid container spacing={2} alignItems="center" mt={1}>
//               <Grid item xs={12} sm={6} md={3}>
//                 <TextField
//                   name="villageCity"
//                   label="Village/City"
//                   value={localFormData.villageCity}
//                   onChange={handleChange}
//                   fullWidth
//                   InputProps={{ style: { height: '50px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <TextField
//                   name="taluka"
//                   label="Taluka"
//                   value={localFormData.taluka}
//                   onChange={handleChange}
//                   fullWidth
//                   InputProps={{ style: { height: '50px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <TextField
//                   name="district"
//                   label="District"
//                   value={localFormData.district}
//                   onChange={handleChange}
//                   fullWidth
//                   InputProps={{ style: { height: '50px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <TextField
//                   name="pin"
//                   label="Pin Code"
//                   value={localFormData.pin}
//                   onChange={handleChange}
//                   fullWidth
//                   InputProps={{ style: { height: '50px' } }}
//                 />
//               </Grid>
//             </Grid>

//             <Grid container spacing={2} alignItems="center" mt={1}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   name="bloodGroup"
//                   label="Blood Group"
//                   value={localFormData.bloodGroup}
//                   onChange={handleChange}
//                   fullWidth
//                   InputProps={{ style: { height: '50px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   name="permanentIllness"
//                   label="Permanent Illness"
//                   value={localFormData.permanentIllness}
//                   onChange={handleChange}
//                   fullWidth
//                   InputProps={{ style: { height: '50px' } }}
//                 />
//               </Grid>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// PersonalInfoStep.propTypes = {
//   formData: PropTypes.shape({
//     surname: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     fatherName: PropTypes.string.isRequired,
//     dateOfBirth: PropTypes.string.isRequired,
//     cast: PropTypes.string.isRequired,
//     mobileNo: PropTypes.string.isRequired,
//     whatsappNo: PropTypes.string.isRequired,
//     emailId: PropTypes.string.isRequired,
//     address: PropTypes.string.isRequired,
//     villageCity: PropTypes.string.isRequired,
//     taluka: PropTypes.string.isRequired,
//     district: PropTypes.string.isRequired,
//     pin: PropTypes.string.isRequired,
//     bloodGroup: PropTypes.string.isRequired,
//     permanentIllness: PropTypes.string.isRequired,
//   }).isRequired,
//   onFormDataChange: PropTypes.func.isRequired,
// };

// export default PersonalInfoStep;


//
// import React, { FC, useState } from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Step from '@mui/material/Step';
// import Card from '@mui/material/Card';
// import Radio from '@mui/material/Radio';
// import Button from '@mui/material/Button';
// import Stepper from '@mui/material/Stepper';
// import Divider from '@mui/material/Divider';
// import StepLabel from '@mui/material/StepLabel';
// import TextField from '@mui/material/TextField';
// import FormLabel from '@mui/material/FormLabel';
// import Typography from '@mui/material/Typography';
// import RadioGroup from '@mui/material/RadioGroup';
// import CardContent from '@mui/material/CardContent';
// import FormControl from '@mui/material/FormControl';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import FormControlLabel from '@mui/material/FormControlLabel';

// interface PersonalInfoStepProps {
//   formData: {
//     surname: string;
//     name: string;
//     fatherName: string;
//     dateOfBirth: string;
//     cast: string;
//     mobileNo: string;
//     whatsappNo: string;
//     email: string;
//     address: string;
//     villageCity: string;
//     taluka: string;
//     district: string;
//     pin: string;
//     bloodGroup: string;
//     permanentIllness: string;
//   };
//   onFormDataChange: (formData: {
//     surname: string;
//     name: string;
//     fatherName: string;
//     dateOfBirth: string;
//     cast: string;
//     mobileNo: string;
//     whatsappNo: string;
//     email: string;
//     address: string;
//     villageCity: string;
//     taluka: string;
//     district: string;
//     pin: string;
//     bloodGroup: string;
//     permanentIllness: string;
//   }) => void;
// }

// const PersonalInfoStep: FC<PersonalInfoStepProps> = ({ formData, onFormDataChange }) => (
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
//                 role={undefined}
//                 variant="contained"
//                 tabIndex={-1}
//                 startIcon={<CloudUploadIcon />}
//                 sx={{ alignSelf: 'flex-end' }}
//               >
//                 Student Photo
//               </Button>
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={6} md={4}>
//               <Typography variant="subtitle1" gutterBottom align="left">
//                 Student Full Name
//               </Typography>
//               <TextField
//                 label="Surname"
//                 value={formData.surname}
//                 onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4} mt={4}>
//               <TextField
//                 label="Name"
//                 value={formData.name}
//                 onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4} mt={4}>
//               <TextField
//                 label="Father Name"
//                 value={formData.fatherName}
//                 onChange={(e) => onFormDataChange({ ...formData, fatherName: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={6} md={2}>
//               <TextField
//                 label="Date Of Birth"
//                 value={formData.dateOfBirth}
//                 onChange={(e) => onFormDataChange({ ...formData, dateOfBirth: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={2}>
//               <TextField
//                 label="Cast"
//                 value={formData.cast}
//                 onChange={(e) => onFormDataChange({ ...formData, cast: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={2.5}>
//               <TextField
//                 label="Mobile No."
//                 value={formData.mobileNo}
//                 onChange={(e) => onFormDataChange({ ...formData, mobileNo: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={2.5}>
//               <TextField
//                 label="Whatsapp No."
//                 value={formData.whatsappNo}
//                 onChange={(e) => onFormDataChange({ ...formData, whatsappNo: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <TextField
//                 label="Email ID"
//                 value={formData.email}
//                 onChange={(e) => onFormDataChange({ ...formData, email: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12}>
//               <TextField
//                 label="Address"
//                 multiline
//                 rows={4}
//                 value={formData.address}
//                 onChange={(e) => onFormDataChange({ ...formData, address: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { width: '100%', height: '100%' } }}
//               />
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={6} md={3}>
//               <TextField
//                 label="Village/City"
//                 value={formData.villageCity}
//                 onChange={(e) => onFormDataChange({ ...formData, villageCity: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <TextField
//                 label="Taluka"
//                 value={formData.taluka}
//                 onChange={(e) => onFormDataChange({ ...formData, taluka: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <TextField
//                 label="District"
//                 value={formData.district}
//                 onChange={(e) => onFormDataChange({ ...formData, district: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <TextField
//                 label="Pin Code"
//                 value={formData.pin}
//                 onChange={(e) => onFormDataChange({ ...formData, pin: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Blood Group"
//                 value={formData.bloodGroup}
//                 onChange={(e) => onFormDataChange({ ...formData, bloodGroup: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Permanent Illness"
//                 value={formData.permanentIllness}
//                 onChange={(e) =>
//                   onFormDataChange({ ...formData, permanentIllness: e.target.value })
//                 }
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   </Box>
// );

// PersonalInfoStep.propTypes = {
//   formData: PropTypes.shape({
//     surname: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     fatherName: PropTypes.string.isRequired,
//     dateOfBirth: PropTypes.string.isRequired,
//     cast: PropTypes.string.isRequired,
//     mobileNo: PropTypes.string.isRequired,
//     whatsappNo: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     address: PropTypes.string.isRequired,
//     villageCity: PropTypes.string.isRequired,
//     taluka: PropTypes.string.isRequired,
//     district: PropTypes.string.isRequired,
//     pin: PropTypes.string.isRequired,
//     bloodGroup: PropTypes.string.isRequired,
//     permanentIllness: PropTypes.string.isRequired,
//   }).isRequired,
//   onFormDataChange: PropTypes.func.isRequired,
// };

// interface AcademicInfoStepProps {
//   formData: {
//     surname: string;
//     name: string;
//     bloodGroup: string;
//   };
//   onFormDataChange: (formData: {
//     surname: string;
//     name: string;
//     bloodGroup: string;
//   }) => void;
// }

// const AcademicInfoStep: FC<AcademicInfoStepProps> = ({ formData, onFormDataChange }) => (
//   <Box m={5}>
//     <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
//       <CardContent m={5} sx={{ ml: 2 }}>
//         <Grid container direction="column" spacing={2} textAlign="center">
//           <h3> Academic Information of the Student</h3>
//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={6} md={8}>
//               <TextField
//                 label="Last Examination Passed"
//                 value={formData.surname}
//                 onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <TextField
//                 label="Percentage"
//                 value={formData.name}
//                 onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={12}>
//               <TextField
//                 label="Name of School/College last passed"
//                 value={formData.bloodGroup}
//                 onChange={(e) => onFormDataChange({ ...formData, bloodGroup: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={8}>
//               <TextField
//                 label="Name of School/College last passed"
//                 value={formData.bloodGroup}
//                 onChange={(e) => onFormDataChange({ ...formData, bloodGroup: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>

//             <Grid item xs={12} sm={6} md={4}>
//               <TextField
//                 label="City of School/College last passed"
//                 value={formData.name}
//                 onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={12}>
//               <TextField
//                 label="Name of Hostel/Private Stayed Last"
//                 value={formData.bloodGroup}
//                 onChange={(e) => onFormDataChange({ ...formData, bloodGroup: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//           </Grid>

//           <Divider variant="middle" component="li" sx={{ borderColor: 'rgba(0, 0, 0, 0.2)' }} />

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={6} md={12}>
//               <TextField
//                 label="Currently enrolled in which high school/college ?"
//                 value={formData.surname}
//                 onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={6} md={8}>
//               <TextField
//                 label="In which year are you currently studying in school/college?"
//                 value={formData.surname}
//                 onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <TextField
//                 label="Faculty/Branch"
//                 value={formData.name}
//                 onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   </Box>
// );

// AcademicInfoStep.propTypes = {
//   formData: PropTypes.shape({
//     surname: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     bloodGroup: PropTypes.string.isRequired,
//   }).isRequired,
//   onFormDataChange: PropTypes.func.isRequired,
// };

// interface GuardianInfoStepProps {
//   formData: {
//     surname: string;
//     name: string;
//     fatherName: string;
//     dateOfBirth: string;
//     cast: string;
//     mobileNo: string;
//     whatsappNo: string;
//     email: string;
//     address: string;
//     villageCity: string;
//     taluka: string;
//     district: string;
//     pin: string;
//     bloodGroup: string;
//     permanentIllness: string;
//   };
//   onFormDataChange: (formData: {
//     surname: string;
//     name: string;
//     fatherName: string;
//     dateOfBirth: string;
//     cast: string;
//     mobileNo: string;
//     whatsappNo: string;
//     email: string;
//     address: string;
//     villageCity: string;
//     taluka: string;
//     district: string;
//     pin: string;
//     bloodGroup: string;
//     permanentIllness: string;
//   }) => void;
// }

// const GuardianInfoStep: FC<GuardianInfoStepProps> = ({ formData, onFormDataChange }) => (
//   <Box m={5}>
//     <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
//       <CardContent m={5} sx={{ ml: 2 }}>
//         <Grid container direction="column" spacing={2} textAlign="center">
//           <h3>Information of the Student Father/Guardian</h3>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={6} md={4}>
//               <Typography variant="subtitle1" gutterBottom align="left">
//                 Father Full Name
//               </Typography>
//               <TextField
//                 label="Surname"
//                 value={formData.surname}
//                 onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4} mt={4}>
//               <TextField
//                 label="Name"
//                 value={formData.name}
//                 onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4} mt={4}>
//               <TextField
//                 label="Father Name"
//                 value={formData.fatherName}
//                 onChange={(e) => onFormDataChange({ ...formData, fatherName: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={6} md={3}>
//               <TextField
//                 label="Relationship with parent"
//                 value={formData.dateOfBirth}
//                 onChange={(e) => onFormDataChange({ ...formData, dateOfBirth: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <TextField
//                 label="Mobile No."
//                 value={formData.cast}
//                 onChange={(e) => onFormDataChange({ ...formData, cast: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <TextField
//                 label="Whatsapp No."
//                 value={formData.mobileNo}
//                 onChange={(e) => onFormDataChange({ ...formData, mobileNo: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <TextField
//                 label="Email ID"
//                 value={formData.email}
//                 onChange={(e) => onFormDataChange({ ...formData, email: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} alignItems="center" mt={1}>
//             <Grid item xs={12} sm={6} md={3}>
//               <TextField
//                 label="Annual Income"
//                 value={formData.villageCity}
//                 onChange={(e) => onFormDataChange({ ...formData, villageCity: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>

//             <Grid item xs={12} sm={6} md={3}>
//               <FormControl>
//                 <FormLabel id="demo-row-radio-buttons-group-label">Job / Business</FormLabel>
//                 <RadioGroup
//                   row
//                   aria-labelledby="demo-row-radio-buttons-group-label"
//                   name="row-radio-buttons-group"
//                 >
//                   <FormControlLabel value="female" control={<Radio />} label="Job" />
//                   <FormControlLabel value="male" control={<Radio />} label="Business" />
//                 </RadioGroup>
//               </FormControl>
//             </Grid>

//             <Grid item xs={12} sm={2} md={3}>
//               <FormControl>
//                 <FormLabel id="demo-row-radio-buttons-group-label">Job Private / Government</FormLabel>
//                 <RadioGroup
//                   row
//                   aria-labelledby="demo-row-radio-buttons-group-label"
//                   name="row-radio-buttons-group"
//                 >
//                   <FormControlLabel value="female" control={<Radio />} label="Private" />
//                   <FormControlLabel value="male" control={<Radio />} label="Government" />
//                 </RadioGroup>
//               </FormControl>
//             </Grid>

//             <Grid item xs={12} sm={6} md={3}>
//               <TextField
//                 label="Name of Job / Business"
//                 value={formData.villageCity}
//                 onChange={(e) => onFormDataChange({ ...formData, villageCity: e.target.value })}
//                 fullWidth
//                 InputProps={{ style: { height: '50px' } }}
//               />
//             </Grid>

//           </Grid>

//         </Grid>
//       </CardContent>
//     </Card>
//   </Box>
// );

// GuardianInfoStep.propTypes = {
//   formData: PropTypes.shape({
//     surname: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     fatherName: PropTypes.string.isRequired,
//     dateOfBirth: PropTypes.string.isRequired,
//     cast: PropTypes.string.isRequired,
//     mobileNo: PropTypes.string.isRequired,
//     whatsappNo: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     address: PropTypes.string.isRequired,
//     villageCity: PropTypes.string.isRequired,
//     taluka: PropTypes.string.isRequired,
//     district: PropTypes.string.isRequired,
//     pin: PropTypes.string.isRequired,
//     bloodGroup: PropTypes.string.isRequired,
//     permanentIllness: PropTypes.string.isRequired,
//   }).isRequired,
//   onFormDataChange: PropTypes.func.isRequired,
// };

// interface AdditionalInfoStepProps {
//   formData: {
//     surname: string;
//     name: string;
//     bloodGroup: string;
//   };
//   onFormDataChange: (formData: {
//     surname: string;
//     name: string;
//     bloodGroup: string;
//   }) => void;
// }

// const AdditionalInfoStep: FC<AdditionalInfoStepProps> = ({ formData, onFormDataChange }) => {
//   const [data, setData] = useState<string | null>("");

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedValue = event.target.value;

//     switch (selectedValue) {
//       case 'job':
//         setData('Data related to job');
//         break;
//       case 'business':
//         setData('Data related to business');
//         break;
//       default:
//         setData(null);
//         break;
//     }
//   }

//   return (
//     <Box m={5}>
//       <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
//         <CardContent m={5} sx={{ ml: 2 }}>
//           <Grid container direction="column" spacing={2} textAlign="center">
//             <h3>Additional Information of the Student</h3>

//             <Grid container spacing={2} alignItems="center" mt={1}>
//               <Grid item xs={12} sm={6} md={3}>
//                 <FormControl>
//                   <FormLabel id="demo-row-radio-buttons-group-label">Job / Business</FormLabel>
//                   <RadioGroup
//                     row
//                     aria-labelledby="demo-row-radio-buttons-group-label"
//                     name="row-radio-buttons-group"
//                     onChange={handleChange}
//                   >
//                     <FormControlLabel value="job" control={<Radio />} label="Job" />
//                     <FormControlLabel value="business" control={<Radio />} label="Business" />
//                   </RadioGroup>
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} sm={2} md={3}>
//                 <FormControl>
//                   <FormLabel id="demo-row-radio-buttons-group-label">Job Private / Government</FormLabel>
//                   <RadioGroup
//                     row
//                     aria-labelledby="demo-row-radio-buttons-group-label"
//                     name="row-radio-buttons-group"
//                   >
//                     <FormControlLabel value="female" control={<Radio />} label="Private" />
//                     <FormControlLabel value="male" control={<Radio />} label="Government" />
//                   </RadioGroup>
//                 </FormControl>
//               </Grid>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

// AdditionalInfoStep.propTypes = {
//   formData: PropTypes.shape({
//     surname: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     bloodGroup: PropTypes.string.isRequired,
//   }).isRequired,
//   onFormDataChange: PropTypes.func.isRequired,
// };

// interface RulesInfoStepProps {
//   formData: {
//     // Add fields for Rules Information
//   };
//   onFormDataChange: (formData: {
//     // Add fields for Rules Information
//   }) => void;
// }

// const RulesInfoStep: FC<RulesInfoStepProps> = ({ formData, onFormDataChange }) => (
//   <Grid container spacing={2}>
//     {/* Add fields for Rules Information */}
//   </Grid>
// );

// RulesInfoStep.propTypes = {
//   formData: PropTypes.object.isRequired,
//   onFormDataChange: PropTypes.func.isRequired,
// };

// const HorizontalLinearSteppers: FC = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [personalInfo, setPersonalInfo] = useState({
//     surname: '',
//     name: '',
//     fatherName: '',
//     dateOfBirth: '',
//     cast: '',
//     mobileNo: '',
//     whatsappNo: '',
//     email: '',
//     address: '',
//     villageCity: '',
//     taluka: '',
//     district: '',
//     pin: '',
//     bloodGroup: '',
//     permanentIllness: '',
//   });
//   const [academicInfo, setAcademicInfo] = useState({
//     surname: '',
//     name: '',
//     bloodGroup: '',
//   });
//   const [guardianInfo, setGuardianInfo] = useState({
//     surname: '',
//     name: '',
//     fatherName: '',
//     dateOfBirth: '',
//     cast: '',
//     mobileNo: '',
//     whatsappNo: '',
//     email: '',
//     address: '',
//     villageCity: '',
//     taluka: '',
//     district: '',
//     pin: '',
//     bloodGroup: '',
//     permanentIllness: '',
//   });
//   const [additionalInfo, setAdditionalInfo] = useState({
//     surname: '',
//     name: '',
//     bloodGroup: '',
//   });
//   const [rulesInfo, setRulesInfo] = useState({});

//   const steps = [
//     {
//       label: 'Personal Information',
//       component: <PersonalInfoStep formData={personalInfo} onFormDataChange={setPersonalInfo} />,
//     },
//     {
//       label: 'Academic Information',
//       component: <AcademicInfoStep formData={academicInfo} onFormDataChange={setAcademicInfo} />,
//     },
//     {
//       label: 'Guardian Information',
//       component: <GuardianInfoStep formData={guardianInfo} onFormDataChange={setGuardianInfo} />,
//     },
//     {
//       label: 'Additional Information',
//       component: (
//         <AdditionalInfoStep formData={additionalInfo} onFormDataChange={setAdditionalInfo} />
//       ),
//     },
//     {
//       label: 'Chatralayana Rules',
//       component: <RulesInfoStep formData={rulesInfo} onFormDataChange={setRulesInfo} />,
//     },
//   ];

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };


//   return (
//     <Box sx={{ width: '100%', padding: 3 }}>
//       <Typography variant="h5" sx={{ marginBottom: 2, textAlign: 'center' }}>
//         || શ્રી સ્વામિનારાયણ વિજયતે ||
//       </Typography>
//       <Stepper activeStep={activeStep}>
//         {steps.map((step, index) => (
//           <Step key={index}>
//             <StepLabel>{step.label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <Box sx={{ mt: 2 }}>{steps[activeStep].component}</Box>
//       <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//         <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
//           Back
//         </Button>
//         <Box sx={{ flex: '1 1 auto' }} />
//         <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
//       </Box>
//     </Box>
//   );
// }

// export default HorizontalLinearSteppers;

// Latest
// import React, { FC, useState } from 'react';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Divider from '@mui/material/Divider';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// interface PersonalInfoStepProps {
//   formData: {
//     surname: string;
//     name: string;
//     fatherName: string;
//     dateOfBirth: string;
//     cast: string;
//     mobileNo: string;
//     whatsappNo: string;
//     email: string;
//     address: string;
//     villageCity: string;
//     taluka: string;
//     district: string;
//     pin: string;
//     bloodGroup: string;
//     permanentIllness: string;
//   };
//   onFormDataChange: (formData: {
//     surname: string;
//     name: string;
//     fatherName: string;
//     dateOfBirth: string;
//     cast: string;
//     mobileNo: string;
//     whatsappNo: string;
//     email: string;
//     address: string;
//     villageCity: string;
//     taluka: string;
//     district: string;
//     pin: string;
//     bloodGroup: string;
//     permanentIllness: string;
//   }) => void;
// }

// const PersonalInfoStep: FC<PersonalInfoStepProps> = ({ formData, onFormDataChange }) => (
//   <Box mt={5}>
//     <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
//       <Box p={4}>
//         <Typography variant="h5" gutterBottom align="center">
//           Personal Information of the Student
//         </Typography>

//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <Typography variant="subtitle1" gutterBottom align="left">
//               Student Passport Size Photo
//             </Typography>
//             <Button
//               component="label"
//               variant="contained"
//               startIcon={<CloudUploadIcon />}
//               fullWidth
//             >
//               Upload Photo
//               <input type="file" style={{ display: 'none' }} />
//             </Button>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Surname"
//               value={formData.surname}
//               onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Name"
//               value={formData.name}
//               onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//             <TextField
//               label="Father Name"
//               value={formData.fatherName}
//               onChange={(e) => onFormDataChange({ ...formData, fatherName: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Date Of Birth"
//               value={formData.dateOfBirth}
//               onChange={(e) => onFormDataChange({ ...formData, dateOfBirth: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Cast"
//               value={formData.cast}
//               onChange={(e) => onFormDataChange({ ...formData, cast: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//             <TextField
//               label="Mobile No."
//               value={formData.mobileNo}
//               onChange={(e) => onFormDataChange({ ...formData, mobileNo: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Whatsapp No."
//               value={formData.whatsappNo}
//               onChange={(e) => onFormDataChange({ ...formData, whatsappNo: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Email ID"
//               value={formData.email}
//               onChange={(e) => onFormDataChange({ ...formData, email: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Address"
//               multiline
//               rows={4}
//               value={formData.address}
//               onChange={(e) => onFormDataChange({ ...formData, address: e.target.value })}
//               fullWidth
//               InputProps={{ style: { width: '100%', height: '100%' } }}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TextField
//               label="Village/City"
//               value={formData.villageCity}
//               onChange={(e) => onFormDataChange({ ...formData, villageCity: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TextField
//               label="Taluka"
//               value={formData.taluka}
//               onChange={(e) => onFormDataChange({ ...formData, taluka: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TextField
//               label="District"
//               value={formData.district}
//               onChange={(e) => onFormDataChange({ ...formData, district: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TextField
//               label="Pin Code"
//               value={formData.pin}
//               onChange={(e) => onFormDataChange({ ...formData, pin: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TextField
//               label="Blood Group"
//               value={formData.bloodGroup}
//               onChange={(e) => onFormDataChange({ ...formData, bloodGroup: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TextField
//               label="Permanent Illness"
//               value={formData.permanentIllness}
//               onChange={(e) => onFormDataChange({ ...formData, permanentIllness: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//         </Grid>
//       </Box>
//     </Card>
//   </Box>
// );

// interface AcademicInfoStepProps {
//   formData: {
//     surname: string;
//     name: string;
//     bloodGroup: string;
//   };
//   onFormDataChange: (formData: {
//     surname: string;
//     name: string;
//     bloodGroup: string;
//   }) => void;
// }

// const AcademicInfoStep: FC<AcademicInfoStepProps> = ({ formData, onFormDataChange }) => (
//   <Box mt={5}>
//     <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
//       <Box p={4}>
//         <Typography variant="h5" gutterBottom align="center">
//           Academic Information of the Student
//         </Typography>

//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Surname"
//               value={formData.surname}
//               onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Name"
//               value={formData.name}
//               onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Blood Group"
//               value={formData.bloodGroup}
//               onChange={(e) => onFormDataChange({ ...formData, bloodGroup: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//           </Grid>
//         </Grid>
//       </Box>
//     </Card>
//   </Box>
// );

// interface ParentInfoStepProps {
//   formData: {
//     fatherFullName: string;
//     fatherOccupation: string;
//     fatherEducation: string;
//     fatherPhoneNo: string;
//     fatherWhatsappNo: string;
//     fatherOfficeAddress: string;
//     motherFullName: string;
//     motherOccupation: string;
//     motherEducation: string;
//     motherPhoneNo: string;
//     motherWhatsappNo: string;
//   };
//   onFormDataChange: (formData: {
//     fatherFullName: string;
//     fatherOccupation: string;
//     fatherEducation: string;
//     fatherPhoneNo: string;
//     fatherWhatsappNo: string;
//     fatherOfficeAddress: string;
//     motherFullName: string;
//     motherOccupation: string;
//     motherEducation: string;
//     motherPhoneNo: string;
//     motherWhatsappNo: string;
//   }) => void;
// }

// const ParentInfoStep: FC<ParentInfoStepProps> = ({ formData, onFormDataChange }) => (
//   <Box mt={5}>
//     <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
//       <Box p={4}>
//         <Typography variant="h5" gutterBottom align="center">
//           Parents Information
//         </Typography>

//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <Typography variant="h6" gutterBottom align="left">
//               Father Information
//             </Typography>
//             <Divider />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Father's Full Name"
//               value={formData.fatherFullName}
//               onChange={(e) => onFormDataChange({ ...formData, fatherFullName: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Father's Occupation"
//               value={formData.fatherOccupation}
//               onChange={(e) => onFormDataChange({ ...formData, fatherOccupation: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//             <TextField
//               label="Father's Education"
//               value={formData.fatherEducation}
//               onChange={(e) => onFormDataChange({ ...formData, fatherEducation: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Father's Phone No."
//               value={formData.fatherPhoneNo}
//               onChange={(e) => onFormDataChange({ ...formData, fatherPhoneNo: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Father's Whatsapp No."
//               value={formData.fatherWhatsappNo}
//               onChange={(e) => onFormDataChange({ ...formData, fatherWhatsappNo: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Father's Office Address"
//               multiline
//               rows={4}
//               value={formData.fatherOfficeAddress}
//               onChange={(e) => onFormDataChange({ ...formData, fatherOfficeAddress: e.target.value })}
//               fullWidth
//               InputProps={{ style: { width: '100%', height: '100%' } }}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <Typography variant="h6" gutterBottom align="left">
//               Mother Information
//             </Typography>
//             <Divider />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Mother's Full Name"
//               value={formData.motherFullName}
//               onChange={(e) => onFormDataChange({ ...formData, motherFullName: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Mother's Occupation"
//               value={formData.motherOccupation}
//               onChange={(e) => onFormDataChange({ ...formData, motherOccupation: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//             <TextField
//               label="Mother's Education"
//               value={formData.motherEducation}
//               onChange={(e) => onFormDataChange({ ...formData, motherEducation: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Mother's Phone No."
//               value={formData.motherPhoneNo}
//               onChange={(e) => onFormDataChange({ ...formData, motherPhoneNo: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Mother's Whatsapp No."
//               value={formData.motherWhatsappNo}
//               onChange={(e) => onFormDataChange({ ...formData, motherWhatsappNo: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//         </Grid>
//       </Box>
//     </Card>
//   </Box>
// );

// const AdmissionForm: FC = () => {
//   const [formData, setFormData] = useState({
//     surname: '',
//     name: '',
//     fatherName: '',
//     dateOfBirth: '',
//     cast: '',
//     mobileNo: '',
//     whatsappNo: '',
//     email: '',
//     address: '',
//     villageCity: '',
//     taluka: '',
//     district: '',
//     pin: '',
//     bloodGroup: '',
//     permanentIllness: '',
//     fatherFullName: '',
//     fatherOccupation: '',
//     fatherEducation: '',
//     fatherPhoneNo: '',
//     fatherWhatsappNo: '',
//     fatherOfficeAddress: '',
//     motherFullName: '',
//     motherOccupation: '',
//     motherEducation: '',
//     motherPhoneNo: '',
//     motherWhatsappNo: ''
//   });

//   const handleFormDataChange = (updatedFormData: any) => {
//     setFormData(updatedFormData);
//   };

//   const handleSubmit = () => {
//     // Handle form submission logic
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <Box p={5}>
//       <Typography variant="h3" gutterBottom align="center">
//         Admission Form
//       </Typography>
//       <form>
//         <PersonalInfoStep formData={formData} onFormDataChange={handleFormDataChange} />
//         <AcademicInfoStep formData={formData} onFormDataChange={handleFormDataChange} />
//         <ParentInfoStep formData={formData} onFormDataChange={handleFormDataChange} />

//         <Box mt={4} textAlign="center">
//           <Button variant="contained" color="primary" onClick={handleSubmit}>
//             Submit
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default AdmissionForm;


// without Back
// import React, { FC, useState } from 'react';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Divider from '@mui/material/Divider';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// interface PersonalInfoStepProps {
//   formData: {
//     surname: string;
//     name: string;
//     fatherName: string;
//     dateOfBirth: string;
//     cast: string;
//     mobileNo: string;
//     whatsappNo: string;
//     email: string;
//     address: string;
//     villageCity: string;
//     taluka: string;
//     district: string;
//     pin: string;
//     bloodGroup: string;
//     permanentIllness: string;
//   };
//   onFormDataChange: (formData: {
//     surname: string;
//     name: string;
//     fatherName: string;
//     dateOfBirth: string;
//     cast: string;
//     mobileNo: string;
//     whatsappNo: string;
//     email: string;
//     address: string;
//     villageCity: string;
//     taluka: string;
//     district: string;
//     pin: string;
//     bloodGroup: string;
//     permanentIllness: string;
//   }) => void;
//   onNext: () => void;
// }

// const PersonalInfoStep: FC<PersonalInfoStepProps> = ({ formData, onFormDataChange, onNext }) => (
//   <Box mt={5}>
//     <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
//       <Box p={4}>
//         <Typography variant="h5" gutterBottom align="center">
//           Personal Information of the Student
//         </Typography>

//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <Typography variant="subtitle1" gutterBottom align="left">
//               Student Passport Size Photo
//             </Typography>
//             <Button
//               component="label"
//               variant="contained"
//               startIcon={<CloudUploadIcon />}
//               fullWidth
//             >
//               Upload Photo
//               <input type="file" style={{ display: 'none' }} />
//             </Button>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Surname"
//               value={formData.surname}
//               onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Name"
//               value={formData.name}
//               onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//             <TextField
//               label="Father Name"
//               value={formData.fatherName}
//               onChange={(e) => onFormDataChange({ ...formData, fatherName: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Date Of Birth"
//               value={formData.dateOfBirth}
//               onChange={(e) => onFormDataChange({ ...formData, dateOfBirth: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Cast"
//               value={formData.cast}
//               onChange={(e) => onFormDataChange({ ...formData, cast: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//             <TextField
//               label="Mobile No."
//               value={formData.mobileNo}
//               onChange={(e) => onFormDataChange({ ...formData, mobileNo: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Whatsapp No."
//               value={formData.whatsappNo}
//               onChange={(e) => onFormDataChange({ ...formData, whatsappNo: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Email ID"
//               value={formData.email}
//               onChange={(e) => onFormDataChange({ ...formData, email: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Address"
//               multiline
//               rows={4}
//               value={formData.address}
//               onChange={(e) => onFormDataChange({ ...formData, address: e.target.value })}
//               fullWidth
//               InputProps={{ style: { width: '100%', height: '100%' } }}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TextField
//               label="Village/City"
//               value={formData.villageCity}
//               onChange={(e) => onFormDataChange({ ...formData, villageCity: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TextField
//               label="Taluka"
//               value={formData.taluka}
//               onChange={(e) => onFormDataChange({ ...formData, taluka: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TextField
//               label="District"
//               value={formData.district}
//               onChange={(e) => onFormDataChange({ ...formData, district: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TextField
//               label="Pin Code"
//               value={formData.pin}
//               onChange={(e) => onFormDataChange({ ...formData, pin: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TextField
//               label="Blood Group"
//               value={formData.bloodGroup}
//               onChange={(e) => onFormDataChange({ ...formData, bloodGroup: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TextField
//               label="Permanent Illness"
//               value={formData.permanentIllness}
//               onChange={(e) => onFormDataChange({ ...formData, permanentIllness: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//         </Grid>

//         <Box mt={4} textAlign="center">
//           <Button variant="contained" color="primary" onClick={onNext}>
//             Next
//           </Button>
//         </Box>
//       </Box>
//     </Card>
//   </Box>
// );

// interface AcademicInfoStepProps {
//   formData: {
//     surname: string;
//     name: string;
//     bloodGroup: string;
//   };
//   onFormDataChange: (formData: {
//     surname: string;
//     name: string;
//     bloodGroup: string;
//   }) => void;
//   onNext: () => void;
// }

// const AcademicInfoStep: FC<AcademicInfoStepProps> = ({ formData, onFormDataChange, onNext }) => (
//   <Box mt={5}>
//     <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
//       <Box p={4}>
//         <Typography variant="h5" gutterBottom align="center">
//           Academic Information of the Student
//         </Typography>

//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Surname"
//               value={formData.surname}
//               onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Name"
//               value={formData.name}
//               onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//             <TextField
//               label="Blood Group"
//               value={formData.bloodGroup}
//               onChange={(e) => onFormDataChange({ ...formData, bloodGroup: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//         </Grid>

//         <Box mt={4} textAlign="center">
//           <Button variant="contained" color="primary" onClick={onNext}>
//             Next
//           </Button>
//         </Box>
//       </Box>
//     </Card>
//   </Box>
// );

// interface ParentInfoStepProps {
//   formData: {
//     fatherFullName: string;
//     fatherOccupation: string;
//     fatherEducation: string;
//     fatherPhoneNo: string;
//     fatherWhatsappNo: string;
//     fatherOfficeAddress: string;
//     motherFullName: string;
//     motherOccupation: string;
//     motherEducation: string;
//     motherPhoneNo: string;
//     motherWhatsappNo: string;
//   };
//   onFormDataChange: (formData: {
//     fatherFullName: string;
//     fatherOccupation: string;
//     fatherEducation: string;
//     fatherPhoneNo: string;
//     fatherWhatsappNo: string;
//     fatherOfficeAddress: string;
//     motherFullName: string;
//     motherOccupation: string;
//     motherEducation: string;
//     motherPhoneNo: string;
//     motherWhatsappNo: string;
//   }) => void;
//   onNext: () => void;
// }

// const ParentInfoStep: FC<ParentInfoStepProps> = ({ formData, onFormDataChange, onNext }) => (
//   <Box mt={5}>
//     <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
//       <Box p={4}>
//         <Typography variant="h5" gutterBottom align="center">
//           Parents Information
//         </Typography>

//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <Typography variant="h6" gutterBottom align="left">
//               Father Information
//             </Typography>
//             <Divider />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Father's Full Name"
//               value={formData.fatherFullName}
//               onChange={(e) => onFormDataChange({ ...formData, fatherFullName: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Father's Occupation"
//               value={formData.fatherOccupation}
//               onChange={(e) => onFormDataChange({ ...formData, fatherOccupation: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//             <TextField
//               label="Father's Education"
//               value={formData.fatherEducation}
//               onChange={(e) => onFormDataChange({ ...formData, fatherEducation: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Father's Phone No."
//               value={formData.fatherPhoneNo}
//               onChange={(e) => onFormDataChange({ ...formData, fatherPhoneNo: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Father's Whatsapp No."
//               value={formData.fatherWhatsappNo}
//               onChange={(e) => onFormDataChange({ ...formData, fatherWhatsappNo: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Father's Office Address"
//               multiline
//               rows={4}
//               value={formData.fatherOfficeAddress}
//               onChange={(e) => onFormDataChange({ ...formData, fatherOfficeAddress: e.target.value })}
//               fullWidth
//               InputProps={{ style: { width: '100%', height: '100%' } }}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <Typography variant="h6" gutterBottom align="left">
//               Mother Information
//             </Typography>
//             <Divider />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Mother's Full Name"
//               value={formData.motherFullName}
//               onChange={(e) => onFormDataChange({ ...formData, motherFullName: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Mother's Occupation"
//               value={formData.motherOccupation}
//               onChange={(e) => onFormDataChange({ ...formData, motherOccupation: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//             <TextField
//               label="Mother's Education"
//               value={formData.motherEducation}
//               onChange={(e) => onFormDataChange({ ...formData, motherEducation: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Mother's Phone No."
//               value={formData.motherPhoneNo}
//               onChange={(e) => onFormDataChange({ ...formData, motherPhoneNo: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//             />
//             <TextField
//               label="Mother's Whatsapp No."
//               value={formData.motherWhatsappNo}
//               onChange={(e) => onFormDataChange({ ...formData, motherWhatsappNo: e.target.value })}
//               fullWidth
//               InputProps={{ style: { height: '50px' } }}
//               sx={{ mt: 2 }}
//             />
//           </Grid>
//         </Grid>

//         <Box mt={4} textAlign="center">
//           <Button variant="contained" color="primary" onClick={onNext}>
//             Next
//           </Button>
//         </Box>
//       </Box>
//     </Card>
//   </Box>
// );

// const AdmissionForm: FC = () => {
//   const [formData, setFormData] = useState({
//     surname: '',
//     name: '',
//     fatherName: '',
//     dateOfBirth: '',
//     cast: '',
//     mobileNo: '',
//     whatsappNo: '',
//     email: '',
//     address: '',
//     villageCity: '',
//     taluka: '',
//     district: '',
//     pin: '',
//     bloodGroup: '',
//     permanentIllness: '',
//     fatherFullName: '',
//     fatherOccupation: '',
//     fatherEducation: '',
//     fatherPhoneNo: '',
//     fatherWhatsappNo: '',
//     fatherOfficeAddress: '',
//     motherFullName: '',
//     motherOccupation: '',
//     motherEducation: '',
//     motherPhoneNo: '',
//     motherWhatsappNo: ''
//   });

//   const [step, setStep] = useState(1);

//   const handleFormDataChange = (updatedFormData: any) => {
//     setFormData(updatedFormData);
//   };

//   const handleNextStep = () => {
//     setStep(step + 1);
//   };

//   const handleSubmit = () => {
//     // Handle form submission logic
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <Box p={5}>
//       <Typography variant="h3" gutterBottom align="center">
//         Admission Form
//       </Typography>
//       <form>
//         {step === 1 && (
//           <PersonalInfoStep formData={formData} onFormDataChange={handleFormDataChange} onNext={handleNextStep} />
//         )}
//         {step === 2 && (
//           <AcademicInfoStep formData={formData} onFormDataChange={handleFormDataChange} onNext={handleNextStep} />
//         )}
//         {step === 3 && (
//           <ParentInfoStep formData={formData} onFormDataChange={handleFormDataChange} onNext={handleNextStep} />
//         )}
//         {step === 4 && (
//           <Box mt={4} textAlign="center">
//             <Button variant="contained" color="primary" onClick={handleSubmit}>
//               Submit
//             </Button>
//           </Box>
//         )}
//       </form>
//     </Box>
//   );
// };

// export default AdmissionForm;


// with Button
import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface PersonalInfoStepProps {
  formData: {
    surname: string;
    name: string;
    fatherName: string;
    dateOfBirth: string;
    cast: string;
    mobileNo: string;
    whatsappNo: string;
    email: string;
    address: string;
    villageCity: string;
    taluka: string;
    district: string;
    pin: string;
    bloodGroup: string;
    permanentIllness: string;
  };
  onFormDataChange: (formData: {
    surname: string;
    name: string;
    fatherName: string;
    dateOfBirth: string;
    cast: string;
    mobileNo: string;
    whatsappNo: string;
    email: string;
    address: string;
    villageCity: string;
    taluka: string;
    district: string;
    pin: string;
    bloodGroup: string;
    permanentIllness: string;
  }) => void;
  onNext: () => void;
}

const PersonalInfoStep: FC<PersonalInfoStepProps> = ({ formData, onFormDataChange, onNext }) => (
  <Box mt={5}>
    <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
      <Box p={4}>
        <Typography variant="h5" gutterBottom align="center">
          Personal Information of the Student
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" gutterBottom align="left">
              Student Passport Size Photo
            </Typography>
            <Button
               component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              fullWidth
            >
              Upload Photo
              <input type="file" style={{ display: 'none' }} />
            </Button>
          </Grid>
          <Grid item display={'flex'} flexDirection={'row'} xs={12} md={5}
            sx={{
          }}>
            <TextField
              label="Surname"
              value={formData.surname}
              onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px'} }}
              sx={{ m: 2,width: 1000}}
              
            />
            <TextField
              label="Name"
              value={formData.name}
              onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
              
              InputProps={{ style: { height: '50px' } }}
              sx={{ m: 2,width: 1000}}
              />
            <TextField
              label="Father Name"
              value={formData.fatherName}
              onChange={(e) => onFormDataChange({ ...formData, fatherName: e.target.value })}
              
              InputProps={{ style: { height: '50px' } }}
              sx={{ m: 2,width: 1000}}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Date Of Birth"
              value={formData.dateOfBirth}
              onChange={(e) => onFormDataChange({ ...formData, dateOfBirth: e.target.value })}
              
              InputProps={{ style: { height: '50px' } }}
            />
            <TextField
              label="Cast"
              value={formData.cast}
              onChange={(e) => onFormDataChange({ ...formData, cast: e.target.value })}
              
              InputProps={{ style: { height: '50px' } }}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Mobile No."
              value={formData.mobileNo}
              onChange={(e) => onFormDataChange({ ...formData, mobileNo: e.target.value })}
              
              InputProps={{ style: { height: '50px' } }}
              sx={{ mt: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Whatsapp No."
              value={formData.whatsappNo}
              onChange={(e) => onFormDataChange({ ...formData, whatsappNo: e.target.value })}
              
              InputProps={{ style: { height: '50px' } }}
            />
            <TextField
              label="Email ID"
              value={formData.email}
              onChange={(e) => onFormDataChange({ ...formData, email: e.target.value })}
              
              InputProps={{ style: { height: '50px' } }}
              sx={{ mt: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              multiline
              rows={4}
              value={formData.address}
              onChange={(e) => onFormDataChange({ ...formData, address: e.target.value })}
              fullWidth
              InputProps={{ style: { width: '100%', height: '100%' } }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Village/City"
              value={formData.villageCity}
              onChange={(e) => onFormDataChange({ ...formData, villageCity: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Taluka"
              value={formData.taluka}
              onChange={(e) => onFormDataChange({ ...formData, taluka: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
              sx={{ mt: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="District"
              value={formData.district}
              onChange={(e) => onFormDataChange({ ...formData, district: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
              sx={{ mt: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Pin Code"
              value={formData.pin}
              onChange={(e) => onFormDataChange({ ...formData, pin: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Blood Group"
              value={formData.bloodGroup}
              onChange={(e) => onFormDataChange({ ...formData, bloodGroup: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
              sx={{ mt: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Permanent Illness"
              value={formData.permanentIllness}
              onChange={(e) => onFormDataChange({ ...formData, permanentIllness: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
              sx={{ mt: 2 }}
            />
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Button variant="contained" color="primary" onClick={onNext} sx={{ mr: 2 }}>
            Next
          </Button>
        </Box>
      </Box>
    </Card>
  </Box>
);

interface AcademicInfoStepProps {
  formData: {
    surname: string;
    name: string;
    bloodGroup: string;
  };
  onFormDataChange: (formData: {
    surname: string;
    name: string;
    bloodGroup: string;
  }) => void;
  onNext: () => void;
  onBack: () => void;
}

const AcademicInfoStep: FC<AcademicInfoStepProps> = ({ formData, onFormDataChange, onNext, onBack }) => (
  <Box mt={5}>
    <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
      <Box p={4}>
        <Typography variant="h5" gutterBottom align="center">
          Academic Information of the Student
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Surname"
              value={formData.surname}
              onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
            />
            <TextField
              label="Name"
              value={formData.name}
              onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Blood Group"
              value={formData.bloodGroup}
              onChange={(e) => onFormDataChange({ ...formData, bloodGroup: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
              sx={{ mt: 2 }}
            />
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Button variant="contained" color="primary" onClick={onBack} sx={{ mr: 2 }}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={onNext}>
            Next
          </Button>
        </Box>
      </Box>
    </Card>
  </Box>
);

interface ParentInfoStepProps {
  formData: {
    fatherFullName: string;
    fatherOccupation: string;
    fatherEducation: string;
    fatherPhoneNo: string;
    fatherWhatsappNo: string;
    fatherOfficeAddress: string;
    motherFullName: string;
    motherOccupation: string;
    motherEducation: string;
    motherPhoneNo: string;
    motherWhatsappNo: string;
  };
  onFormDataChange: (formData: {
    fatherFullName: string;
    fatherOccupation: string;
    fatherEducation: string;
    fatherPhoneNo: string;
    fatherWhatsappNo: string;
    fatherOfficeAddress: string;
    motherFullName: string;
    motherOccupation: string;
    motherEducation: string;
    motherPhoneNo: string;
    motherWhatsappNo: string;
  }) => void;
  onNext: () => void;
  onBack: () => void;
}

const ParentInfoStep: FC<ParentInfoStepProps> = ({ formData, onFormDataChange, onNext, onBack }) => (
  <Box mt={5}>
    <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
      <Box p={4}>
        <Typography variant="h5" gutterBottom align="center">
          Parents Information
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom align="left">
              Father Information
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Father's Full Name"
              value={formData.fatherFullName}
              onChange={(e) => onFormDataChange({ ...formData, fatherFullName: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
            />
            <TextField
              label="Father's Occupation"
              value={formData.fatherOccupation}
              onChange={(e) => onFormDataChange({ ...formData, fatherOccupation: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Father's Education"
              value={formData.fatherEducation}
              onChange={(e) => onFormDataChange({ ...formData, fatherEducation: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
              sx={{ mt: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Father's Phone No."
              value={formData.fatherPhoneNo}
              onChange={(e) => onFormDataChange({ ...formData, fatherPhoneNo: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
            />
            <TextField
              label="Father's Whatsapp No."
              value={formData.fatherWhatsappNo}
              onChange={(e) => onFormDataChange({ ...formData, fatherWhatsappNo: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
              sx={{ mt: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Father's Office Address"
              multiline
              rows={4}
              value={formData.fatherOfficeAddress}
              onChange={(e) => onFormDataChange({ ...formData, fatherOfficeAddress: e.target.value })}
              fullWidth
              InputProps={{ style: { width: '100%', height: '100%' } }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom align="left">
              Mother Information
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Mother's Full Name"
              value={formData.motherFullName}
              onChange={(e) => onFormDataChange({ ...formData, motherFullName: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
            />
            <TextField
              label="Mother's Occupation"
              value={formData.motherOccupation}
              onChange={(e) => onFormDataChange({ ...formData, motherOccupation: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Mother's Education"
              value={formData.motherEducation}
              onChange={(e) => onFormDataChange({ ...formData, motherEducation: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
              sx={{ mt: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Mother's Phone No."
              value={formData.motherPhoneNo}
              onChange={(e) => onFormDataChange({ ...formData, motherPhoneNo: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
            />
            <TextField
              label="Mother's Whatsapp No."
              value={formData.motherWhatsappNo}
              onChange={(e) => onFormDataChange({ ...formData, motherWhatsappNo: e.target.value })}
              fullWidth
              InputProps={{ style: { height: '50px' } }}
              sx={{ mt: 2 }}
            />
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Button variant="contained" color="primary" onClick={onBack} sx={{ mr: 2 }}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={onNext}>
            Next
          </Button>
        </Box>
      </Box>
    </Card>
  </Box>
);

const AdmissionForm: FC = () => {
  const [formData, setFormData] = useState({
    surname: '',
    name: '',
    fatherName: '',
    dateOfBirth: '',
    cast: '',
    mobileNo: '',
    whatsappNo: '',
    email: '',
    address: '',
    villageCity: '',
    taluka: '',
    district: '',
    pin: '',
    bloodGroup: '',
    permanentIllness: '',
    fatherFullName: '',
    fatherOccupation: '',
    fatherEducation: '',
    fatherPhoneNo: '',
    fatherWhatsappNo: '',
    fatherOfficeAddress: '',
    motherFullName: '',
    motherOccupation: '',
    motherEducation: '',
    motherPhoneNo: '',
    motherWhatsappNo: ''
  });

  const [step, setStep] = useState(1);

  const handleFormDataChange = (updatedFormData: any) => {
    setFormData(updatedFormData);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <Box p={5}>
      <Typography variant="h3" gutterBottom align="center">
        Admission Form
      </Typography>
      <form>
        {step === 1 && (
          <PersonalInfoStep formData={formData} onFormDataChange={handleFormDataChange} onNext={handleNextStep} />
        )}
        {step === 2 && (
          <AcademicInfoStep
            formData={formData}
            onFormDataChange={handleFormDataChange}
            onNext={handleNextStep}
            onBack={handlePreviousStep}
          />
        )}
        {step === 3 && (
          <ParentInfoStep
            formData={formData}
            onFormDataChange={handleFormDataChange}
            onNext={handleNextStep}
            onBack={handlePreviousStep}
          />
        )}
        {step === 4 && (
          <Box mt={4} textAlign="center">
            <Button variant="contained" color="primary" onClick={handlePreviousStep} sx={{ mr: 2 }}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        )}
      </form>
    </Box>
  );
};

export default AdmissionForm;


// Stepper
