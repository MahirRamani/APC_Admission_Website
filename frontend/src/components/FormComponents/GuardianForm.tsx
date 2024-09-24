// import { FormWrapper } from "./FormWrapper";

// type GuardianData = {
//   fatherFullName: string;
//   relationship: string;
//   fatherMobile: string;
//   fatherWhatsapp: string;
//   fatherEmail: string;
//   income: string;
//   jobType: string;
//   jobName: string;
// };

// type GuardianFormProps = GuardianData & {
//   updateFields: (fields: Partial<GuardianData>) => void;
// };

// export function GuardianForm({
//   fatherFullName,
//   relationship,
//   fatherMobile,
//   fatherWhatsapp,
//   fatherEmail,
//   income,
//   jobType,
//   jobName,
//   updateFields,
// }: GuardianFormProps) {
//   return (
//     <FormWrapper title="Guardian Information">
//       <label>Father's Full Name</label>
//       <input
//         required
//         type="text"
//         value={fatherFullName}
//         onChange={(e) => updateFields({ fatherFullName: e.target.value })}
//       />

//       <label>Relationship with Student</label>
//       <input
//         required
//         type="text"
//         value={relationship}
//         onChange={(e) => updateFields({ relationship: e.target.value })}
//       />

//       <label>Father's Mobile No.</label>
//       <input
//         required
//         type="text"
//         value={fatherMobile}
//         onChange={(e) => updateFields({ fatherMobile: e.target.value })}
//       />

//       <label>Father's WhatsApp No.</label>
//       <input
//         required
//         type="text"
//         value={fatherWhatsapp}
//         onChange={(e) => updateFields({ fatherWhatsapp: e.target.value })}
//       />

//       <label>Father's Email ID</label>
//       <input
//         required
//         type="email"
//         value={fatherEmail}
//         onChange={(e) => updateFields({ fatherEmail: e.target.value })}
//       />

//       <label>Annual Income</label>
//       <input
//         required
//         type="text"
//         value={income}
//         onChange={(e) => updateFields({ income: e.target.value })}
//       />

//       <label>Job Type</label>
//       <select
//         required
//         value={jobType}
//         onChange={(e) => updateFields({ jobType: e.target.value })}
//       >
//         <option value="">Select</option>
//         <option value="Private">Private</option>
//         <option value="Government">Government</option>
//         <option value="Business">Business</option>
//       </select>

//       <label>Job/Business Name</label>
//       <input
//         required
//         type="text"
//         value={jobName}
//         onChange={(e) => updateFields({ jobName: e.target.value })}
//       />
//     </FormWrapper>
//   );
// }


// with UI
import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

type GuardianFormProps = {
  fatherFullName: string;
  relationship: string;
  fatherMobile: string;
  fatherWhatsapp: string;
  fatherEmail: string;
  updateFields: (fields: Partial<GuardianFormProps>) => void;
  onNext: () => void; // Trigger when the user clicks Next
};

export function GuardianForm({
  fatherFullName,
  relationship,
  fatherMobile,
  fatherWhatsapp,
  fatherEmail,
  updateFields,
  onNext,
}: GuardianFormProps) {
  const [showErrors, setShowErrors] = useState(false);

  const handleNextClick = () => {
    if (
      !fatherFullName ||
      !relationship ||
      !fatherMobile ||
      !fatherWhatsapp ||
      !fatherEmail
    ) {
      setShowErrors(true); // Trigger validation errors
    } else {
      setShowErrors(false); // If everything is valid, proceed to next step
      onNext();
    }
  };

  return (
    <Box>
      <Typography variant="h6">Guardian Information</Typography>
      <Box display="flex" flexWrap="wrap" gap={2}>
        <TextField
          label="Father's Full Name"
          value={fatherFullName}
          onChange={(e) => updateFields({ fatherFullName: e.target.value })}
          error={showErrors && !fatherFullName}
          helperText={showErrors && !fatherFullName ? "This field is required" : ""}
          required
          fullWidth
        />
        <TextField
          label="Relationship"
          value={relationship}
          onChange={(e) => updateFields({ relationship: e.target.value })}
          error={showErrors && !relationship}
          helperText={showErrors && !relationship ? "This field is required" : ""}
          required
          fullWidth
        />
        <TextField
          label="Father's Mobile"
          value={fatherMobile}
          onChange={(e) => updateFields({ fatherMobile: e.target.value })}
          error={showErrors && !fatherMobile}
          helperText={showErrors && !fatherMobile ? "This field is required" : ""}
          required
          fullWidth
        />
        <TextField
          label="Father's Whatsapp"
          value={fatherWhatsapp}
          onChange={(e) => updateFields({ fatherWhatsapp: e.target.value })}
          error={showErrors && !fatherWhatsapp}
          helperText={showErrors && !fatherWhatsapp ? "This field is required" : ""}
          required
          fullWidth
        />
        <TextField
          label="Father's Email"
          value={fatherEmail}
          onChange={(e) => updateFields({ fatherEmail: e.target.value })}
          error={showErrors && !fatherEmail}
          helperText={showErrors && !fatherEmail ? "This field is required" : ""}
          required
          fullWidth
        />
      </Box>
      <Button variant="contained" onClick={handleNextClick}>
        Next
      </Button>
    </Box>
  );
}



// import React, { useState } from "react";
// import { Box, TextField, Typography, Button } from "@mui/material";

// type GuardianFormProps = {
//   fatherFullName: string;
//   relationship: string;
//   fatherMobile: string;
//   fatherWhatsapp: string;
//   fatherEmail: string;
//   updateFields: (fields: Partial<GuardianFormProps>) => void;
//   onNext: () => void;
// };

// export function GuardianForm({
//   fatherFullName,
//   relationship,
//   fatherMobile,
//   fatherWhatsapp,
//   fatherEmail,
//   updateFields,
//   onNext,
// }: GuardianFormProps) {
//   const [showErrors, setShowErrors] = useState(false);

//   const validateField = (value: string) => value ? "" : "This field is required";

//   const handleNext = () => {
//     if (fatherFullName && relationship && fatherMobile && fatherWhatsapp && fatherEmail) {
//       onNext();
//     } else {
//       setShowErrors(true);
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h6">Guardian Information</Typography>
//       <Box display="flex" flexWrap="wrap" gap={2}>
//         <TextField
//           label="Father's Full Name"
//           value={fatherFullName}
//           onChange={(e) => updateFields({ fatherFullName: e.target.value })}
//           error={showErrors && !fatherFullName}
//           helperText={showErrors && !fatherFullName ? validateField(fatherFullName) : ""}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Relationship"
//           value={relationship}
//           onChange={(e) => updateFields({ relationship: e.target.value })}
//           error={showErrors && !relationship}
//           helperText={showErrors && !relationship ? validateField(relationship) : ""}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Father's Mobile"
//           value={fatherMobile}
//           onChange={(e) => updateFields({ fatherMobile: e.target.value })}
//           error={showErrors && !fatherMobile}
//           helperText={showErrors && !fatherMobile ? validateField(fatherMobile) : ""}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Father's Whatsapp"
//           value={fatherWhatsapp}
//           onChange={(e) => updateFields({ fatherWhatsapp: e.target.value })}
//           error={showErrors && !fatherWhatsapp}
//           helperText={showErrors && !fatherWhatsapp ? validateField(fatherWhatsapp) : ""}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Father's Email"
//           value={fatherEmail}
//           onChange={(e) => updateFields({ fatherEmail: e.target.value })}
//           error={showErrors && !fatherEmail}
//           helperText={showErrors && !fatherEmail ? validateField(fatherEmail) : ""}
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

