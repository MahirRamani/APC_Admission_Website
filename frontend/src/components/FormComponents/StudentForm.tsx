// import { FormWrapper } from "./FormWrapper";

// type StudentData = {
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
// };

// type StudentFormProps = StudentData & {
//   updateFields: (fields: Partial<StudentData>) => void;
// };

// export function StudentForm({ surname, name, fatherName, dob, caste, mobile, whatsapp, email, address, village, taluka, district, pincode, bloodGroup, illness, updateFields }: StudentFormProps) {
//   return (
//     <FormWrapper title="Student Information">
//       <label>Surname</label>
//       <input required type="text" value={surname} onChange={e => updateFields({ surname: e.target.value })} />

//       <label>Name</label>
//       <input required type="text" value={name} onChange={e => updateFields({ name: e.target.value })} />

//       <label>Father's Name</label>
//       <input required type="text" value={fatherName} onChange={e => updateFields({ fatherName: e.target.value })} />

//       <label>Date of Birth</label>
//       <input required type="date" value={dob} onChange={e => updateFields({ dob: e.target.value })} />

//       <label>Caste</label>
//       <input required type="text" value={caste} onChange={e => updateFields({ caste: e.target.value })} />

//       {/* Add other fields similarly */}
//     </FormWrapper>
//   );
// }

// with UI
// import React from "react";
// import { Box, TextField, Typography } from "@mui/material";

// type StudentFormProps = {
//   surname: string;
//   name: string;
//   fatherName: string;
//   dob: string;
//   caste: string;
//   mobile: string;
//   whatsapp: string;
//   email: string;
//   updateFields: (fields: Partial<StudentFormProps>) => void;
// };

// export function StudentForm({
//   surname,
//   name,
//   fatherName,
//   dob,
//   caste,
//   mobile,
//   whatsapp,
//   email,
//   updateFields,
// }: StudentFormProps) {
//   const validateField = (value: string) => (value ? "" : "This field is required");

//   return (
//     <Box>
//       <Typography variant="h6">Student Information</Typography>
//       <Box display="flex" flexWrap="wrap" gap={2}>
//         <TextField
//           label="Surname"
//           value={surname}
//           onChange={(e) => updateFields({ surname: e.target.value })}
//           error={!surname}
//           helperText={validateField(surname)}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Name"
//           value={name}
//           onChange={(e) => updateFields({ name: e.target.value })}
//           error={!name}
//           helperText={validateField(name)}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Father's Name"
//           value={fatherName}
//           onChange={(e) => updateFields({ fatherName: e.target.value })}
//           error={!fatherName}
//           helperText={validateField(fatherName)}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Date of Birth"
//           type="date"
//           value={dob}
//           onChange={(e) => updateFields({ dob: e.target.value })}
//           error={!dob}
//           helperText={validateField(dob)}
//           required
//           fullWidth
//           InputLabelProps={{ shrink: true }}
//         />
//         <TextField
//           label="Caste"
//           value={caste}
//           onChange={(e) => updateFields({ caste: e.target.value })}
//           error={!caste}
//           helperText={validateField(caste)}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Mobile"
//           value={mobile}
//           onChange={(e) => updateFields({ mobile: e.target.value })}
//           error={!mobile}
//           helperText={validateField(mobile)}
//           required
//           fullWidth
//         />
//       </Box>
//     </Box>
//   );
// }


// import React, { useState } from "react";
// import { Box, TextField, Typography, Button } from "@mui/material";

// type StudentFormProps = {
//   firstName: string;
//   lastName: string;
//   rollNumber: string;
//   mobile: string;
//   email: string;
//   updateFields: (fields: Partial<StudentFormProps>) => void;
//   onNext: () => void;
// };

// export function StudentForm({
//   firstName,
//   lastName,
//   rollNumber,
//   mobile,
//   email,
//   updateFields,
//   onNext,
// }: StudentFormProps) {
//   const [showErrors, setShowErrors] = useState(false);

//   const validateField = (value: string) => value ? "" : "This field is required";

//   const handleNext = () => {
//     if (firstName && lastName && rollNumber && mobile && email) {
//       onNext();
//     } else {
//       setShowErrors(true);
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h6">Student Information</Typography>
//       <Box display="flex" flexWrap="wrap" gap={2}>
//         <TextField
//           label="First Name"
//           value={firstName}
//           onChange={(e) => updateFields({ firstName: e.target.value })}
//           error={showErrors && !firstName}
//           helperText={showErrors && !firstName ? validateField(firstName) : ""}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Last Name"
//           value={lastName}
//           onChange={(e) => updateFields({ lastName: e.target.value })}
//           error={showErrors && !lastName}
//           helperText={showErrors && !lastName ? validateField(lastName) : ""}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Roll Number"
//           value={rollNumber}
//           onChange={(e) => updateFields({ rollNumber: e.target.value })}
//           error={showErrors && !rollNumber}
//           helperText={showErrors && !rollNumber ? validateField(rollNumber) : ""}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Mobile"
//           value={mobile}
//           onChange={(e) => updateFields({ mobile: e.target.value })}
//           error={showErrors && !mobile}
//           helperText={showErrors && !mobile ? validateField(mobile) : ""}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Email"
//           value={email}
//           onChange={(e) => updateFields({ email: e.target.value })}
//           error={showErrors && !email}
//           helperText={showErrors && !email ? validateField(email) : ""}
//           required
//           fullWidth
//         />
//       </Box>
//       <Button onClick={handleNext} variant="contained" color="primary">
//         Next
//       </Button>
//     </Box>
//   );
// }

import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

type StudentFormProps = {
  firstName: string;
  lastName: string;
  rollNumber: string;
  mobile: string;
  email: string;
  updateFields: (fields: Partial<StudentFormProps>) => void;
  onNext: () => void;
};

export function StudentForm({
  firstName,
  lastName,
  rollNumber,
  mobile,
  email,
  updateFields,
  onNext,
}: StudentFormProps) {
  const [showErrors, setShowErrors] = useState(false);

  const validateField = (value: string) => (value ? "" : "This field is required");

  const handleNext = () => {
    if (firstName && lastName && rollNumber && mobile && email) {
      onNext();
    } else {
      setShowErrors(true);
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Student Information
      </Typography>
      
      {/* Updated layout with two inputs per row */}
      <Box display="flex" flexWrap="wrap" gap={2} mb={2}>
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
          error={showErrors && !firstName}
          helperText={showErrors && !firstName ? validateField(firstName) : ""}
          required
          fullWidth
          sx={{ flex: "1 1 45%" }}
          />
          {/* Ensures inputs stay side-by-side, 45% width */}
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => updateFields({ lastName: e.target.value })}
          error={showErrors && !lastName}
          helperText={showErrors && !lastName ? validateField(lastName) : ""}
          required
          fullWidth
          sx={{ flex: "1 1 45%" }}
        />
        <TextField
          label="Roll Number"
          value={rollNumber}
          onChange={(e) => updateFields({ rollNumber: e.target.value })}
          error={showErrors && !rollNumber}
          helperText={showErrors && !rollNumber ? validateField(rollNumber) : ""}
          required
          fullWidth
          sx={{ flex: "1 1 45%" }}
        />
        <TextField
          label="Mobile"
          value={mobile}
          onChange={(e) => updateFields({ mobile: e.target.value })}
          error={showErrors && !mobile}
          helperText={showErrors && !mobile ? validateField(mobile) : ""}
          required
          fullWidth
          sx={{ flex: "1 1 45%" }}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          error={showErrors && !email}
          helperText={showErrors && !email ? validateField(email) : ""}
          required
          fullWidth
          sx={{ flex: "1 1 45%" }}
        />
      </Box>

      <Button onClick={handleNext} variant="contained" color="primary">
        Next
      </Button>
    </Box>
  );
}

// import React, { useState } from "react";
// import { Box, TextField, Typography } from "@mui/material";

// type StudentFormProps = {
//   firstName: string;
//   lastName: string;
//   rollNumber: string;
//   mobile: string;
//   email: string;
//   updateFields: (fields: Partial<StudentFormProps>) => void;
//   onNext: () => void; // Add this line
// };


// export function StudentForm({
//   firstName,
//   lastName,
//   rollNumber,
//   mobile,
//   email,
//   updateFields,
// }: StudentFormProps) {
//   const [showErrors, setShowErrors] = useState(false);

//   const validateField = (value: string) => (value ? "" : "This field is required");

//   return (
//     <Box>
//       <Typography variant="h6" gutterBottom>
//         Student Information
//       </Typography>

//       <Box display="flex" flexWrap="wrap" gap={2} mb={2}>
//         <TextField
//           label="First Name"
//           value={firstName}
//           onChange={(e) => updateFields({ firstName: e.target.value })}
//           error={showErrors && !firstName}
//           helperText={showErrors && !firstName ? validateField(firstName) : ""}
//           required
//           fullWidth
//           sx={{ flex: "1 1 45%" }}
//         />
//         <TextField
//           label="Last Name"
//           value={lastName}
//           onChange={(e) => updateFields({ lastName: e.target.value })}
//           error={showErrors && !lastName}
//           helperText={showErrors && !lastName ? validateField(lastName) : ""}
//           required
//           fullWidth
//           sx={{ flex: "1 1 45%" }}
//         />
//         <TextField
//           label="Roll Number"
//           value={rollNumber}
//           onChange={(e) => updateFields({ rollNumber: e.target.value })}
//           error={showErrors && !rollNumber}
//           helperText={showErrors && !rollNumber ? validateField(rollNumber) : ""}
//           required
//           fullWidth
//           sx={{ flex: "1 1 45%" }}
//         />
//         <TextField
//           label="Mobile"
//           value={mobile}
//           onChange={(e) => updateFields({ mobile: e.target.value })}
//           error={showErrors && !mobile}
//           helperText={showErrors && !mobile ? validateField(mobile) : ""}
//           required
//           fullWidth
//           sx={{ flex: "1 1 45%" }}
//         />
//         <TextField
//           label="Email"
//           value={email}
//           onChange={(e) => updateFields({ email: e.target.value })}
//           error={showErrors && !email}
//           helperText={showErrors && !email ? validateField(email) : ""}
//           required
//           fullWidth
//           sx={{ flex: "1 1 45%" }}
//         />
//       </Box>
//     </Box>
//   );
// }


