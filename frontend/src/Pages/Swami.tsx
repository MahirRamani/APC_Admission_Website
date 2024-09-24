// version - 6 <- React TS MUI
// import React, { useEffect, useState } from "react";
// import { Box, Typography, AppBar, Tabs, Tab, Divider, Button, TextField, Grid } from "@mui/material";
// import ProfileT from '../components/User/ProfileTile';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   dir?: string;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
//     </Typography>
//   );
// }

// function a11yProps(index: any) {
//   return {
//     id: `action-tab-${index}`,
//     'aria-controls': `action-tabpanel-${index}`,
//   };
// }

// export default function Swami() {
//   const [selectedProfile, setSelectedProfile] = useState<StdData | null>(null);
//   const theme = useTheme();
//   const [value, setValue] = useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index: number) => {
//     setValue(index);
//   };

//   interface StdData {
//     id: number;
//     firstName: string;
//     middleName: string;
//     lastName: string;
//     admissionBranch: string;
//     admissionSchoolOrCollege: string;
//     isAdminPermitted: boolean;
//     isDKSPermitted: boolean;
//     isAccountantPermitted: boolean;
//     isIDCardCreated: boolean;
//   }
//   const [std, setStd] = useState<StdData[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/admin/getStudentProfiles")
//       .then((response) => response.json())
//       .then((json) => setStd(json));
//     console.log(setStd);
//   }, []);

//   const handleProfileClick = (id: number) => {
//     const selected = std.find(student => student.id === id);
//     setSelectedProfile(selected || null);
//   };

//   {/* <----- Filters -----> */ }
//   const DKSPermittedStudents = std.filter(student => student.isAdminPermitted == true);

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", position: "fixed", width: "100%" }}>
//       <Box sx={{ display: "flex" }}>
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
//             justifyContent: "space-between"
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
//               fontWeight: "bold"
//             }}
//           >
//             User
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             flexGrow: 1,
//             backgroundColor: "bisque",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: "3px 5px",
//             position: "relative",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between"
//           }}
//         >
//           statistics
//           <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: '12px', px: 4, py: 1 }}
//             >
//               Forms
//               <Typography sx={{ pb: .5 }}>
//                 ()
//               </Typography>
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: '12px', px: 4, py: 1 }}
//             >
//               DKS
//               <Typography sx={{ pb: .5 }}>
//                 ()
//               </Typography>
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: '12px', px: 4, py: 1 }}
//             >
//               Acc
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: '12px', px: 4, py: 1 }}
//             >
//               Button
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: '12px', px: 4, py: 1 }}
//             >
//               Button 5
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: '12px', px: 4, py: 1 }}
//             >
//               Button 6
//             </Button>
//             {/* <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: '12px', px: 4, py: 1 }}
//             >
//               Button 7
//             </Button> */}
//           </Box>
//         </Box>
//       </Box>

//       <Box sx={{ display: "flex", flexGrow: 1, height: "calc(100vh - 99px)" }}>
//         <Box
//           sx={{
//             width: "380px",
//             backgroundColor: "white",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: 0,// @ProfileTile Section
//             position: "relative",
//             overflowY: "auto",
//             boxShadow: "none",
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//           className="no-scrollbar"
//         >
//           {/* @Filters */}
//           <Box
//             sx={{
//               position: 'sticky',
//               top: 0,
//               zIndex: 1,
//               backgroundColor: 'black',
//               display: 'flex',
//               justifyContent: 'space-around',
//               boxShadow: "none",
//               mb: 1
//             }}
//           >
//             <AppBar position="relative" color="default">
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 indicatorColor="primary"
//                 textColor="primary"
//                 variant="standard"
//                 aria-label="action tabs example"
//                 sx={{
//                   color: "#00e5ff",
//                 }}
//               >
//                 <Tab label="All" {...a11yProps(0)} sx={{ maxWidth: '0px', padding: 0 }} />
//                 <Tab label="DKS" {...a11yProps(1)} />
//                 <Tab label="SMS" {...a11yProps(2)} sx={{ color: 'primary.main', boxShadow: 'none' }} />
//                 <Tab label="RJK" {...a11yProps(3)} sx={{ color: 'primary.main', boxShadow: 'none' }} />
//                 <Tab label="Sukha" {...a11yProps(3)} sx={{ color: 'primary.main', boxShadow: 'none' }} />
//               </Tabs>
//             </AppBar>
//           </Box>
//           <SwipeableViews
//             axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//             index={value}
//             onChangeIndex={handleChangeIndex}
//           >
//             <TabPanel value={value} index={0} dir={theme.direction}>
//               {/* @ProfileTileList */}
//               {std.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={student.firstName}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={handleProfileClick}
//                   />
//                 </Grid>))
//               }

//               {/* Add more ProfileT components as needed */}
//             </TabPanel>
//             <TabPanel value={value} index={1} dir={theme.direction}>
//               {/* DKS */}
//               {std.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={student.firstName}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={handleProfileClick}
//                   />
//                 </Grid>
//               ))}

//             </TabPanel>
//             <TabPanel value={value} index={2} dir={theme.direction}>
//               {/* SMS */}
//               {std
//                 .filter((student) => student.isDKSPermitted) // Filter students with adminPermitted true
//                 .map((student) => ((
//                   <Grid item xs={12} sm={6} md={4} key={student.id}>
//                     <ProfileT
//                       id={student.id}
//                       imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                       name={student.firstName}
//                       year={0}
//                       degree='B.Tech'
//                       branch={student.admissionBranch}
//                       villege_city={student.admissionSchoolOrCollege}
//                       onClick={handleProfileClick}
//                     />
//                   </Grid>
//                 )
//                 ))}
//             </TabPanel>
//             <TabPanel value={value} index={3} dir={theme.direction}>
//               {/* RJK */}
//               {std
//                 .filter((student) => student.isAdminPermitted) // Filter students with adminPermitted true
//                 .map((student) => ((
//                   <Grid item xs={12} sm={6} md={4} key={student.id}>
//                     <ProfileT
//                       id={student.id}
//                       imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                       name={student.firstName}
//                       year={0}
//                       degree='B.Tech'
//                       branch={student.admissionBranch}
//                       villege_city={student.admissionSchoolOrCollege}
//                       onClick={handleProfileClick}
//                     />
//                   </Grid>
//                 )
//                 ))}

//             </TabPanel>
//             <TabPanel value={value} index={4} dir={theme.direction}>
//               {/* Sukhadiyo */}
//               {std
//                 .filter((student) => student.isAccountantPermitted) // Filter students with adminPermitted true
//                 .map((student) => ((
//                   <Grid item xs={12} sm={6} md={4} key={student.id}>
//                     <ProfileT
//                       id={student.id}
//                       imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                       name={student.firstName}
//                       year={0}
//                       degree='B.Tech'
//                       branch={student.admissionBranch}
//                       villege_city={student.admissionSchoolOrCollege}
//                       onClick={handleProfileClick}
//                     />
//                   </Grid>
//                 )
//                 ))}
//               <ProfileT
//                 id={1}
//                 imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                 name="Dhaval Sureshbhai Dudheliya"
//                 year={1}
//                 degree="B.Tech"
//                 branch="IT"
//                 villege_city="Your City/Village Name"
//                 onClick={handleProfileClick}
//               />
//             </TabPanel>
//           </SwipeableViews>
//           <Divider sx={{ my: 1, borderColor: '#00e676', borderWidth: 1 }} />
//         </Box>

//         {/* Main Content */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             backgroundColor: "lightgreen",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: "3px 5px",
//             position: "relative"
//           }}
//         >
//           Main Content
//           {selectedProfile ? (
//             <Box>
//               <Typography variant="h6">Profile Details</Typography>
//               <Typography>Name: {selectedProfile.firstName} {selectedProfile.middleName} {selectedProfile.lastName}</Typography>
//               <Typography>Branch: {selectedProfile.admissionBranch}</Typography>
//               <Typography>School/College: {selectedProfile.admissionSchoolOrCollege}</Typography>
//               {/* Add more details as necessary */}
//             </Box>
//           ) : (
//             <Typography variant="h6">Select a profile to see details</Typography>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

//Store
// import React, { useEffect, useState } from "react";
// import { Box, Typography, AppBar, Tabs, Tab, Button, TextField, Grid } from "@mui/material";
// import ProfileT from '../components/User/ProfileTile';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   dir?: string;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
//     </Typography>
//   );
// }

// function a11yProps(index: any) {
//   return {
//     id: `action-tab-${index}`,
//     'aria-controls': `action-tabpanel-${index}`,
//   };
// }

// export default function Swami() {
//   const [selectedProfile, setSelectedProfile] = useState<StdData | null>(null);
//   const theme = useTheme();
//   const [value, setValue] = useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index: number) => {
//     setValue(index);
//   };

//   interface StdData {
//     id: number;
//     firstName: string;
//     middleName: string;
//     lastName: string;
//     admissionBranch: string;
//     admissionSchoolOrCollege: string;
//     isAdminPermitted: boolean;
//     isDKSPermitted: boolean;
//     isAccountantPermitted: boolean;
//     isIDCardCreated: boolean;
//   }
//   const [std, setStd] = useState<StdData[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/admin/getStudentProfiles")
//       .then((response) => response.json())
//       .then((json) => setStd(json));
//     console.log(setStd);
//   }, []);

//   const handleProfileClick = (id: number) => {
//     const selected = std.find(student => student.id === id);
//     setSelectedProfile(selected || null);
//   };

//   {/* <----- Filters -----> */ }
//   const DKSPermittedStudents = std.filter(student => student.isAdminPermitted == true);

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", position: "fixed", width: "100%" }}>
//       <Box sx={{ display: "flex" }}>
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
//             justifyContent: "space-between"
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
//               fontWeight: "bold"
//             }}
//           >
//             User
//           </Typography>
//         </Box>
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
//             justifyContent: "space-between"
//           }}
//         >
//           statistics
//           <Box sx={{ display: "flex", justifyContent: "space-around", mb: 1 }}>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: '12px', px: 4, py: 1 }}
//             >
//               Forms
//               <Typography sx={{ pb: .5 }}>
//                 ()
//               </Typography>
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: '12px', px: 4, py: 1 }}
//             >
//               DKS
//               <Typography sx={{ pb: .5 }}>
//                 ()
//               </Typography>
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: '12px', px: 4, py: 1 }}
//             >
//               Acc
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: '12px', px: 4, py: 1 }}
//             >
//               Button
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: '12px', px: 4, py: 1 }}
//             >
//               Button 5
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: '12px', px: 4, py: 1 }}
//             >
//               Button 6
//             </Button>
//           </Box>
//           <Box sx={{ display: "flex", justifyContent: "space-around", mt: 1 }}>
//             <AppBar position="static" color="default">
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 indicatorColor="primary"
//                 textColor="primary"
//                 variant="scrollable"
//                 scrollButtons="auto"
//                 aria-label="scrollable auto tabs example"
//               >
//                 <Tab label="ALL" {...a11yProps(0)} />
//                 <Tab label="DKS" {...a11yProps(1)} />
//                 <Tab label="SMS" {...a11yProps(2)} />
//                 <Tab label="RJK" {...a11yProps(3)} />
//                 <Tab label="Sukhadiyo" {...a11yProps(4)} />
//               </Tabs>
//             </AppBar>
//           </Box>
//         </Box>
//       </Box>

//       <Box sx={{ display: "flex", flexGrow: 1, height: "calc(100vh - 99px)" }}>
//         <Box
//           sx={{
//             width: "380px",
//             backgroundColor: "white",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: 0,// @ProfileTile Section
//             position: "relative",
//             overflowY: "auto",
//             boxShadow: "none",
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//           className="no-scrollbar"
//         >
//           {/* @Filters */}
//           <Box
//             sx={{
//               position: 'sticky',
//               top: 0,
//               zIndex: 1,
//               backgroundColor: 'black',
//               display: 'flex',
//               justifyContent: 'space-around',
//               boxShadow: "none",
//               mb: 0,
//             }}
//           >
//             <AppBar position="relative" color="default">
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 indicatorColor="primary"
//                 textColor="primary"
//                 variant="standard"
//                 aria-label="action tabs example"
//                 sx={{
//                   color: "#00e5ff",
//                 }}
//               >
//                 <Tab label="All" {...a11yProps(0)} sx={{ maxWidth: '0px', padding: 0 }} />
//                 <Tab label="DKS" {...a11yProps(1)} />
//                 <Tab label="SMS" {...a11yProps(2)} sx={{ color: 'primary.main', boxShadow: 'none' }} />
//                 <Tab label="RJK" {...a11yProps(3)} sx={{ color: 'primary.main', boxShadow: 'none' }} />
//                 <Tab label="Sukhadiyo" {...a11yProps(3)} sx={{ color: 'primary.main', boxShadow: 'none' }} />
//               </Tabs>
//             </AppBar>
//           </Box>
//           <SwipeableViews
//             axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//             index={value}
//             onChangeIndex={handleChangeIndex}
//           >
//             <TabPanel value={value} index={0} dir={theme.direction}>
//               {/* All */}
//               {/* Add your content for All here */}
//               {std.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={student.firstName}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={handleProfileClick}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
//             <TabPanel value={value} index={1} dir={theme.direction}>
//               {/* DKS */}
//               {/* Add your content for DKS here */}
//               {DKSPermittedStudents.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={student.firstName}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={handleProfileClick}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
//             <TabPanel value={value} index={2} dir={theme.direction}>
//               {/* SMS */}
//               {/* Add your content for SMS here */}
//               {std.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={student.firstName}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={handleProfileClick}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
//             <TabPanel value={value} index={3} dir={theme.direction}>
//               {/* RJK */}
//               {/* Add your content for RJK here */}
//               {std.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={student.firstName}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={handleProfileClick}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
//             <TabPanel value={value} index={4} dir={theme.direction}>
//               {/* Sukha */}
//               {/* Add your content for Sukha here */}
//               {std.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={student.firstName}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={handleProfileClick}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
//           </SwipeableViews>
//         </Box>

//         <Box
//           sx={{
//             flexGrow: 1,
//             backgroundColor: "orange",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: "3px 5px",
//             position: "relative",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             overflow: "auto", // Add scroll capability
//           }}
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

//Structure
// import React, { useEffect, useState } from "react";
// import { Box, Typography, AppBar, Tabs, Tab, TextField, Grid } from "@mui/material";
// import ProfileT from '../components/User/ProfileTile';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
//     </Typography>
//   );
// }

// function a11yProps(index: any) {
//   return {
//     id: `action-tab-${index}`,
//     'aria-controls': `action-tabpanel-${index}`,
//   };
// }

// export default function Swami() {
//   const [selectedProfile, setSelectedProfile] = useState<StdData | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [value, setValue] = useState(0);
//   const theme = useTheme();

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   interface StdData {
//     id: number;
//     firstName: string;
//     middleName: string;
//     lastName: string;
//     admissionBranch: string;
//     admissionSchoolOrCollege: string;
//     isAdminPermitted: boolean;
//     isDKSPermitted: boolean;
//     isAccountantPermitted: boolean;
//     isIDCardCreated: boolean;
//   }

//   const [std, setStd] = useState<StdData[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/admin/getStudentProfiles")
//       .then((response) => response.json())
//       .then((json) => setStd(json));
//   }, []);

//   const handleProfileClick = (id: number) => {
//     const selected = std.find(student => student.id === id);
//     setSelectedProfile(selected || null);
//   };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredStudents = std.filter(student =>
//     student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     student.middleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     student.lastName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const filterStudentsByBranch = (branch: string) =>
//     filteredStudents.filter(student => student.admissionBranch === branch);

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", position: "fixed", width: "100%" }}>
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
//             justifyContent: "space-between"
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
//               fontWeight: "bold"
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
//             justifyContent: "space-between"
//           }}
//         >
//           {/* Statistics */}
//           <Box sx={{ display: "flex", justifyContent: "space-around", mb: 1 }}>
//             <TextField
//               label="Search"
//               variant="outlined"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               fullWidth
//               sx={{ borderRadius: '12px', px: 4, py: 1 }}
//             />
//           </Box>
//           {/* Tabs */}
//           <Box sx={{ display: "flex", justifyContent: "space-around", mt: 1 }}>
//             <AppBar position="static" color="default">
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 indicatorColor="primary"
//                 textColor="primary"
//                 variant="scrollable"
//                 scrollButtons="auto"
//                 aria-label="scrollable auto tabs example"
//               >
//                 <Tab label="ALL" {...a11yProps(0)} />
//                 <Tab label="DKS" {...a11yProps(1)} />
//                 <Tab label="SMS" {...a11yProps(2)} />
//                 <Tab label="RJK" {...a11yProps(3)} />
//                 <Tab label="Sukhadiyo" {...a11yProps(4)} />
//               </Tabs>
//             </AppBar>
//           </Box>
//         </Box>
//       </Box>

//       {/* Main Content */}
//       <Box sx={{ display: "flex", flexGrow: 1, height: "calc(100vh - 99px)" }}>
//         {/* Left Panel */}
//         <Box
//           sx={{
//             width: "380px",
//             backgroundColor: "white",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: 0,
//             position: "relative",
//             overflowY: "auto",
//             boxShadow: "none",
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//           className="no-scrollbar"
//         >
//           {/* Swipeable Views for Tabs */}
//           <SwipeableViews
//             axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//             index={value}
//             onChangeIndex={handleChange}
//           >
//             {/* Tab Panels */}
//             <TabPanel value={value} index={0} dir={theme.direction}>
//               {/* All */}
//               {filteredStudents.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={`${student.firstName} ${student.middleName} ${student.lastName}`}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={handleProfileClick}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
//             <TabPanel value={value} index={1} dir={theme.direction}>
//               {/* DKS */}
//               {filterStudentsByBranch('DKS').map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={`${student.firstName} ${student.middleName} ${student.lastName}`}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={handleProfileClick}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
//             <TabPanel value={value} index={2} dir={theme.direction}>
//               {/* SMS */}
//               {filterStudentsByBranch('SMS').map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={`${student.firstName} ${student.middleName} ${student.lastName}`}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={handleProfileClick}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
//             <TabPanel value={value} index={3} dir={theme.direction}>
//               {/* RJK */}
//               {filterStudentsByBranch('RJK').map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={`${student.firstName} ${student.middleName} ${student.lastName}`}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={handleProfileClick}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
//             <TabPanel value={value} index={4} dir={theme.direction}>
//               {/* Sukhadiyo */}
//               {filterStudentsByBranch('Sukhadiyo').map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={`${student.firstName} ${student.middleName} ${student.lastName}`}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={handleProfileClick}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
//           </SwipeableViews>
//         </Box>

//         {/* Right Panel */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             backgroundColor: "wheat",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: 2,
//             position: "relative",
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             Profile Details
//           </Typography>
//           {selectedProfile ? (
//             <Box>
//               <Typography variant="h6">
//                 {selectedProfile.firstName} {selectedProfile.middleName} {selectedProfile.lastName}
//               </Typography>
//               <Typography>
//                 Branch: {selectedProfile.admissionBranch}
//               </Typography>
//               <Typography>
//                 School/College: {selectedProfile.admissionSchoolOrCollege}
//               </Typography>
//               <Typography>
//                 Admin Permitted: {selectedProfile.isAdminPermitted ? "Yes" : "No"}
//               </Typography>
//               <Typography>
//                 DKS Permitted: {selectedProfile.isDKSPermitted ? "Yes" : "No"}
//               </Typography>
//               <Typography>
//                 Accountant Permitted: {selectedProfile.isAccountantPermitted ? "Yes" : "No"}
//               </Typography>
//               <Typography>
//                 ID Card Created: {selectedProfile.isIDCardCreated ? "Yes" : "No"}
//               </Typography>
//               {/* Add more fields as needed */}
//             </Box>
//           ) : (
//             <Typography variant="h6">
//               Please select a profile to view details
//             </Typography>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// Search
// import React, { useEffect, useState } from "react";
// import { Box, Typography, AppBar, Tabs, Tab, Button, TextField, Grid } from "@mui/material";
// import ProfileT from '../components/User/ProfileTile';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   dir?: string;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
//     </Typography>
//   );
// }

// function a11yProps(index: any) {
//   return {
//     id: `action-tab-${index}`,
//     'aria-controls': `action-tabpanel-${index}`,
//   };
// }

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

// export default function Swami() {
//   const [selectedProfile, setSelectedProfile] = useState<StdData | null>(null);
//   const theme = useTheme();
//   const [value, setValue] = useState(0);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [std, setStd] = useState<StdData[]>([]);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index: number) => {
//     setValue(index);
//   };

//   useEffect(() => {
//     fetch("http://localhost:3000/admin/getStudentProfiles")
//       .then((response) => response.json())
//       .then((json) => setStd(json));
//   }, []);

//   const handleProfileClick = (id: number) => {
//     const selected = std.find(student => student.id === id);
//     setSelectedProfile(selected || null);
//   };

//   const DKSPermittedStudents = std.filter(student => student.isAdminPermitted);

//   const filteredStudents = std.filter((student) => {
//     const query = searchQuery.toLowerCase();
//     return (
//       student.firstName.toLowerCase().includes(query) ||
//       student.middleName.toLowerCase().includes(query) ||
//       student.lastName.toLowerCase().includes(query)
//     );
//   });

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", position: "fixed", width: "100%" }}>
//       <Box sx={{ display: "flex" }}>
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
//             justifyContent: "space-between"
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
//               fontWeight: "bold"
//             }}
//           >
//             User
//           </Typography>
//         </Box>
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
//             justifyContent: "space-between"
//           }}
//         >
//           statistics
//           <Box sx={{ display: "flex", justifyContent: "space-around", mb: 1 }}>
//             <Button variant="contained" color="primary" sx={{ borderRadius: '12px', px: 4, py: 1 }}>
//               Forms
//               <Typography sx={{ pb: .5 }}>()</Typography>
//             </Button>
//             <Button variant="contained" color="primary" sx={{ borderRadius: '12px', px: 4, py: 1 }}>
//               DKS
//               <Typography sx={{ pb: .5 }}>()</Typography>
//             </Button>
//             <Button variant="contained" color="primary" sx={{ borderRadius: '12px', px: 4, py: 1 }}>
//               Acc
//             </Button>
//             <Button variant="contained" color="primary" sx={{ borderRadius: '12px', px: 4, py: 1 }}>
//               Button
//             </Button>
//             <Button variant="contained" color="primary" sx={{ borderRadius: '12px', px: 4, py: 1 }}>
//               Button 5
//             </Button>
//             <Button variant="contained" color="primary" sx={{ borderRadius: '12px', px: 4, py: 1 }}>
//               Button 6
//             </Button>
//           </Box>
//           <Box sx={{ display: "flex", justifyContent: "space-around", mt: 1 }}>
//             <AppBar position="static" color="default">
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 indicatorColor="primary"
//                 textColor="primary"
//                 variant="scrollable"
//                 scrollButtons="auto"
//                 aria-label="scrollable auto tabs example"
//               >
//                 <Tab label="ALL" {...a11yProps(0)} />
//                 <Tab label="DKS" {...a11yProps(1)} />
//                 <Tab label="SMS" {...a11yProps(2)} />
//                 <Tab label="RJK" {...a11yProps(3)} />
//                 <Tab label="Sukhadiyo" {...a11yProps(4)} />
//               </Tabs>
//             </AppBar>
//           </Box>
//         </Box>
//       </Box>

//       <Box sx={{ display: "flex", flexGrow: 1, height: "calc(100vh - 99px)" }}>
//         <Box
//           sx={{
//             width: "380px",
//             backgroundColor: "white",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: 0,
//             position: "relative",
//             overflowY: "auto",
//             display: "flex",
//             flexDirection: "column"
//           }}
//         >
//           <TextField
//             variant="outlined"
//             placeholder="Search by name"
//             fullWidth
//             sx={{ margin: "10px 0" }}
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
//             {filteredStudents.length === 0 ? (
//               <Typography>No students found.</Typography>
//             ) : (
//               <Grid container spacing={2}>
//                 {filteredStudents.map((student) => (
//                   <Grid item xs={12} sm={6} md={4} key={student.id}>
//                     <ProfileT
//                       id={student.id}
//                       imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                       name={student.firstName}
//                       year={0}
//                       degree='B.Tech'
//                       branch={student.admissionBranch}
//                       villege_city={student.admissionSchoolOrCollege}
//                       onClick={handleProfileClick}
//                     />
//                   </Grid>
//                 ))}
//               </Grid>
//             )}
//           </Box>
//         </Box>
//         <Box sx={{ flexGrow: 1, backgroundColor: "green", display: "flex", flexDirection: "column" }}>
//           <Box sx={{ flexGrow: 1, overflow: "auto" }}>
//             <SwipeableViews
//               axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//               index={value}
//               onChangeIndex={handleChangeIndex}
//             >
//               <TabPanel value={value} index={0} dir={theme.direction}>
//                 <Typography>Content for ALL students</Typography>
//               </TabPanel>
//               <TabPanel value={value} index={1} dir={theme.direction}>
//                 <Typography>Content for DKS students</Typography>
//               </TabPanel>
//               <TabPanel value={value} index={2} dir={theme.direction}>
//                 <Typography>Content for SMS students</Typography>
//               </TabPanel>
//               <TabPanel value={value} index={3} dir={theme.direction}>
//                 <Typography>Content for RJK students</Typography>
//               </TabPanel>
//               <TabPanel value={value} index={4} dir={theme.direction}>
//                 <Typography>Content for Sukhadiyo students</Typography>
//               </TabPanel>
//             </SwipeableViews>
//           </Box>
//           <Box sx={{ backgroundColor: "pink", display: "flex", justifyContent: "space-around", padding: 2 }}>
//             {selectedProfile && (
//               <Box>
//                 <Typography variant="h6">Selected Profile</Typography>
//                 <Typography>Name: {selectedProfile.firstName} {selectedProfile.middleName} {selectedProfile.lastName}</Typography>
//                 <Typography>Branch: {selectedProfile.admissionBranch}</Typography>
//                 <Typography>School/College: {selectedProfile.admissionSchoolOrCollege}</Typography>
//               </Box>
//             )}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// Search 1
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
//     fetch("http://localhost:3300/user/getStudentProfiles")
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
//               <Box key={tabLabel}>
//                 <Grid>
//                   {studentsToDisplay.map(student => (
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

// Permossion Based
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
  const [value, setValue] = useState(0);
  const [students, setStudents] = useState<StdData[]>([]);
  const [permissions, setPermissions] = useState<number[]>([]); // Permissions state
  const theme = useTheme();

  useEffect(() => {
    fetch("http://localhost:3300/user/getStudentProfiles")
      .then((response) => response.json())
      .then(setStudents);

    // Fetch user permissions after login (example function)
    // const fetchPermissions = async () => {
    //   const response = await fetch("http://localhost:3300/user/getPermissions");
    //   const data = await response.json();
    //   setPermissions(data.permissions); // Assuming permissions is an array of permission IDs
    // };

    // fetchPermissions();
    setPermissions([0, 1,2,3,4]);

  }, []);
  const handleProfileClick = (id: number) => {
    setSelectedProfile(students.find((student) => student.id === id) || null);
  };

  const filteredStudents = students.filter((student) => {
    const fullName = `${student.firstName} ${student.middleName} ${student.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  const filteredByTab = (tab: number) => {
    switch (tab) {
      case 1: return filteredStudents.filter((student) => student.isDKSPermitted);
      case 2: return filteredStudents.filter((student) => student.isAdminPermitted);
      case 3: return filteredStudents.filter((student) => student.isAccountantPermitted);
      default: return filteredStudents;
    }
  };

  const studentsToDisplay = filteredByTab(value);

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
          {/* Statistics */}
          <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
            {permissions.includes(1) && ( // Assuming permission ID 1 corresponds to "Forms"
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "12px", px: 4, py: 1 }}
              >
                Forms
                <Typography sx={{ pb: 0.5 }}>()</Typography>
              </Button>
            )}
            {permissions.includes(2) && ( // Assuming permission ID 2 corresponds to "DKS"
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "12px", px: 4, py: 1 }}
              >
                DKS
                <Typography sx={{ pb: 0.5 }}>()</Typography>
              </Button>
            )}
            {permissions.includes(3) && ( // Assuming permission ID 3 corresponds to "Acc"
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "12px", px: 4, py: 1 }}
              >
                Acc
              </Button>
            )}
            {/* Add more buttons based on permissions as needed */}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-around", mt: 1 }}>
            {/* <AppBar position="static" color="default">
              <Tabs value={value} onChange={(e, v) => setValue(v)} indicatorColor="primary" textColor="primary">
                {["ALL", "DKS", "Admin", "Accountant", "Meet"].map((label, index) => (
                  <Tab key={label} label={label} {...{ id: `action-tab-${index}`, "aria-controls": `action-tabpanel-${index}` }} />
                ))}
              </Tabs>
            </AppBar> */}
            {/* <AppBar position="static" color="default">
              <Tabs value={value} onChange={(e, v) => setValue(v)} indicatorColor="primary" textColor="primary">
                {permissions.includes(0) && ( // Assuming permission ID 0 corresponds to "ALL"
                  <Tab label="ALL" {...{ id: `action-tab-0`, "aria-controls": `action-tabpanel-0` }} />
                )}
                {permissions.includes(1) && ( // Assuming permission ID 1 corresponds to "DKS"
                  <Tab label="DKS" {...{ id: `action-tab-1`, "aria-controls": `action-tabpanel-1` }} />
                )}
                {permissions.includes(2) && ( // Assuming permission ID 2 corresponds to "Admin"
                  <Tab label="Admin" {...{ id: `action-tab-2`, "aria-controls": `action-tabpanel-2` }} />
                )}
                {permissions.includes(3) && ( // Assuming permission ID 3 corresponds to "Accountant"
                  <Tab label="Accountant" {...{ id: `action-tab-3`, "aria-controls": `action-tabpanel-3` }} />
                )}
                {permissions.includes(4) && ( // Assuming permission ID 4 corresponds to "Meet"
                  <Tab label="Meet" {...{ id: `action-tab-4`, "aria-controls": `action-tabpanel-4` }} />
                )}
              </Tabs>
            </AppBar> */}
            <AppBar position="static" color="default">
              <Tabs value={value} onChange={(e, v) => setValue(v)} indicatorColor="primary" textColor="primary">
                {permissions.includes(0) && (
                  <Tab label="ALL" sx={{ flex: 1 }} {...{ id: `action-tab-0`, "aria-controls": `action-tabpanel-0` }} />
                )}
                {permissions.includes(1) && (
                  <Tab label="DKS" sx={{ flex: 1 }} {...{ id: `action-tab-1`, "aria-controls": `action-tabpanel-1` }} />
                )}
                {permissions.includes(2) && (
                  <Tab label="SMS" sx={{ flex: 1 }} {...{ id: `action-tab-2`, "aria-controls": `action-tabpanel-2` }} />
                )}
                {permissions.includes(3) && (
                  <Tab label="Accountant" sx={{ flex: 1 }} {...{ id: `action-tab-3`, "aria-controls": `action-tabpanel-3` }} />
                )}
                {permissions.includes(4) && (
                  <Tab label="Meet" sx={{ flex: 1 }} {...{ id: `action-tab-4`, "aria-controls": `action-tabpanel-4` }} />
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
              <TextField label="Search" variant="outlined" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} size="small" />
              <IconButton onClick={() => setSearchQuery("")} aria-label="clear search"><ClearIcon /></IconButton>
            </Box>
          </Box>
          <Divider sx={{ mb: 1 }} />
          <SwipeableViews index={value} onChangeIndex={setValue}>
            {["All", "DKS", "Admin", "Accountant"].map((tabLabel, index) => (
              <Box key={tabLabel}>
                <Grid>
                  {studentsToDisplay.map(student => (
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
          {selectedProfile ? (
            <Box sx={{ width: '100%', maxWidth: 500 }}>
              <Typography variant="h5" component="div" gutterBottom>
                {selectedProfile.firstName} {selectedProfile.middleName} {selectedProfile.lastName}
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="First Name"
                    value={selectedProfile.firstName}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="Middle Name"
                    value={selectedProfile.middleName}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="Last Name"
                    value={selectedProfile.lastName}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="Admission Branch"
                    value={selectedProfile.admissionBranch}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="Admission School/College"
                    value={selectedProfile.admissionSchoolOrCollege}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="Admin Permitted"
                    value={selectedProfile.isAdminPermitted ? 'Yes' : 'No'}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="DKS Permitted"
                    value={selectedProfile.isDKSPermitted ? 'Yes' : 'No'}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="Accountant Permitted"
                    value={selectedProfile.isAccountantPermitted ? 'Yes' : 'No'}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="ID Card Created"
                    value={selectedProfile.isIDCardCreated ? 'Yes' : 'No'}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Typography variant="h6" color="text.secondary">
              Select a profile to view details
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Swami;



// ^^============
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
// } from "@mui/material";
// import ProfileT from "../components/User/ProfileTile";
// import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   dir?: string;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
//     </Typography>
//   );
// }

// function a11yProps(index: any) {
//   return {
//     id: `action-tab-${index}`,
//     "aria-controls": `action-tabpanel-${index}`,
//   };
// }

// export default function Swami() {
//   const [selectedProfile, setSelectedProfile] = useState<StdData | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [value, setValue] = useState(0);
//   const theme = useTheme();

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index: number) => {
//     setValue(index);
//   };

//   interface StdData {
//     id: number;
//     firstName: string;
//     middleName: string;
//     lastName: string;
//     admissionBranch: string;
//     admissionSchoolOrCollege: string;
//     isAdminPermitted: boolean;
//     isDKSPermitted: boolean;
//     isAccountantPermitted: boolean;
//     isIDCardCreated: boolean;
//   }

//   const [std, setStd] = useState<StdData[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:3300/admin/getStudentProfiles")
//       .then((response) => response.json())
//       .then((json) => setStd(json));
//   }, []);

//   const handleProfileClick = (id: number) => {
//     const selected = std.find((student) => student.id === id);
//     setSelectedProfile(selected || null);
//   };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   // Apply the search filter to all students first
//   const filteredStudents = std.filter((student) => {
//     const fullName = `${student.firstName} ${student.middleName} ${student.lastName}`.toLowerCase();
//     return fullName.includes(searchQuery.toLowerCase());
//   });

//   // Further filter based on the active tab
//   const filteredByTab = (tab: number) => {
//     switch (tab) {
//       case 0: // ALL students
//         return filteredStudents;
//       case 1: // DKS permitted students
//         return filteredStudents.filter((student) => student.isDKSPermitted);
//       case 2: // Admin permitted students
//         return filteredStudents.filter((student) => student.isAdminPermitted);
//       case 3: // Accountant permitted students
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
//         height: "100vh",
//         position: "fixed",
//         width: "100%",
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
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: "12px", px: 4, py: 1 }}
//             >
//               DKS
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: "12px", px: 4, py: 1 }}
//             >
//               Acc
//             </Button>
//           </Box>
//           <Box sx={{ display: "flex", justifyContent: "space-around", mt: 1 }}>
//             <AppBar position="static" color="default">
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 indicatorColor="primary"
//                 textColor="primary"
//                 variant="scrollable"
//                 scrollButtons="auto"
//                 aria-label="scrollable auto tabs example"
//               >
//                 <Tab label="ALL" {...a11yProps(0)} />
//                 <Tab label="DKS" {...a11yProps(1)} />
//                 <Tab label="SMS" {...a11yProps(2)} />
//                 <Tab label="RJK" {...a11yProps(3)} />
//                 <Tab label="Meet" {...a11yProps(4)} />
//               </Tabs>
//             </AppBar>
//           </Box>
//         </Box>
//       </Box>

//       {/* Main Content */}
//       <Box sx={{ display: "flex", flexGrow: 1, height: "calc(100vh - 99px)" }}>
//         {/* Left Panel */}
//         <Box
//           sx={{
//             width: "380px",
//             backgroundColor: "white",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: 0,
//             position: "relative",
//             overflowY: "auto",
//             boxShadow: "none",
//           }}
//           className="no-scrollbar"
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
//             <TextField
//               label="Search"
//               variant="outlined"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               size="small"
//             />
//           </Box>
//           <Divider />
//           {/* Swipeable Views for Tabs */}
//           <SwipeableViews
//             axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//             index={value}
//             onChangeIndex={handleChangeIndex}
//           >
//             {/* Tab Panels */}
//             <TabPanel value={value} index={0} dir={theme.direction}>
//               {/* All */}
//               {studentsToDisplay.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={student.firstName}
//                     year={0}
//                     degree="B.Tech"
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={handleProfileClick}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>

//             {/* Other Tab Panels */}
//             <TabPanel value={value} index={1} dir={theme.direction}>
//               {studentsToDisplay.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={student.firstName}
//                     year={0}
//                     degree="B.Tech"
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={handleProfileClick}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>

//             {/* More tab panels as needed */}
//           </SwipeableViews>
//         </Box>

//         {/* Right Panel */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             backgroundColor: "bisque",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: 2,
//             position: "relative",
//           }}
//         >
//           {selectedProfile ? (
//             <Box>
//               <Typography variant="h6">
//                 {selectedProfile.firstName} {selectedProfile.middleName}{" "}
//                 {selectedProfile.lastName}
//               </Typography>
//               <Typography>
//                 Branch: {selectedProfile.admissionBranch}
//               </Typography>
//               <Typography>
//                 School/College: {selectedProfile.admissionSchoolOrCollege}
//               </Typography>
//               {/* Add more details here */}
//             </Box>
//           ) : (
//             <Typography>Select a profile to view details.</Typography>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// +++++++++++++++++++
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

// interface TabPanelProps {
//   children?: React.ReactNode;
//   dir?: string;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;
//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
//     </Typography>
//   );
// }

// function a11yProps(index: any) {
//   return {
//     id: `action-tab-${index}`,
//     "aria-controls": `action-tabpanel-${index}`,
//   };
// }

// export default function Swami() {
//   const [selectedProfile, setSelectedProfile] = useState<StdData | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [value, setValue] = useState(0);
//   const theme = useTheme();

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index: number) => {
//     setValue(index);
//   };

//   interface StdData {
//     id: number;
//     firstName: string;
//     middleName: string;
//     lastName: string;
//     admissionBranch: string;
//     admissionSchoolOrCollege: string;
//     isAdminPermitted: boolean;
//     isDKSPermitted: boolean;
//     isAccountantPermitted: boolean;
//     isIDCardCreated: boolean;
//   }

//   const [std, setStd] = useState<StdData[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:3300/admin/getStudentProfiles")
//       .then((response) => response.json())
//       .then((json) => setStd(json));
//   }, []);

//   const handleProfileClick = (id: number) => {
//     const selected = std.find((student) => student.id === id);
//     setSelectedProfile(selected || null);
//   };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleClearSearch = () => {
//     setSearchQuery("");
//   };

//   const filteredStudents = std.filter((student) => {
//     const fullName = `${student.firstName} ${student.middleName} ${student.lastName}`.toLowerCase();
//     return fullName.includes(searchQuery.toLowerCase());
//   });

//   const filteredByTab = (tab: number) => {
//     switch (tab) {
//       case 0: // ALL students
//         return filteredStudents;
//       case 1: // DKS permitted students
//         return filteredStudents.filter((student) => student.isDKSPermitted);
//       case 2: // Admin permitted students
//         return filteredStudents.filter((student) => student.isAdminPermitted);
//       case 3: // Accountant permitted students
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
//         height: "100vh",
//         position: "fixed",
//         width: "100%",
//         backgroundColor: "#f5f5f5",
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
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: "12px", px: 4, py: 1 }}
//             >
//               DKS
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: "12px", px: 4, py: 1 }}
//             >
//               Acc
//             </Button>
//           </Box>
//           <Box sx={{ display: "flex", justifyContent: "space-around", mt: 1 }}>
//             <AppBar position="static" color="default">
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 indicatorColor="primary"
//                 textColor="primary"
//                 variant="scrollable"
//                 scrollButtons="auto"
//                 aria-label="scrollable auto tabs example"
//               >
//                 <Tab label="ALL" {...a11yProps(0)} />
//                 <Tab label="DKS" {...a11yProps(1)} />
//                 <Tab label="SMS" {...a11yProps(2)} />
//                 <Tab label="RJK" {...a11yProps(3)} />
//                 <Tab label="Meet" {...a11yProps(4)} />
//               </Tabs>
//             </AppBar>
//           </Box>
//         </Box>
//       </Box>

//       {/* Main Content */}
//       <Box sx={{ display: "flex", flexGrow: 1, height: "calc(100vh - 99px)" }}>
//         {/* Left Panel */}
//         <Box
//           sx={{
//             width: "380px",
//             backgroundColor: "white",
//             border: "2px solid green", // Individual border color
//             borderRadius: 0.5,
//             p: 0,
//             position: "relative",
//             overflowY: "auto",
//             boxShadow: "none",
//           }}
//           className="no-scrollbar"
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
//                 onChange={handleSearchChange}
//                 size="small"
//               />
//               <IconButton
//                 onClick={handleClearSearch}
//                 sx={{ ml: 1 }}
//                 aria-label="clear search"
//               >
//                 <ClearIcon />
//               </IconButton>
//             </Box>
//           </Box>
//           <Divider />
//           {/* Swipeable Views for Tabs */}
//           <SwipeableViews
//             axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//             index={value}
//             onChangeIndex={handleChangeIndex}
//           >
//             {/* Tab Panels */}
//             <TabPanel value={value} index={0} dir={theme.direction}>
//               {/* All */}
//               {studentsToDisplay.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={student.firstName}
//                     year={0}
//                     degree="B.Tech"
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={handleProfileClick}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
//             {/* Additional TabPanels can be added here for other tabs */}
//           </SwipeableViews>
//         </Box>

//         {/* Right Panel */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             backgroundColor: "bisque",
//             border: "2px solid blue", // Individual border color
//             borderRadius: 0.5,
//             p: 2,
//             position: "relative",
//           }}
//         >
//           {selectedProfile ? (
//             <Box>
//               <Typography variant="h6">
//                 {selectedProfile.firstName} {selectedProfile.middleName} {selectedProfile.lastName}
//               </Typography>
//               <Typography>
//                 Branch: {selectedProfile.admissionBranch}
//               </Typography>
//               <Typography>
//                 School/College: {selectedProfile.admissionSchoolOrCollege}
//               </Typography>
//             </Box>
//           ) : (
//             <Typography>Select a profile to view details.</Typography>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// ]]]]]]]]]]]]]]]]]]]]]
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
//     const fullName =
//       `${student.firstName} ${student.middleName} ${student.lastName}`.toLowerCase();
//     return fullName.includes(searchQuery.toLowerCase());
//   });

//   const filteredByTab = (tab: number) => {
//     switch (tab) {
//       case 1:
//         return filteredStudents.filter((student) => student.isDKSPermitted);
//       case 2:
//         return filteredStudents.filter((student) => student.isAdminPermitted);
//       case 3:
//         return filteredStudents.filter(
//           (student) => student.isAccountantPermitted
//         );
//       default:
//         return filteredStudents;
//     }
//   };

//   const studentsToDisplay = filteredByTab(value);

//   return (
//     <Box
//       sx={{
//         // display: "flex",
//         // flexDirection: "column",
//         // height: "100vh",
//         backgroundColor: "#f5f5f5",
//       }}
//     >
//       <Box sx={{ display: "flex" }}>
//         <Box
//           sx={{
//             height: "80px",
//             width: "370px",
//             backgroundColor: "aqua",
//             border: "2px solid yellow",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             p: "3px 5px",
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
//         <Box
//           sx={{
//             flexGrow: 1,
//             backgroundColor: "bisque",
//             border: "2px solid yellow",
//             p: 0,
//           }}
//         >
//           <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
//             {["Forms", "DKS", "Acc"].map((label) => (
//               <Button
//                 key={label}
//                 variant="contained"
//                 color="primary"
//                 sx={{ borderRadius: "12px", px: 4, py: 1 }}
//               >
//                 {label}
//               </Button>
//             ))}
//           </Box>
//           <AppBar position="static" color="default">
//             <Tabs
//               value={value}
//               onChange={(e, v) => setValue(v)}
//               indicatorColor="primary"
//               textColor="primary"
//             >
//               {["ALL", "DKS", "SMS", "RJK", "Meet"].map((label, index) => (
//                 <Tab
//                   key={label}
//                   label={label}
//                   {...{
//                     id: `action-tab-${index}`,
//                     "aria-controls": `action-tabpanel-${index}`,
//                   }}
//                 />
//               ))}
//             </Tabs>
//           </AppBar>
//         </Box>
//       </Box>

//       <Box sx={{ display: "flex", flexGrow: 1 }}>
//         <Box
//           sx={{
//             width: "380px",
//             // backgroundColor: "white",
//             // border: "2px solid green",
//             // borderRadius: 0.5,
//             // position: "relative",
//             // overflowY: "auto",
//           }}
//         >
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
//               <IconButton
//                 onClick={() => setSearchQuery("")}
//                 aria-label="clear search"
//               >
//                 <ClearIcon />
//               </IconButton>
//             </Box>
//           </Box>
//           <Divider />
//           <SwipeableViews
//             axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//             index={value}
//             onChangeIndex={setValue}
//           >
//             {["All", "DKS", "Admin", "Accountant"].map((tabLabel, index) => (
//               // <Box key={tabLabel}>
//                 <Grid container spacing={2}>
//                   {studentsToDisplay.map((student) => (
//                     // <Grid item xs={12} sm={6} md={4} key={student.id}>
//                     <ProfileT
//                       id={student.id}
//                       imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                       name={student.firstName}
//                       year={0}
//                       degree="B.Tech"
//                       branch={student.admissionBranch}
//                       villege_city={student.admissionSchoolOrCollege}
//                       onClick={handleProfileClick}
//                     />
//                     // </Grid>
//                   ))}
//                 </Grid>
//               // </Box>
//             ))}
//           </SwipeableViews>
//         </Box>

//         <Box
//           sx={{
//             flexGrow: 1,
//             backgroundColor: "bisque",
//             border: "2px solid blue",
//             borderRadius: 0.5,
//             p: 2,
//           }}
//         >
//           {selectedProfile ? (
//             <Box>
//               <Typography variant="h6">{`${selectedProfile.firstName} ${selectedProfile.middleName} ${selectedProfile.lastName}`}</Typography>
//               <Typography>Branch: {selectedProfile.admissionBranch}</Typography>
//               <Typography>
//                 School/College: {selectedProfile.admissionSchoolOrCollege}
//               </Typography>
//             </Box>
//           ) : (
//             <Typography>Select a profile to view details.</Typography>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Swami;

// xxxxxxxxxxxxxxxxxxxxxxx
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
//     <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#f5f5f5" }}>
//       <Box sx={{ display: "flex" }}>
//         <Box sx={{ height: "80px", width: "370px", backgroundColor: "aqua", border: "2px solid yellow", display: "flex", alignItems: "center", justifyContent: "space-between", p: "3px 5px" }}>
//           <img src="logo-url.png" alt="logo" style={{ height: "100%" }} />
//           <Typography variant="h6" sx={{ backgroundColor: "white", borderRadius: 1, padding: "6px 16px", color: "black", fontWeight: "bold" }}>User</Typography>
//         </Box>
//         <Box sx={{ flexGrow: 1, backgroundColor: "bisque", border: "2px solid yellow", p: 0 }}>
//           <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
//             {["Forms", "DKS", "Acc"].map(label => (
//               <Button key={label} variant="contained" color="primary" sx={{ borderRadius: "12px", px: 4, py: 1 }}>{label}</Button>
//             ))}
//           </Box>
//           <AppBar position="static" color="default">
//             <Tabs value={value} onChange={(e, v) => setValue(v)} indicatorColor="primary" textColor="primary">
//               {["ALL", "DKS", "Admin", "Accountant"].map((label, index) => (
//                 <Tab key={label} label={label} {...{ id: `action-tab-${index}`, "aria-controls": `action-tabpanel-${index}` }} />
//               ))}
//             </Tabs>
//           </AppBar>
//         </Box>
//       </Box>

//       <Box sx={{ display: "flex", flexGrow: 1, height: "calc(100vh - 80px)" }}>
//         <Box sx={{ width: "380px", backgroundColor: "white", border: "2px solid green", borderRadius: 0.5, position: "relative", overflowY: "auto"}}>
//           <Box
//             sx={{
//               position: "sticky",
//               top: 0,
//               zIndex: 1,
//               backgroundColor: "white",
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
//           <Divider sx={{mb:1}}/>
//           <SwipeableViews index={value} onChangeIndex={setValue}>
//             {["All", "DKS", "Admin", "Accountant"].map((tabLabel, index) => (
//               <Box key={tabLabel}>
//                 <Grid>
//                   {studentsToDisplay.map(student => (
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

//         <Box sx={{ flexGrow: 1, backgroundColor: "bisque", border: "2px solid blue", borderRadius: 0.5, p: 2 }}>
//           {selectedProfile ? (
//             <Box>
//               <Typography variant="h6">{`${selectedProfile.firstName} ${selectedProfile.middleName} ${selectedProfile.lastName}`}</Typography>
//               <Typography>Branch: {selectedProfile.admissionBranch}</Typography>
//               <Typography>School/College: {selectedProfile.admissionSchoolOrCollege}</Typography>
//             </Box>
//           ) : (
//             <Typography>Select a profile to view details.</Typography>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Swami;




//Search & all
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
// } from "@mui/material";
// import ProfileT from "../components/User/ProfileTile";
// import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   dir?: string;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
//     </Typography>
//   );
// }

// function a11yProps(index: any) {
//   return {
//     id: `action-tab-${index}`,
//     "aria-controls": `action-tabpanel-${index}`,
//   };
// }

// export default function Swami() {
//   const [selectedProfile, setSelectedProfile] = useState<StdData | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [value, setValue] = useState(0);
//   const theme = useTheme();

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index: number) => {
//     setValue(index);
//   };

//   interface StdData {
//     id: number;
//     firstName: string;
//     middleName: string;
//     lastName: string;
//     admissionBranch: string;
//     admissionSchoolOrCollege: string;
//     isAdminPermitted: boolean;
//     isDKSPermitted: boolean;
//     isAccountantPermitted: boolean;
//     isIDCardCreated: boolean;
//   }

//   const [std, setStd] = useState<StdData[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:3300/admin/getStudentProfiles")
//       .then((response) => response.json())
//       .then((json) => setStd(json));
//   }, []);

//   const handleProfileClick = (id: number) => {
//     const selected = std.find((student) => student.id === id);
//     setSelectedProfile(selected || null);
//   };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredStudents = std.filter(
//     (student) =>
//       student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       student.middleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       student.lastName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const DKSPermittedStudents = std.filter(
//     (student) => student.isAdminPermitted === true
//   );

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         height: "100vh",
//         position: "fixed",
//         width: "100%",
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
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 indicatorColor="primary"
//                 textColor="primary"
//                 variant="scrollable"
//                 scrollButtons="auto"
//                 aria-label="scrollable auto tabs example"
//               >
//                 <Tab label="ALL" {...a11yProps(0)} />
//                 <Tab label="DKS" {...a11yProps(1)} />
//                 <Tab label="SMS" {...a11yProps(2)} />
//                 <Tab label="RJK" {...a11yProps(3)} />
//                 <Tab label="Sukhadiyo" {...a11yProps(4)} />
//               </Tabs>
//             </AppBar>
//           </Box>
//         </Box>
//       </Box>

//       {/* Main Content */}
//       <Box sx={{ display: "flex", flexGrow: 1, height: "calc(100vh - 99px)" }}>
//         {/* Left Panel */}
//         <Box
//           sx={{
//             width: "380px",
//             backgroundColor: "white",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: 0,
//             position: "relative",
//             overflowY: "auto",
//             boxShadow: "none",
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//           className="no-scrollbar"
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
//             <TextField
//               label="Search"
//               variant="outlined"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               size="small"
//             />
//           </Box>
//           <Divider />
//           {/* Swipeable Views for Tabs */}
//           <SwipeableViews
//             axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//             index={value}
//             onChangeIndex={handleChangeIndex}
//           >
//             {/* Tab Panels */}
//             <TabPanel value={value} index={0} dir={theme.direction}>
//               {/* All */}
//               {filteredStudents.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={`${student.firstName} ${student.middleName} ${student.lastName}`}
//                     year={0}
//                     degree="B.Tech"
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={() => handleProfileClick(student.id)}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>

//             <TabPanel value={value} index={1} dir={theme.direction}>
//               {/* DKS */}
//               {filteredStudents.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={`${student.firstName} ${student.middleName} ${student.lastName}`}
//                     year={0}
//                     degree="B.Tech"
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={() => handleProfileClick(student.id)}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>

//             <TabPanel value={value} index={2} dir={theme.direction}>
//               {/* SMS */}
//               {filteredStudents.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={`${student.firstName} ${student.middleName} ${student.lastName}`}
//                     year={0}
//                     degree="B.Tech"
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={() => handleProfileClick(student.id)}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>

//             <TabPanel value={value} index={3} dir={theme.direction}>
//               {/* RJK */}
//               {filteredStudents.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={`${student.firstName} ${student.middleName} ${student.lastName}`}
//                     year={0}
//                     degree="B.Tech"
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={() => handleProfileClick(student.id)}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>

//             <TabPanel value={value} index={4} dir={theme.direction}>
//               {/* Sukhadiyo */}
//               {filteredStudents.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={`${student.firstName} ${student.middleName} ${student.lastName}`}
//                     year={0}
//                     degree="B.Tech"
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={() => handleProfileClick(student.id)}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
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
//             overflowY: "auto",
//             boxShadow: "none",
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//             display: "flex",
//             flexDirection: "column",
//           }}
//           className="no-scrollbar"
//         >
//           {/* {selectedProfile ? (
//             <Box sx={{ width: '100%', maxWidth: 500, marginTop:5, marginLeft:10 }} >
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
//           )} */}

//           {selectedProfile ? (
//             <Box sx={{ width: '100%', maxWidth: 800, marginTop: 5, marginLeft: 10 }}>
//               <Typography variant="h5" component="div" gutterBottom>
//                 {selectedProfile.name || ''} {selectedProfile.surname || ''}
//               </Typography>

//               {/* Section 1 */}
//               <Typography variant="h6" component="div" gutterBottom>
//                 Personal Information
//               </Typography>
//               <Grid container spacing={2}>
//                 <Grid container spacing={2} direction="row">
//                   <Grid item xs={4}>
//                     <TextField
//                       label="Surname"
//                       value={selectedProfile.formData?.surname || ''}
//                       fullWidth
//                       sx={{ mb: 2 }}
//                     />
//                   </Grid>

//                   <Grid item xs={4}>
//                     <TextField
//                       label="Name"
//                       value={selectedProfile.formData?.name || ''}
//                       fullWidth
//                       sx={{ mb: 2 }}
//                     />
//                   </Grid>

//                   <Grid item xs={4}>
//                     <TextField
//                       label="Father Name"
//                       value={selectedProfile.formData?.fatherName || ''}
//                       fullWidth
//                       sx={{ mb: 2 }}
//                     />
//                   </Grid>
//                 </Grid>

//                 <Grid container spacing={2} direction="row">
//                 </Grid>
//                 <Grid container spacing={2} direction="row">
//                 </Grid>
//                 <Grid container spacing={2} direction="row">
//                 </Grid>
//                 <Grid container spacing={2} direction="row">
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     label="Address"
//                     value={selectedProfile.formData?.address || ''}
//                     multiline
//                     rows={4}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="City"
//                     value={selectedProfile.formData?.villageCity || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Taluka"
//                     value={selectedProfile.formData?.taluka || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="District"
//                     value={selectedProfile.formData?.district || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Pincode"
//                     value={selectedProfile.formData?.pin || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Permanent Illness"
//                     value={selectedProfile.formData?.permanentIllness || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>
//               </Grid>

//               {/* Section 2 */}
//               <Typography variant="h6" component="div" gutterBottom sx={{ mt: 4 }}>
//                 Educational Information
//               </Typography>
//               <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                   <TextField
//                     label="Last Exam Passed"
//                     value={selectedProfile.lastExamPassed || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Percentage"
//                     value={selectedProfile.percentage || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="School/College Name"
//                     value={selectedProfile.schoolCollegeName || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="School/College City"
//                     value={selectedProfile.schoolCollegeCity || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Hostel/Private"
//                     value={selectedProfile.hostelPrivate || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Current School/College"
//                     value={selectedProfile.currentSchoolCollege || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Current Year"
//                     value={selectedProfile.currentYear || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Faculty/Branch"
//                     value={selectedProfile.facultyBranch || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>
//               </Grid>

//               {/* Section 3 */}
//               <Typography variant="h6" component="div" gutterBottom sx={{ mt: 4 }}>
//                 Job Information
//               </Typography>
//               <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                   <TextField
//                     label="Surname"
//                     value={selectedProfile.surname || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Name"
//                     value={selectedProfile.name || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Father Name"
//                     value={selectedProfile.fatherName || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Relation"
//                     value={selectedProfile.relation || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Mobile No"
//                     value={selectedProfile.mobileNo || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="WhatsApp No"
//                     value={selectedProfile.whatsappNo || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Job/Business"
//                     value={selectedProfile.jobBusiness || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Job Type"
//                     value={selectedProfile.jobType || ''}
//                     fullWidth
//                     sx={{ mb: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     label="Job/Business Name"
//                     value={selectedProfile.jobBusinessName || ''}
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

// import React, { useEffect, useState } from "react";
// import { Box, Typography, AppBar, Tabs, Tab, TextField, Grid, Button, Divider } from "@mui/material";
// import ProfileT from '../components/User/ProfileTile';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
//     </Typography>
//   );
// }

// function a11yProps(index: any) {
//   return {
//     id: `action-tab-${index}`,
//     'aria-controls': `action-tabpanel-${index}`,
//   };
// }

// export default function Swami() {
//   const [selectedProfile, setSelectedProfile] = useState<StdData | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [value, setValue] = useState(0);
//   const theme = useTheme();

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index: number) => {
//     setValue(index);
//   };

//   interface StdData {
//     id: number;
//     firstName: string;
//     middleName: string;
//     lastName: string;
//     admissionBranch: string;
//     admissionSchoolOrCollege: string;
//     isAdminPermitted: boolean;
//     isDKSPermitted: boolean;
//     isAccountantPermitted: boolean;
//     isIDCardCreated: boolean;
//   }

//   const [std, setStd] = useState<StdData[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:3300/admin/getStudentProfiles")
//       .then((response) => response.json())
//       .then((json) => setStd(json));
//   }, []);

//   const handleProfileClick = (id: number) => {
//     const selected = std.find(student => student.id === id);
//     setSelectedProfile(selected || null);
//   };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredStudents = std.filter(student =>
//     student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     student.middleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     student.lastName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const filterStudentsByBranch = (branch: string) =>
//     filteredStudents.filter(student => student.admissionBranch === branch);

//   const DKSPermittedStudents = std.filter(student => student.isAdminPermitted);

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", position: "fixed", width: "100%" }}>
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
//             justifyContent: "space-between"
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
//               fontWeight: "bold"
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
//             justifyContent: "space-between"
//           }}
//         >
//           {/* Statistics */}
//           <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
//             <Button variant="contained" color="primary" sx={{ borderRadius: '12px', px: 4, py: 1 }}>
//               Forms
//               <Typography sx={{ pb: .5 }}>()</Typography>
//             </Button>
//             <Button variant="contained" color="primary" sx={{ borderRadius: '12px', px: 4, py: 1 }}>
//               DKS
//               <Typography sx={{ pb: .5 }}>()</Typography>
//             </Button>
//             <Button variant="contained" color="primary" sx={{ borderRadius: '12px', px: 4, py: 1 }}>
//               Acc
//             </Button>
//             <Button variant="contained" color="primary" sx={{ borderRadius: '12px', px: 4, py: 1 }}>
//               Button
//             </Button>
//             <Button variant="contained" color="primary" sx={{ borderRadius: '12px', px: 4, py: 1 }}>
//               Button 5
//             </Button>
//             <Button variant="contained" color="primary" sx={{ borderRadius: '12px', px: 4, py: 1 }}>
//               Button 6
//             </Button>
//           </Box>
//           <Box sx={{ display: "flex", justifyContent: "space-around", mt: 1 }}>
//             <AppBar position="static" color="default">
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 indicatorColor="primary"
//                 textColor="primary"
//                 variant="scrollable"
//                 scrollButtons="auto"
//                 aria-label="scrollable auto tabs example"
//               >
//                 <Tab label="ALL" {...a11yProps(0)} />
//                 <Tab label="DKS" {...a11yProps(1)} />
//                 <Tab label="SMS" {...a11yProps(2)} />
//                 <Tab label="RJK" {...a11yProps(3)} />
//                 <Tab label="Sukhadiyo" {...a11yProps(4)} />
//               </Tabs>
//             </AppBar>
//           </Box>
//         </Box>
//       </Box>

//       {/* Main Content */}
//       <Box sx={{ display: "flex", flexGrow: 1, height: "calc(100vh - 99px)" }}>
//         {/* Left Panel */}
//         <Box
//           sx={{
//             width: "380px",
//             backgroundColor: "white",
//             border: "2px solid yellow",
//             borderRadius: 0.5,
//             p: 0,
//             position: "relative",
//             overflowY: "auto",
//             boxShadow: "none",
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//           className="no-scrollbar"
//         >
//           {/* Swipeable Views for Tabs */}
//           <SwipeableViews
//             axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//             index={value}
//             onChangeIndex={handleChangeIndex}
//           >
//             {/* Tab Panels */}
//             <TabPanel value={value} index={0}>
//               {/* All */}
//               {filteredStudents.map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={`${student.firstName} ${student.middleName} ${student.lastName}`}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={() => handleProfileClick(student.id)}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
//             <TabPanel value={value} index={1} >
//               {/* DKS */}
//               {filterStudentsByBranch('DKS').map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={`${student.firstName} ${student.middleName} ${student.lastName}`}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={() => handleProfileClick(student.id)}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
//             <TabPanel value={value} index={2} >
//               {/* SMS */}
//               {filterStudentsByBranch('SMS').map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={`${student.firstName} ${student.middleName} ${student.lastName}`}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={() => handleProfileClick(student.id)}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
//             <TabPanel value={value} index={3} >
//               {/* RJK */}
//               {filterStudentsByBranch('RJK').map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={`${student.firstName} ${student.middleName} ${student.lastName}`}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={() => handleProfileClick(student.id)}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
//             <TabPanel value={value} index={4} >
//               {/* Sukhadiyo */}
//               {filterStudentsByBranch('Sukhadiyo').map((student) => (
//                 <Grid item xs={12} sm={6} md={4} key={student.id}>
//                   <ProfileT
//                     id={student.id}
//                     imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
//                     name={`${student.firstName} ${student.middleName} ${student.lastName}`}
//                     year={0}
//                     degree='B.Tech'
//                     branch={student.admissionBranch}
//                     villege_city={student.admissionSchoolOrCollege}
//                     onClick={() => handleProfileClick(student.id)}
//                   />
//                 </Grid>
//               ))}
//             </TabPanel>
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
//             overflowY: "auto",
//             boxShadow: "none",
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//             display: "flex",
//             flexDirection: "column",
//           }}
//           className="no-scrollbar"
//         >
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
//             <TextField
//               label="Search"
//               variant="outlined"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               size="small"
//             />
//           </Box>
//           <Divider />
//           <Box sx={{ p: 2 }}>
//             {/* Display Selected Profile */}
//             {selectedProfile ? (
//               <Box>
//                 <Typography variant="h6">
//                   {selectedProfile.firstName} {selectedProfile.middleName} {selectedProfile.lastName}
//                 </Typography>
//                 <Typography>Branch: {selectedProfile.admissionBranch}</Typography>
//                 <Typography>School/College: {selectedProfile.admissionSchoolOrCollege}</Typography>
//                 {/* Add more details as needed */}
//               </Box>
//             ) : (
//               <Typography>Select a profile to view details</Typography>
//             )}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
