// import { FormEvent, useState } from "react";
// import { StudentForm } from "./StudentForm";
// import { AcademicForm } from "./AcademicForm";
// import { GuardianForm } from "./GuardianForm";
// import { useMultistepForm } from "./useMultistepForm";

// type FormData = {
//   surname: string;
//   name: string;
//   fatherName: string;
//   dob: string;
//   caste: string;
//   mobile: string;
//   whatsapp: string;
//   email: string;
//   address: string;
//   village: string;
//   taluka: string;
//   district: string;
//   pincode: string;
//   bloodGroup: string;
//   illness: string;
//   lastExam: string;
//   percentage: string;
//   lastSchool: string;
//   lastSchoolCity:string,
//   currentSchool: string;
//   hostelStay:string,
//   currentYear:string,
//   year: string;
//   branch: string;
//   fatherFullName: string;
//   relationship: string;
//   fatherMobile: string;
//   fatherWhatsapp: string;
//   fatherEmail: string;
//   income: string;
//   jobType: string;
//   jobName: string;
// };

// const INITIAL_DATA: FormData = {
//   surname: "",
//   name: "",
//   fatherName: "",
//   dob: "",
//   caste: "",
//   mobile: "",
//   whatsapp: "",
//   email: "",
//   address: "",
//   village: "",
//   taluka: "",
//   district: "",
//   pincode: "",
//   bloodGroup: "",
//   illness: "",
//   lastExam: "",
//   percentage: "",
//   lastSchool: "",
//   lastSchoolCity:"",
//    hostelStay:"",
//    currentYear:"",
//   currentSchool: "",
//   year: "",
//   branch: "",
//   fatherFullName: "",
//   relationship: "",
//   fatherMobile: "",
//   fatherWhatsapp: "",
//   fatherEmail: "",
//   income: "",
//   jobType: "",
//   jobName: "",
// };

// function App() {
//   const [data, setData] = useState(INITIAL_DATA);

//   function updateFields(fields: Partial<FormData>) {
//     setData((prev) => ({ ...prev, ...fields }));
//   }

//   const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
//     useMultistepForm([
//       <StudentForm {...data} updateFields={updateFields} />,
//       <AcademicForm  {...data} updateFields={updateFields} />,
//       <GuardianForm {...data} updateFields={updateFields} />,
//     ]);

//   function onSubmit(e: FormEvent) {
//     e.preventDefault();
//     if (!isLastStep) return next();
//     alert("Form Submitted Successfully");
//   }

//   return (
//     <div
//       style={{
//         background: "white",
//         padding: "2rem",
//         margin: "1rem",
//         borderRadius: ".5rem",
//       }}
//     >
//       <form onSubmit={onSubmit}>
//         <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
//           {currentStepIndex + 1} / {steps.length}
//         </div>
//         {step}
//         <div
//           style={{
//             marginTop: "1rem",
//             display: "flex",
//             justifyContent: "flex-end",
//           }}
//         >
//           {!isFirstStep && (
//             <button type="button" onClick={back}>
//               Back
//             </button>
//           )}
//           <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;


// {{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}
// import { FormEvent, useState } from "react";
// import { StudentForm } from "./StudentForm";
// import { AcademicForm } from "./AcademicForm";
// import { GuardianForm } from "./GuardianForm";
// import { useMultistepForm } from "./useMultistepForm";

// type FormData = {
//   surname: string;
//   name: string;
//   fatherName: string;
//   dob: string;
//   caste: string;
//   mobile: string;
//   whatsapp: string;
//   email: string;
//   address: string;
//   village: string;
//   taluka: string;
//   district: string;
//   pincode: string;
//   bloodGroup: string;
//   illness: string;
//   lastExam: string;
//   percentage: string;
//   lastSchool: string;
//   lastSchoolCity: string;
//   currentSchool: string;
//   hostelStay: string;
//   currentYear: string;
//   year: string;
//   branch: string;
//   fatherFullName: string;
//   relationship: string;
//   fatherMobile: string;
//   fatherWhatsapp: string;
//   fatherEmail: string;
//   income: string;
//   jobType: string;
//   jobName: string;
// };

// const INITIAL_DATA: FormData = {
//   surname: "",
//   name: "",
//   fatherName: "",
//   dob: "",
//   caste: "",
//   mobile: "",
//   whatsapp: "",
//   email: "",
//   address: "",
//   village: "",
//   taluka: "",
//   district: "",
//   pincode: "",
//   bloodGroup: "",
//   illness: "",
//   lastExam: "",
//   percentage: "",
//   lastSchool: "",
//   lastSchoolCity: "",
//   hostelStay: "",
//   currentYear: "",
//   currentSchool: "",
//   year: "",
//   branch: "",
//   fatherFullName: "",
//   relationship: "",
//   fatherMobile: "",
//   fatherWhatsapp: "",
//   fatherEmail: "",
//   income: "",
//   jobType: "",
//   jobName: "",
// };

// function App() {
//   const [data, setData] = useState(INITIAL_DATA);

//   function updateFields(fields: Partial<FormData>) {
//     setData((prev) => ({ ...prev, ...fields }));
//   }

//   const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
//     useMultistepForm([
//       <StudentForm {...data} updateFields={updateFields} />,
//       <AcademicForm {...data} updateFields={updateFields} />,
//       <GuardianForm {...data} updateFields={updateFields} />,
//     ]);

//   function validateStep(stepData: Partial<FormData>) {
//     // Add validation logic for required fields
//     const requiredFields = Object.keys(INITIAL_DATA);
//     return requiredFields.every((field) => stepData[field] !== "");
//   }

//   function onSubmit(e: FormEvent) {
//     e.preventDefault();
//     if (!validateStep(data)) {
//       alert("Please fill in all required fields.");
//       return;
//     }
//     if (!isLastStep) return next();
//     alert("Form Submitted Successfully");
//   }

//   return (
//     <div
//       style={{
//         background: "white",
//         padding: "2rem",
//         margin: "1rem",
//         borderRadius: ".5rem",
//       }}
//     >
//       <form onSubmit={onSubmit}>
//         <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
//           {currentStepIndex + 1} / {steps.length}
//         </div>
//         {step}
//         <div
//           style={{
//             marginTop: "1rem",
//             display: "flex",
//             justifyContent: "flex-end",
//           }}
//         >
//           {!isFirstStep && (
//             <button type="button" onClick={back}>
//               Back
//             </button>
//           )}
//           <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;


// import { useState, FormEvent } from "react";
// import { StudentForm } from "./StudentForm";
// import { AcademicForm } from "./AcademicForm";
// import { GuardianForm } from "./GuardianForm";
// import { Stepper, Step, StepLabel, Box, Button, Typography } from "@mui/material";

// type FormData = {
//   surname: string;
//   name: string;
//   fatherName: string;
//   dob: string;
//   caste: string;
//   mobile: string;
//   whatsapp: string;
//   email: string;
//   address: string;
//   village: string;
//   taluka: string;
//   district: string;
//   pincode: string;
//   bloodGroup: string;
//   illness: string;
//   lastExam: string;
//   percentage: string;
//   lastSchool: string;
//   lastSchoolCity: string;
//   currentSchool: string;
//   hostelStay: string;
//   currentYear: string;
//   year: string;
//   branch: string;
//   fatherFullName: string;
//   relationship: string;
//   fatherMobile: string;
//   fatherWhatsapp: string;
//   fatherEmail: string;
//   income: string;
//   jobType: string;
//   jobName: string;
// };

// const INITIAL_DATA: FormData = {
//   surname: "",
//   name: "",
//   fatherName: "",
//   dob: "",
//   caste: "",
//   mobile: "",
//   whatsapp: "",
//   email: "",
//   address: "",
//   village: "",
//   taluka: "",
//   district: "",
//   pincode: "",
//   bloodGroup: "",
//   illness: "",
//   lastExam: "",
//   percentage: "",
//   lastSchool: "",
//   lastSchoolCity: "",
//   currentSchool: "",
//   hostelStay: "",
//   currentYear: "",
//   year: "",
//   branch: "",
//   fatherFullName: "",
//   relationship: "",
//   fatherMobile: "",
//   fatherWhatsapp: "",
//   fatherEmail: "",
//   income: "",
//   jobType: "",
//   jobName: "",
// };

// function App() {
//   const [data, setData] = useState(INITIAL_DATA);
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = [
//     {
//       label: 'Student Information',
//       component: <StudentForm {...data} updateFields={updateFields} />,
//     },
//     {
//       label: 'Academic Information',
//       component: <AcademicForm {...data} updateFields={updateFields} />,
//     },
//     {
//       label: 'Guardian Information',
//       component: <GuardianForm {...data} updateFields={updateFields} />,
//     },
//   ];

//   function updateFields(fields: Partial<FormData>) {
//     setData((prev) => ({ ...prev, ...fields }));
//   }

//   // const validateCurrentStep = () => {
//   //   switch (activeStep) {
//   //     case 0:
//   //       return data.surname && data.name && data.fatherName && data.dob && data.caste; // Add all required fields
//   //     case 1:
//   //       return data.lastExam && data.percentage && data.lastSchool && data.lastSchoolCity && data.hostelStay && data.currentSchool && data.currentYear && data.branch;
//   //     case 2:
//   //       return data.fatherFullName && data.relationship && data.fatherMobile && data.fatherWhatsapp && data.fatherEmail && data.income && data.jobType && data.jobName;
//   //     default:
//   //       return false;
//   //   }
//   // };

//   // // const handleNext = () => {
//   // //   if (!validateCurrentStep()) {
//   // //     alert("Please fill out all required fields.");
//   // //     return;
//   // //   }
//   // //   if (activeStep < steps.length - 1) {
//   // //     setActiveStep((prev) => prev + 1);
//   // //   } else {
//   // //     alert("Form Submitted Successfully");
//   // //     // Handle form submission logic here
//   // //   }
//   // // };

//   const handleBack = () => {
//     if (activeStep !== 0)
//       setActiveStep((prev) => prev - 1);
//   };

//   // return (
//   //   <div style={{ padding: "2rem", background: "white", borderRadius: ".5rem" }}>
//   //     <Typography variant="h5" align="center" gutterBottom>
//   //       Multi-Step Form
//   //     </Typography>
//   //     <Stepper activeStep={activeStep}>
//   //       {steps.map((step, index) => (
//   //         <Step key={index}>
//   //           <StepLabel>{step.label}</StepLabel>
//   //         </Step>
//   //       ))}
//   //     </Stepper>
//   //     <Box sx={{ mt: 2 }}>{steps[activeStep].component}</Box>
//   //     <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
//   //       <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
//   //         Back
//   //       </Button>
//   //       <Button onClick={handleNext}>
//   //         {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//   //       </Button>
//   //     </Box>
//   //   </div>
//   // );

//   const handleNext = () => {
//     if (!validateCurrentStep()) {
//       alert("Please fill out all required fields.");
//       return;
//     }
//     setActiveStep((prev) => prev + 1);
//   };

//   // Function to validate current step
//   const validateCurrentStep = () => {
//     switch (activeStep) {
//       case 0:
//         return !!(data.surname && data.name && data.fatherName && data.dob && data.caste);
//       case 1:
//         return !!(data.lastExam && data.percentage && data.lastSchool && data.lastSchoolCity && data.hostelStay && data.currentSchool && data.currentYear && data.branch);
//       case 2:
//         return !!(data.fatherFullName && data.relationship && data.fatherMobile && data.fatherWhatsapp && data.fatherEmail && data.income && data.jobType && data.jobName);
//       default:
//         return false;
//     }
//   };

//   // Inside your StudentForm, AcademicForm, and GuardianForm components, 
//   // you can also implement visual cues for errors if needed.

//   return (
//     <div style={{ padding: "2rem", background: "white", borderRadius: ".5rem" }}>
//       <Typography variant="h5" align="center" gutterBottom>
//         Multi-Step Form
//       </Typography>
//       <Stepper activeStep={activeStep}>
//         {steps.map((step, index) => (
//           <Step key={index}>
//             <StepLabel>{step.label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <Box sx={{ mt: 2 }}>{steps[activeStep].component}</Box>
//       <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
//         <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
//           Back
//         </Button>
//         <Button onClick={handleNext}>
//           {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//         </Button>
//       </Box>
//     </div>
//   );

// }

// export default App;


// With UI
// import React, { useState } from "react";
// import { StudentForm } from "./StudentForm";
// import { AcademicForm } from "./AcademicForm";
// import { GuardianForm } from "./GuardianForm";
// import { Stepper, Step, StepLabel, Box, Button, Typography } from "@mui/material";

// type FormData = {
//   surname: string;
//   name: string;
//   fatherName: string;
//   dob: string;
//   caste: string;
//   mobile: string;
//   whatsapp: string;
//   email: string;
//   // Other fields...
//   lastExam: string;
//   percentage: string;
//   lastSchool: string;
//   lastSchoolCity: string;
//   fatherFullName: string;
//   relationship: string;
//   fatherMobile: string;
//   fatherWhatsapp: string;
//   fatherEmail: string;
//   // More fields...
// };

// const INITIAL_DATA: FormData = {
//   surname: "",
//   name: "",
//   fatherName: "",
//   dob: "",
//   caste: "",
//   mobile: "",
//   whatsapp: "",
//   email: "",
//   lastExam: "",
//   percentage: "",
//   lastSchool: "",
//   lastSchoolCity: "",
//   fatherFullName: "",
//   relationship: "",
//   fatherMobile: "",
//   fatherWhatsapp: "",
//   fatherEmail: "",
//   // Initialize other fields...
// };

// function App() {
//   const [data, setData] = useState(INITIAL_DATA);
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = [
//     { label: "Student Information", component: <StudentForm {...data} updateFields={updateFields} /> },
//     { label: "Academic Information", component: <AcademicForm {...data} updateFields={updateFields} /> },
//     { label: "Guardian Information", component: <GuardianForm {...data} updateFields={updateFields} /> },
//   ];

//   function updateFields(fields: Partial<FormData>) {
//     setData((prev) => ({ ...prev, ...fields }));
//   }

//   const handleNext = () => {
//     if (!validateCurrentStep()) {
//       alert("Please fill out all required fields.");
//       return;
//     }
//     setActiveStep((prev) => prev + 1);
//   };

//   const handleBack = () => {
//     if (activeStep !== 0) setActiveStep((prev) => prev - 1);
//   };

//   const validateCurrentStep = () => {
//     switch (activeStep) {
//       case 0:
//         return !!(data.surname && data.name && data.fatherName && data.dob && data.caste && data.mobile);
//       case 1:
//         return !!(data.lastExam && data.percentage && data.lastSchool && data.lastSchoolCity);
//       case 2:
//         return !!(data.fatherFullName && data.relationship && data.fatherMobile && data.fatherWhatsapp && data.fatherEmail);
//       default:
//         return false;
//     }
//   };

//   return (
//     <Box sx={{ padding: "2rem", backgroundColor: "#f4f4f4", borderRadius: "1rem" }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Multi-Step Form
//       </Typography>
//       <Stepper activeStep={activeStep}>
//         {steps.map((step, index) => (
//           <Step key={index}>
//             <StepLabel>{step.label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <Box sx={{ mt: 3, p: 2, backgroundColor: "white", borderRadius: "1rem" }}>
//         {steps[activeStep].component}
//       </Box>
//       <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
//         <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
//           Back
//         </Button>
//         <Button variant="contained" color="primary" onClick={handleNext}>
//           {activeStep === steps.length - 1 ? "Finish" : "Next"}
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// export default App;



import React, { useState } from "react";
import { Box, Stepper, Step, StepLabel, Button, Typography } from "@mui/material";
import { StudentForm } from "./StudentForm";
import { AcademicForm } from "./AcademicForm";
import { GuardianForm } from "./GuardianForm";

// Types for each form's fields
type FormData = {
  firstName: string;
  lastName: string;
  rollNumber: string;
  mobile: string;
  email: string;
  lastExam: string;
  percentage: string;
  lastSchool: string;
  lastSchoolCity: string;
  fatherFullName: string;
  relationship: string;
  fatherMobile: string;
  fatherWhatsapp: string;
  fatherEmail: string;
};

// Steps in the form
const steps = ["Student Info", "Academic Info", "Guardian Info"];

// Main App Component
function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    rollNumber: "",
    mobile: "",
    email: "",
    lastExam: "",
    percentage: "",
    lastSchool: "",
    lastSchoolCity: "",
    fatherFullName: "",
    relationship: "",
    fatherMobile: "",
    fatherWhatsapp: "",
    fatherEmail: ""
  });

  // Function to update form fields
  const updateFields = (fields: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  // Go to the next step
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Go back to the previous step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Function to display the current step's form
  const renderFormStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <StudentForm
            firstName={formData.firstName}
            lastName={formData.lastName}
            rollNumber={formData.rollNumber}
            mobile={formData.mobile}
            email={formData.email}
            updateFields={updateFields}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <AcademicForm
            lastExam={formData.lastExam}
            percentage={formData.percentage}
            lastSchool={formData.lastSchool}
            lastSchoolCity={formData.lastSchoolCity}
            updateFields={updateFields}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <GuardianForm
            fatherFullName={formData.fatherFullName}
            relationship={formData.relationship}
            fatherMobile={formData.fatherMobile}
            fatherWhatsapp={formData.fatherWhatsapp}
            fatherEmail={formData.fatherEmail}
            updateFields={updateFields}
            onNext={handleNext}
          />
        );
      default:
        return (
          <Typography variant="h6">
            All steps completed - you're finished
          </Typography>
        );
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        {renderFormStep()}
        {activeStep > 0 && (
          <Button onClick={handleBack} variant="contained" color="secondary">
            Back
          </Button>
        )}
        {activeStep === steps.length && (
          <Typography variant="h6" sx={{ mt: 2 }}>
            All steps completed - you're finished
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default App;
