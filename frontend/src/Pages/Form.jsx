/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
// import styled from 'styled-components';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Step from '@mui/material/Step';
import Card from '@mui/material/Card';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Divider from '@mui/material/Divider';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormControlLabel from '@mui/material/FormControlLabel';

// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   whiteSpace: 'nowrap',
//   width: 1,
// });

const PersonalInfoStep = ({ formData, onFormDataChange }) => (
  <Box m={5}>
    <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
      <CardContent m={5} sx={{ ml: 2 }}>
        <Grid container direction="column" spacing={2} textAlign="center">
          <h3>Personal Information of the Student</h3>
          <Grid container spacing={2} justifyContent="flex-end" mt={1}>
            <Grid>
              <Typography variant="subtitle1" gutterBottom align="left">
                Student Passport Size Photo
              </Typography>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{ alignSelf: 'flex-end' }}
              >
                Student Photo
                {/* <VisuallyHiddenInput type="file" /> */}
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="subtitle1" gutterBottom align="left">
                Student Full Name
              </Typography>
              <TextField
                label="Surname"
                // eslint-disable-next-line react/prop-types
                value={formData.surname}
                onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} mt={4}>
              <TextField
                label="Name"
                // eslint-disable-next-line react/prop-types
                value={formData.name}
                onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} mt={4}>
              <TextField
                label="Father Name"
                // eslint-disable-next-line react/prop-types
                value={formData.fatherName}
                onChange={(e) => onFormDataChange({ ...formData, fatherName: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                label="Date Of Birth"
                // eslint-disable-next-line react/prop-types
                value={formData.fatherName}
                onChange={(e) => onFormDataChange({ ...formData, fatherName: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                label="Cast"
                // eslint-disable-next-line react/prop-types
                value={formData.cast}
                onChange={(e) => onFormDataChange({ ...formData, cast: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2.5}>
              <TextField
                label="Mobile No."
                // eslint-disable-next-line react/prop-types
                value={formData.mobileNo}
                onChange={(e) => onFormDataChange({ ...formData, mobileNo: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2.5}>
              <TextField
                label="Whatsapp No."
                // eslint-disable-next-line react/prop-types
                value={formData.whatsappNo}
                onChange={(e) => onFormDataChange({ ...formData, whatsappNo: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Email ID"
                // eslint-disable-next-line react/prop-types
                value={formData.whatsappNo}
                onChange={(e) => onFormDataChange({ ...formData, whatsappNo: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item xs={12}>
              <TextField
                label="Address"
                multiline
                rows={4}
                // eslint-disable-next-line react/prop-types
                value={formData.address}
                onChange={(e) => onFormDataChange({ ...formData, address: e.target.value })}
                fullWidth
                InputProps={{ style: { width: '100%', height: '100%' } }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Village/City"
                // eslint-disable-next-line react/prop-types
                value={formData.villageCity}
                onChange={(e) => onFormDataChange({ ...formData, villageCity: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Taluka"
                // eslint-disable-next-line react/prop-types
                value={formData.taluka}
                onChange={(e) => onFormDataChange({ ...formData, taluka: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="District"
                // eslint-disable-next-line react/prop-types
                value={formData.district}
                onChange={(e) => onFormDataChange({ ...formData, district: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Pin Code"
                // eslint-disable-next-line react/prop-types
                value={formData.pin}
                onChange={(e) => onFormDataChange({ ...formData, pin: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Blood Group"
                // eslint-disable-next-line react/prop-types
                value={formData.bloodGroup}
                onChange={(e) => onFormDataChange({ ...formData, bloodGroup: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Permanent Illness"
                // eslint-disable-next-line react/prop-types
                value={formData.permanentIllness}
                onChange={(e) =>
                  onFormDataChange({ ...formData, permanentIllness: e.target.value })
                }
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Box>
);

PersonalInfoStep.propTypes = {
  formData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  onFormDataChange: PropTypes.func.isRequired,
};

const AcademicInfoStep = ({ formData, onFormDataChange }) => (
  <Box m={5}>
    <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
      <CardContent m={5} sx={{ ml: 2 }}>
        <Grid container direction="column" spacing={2} textAlign="center">
          <h3> Academic Information of the Student</h3>
          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item xs={12} sm={6} md={8}>
              <TextField
                label="Last Examination Passed"
                // eslint-disable-next-line react/prop-types
                value={formData.surname}
                onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Percentage"
                // eslint-disable-next-line react/prop-types
                value={formData.name}
                onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Name of School/College last passed"
                // eslint-disable-next-line react/prop-types
                value={formData.bloodGroup}
                onChange={(e) => onFormDataChange({ ...formData, bloodGroup: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item xs={12} sm={8}>
              <TextField
                label="Name of School/College last passed"
                // eslint-disable-next-line react/prop-types
                value={formData.bloodGroup}
                onChange={(e) => onFormDataChange({ ...formData, bloodGroup: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="City of School/College last passed"
                // eslint-disable-next-line react/prop-types
                value={formData.name}
                onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Name of Hostel/Private Stayed Last"
                // eslint-disable-next-line react/prop-types
                value={formData.bloodGroup}
                onChange={(e) => onFormDataChange({ ...formData, bloodGroup: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
          </Grid>

          <Divider variant="middle" component="li" sx={{ borderColor: 'rgba(0, 0, 0, 0.2)' }} />

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item xs={12} sm={6} md={12}>
              <TextField
                label="Currently enrolled in which high school/college ?"
                // eslint-disable-next-line react/prop-types
                value={formData.surname}
                onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item xs={12} sm={6} md={8}>
              <TextField
                label="In which year are you currently studying in school/college?"
                // eslint-disable-next-line react/prop-types
                value={formData.surname}
                onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Faculty/Branch"
                // eslint-disable-next-line react/prop-types
                value={formData.name}
                onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  </Box>
);

AcademicInfoStep.propTypes = {
  formData: PropTypes.object.isRequired,
  onFormDataChange: PropTypes.func.isRequired,
};

const GuardianInfoStep = ({ formData, onFormDataChange }) => (
  <Box m={5}>
    <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
      <CardContent m={5} sx={{ ml: 2 }}>
        <Grid container direction="column" spacing={2} textAlign="center">
          <h3>Information of the Student Father/Guardian</h3>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="subtitle1" gutterBottom align="left">
                Father Full Name
              </Typography>
              <TextField
                label="Surname"
                // eslint-disable-next-line react/prop-types
                value={formData.surname}
                onChange={(e) => onFormDataChange({ ...formData, surname: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} mt={4}>
              <TextField
                label="Name"
                // eslint-disable-next-line react/prop-types
                value={formData.name}
                onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} mt={4}>
              <TextField
                label="Father Name"
                // eslint-disable-next-line react/prop-types
                value={formData.fatherName}
                onChange={(e) => onFormDataChange({ ...formData, fatherName: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Relationship with parent"
                // eslint-disable-next-line react/prop-types
                value={formData.dateOfBirth}
                onChange={(e) => onFormDataChange({ ...formData, dateOfBirth: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Mobile No."
                // eslint-disable-next-line react/prop-types
                value={formData.cast}
                onChange={(e) => onFormDataChange({ ...formData, cast: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Whatsapp No."
                // eslint-disable-next-line react/prop-types
                value={formData.mobileNo}
                onChange={(e) => onFormDataChange({ ...formData, mobileNo: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Email ID"
                // eslint-disable-next-line react/prop-types
                value={formData.whatsappNo}
                onChange={(e) => onFormDataChange({ ...formData, whatsappNo: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Annual Income"
                // eslint-disable-next-line react/prop-types
                value={formData.villageCity}
                onChange={(e) => onFormDataChange({ ...formData, villageCity: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Job / Business</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Job" />
                  <FormControlLabel value="male" control={<Radio />} label="Business" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={2} md={3}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Job Private / Government</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Private" />
                  <FormControlLabel value="male" control={<Radio />} label="Government" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Name of Job / Business"
                // eslint-disable-next-line react/prop-types
                value={formData.villageCity}
                onChange={(e) => onFormDataChange({ ...formData, villageCity: e.target.value })}
                fullWidth
                InputProps={{ style: { height: '50px' } }}
              />
            </Grid>

          </Grid>

        </Grid>
      </CardContent>
    </Card>
  </Box>
);

GuardianInfoStep.propTypes = {
  formData: PropTypes.object.isRequired,
  onFormDataChange: PropTypes.func.isRequired,
};

// const AdditionalInfoSte = ({ formData, onFormDataChange }) => {
  
// };


const AdditionalInfoStep = ({ formData, onFormDataChange }) => {
  const HandleChange = (event) => {
    const [data, setData] = useState("");
        const selectedValue = event.target.value;
      
        switch (selectedValue) {
          case 'job':
            setData('Data related to job');
            break;
          case 'business':
            setData('Data related to business');
            break;
          default:
            setData(null);
            break;
        }
      }
  <Box m={5}>
    <Card elevation={5} sx={{ border: '1px solid #ccc' }}>
      <CardContent m={5} sx={{ ml: 2 }}>
        <Grid container direction="column" spacing={2} textAlign="center">
          <h3>Additional Information of the Student</h3>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Job / Business</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={HandleChange}  // Add onChange handler here
                >
                  <FormControlLabel value="job" control={<Radio />} label="Job" />
                  <FormControlLabel value="business" control={<Radio />} label="Business" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={2} md={3}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Job Private / Government</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Private" />
                  <FormControlLabel value="male" control={<Radio />} label="Government" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Box>
}



AdditionalInfoStep.propTypes = {
  formData: PropTypes.object.isRequired,
  onFormDataChange: PropTypes.func.isRequired,
};

const RulesInfoStep = ({ formData, onFormDataChange }) => (
  <Grid container spacing={2}>
    {/* Rules Information fields */}
  </Grid>
);

RulesInfoStep.propTypes = {
  formData: PropTypes.object.isRequired,
  onFormDataChange: PropTypes.func.isRequired,
};

export default function HorizontalLinearSteppers() {
  const [activeStep, setActiveStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({ firstName: '', lastName: '' });
  const [academicInfo, setAcademicInfo] = useState({});
  const [guardianInfo, setGuardianInfo] = useState({});
  const [additionalInfo, setAdditionalInfo] = useState({});
  const [rulesInfo, setRulesInfo] = useState({});

  const steps = [
    {
      label: 'Personal Information',
      component: <PersonalInfoStep formData={personalInfo} onFormDataChange={setPersonalInfo} />,
    },
    {
      label: 'Academic Information',
      component: <AcademicInfoStep formData={academicInfo} onFormDataChange={setAcademicInfo} />,
    },
    {
      label: 'Guardian Information',
      component: <GuardianInfoStep formData={guardianInfo} onFormDataChange={setGuardianInfo} />,
    },
    {
      label: 'Additional Information',
      component: (
        <AdditionalInfoStep formData={additionalInfo} onFormDataChange={setAdditionalInfo} />
      ),
    },
    {
      label: 'Chatralayana Rules',
      component: <RulesInfoStep formData={rulesInfo} onFormDataChange={setRulesInfo} />,
    },
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };


  return (
    <Box sx={{ width: '100%', padding: 3 }}>
      <Typography variant="h5" sx={{ marginBottom: 2, textAlign: 'center' }}>
        || શ્રી સ્વામિનારાયણ વિજયતે ||
      </Typography>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 2 }}>{steps[activeStep].component}</Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
      </Box>
    </Box>
  );
}
