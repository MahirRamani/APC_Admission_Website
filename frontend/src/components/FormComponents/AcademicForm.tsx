// import { FormWrapper } from "./FormWrapper";

// type AcademicData = {
//   lastExam: string;
//   percentage: string;
//   lastSchool: string;
//   lastSchoolCity: string;
//   hostelStay: string;
//   currentSchool: string;
//   currentYear: string;
//   branch: string;
// };

// type AcademicFormProps = AcademicData & {
//   updateFields: (fields: Partial<AcademicData>) => void;
// };

// export function AcademicForm({
//   lastExam,
//   percentage,
//   lastSchool,
//   lastSchoolCity,
//   hostelStay,
//   currentSchool,
//   currentYear,
//   branch,
//   updateFields,
// }: AcademicFormProps) {
//   return (
//     <FormWrapper title="Academic Information">
//       <label>Last Examination Passed</label>
//       <input
//         required
//         type="text"
//         value={lastExam}
//         onChange={(e) => updateFields({ lastExam: e.target.value })}
//       />

//       <label>Percentage</label>
//       <input
//         required
//         type="number"
//         step="0.01"
//         value={percentage}
//         onChange={(e) => updateFields({ percentage: e.target.value })}
//       />

//       <label>Name of Last School/College</label>
//       <input
//         required
//         type="text"
//         value={lastSchool}
//         onChange={(e) => updateFields({ lastSchool: e.target.value })}
//       />

//       <label>City of Last School/College</label>
//       <input
//         required
//         type="text"
//         value={lastSchoolCity}
//         onChange={(e) => updateFields({ lastSchoolCity: e.target.value })}
//       />

//       <label>Hostel/Private Stay Last</label>
//       <input
//         required
//         type="text"
//         value={hostelStay}
//         onChange={(e) => updateFields({ hostelStay: e.target.value })}
//       />

//       <label>Currently Enrolled in School/College</label>
//       <input
//         required
//         type="text"
//         value={currentSchool}
//         onChange={(e) => updateFields({ currentSchool: e.target.value })}
//       />

//       <label>Year of Study</label>
//       <input
//         required
//         type="text"
//         value={currentYear}
//         onChange={(e) => updateFields({ currentYear: e.target.value })}
//       />

//       <label>Faculty/Branch</label>
//       <input
//         required
//         type="text"
//         value={branch}
//         onChange={(e) => updateFields({ branch: e.target.value })}
//       />
//     </FormWrapper>
//   );
// }


// with UI
import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

type AcademicFormProps = {
  lastExam: string;
  percentage: string;
  lastSchool: string;
  lastSchoolCity: string;
  updateFields: (fields: Partial<AcademicFormProps>) => void;
  onNext: () => void; // Trigger when the user clicks Next
};

export function AcademicForm({
  lastExam,
  percentage,
  lastSchool,
  lastSchoolCity,
  updateFields,
  onNext,
}: AcademicFormProps) {
  const [showErrors, setShowErrors] = useState(false);

  const handleNextClick = () => {
    if (!lastExam || !percentage || !lastSchool || !lastSchoolCity) {
      setShowErrors(true); // Trigger validation errors
    } else {
      setShowErrors(false); // If everything is valid, proceed to next step
      onNext();
    }
  };

  return (
    <Box>
      <Typography variant="h6">Academic Information</Typography>
      <Box display="flex" flexWrap="wrap" gap={2}>
        <TextField
          label="Last Exam"
          value={lastExam}
          onChange={(e) => updateFields({ lastExam: e.target.value })}
          error={showErrors && !lastExam}
          helperText={showErrors && !lastExam ? "This field is required" : ""}
          required
          fullWidth
        />
        <TextField
          label="Percentage"
          value={percentage}
          onChange={(e) => updateFields({ percentage: e.target.value })}
          error={showErrors && !percentage}
          helperText={showErrors && !percentage ? "This field is required" : ""}
          required
          fullWidth
        />
        <TextField
          label="Last School"
          value={lastSchool}
          onChange={(e) => updateFields({ lastSchool: e.target.value })}
          error={showErrors && !lastSchool}
          helperText={showErrors && !lastSchool ? "This field is required" : ""}
          required
          fullWidth
        />
        <TextField
          label="Last School City"
          value={lastSchoolCity}
          onChange={(e) => updateFields({ lastSchoolCity: e.target.value })}
          error={showErrors && !lastSchoolCity}
          helperText={showErrors && !lastSchoolCity ? "This field is required" : ""}
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

// type AcademicFormProps = {
//   lastExam: string;
//   percentage: string;
//   lastSchool: string;
//   lastSchoolCity: string;
//   updateFields: (fields: Partial<AcademicFormProps>) => void;
//   onNext: () => void;
// };

// export function AcademicForm({
//   lastExam,
//   percentage,
//   lastSchool,
//   lastSchoolCity,
//   updateFields,
//   onNext,
// }: AcademicFormProps) {
//   const [showErrors, setShowErrors] = useState(false);

//   const validateField = (value: string) => value ? "" : "This field is required";

//   const handleNext = () => {
//     if (lastExam && percentage && lastSchool && lastSchoolCity) {
//       onNext();
//     } else {
//       setShowErrors(true);
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h6">Academic Information</Typography>
//       <Box display="flex" flexWrap="wrap" gap={2}>
//         <TextField
//           label="Last Exam"
//           value={lastExam}
//           onChange={(e) => updateFields({ lastExam: e.target.value })}
//           error={showErrors && !lastExam}
//           helperText={showErrors && !lastExam ? validateField(lastExam) : ""}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Percentage"
//           value={percentage}
//           onChange={(e) => updateFields({ percentage: e.target.value })}
//           error={showErrors && !percentage}
//           helperText={showErrors && !percentage ? validateField(percentage) : ""}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Last School"
//           value={lastSchool}
//           onChange={(e) => updateFields({ lastSchool: e.target.value })}
//           error={showErrors && !lastSchool}
//           helperText={showErrors && !lastSchool ? validateField(lastSchool) : ""}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Last School City"
//           value={lastSchoolCity}
//           onChange={(e) => updateFields({ lastSchoolCity: e.target.value })}
//           error={showErrors && !lastSchoolCity}
//           helperText={showErrors && !lastSchoolCity ? validateField(lastSchoolCity) : ""}
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

