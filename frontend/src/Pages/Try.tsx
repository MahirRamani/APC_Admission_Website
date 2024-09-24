// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const FourBoxLayout = () => {
//   return (
//     <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, padding: 2 }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//         {/* Upper Left Box */}
//         <Box
//           sx={{
//             backgroundColor: '#E0FFFF',
//             borderRadius: '15px',
//             padding: '16px',
//             border: '2px solid aqua',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           }}
//         >
//           <Typography variant="h6">Upper Left Box</Typography>
//           {/* Your content goes here */}
//         </Box>

//         {/* Lower Left Box */}
//         <Box
//           sx={{
//             backgroundColor: '#F0E68C',
//             borderRadius: '15px',
//             padding: '16px',
//             borderRight: '2px solid orange',
//             borderBottom: '2px solid orange',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           }}
//         >
//           <Typography variant="h6">Lower Left Box</Typography>
//           {/* Content-driven dynamic layout */}
//         </Box>
//       </Box>

//       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//         {/* Upper Right Box */}
//         <Box
//           sx={{
//             backgroundColor: '#90EE90',
//             borderRadius: '15px',
//             padding: '16px',
//             border: '2px solid green',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           }}
//         >
//           <Typography variant="h6">Upper Right Box</Typography>
//           {/* Your content goes here */}
//         </Box>

//         {/* Lower Right Box */}
//         <Box
//           sx={{
//             backgroundColor: '#FFCCCB',
//             borderRadius: '15px',
//             padding: '16px',
//             borderBottom: '2px solid red',
//             borderLeft: '2px solid red',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           }}
//         >
//           <Typography variant="h6">Lower Right Box</Typography>
//           {/* Your content goes here */}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default FourBoxLayout;


// ==============
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   AppBar,
//   Tabs,
//   Tab,
//   TextField,
//   Grid,
//   Button,
//   Divider,
//   IconButton,
// } from "@mui/material";
// import ProfileT from "../components/User/ProfileTile";
// import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
// import ClearIcon from "@mui/icons-material/Clear";

// interface StdData {
//   id: number;
//   firstName: string;
//   middleName: string;
//   lastName: string;
//   admissionBranch: string;
//   admissionSchoolOrCollege: string;
//   isAdminPermitted: boolean;
//   isDKSPermitted: boolean;
//   isAccountantPermitted: boolean;
//   isIDCardCreated: boolean;
// }

// const Swami: React.FC = () => {
//   const [selectedProfile, setSelectedProfile] = useState<StdData | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [value, setValue] = useState(0);
//   const [students, setStudents] = useState<StdData[]>([]);
//   const theme = useTheme();

//   useEffect(() => {
//     fetch("http://localhost:3300/admin/getStudentProfiles")
//       .then((response) => response.json())
//       .then(setStudents);
//   }, []);

//   const handleProfileClick = (id: number) => {
//     setSelectedProfile(students.find((student) => student.id === id) || null);
//   };

//   const filteredStudents = students.filter((student) => {
//     const fullName = `${student.firstName} ${student.middleName} ${student.lastName}`.toLowerCase();
//     return fullName.includes(searchQuery.toLowerCase());
//   });

//   const filteredByTab = (tab: number) => {
//     switch (tab) {
//       case 1: return filteredStudents.filter((student) => student.isDKSPermitted);
//       case 2: return filteredStudents.filter((student) => student.isAdminPermitted);
//       case 3: return filteredStudents.filter((student) => student.isAccountantPermitted);
//       default: return filteredStudents;
//     }
//   };

//   const studentsToDisplay = filteredByTab(value);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         // height: "100vh",
//         position: "relative",
//         width: "100%",
//         overflow: "hidden",
//       }}
//     >
//       <Box sx={{ display: "flex" }}>
//         {/* Top Bar */}
//         <Box
//           sx={{
//             height: "80px",
//             width: "370px",
//             backgroundColor: "aqua",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: "3px 5px",
//             position: "relative",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <img src="logo-url.png" alt="logo" style={{ height: "100%" }} />
//           <Typography
//             variant="h6"
//             sx={{
//               backgroundColor: "white",
//               borderRadius: 1,
//               padding: "6px 16px",
//               color: "black",
//               fontWeight: "bold",
//             }}
//           >
//             User
//           </Typography>
//         </Box>
//         {/* Filters and Tabs */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             backgroundColor: "bisque",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: 0,
//             position: "relative",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//           }}
//         >
//           {/* Statistics */}
//           <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: "12px", px: 4, py: 1 }}
//             >
//               Forms
//               <Typography sx={{ pb: 0.5 }}>()</Typography>
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: "12px", px: 4, py: 1 }}
//             >
//               DKS
//               <Typography sx={{ pb: 0.5 }}>()</Typography>
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: "12px", px: 4, py: 1 }}
//             >
//               Acc
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: "12px", px: 4, py: 1 }}
//             >
//               Button
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: "12px", px: 4, py: 1 }}
//             >
//               Button 5
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: "12px", px: 4, py: 1 }}
//             >
//               Button 6
//             </Button>
//           </Box>
//           <Box sx={{ display: "flex", justifyContent: "space-around", mt: 1 }}>
//             <AppBar position="static" color="default">
//               <Tabs value={value} onChange={(e, v) => setValue(v)} indicatorColor="primary" textColor="primary">
//                 {["ALL", "DKS", "Admin", "Accountant", "Meet"].map((label, index) => (
//                   <Tab key={label} label={label} {...{ id: `action-tab-${index}`, "aria-controls": `action-tabpanel-${index}` }} />
//                 ))}
//               </Tabs>
//             </AppBar>
//           </Box>
//         </Box>
//       </Box>

//       {/* Main Content */}
//       <Box sx={{ display: "flex", flexGrow: 1, height: "calc(100vh - 119px)" }}>
//         {/* Left Panel */}
//         <Box
//           sx={{
//             width: "380px",
//             backgroundColor: "white",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: 0,
//             position: "relative",
//             display: "flex",
//             flexDirection: "column",
//             overflowY: "auto",
//             boxShadow: "none",
//             // scrollbarWidth: "none",
//             // msOverflowStyle: "none",
//           }}

//         >
//           {/* SEARCH */}
//           <Box
//             sx={{
//               borderBottom: 1,
//               borderColor: "divider",
//               p: 2,
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <Typography variant="h6">Profiles</Typography>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <TextField label="Search" variant="outlined" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} size="small" />
//               <IconButton onClick={() => setSearchQuery("")} aria-label="clear search"><ClearIcon /></IconButton>
//             </Box>

//           </Box>
//           <Divider sx={{ mb: 1 }} />
//           <SwipeableViews index={value} onChangeIndex={setValue}>
//             {["All", "DKS", "Admin", "Accountant"].map((tabLabel, index) => (
//               <Box key={tabLabel}  >
//                 <Grid>
//                   {studentsToDisplay.map(student => (
//                     <Grid item xs={12} sm={6} md={4} key={student.id} >
//                       <ProfileT
//                         id={student.id}
//                         imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                         name={student.firstName}
//                         year={0}
//                         degree="B.Tech"
//                         branch={student.admissionBranch}
//                         villege_city={student.admissionSchoolOrCollege}
//                         onClick={handleProfileClick}
//                       />
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>
//             ))}
//           </SwipeableViews>
//         </Box>

//         {/* Right Panel */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             backgroundColor: "white",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: 0,
//             position: "relative",
//             // overflowY: "auto",
//             boxShadow: "none",
//             // scrollbarWidth: "none",
//             // msOverflowStyle: "none",
//             display: "flex",
//             flexDirection: "column",
//           }}
//           className="no-scrollbar"
//         >
//           {selectedProfile ? (
//             <Box sx={{ width: '100%', maxWidth: 500 }}>
//               <Typography variant="h5" component="div" gutterBottom>
//                 {selectedProfile.firstName} {selectedProfile.middleName} {selectedProfile.lastName}
//               </Typography>

//               <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                   <TextField
//                     label="First Name"
//                     value={selectedProfile.firstName}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Middle Name"
//                     value={selectedProfile.middleName}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Last Name"
//                     value={selectedProfile.lastName}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Admission Branch"
//                     value={selectedProfile.admissionBranch}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Admission School/College"
//                     value={selectedProfile.admissionSchoolOrCollege}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Admin Permitted"
//                     value={selectedProfile.isAdminPermitted ? 'Yes' : 'No'}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="DKS Permitted"
//                     value={selectedProfile.isDKSPermitted ? 'Yes' : 'No'}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Accountant Permitted"
//                     value={selectedProfile.isAccountantPermitted ? 'Yes' : 'No'}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="ID Card Created"
//                     value={selectedProfile.isIDCardCreated ? 'Yes' : 'No'}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>
//               </Grid>
//             </Box>
//           ) : (
//             <Typography variant="h6" color="text.secondary">
//               Select a profile to view details
//             </Typography>
//           )}
//         </Box>

//       </Box>
//     </Box>
//   );
// }

// export default Swami;

// Permission
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   AppBar,
//   Tabs,
//   Tab,
//   TextField,
//   Grid,
//   Button,
//   Divider,
//   IconButton,
// } from "@mui/material";
// import ProfileT from "../components/User/ProfileTile";
// import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
// import ClearIcon from "@mui/icons-material/Clear";

// interface StdData {
//   id: number;
//   firstName: string;
//   middleName: string;
//   lastName: string;
//   admissionBranch: string;
//   admissionSchoolOrCollege: string;
//   isAdminPermitted: boolean;
//   isDKSPermitted: boolean;
//   isAccountantPermitted: boolean;
//   isIDCardCreated: boolean;
// }

// const Swami: React.FC = () => {
//   const [selectedProfile, setSelectedProfile] = useState<StdData | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [value, setValue] = useState(0);
//   const [students, setStudents] = useState<StdData[]>([]);
//   const [permissions, setPermissions] = useState<number[]>([]); // Permissions state
//   const theme = useTheme();

//   useEffect(() => {
//     fetch("http://localhost:3300/user/getStudentProfiles")
//       .then((response) => response.json())
//       .then(setStudents);

//     setPermissions([0, 1, 2, 3, 4]); // Set permissions here for testing purposes
//   }, []);

//   // Handle clearing selected profile on tab change
//   useEffect(() => {
//     setSelectedProfile(null);
//   }, [value]);

//   const handleProfileClick = (id: number) => {
//     setSelectedProfile(students.find((student) => student.id === id) || null);
//   };

//   const filteredStudents = students.filter((student) => {
//     const fullName = `${student.firstName} ${student.middleName} ${student.lastName}`.toLowerCase();
//     return fullName.includes(searchQuery.toLowerCase());
//   });

//   const filteredByTab = (tab: number) => {
//     switch (tab) {
//       case 1:
//         return filteredStudents.filter((student) => student.isDKSPermitted);
//       case 2:
//         return filteredStudents.filter((student) => student.isAdminPermitted);
//       case 3:
//         return filteredStudents.filter((student) => student.isAccountantPermitted);
//       default:
//         return filteredStudents;
//     }
//   };

//   const studentsToDisplay = filteredByTab(value);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         position: "relative",
//         width: "100%",
//         overflow: "hidden",
//       }}
//     >
//       <Box sx={{ display: "flex" }}>
//         {/* Top Bar */}
//         <Box
//           sx={{
//             height: "80px",
//             width: "370px",
//             backgroundColor: "aqua",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: "3px 5px",
//             position: "relative",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <img src="logo-url.png" alt="logo" style={{ height: "100%" }} />
//           <Typography
//             variant="h6"
//             sx={{
//               backgroundColor: "white",
//               borderRadius: 1,
//               padding: "6px 16px",
//               color: "black",
//               fontWeight: "bold",
//             }}
//           >
//             User
//           </Typography>
//         </Box>

//         {/* Filters and Tabs */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             backgroundColor: "bisque",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: 0,
//             position: "relative",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//           }}
//         >
//           <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{ borderRadius: "12px", px: 4, py: 1 }}
//               >
//                 Forms
//                 <Typography sx={{ pb: 0.5 }}>( )</Typography>
//               </Button>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{ borderRadius: "12px", px: 4, py: 1 }}
//               >
//                 DKS
//               </Button>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{ borderRadius: "12px", px: 4, py: 1 }}
//               >
//                 Acc
//               </Button>
//           </Box>

//           {/* Tabs */}
//           <Box sx={{ display: "flex", justifyContent: "space-around", mt: 1 }}>
//             <AppBar position="static" color="default">
//               <Tabs
//                 value={value}
//                 onChange={(e, v) => setValue(v)}
//                 indicatorColor="primary"
//                 textColor="primary"
//               >
//                 {permissions.includes(0) && (
//                   <Tab label="ALL" sx={{ flex: 1 }} />
//                 )}
//                 {permissions.includes(1) && (
//                   <Tab label="DKS" sx={{ flex: 1 }} />
//                 )}
//                 {permissions.includes(2) && (
//                   <Tab label="Admin" sx={{ flex: 1 }} />
//                 )}
//                 {permissions.includes(3) && (
//                   <Tab label="Accountant" sx={{ flex: 1 }} />
//                 )}
//                 {permissions.includes(4) && (
//                   <Tab label="Meet" sx={{ flex: 1 }} />
//                 )}
//               </Tabs>
//             </AppBar>
//           </Box>
//         </Box>
//       </Box>

//       {/* Main Content */}
//       <Box sx={{ display: "flex", flexGrow: 1, height: "calc(100vh - 120px)" }}>
//         {/* Left Panel */}
//         <Box
//           sx={{
//             width: "380px",
//             backgroundColor: "white",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: 0,
//             position: "relative",
//             display: "flex",
//             flexDirection: "column",
//             overflowY: "auto",
//           }}
//         >
//           {/* SEARCH */}
//           <Box
//             sx={{
//               borderBottom: 1,
//               borderColor: "divider",
//               p: 2,
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <Typography variant="h6">Profiles</Typography>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <TextField
//                 label="Search"
//                 variant="outlined"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 size="small"
//               />
//               <IconButton onClick={() => setSearchQuery("")} aria-label="clear search">
//                 <ClearIcon />
//               </IconButton>
//             </Box>
//           </Box>
//           <Divider sx={{ mb: 1 }} />
//           <SwipeableViews index={value} onChangeIndex={setValue}>
//             {["All", "DKS", "Admin", "Accountant","Meet"].map((tabLabel, index) => (
//               <Box key={tabLabel}>
//                 <Grid>
//                   {studentsToDisplay.map((student) => (
//                     <Grid item xs={12} sm={6} md={4} key={student.id}>
//                       <ProfileT
//                         id={student.id}
//                         imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                         name={student.firstName}
//                         year={0}
//                         degree="B.Tech"
//                         branch={student.admissionBranch}
//                         villege_city={student.admissionSchoolOrCollege}
//                         onClick={handleProfileClick}
//                       />
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>
//             ))}
//           </SwipeableViews>
//         </Box>

//         {/* Right Panel */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             backgroundColor: "white",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: 0,
//             position: "relative",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           {selectedProfile && (value === 0 || value === 1) && (
//             <Box sx={{ width: "100%", maxWidth: 500 }}>
//               {/* Display general profile details */}
//               <Typography variant="h5" component="div" gutterBottom>
//                 {selectedProfile.firstName} {selectedProfile.middleName} {selectedProfile.lastName}
//               </Typography>
//               {/* Add other details */}
//               <Typography variant="body1">
//                 Admission Branch: {selectedProfile.admissionBranch}
//               </Typography>
//               <Typography variant="body1">
//                 Admission School/College: {selectedProfile.admissionSchoolOrCollege}
//               </Typography>
//             </Box>
//           )}

//           {selectedProfile && value === 3 && (
//             <Box>
//               {/* Display accountant details like fee, payment history */}
//               <Typography variant="h5" component="div" gutterBottom>
//                 {selectedProfile.firstName} {selectedProfile.middleName} {selectedProfile.lastName} - Fees Details
//               </Typography>
//               {/* Add fees-related data */}
//               <Typography variant="body1">
//                 Fees Paid: ₹5000
//               </Typography>
//               <Typography variant="body1">
//                 Remaining Fees: ₹3000
//               </Typography>
//             </Box>
//           )}

//           {!selectedProfile && (
//             <Box sx={{ width: "100%", maxWidth: 500, padding: "20px" }}>
//               <Typography variant="body1">
//                 Please select a profile to view the details.
//               </Typography>
//             </Box>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Swami;

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  AppBar,
  Tabs,
  Tab,
  TextField,
  Grid,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import ProfileT from "../components/User/ProfileTile";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";

interface StdData {
  id: number;
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

const Swami: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<StdData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [tabValue, setTabValue] = useState(0); // Renamed from 'value' to 'tabValue'
  const [students, setStudents] = useState<StdData[]>([]);
  const [permissions, setPermissions] = useState<number[]>([]); // Permissions state
  const theme = useTheme();

  useEffect(() => {
    fetch("http://localhost:3300/user/getStudentProfiles")
      .then((response) => response.json())
      .then(setStudents);

    setPermissions([0, 1, 2, 3, 4]); // Set permissions here for testing purposes
  }, []);

  // Handle clearing selected profile on tab change
  useEffect(() => {
    setSelectedProfile(null);
  }, [tabValue]);

  const handleProfileClick = (id: number) => {
    setSelectedProfile(students.find((student) => student.id === id) || null);
  };

  const filteredStudents = students.filter((student) => {
    const fullName = `${student.firstName} ${student.middleName} ${student.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  const filteredByTab = (tab: number) => {
    switch (tab) {
      case 1:
        return filteredStudents.filter((student) => student.isDKSPermitted);
      case 2:
        return filteredStudents.filter((student) => student.isAdminPermitted);
      case 3:
        return filteredStudents.filter((student) => student.isAccountantPermitted);
      default:
        return filteredStudents;
    }
  };

  const studentsToDisplay = filteredByTab(tabValue);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex" }}>
        {/* Top Bar */}
        <Box
          sx={{
            height: "80px",
            width: "370px",
            backgroundColor: "aqua",
            border: "2px solid yellow",
            borderRadius: 0.5,
            p: "3px 5px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src="logo-url.png" alt="logo" style={{ height: "100%" }} />
          <Typography
            variant="h6"
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              padding: "6px 16px",
              color: "black",
              fontWeight: "bold",
            }}
          >
            User
          </Typography>
        </Box>

        {/* Filters and Tabs */}
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "bisque",
            border: "2px solid yellow",
            borderRadius: 0.5,
            p: 0,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "12px", px: 4, py: 1 }}
              >
                Forms
                <Typography sx={{ pb: 0.5 }}>( )</Typography>
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "12px", px: 4, py: 1 }}
              >
                DKS
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "12px", px: 4, py: 1 }}
              >
                Acc
              </Button>
          </Box>

          {/* Tabs */}
          <Box sx={{ display: "flex", justifyContent: "space-around", mt: 1 }}>
            <AppBar position="static" color="default">
              <Tabs
                value={tabValue} // Updated to tabValue
                onChange={(e, v) => setTabValue(v)} // Updated to setTabValue
                indicatorColor="primary"
                textColor="primary"
              >
                {permissions.includes(0) && (
                  <Tab label="ALL" sx={{ flex: 1 }} />
                )}
                {permissions.includes(1) && (
                  <Tab label="DKS" sx={{ flex: 1 }} />
                )}
                {permissions.includes(2) && (
                  <Tab label="SMS" sx={{ flex: 1 }} />
                )}
                {permissions.includes(3) && (
                  <Tab label="Accountant" sx={{ flex: 1 }} />
                )}
                {permissions.includes(4) && (
                  <Tab label="Meet" sx={{ flex: 1 }} />
                )}
              </Tabs>
            </AppBar>
          </Box>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ display: "flex", flexGrow: 1, height: "calc(100vh - 120px)" }}>
        {/* Left Panel */}
        <Box
          sx={{
            width: "380px",
            backgroundColor: "white",
            border: "2px solid yellow",
            borderRadius: 0.5,
            p: 0,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          {/* SEARCH */}
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Profiles</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                label="Search"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                size="small"
              />
              <IconButton onClick={() => setSearchQuery("")} aria-label="clear search">
                <ClearIcon />
              </IconButton>
            </Box>
          </Box>
          <Divider sx={{ mb: 1 }} />
          <SwipeableViews index={tabValue} onChangeIndex={setTabValue}> {/* Updated to tabValue */}
            {["All", "DKS", "Admin", "Accountant","Meet"].map((tabLabel, index) => (
              <Box key={tabLabel}>
                <Grid>
                  {studentsToDisplay.map((student) => (
                    <Grid item xs={12} sm={6} md={4} key={student.id}>
                      <ProfileT
                        id={student.id}
                        imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
                        name={student.firstName}
                        year={0}
                        degree="B.Tech"
                        branch={student.admissionBranch}
                        villege_city={student.admissionSchoolOrCollege}
                        onClick={handleProfileClick}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
          </SwipeableViews>
        </Box>

        {/* Right Panel */}
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "white",
            border: "2px solid yellow",
            borderRadius: 0.5,
            p: 0,
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {selectedProfile && (tabValue === 0 || tabValue === 1) && ( // Updated to tabValue
            <Box sx={{ width: "100%", maxWidth: 500 }}>
              {/* Display general profile details */}
              <Typography variant="h5" component="div" gutterBottom>
                {selectedProfile.firstName} {selectedProfile.middleName} {selectedProfile.lastName}
              </Typography>
              {/* Add other details */}
              <Typography variant="body1">
                Admission Branch: {selectedProfile.admissionBranch}
              </Typography>
              <Typography variant="body1">
                Admission School/College: {selectedProfile.admissionSchoolOrCollege}
              </Typography>
              {/* Buttons to interact */}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Swami;


// import { useContext, useRef, useState, useEffect, FormEvent } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// // import { UserContext } from "../../contexts/UserContext";
// import { motion, useInView, useAnimation } from "framer-motion";

// // MUI Components
// import {
//   Button,
//   TextField,
//   IconButton,
//   InputAdornment,
//   Typography,
//   CircularProgress,
// } from "@mui/material";
// import { Visibility, VisibilityOff, Email as EmailIcon } from "@mui/icons-material";

// // Assets
// import logo from "../assets/logo.png";
// import index from "../assets/Index.jpg";

// // Types
// interface LoginFormValues {
//   email: string;
//   password: string;
// }

// function UserLogin() {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [isLoginLoading, setIsLoginLoading] = useState<boolean>(false);
//   const [showPassword, setShowPassword] = useState<boolean>(false);

//   const ref = useRef(null);
//   const isInViewPage = useInView(ref, { once: true });
//   const controlsPage = useAnimation();

//   const { user, setUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isInViewPage) {
//       controlsPage.start("visible");
//     }
//   }, [isInViewPage, controlsPage]);

//   useEffect(() => {
//     if (user) {
//       if (user.role === "Student") navigate("/student/profile");
//       else if (user.role === "Manager") navigate("/manager/dashboard");
//       else if (user.role === "Accountant") navigate("/accountant/dashboard");
//       else if (user.role === "Admin") navigate("/admin/dashboard");
//     }
//   }, [user, navigate]);

//   const formik = useFormik<LoginFormValues>({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().email("Invalid email address").required("Required*"),
//       password: Yup.string()
//         .min(6, "Must be 6 characters or more")
//         .required("Required*"),
//     }),
//     onSubmit: async (values) => {
//       if (!values.email || !values.password) {
//         alert("Please fill all fields");
//         return;
//       }

//       setIsLoginLoading(true);
//       try {
//         const res = await axios.post(
//           "/login",
//           { email: values.email, password: values.password },
//           { withCredentials: true }
//         );

//         if (res.status === 201) {
//           setUser(res.data);
//           setIsLoginLoading(false);

//           if (res.data.role === "Student") navigate("/student/profile");
//           else if (res.data.role === "Manager") navigate("/manager/dashboard");
//           else if (res.data.role === "Accountant")
//             navigate("/accountant/dashboard");
//           else if (res.data.role === "Admin") navigate("/admin/dashboard");
//         }
//       } catch (err: any) {
//         setIsLoginLoading(false);
//         const status = err.response?.status;

//         if (status === 401) alert("Provide correct credentials");
//         else if (status === 404) alert("User does not exist");
//         else alert("Login failed");
//       }
//     },
//   });

//   const handleForgotPassword = async (ev: FormEvent) => {
//     ev.preventDefault();
//     setLoading(true);

//     const email = formik.values.email;
//     if (!email) {
//       alert("Please enter your email");
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await axios.post("/forgot-password", { email });
//       if (res.status === 200) {
//         alert("Password reset link sent to your email.");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Could not send link");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-[calc(100vh-104px)] mt-10">
//       <div className="container h-full lg:px-20">
//         <motion.div
//           ref={ref}
//           variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
//           initial="hidden"
//           animate={controlsPage}
//           transition={{ duration: 0.5, delay: 0.25 }}
//           className="justify-center lg:my-10 overflow-x-hidden flex rounded-2xl login_bg gradient-box-shadow"
//         >
//           <div className="flex flex-col item-center lg:ml-16 lg:mr-4 mt-8 mb-4 lg:w-4/5">
//             <div className="flex flex-row justify-center items-center gap-3">
//               <img src={logo} alt="Logo" width={40} />
//               <Link to="/" className="text-3xl font-semibold">
//                 APC Nadiad
//               </Link>
//             </div>
//             <div className="w-full px-2 py-10 lg:px-16 rounded-2xl">
//               <Typography variant="h4" align="center" gutterBottom>
//                 Welcome
//               </Typography>
//               <Typography variant="body1" align="center" gutterBottom>
//                 Enter your email and password to access your account
//               </Typography>

//               <form onSubmit={formik.handleSubmit}>
//                 <TextField
//                   label="Email"
//                   type="email"
//                   name="email"
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   fullWidth
//                   margin="normal"
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <EmailIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                   error={formik.touched.email && Boolean(formik.errors.email)}
//                   helperText={formik.touched.email && formik.errors.email}
//                 />

//                 <TextField
//                   label="Password"
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formik.values.password}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   fullWidth
//                   margin="normal"
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           onClick={() => setShowPassword(!showPassword)}
//                           edge="end"
//                         >
//                           {showPassword ? <Visibility /> : <VisibilityOff />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                   error={
//                     formik.touched.password && Boolean(formik.errors.password)
//                   }
//                   helperText={formik.touched.password && formik.errors.password}
//                 />

//                 <div className="flex justify-end">
//                   <Button
//                     onClick={handleForgotPassword}
//                     disabled={loading}
//                     size="small"
//                   >
//                     {loading ? <CircularProgress size={24} /> : "Forgot Password?"}
//                   </Button>
//                 </div>

//                 <Button
//                   type="submit"
//                   variant="contained"
//                   fullWidth
//                   disabled={isLoginLoading}
//                 >
//                   {isLoginLoading ? (
//                     <CircularProgress size={24} />
//                   ) : (
//                     "Login"
//                   )}
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default UserLogin;
