import React, { useEffect, useState } from "react";
import "./App.css";
import { Box, Container } from "@mui/material";
import { Typography, Avatar } from "@mui/material";


import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material";

// import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Permission from '../../backend/src/models/Permission';
import PermissionForm from "./Pages/PermissionForm";
import RolePermissionsForm from "./Pages/RolePermissionsForm";
import StudentForm from "./Pages/StudentForm";
import Swami from "./Pages/Swami";
import Form from "./Pages/Form";
import AdmissionForm from "./Pages/AdmissionForm";
import SuperAdminDashboard from "./Pages/SuperAdminDashboard";
import CreateUser from "./Pages/CreateUser";
import Appp from "./components/FormComponents/App";
import Try from "./Pages/Try";
import AddPermission from "./Pages/AddPermission";

interface StdData {
  id: number;
  isAdminPermitted: boolean;
  isAccountantPermitted: boolean;
  firstName: string;
  pincode: string;
  isIDCardCreated: boolean;
  // AccountId: number;
  // RoleId: number;
}

// const ProfileTile = () => (
//   <Box
//     sx={{
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       padding: "10px",
//       border: "1px solid lightgray",
//       borderRadius: "8px",
//       marginBottom: "10px",
//       backgroundColor: "white",
//     }}
//   >
//     <Avatar sx={{ width: 56, height: 56, marginBottom: "10px" }}>P</Avatar>
//     <Typography variant="h6" sx={{ fontSize: "1rem" }}>
//       Dhaval Sureshbhai Dudheliya
//     </Typography>
//     <Typography variant="body2" sx={{ color: "gray" }}>
//       901 | 301
//     </Typography>
//     <Box
//       sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
//     >
//       <Typography
//         variant="body2"
//         sx={{
//           backgroundColor: "blue",
//           color: "white",
//           padding: "2px 4px",
//           borderRadius: "4px",
//         }}
//       >
//         B.Tech
//       </Typography>
//       <Typography
//         variant="body2"
//         sx={{
//           backgroundColor: "cyan",
//           color: "white",
//           padding: "2px 4px",
//           borderRadius: "4px",
//         }}
//       >
//         Computer Science
//       </Typography>
//     </Box>
//   </Box>
// );

// const X = () => (
// <Box
//   sx={{
//     display: "flex",
//     alignItems: "center",
//     padding: "10px",
//     border: "1px solid lightgray",
//     borderRadius: "8px",
//     marginBottom: "10px",
//     backgroundColor: "white",
//     width: "300px"
//   }}
// >
//   <Avatar sx={{ width: 56, height: 56, marginRight: "10px" }}>
//     <img src="/path/to/profile-pic.png" alt="Profile" width="100%" height="100%" />
//   </Avatar>
//   <Box sx={{ flexGrow: 1 }}>
//     <Typography variant="h6" sx={{ fontSize: "1rem", marginBottom: "5px" }}>
//       Dhaval Sureshbhai Dudheliya
//     </Typography>
//     <Box sx={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
//       <PersonIcon sx={{ fontSize: "1rem", marginRight: "5px" }} />
//       <Typography variant="body2">901</Typography>
//       <HomeIcon sx={{ fontSize: "1rem", marginLeft: "15px", marginRight: "5px" }} />
//       <Typography variant="body2">301</Typography>
//     </Box>
//     <Box sx={{ display: "flex", gap: "5px" }}>
//       <Button variant="contained" size="small" sx={{ backgroundColor: "blue", color: "white", textTransform: "none" }}>
//         B.Tech
//       </Button>
//       <Button variant="contained" size="small" sx={{ backgroundColor: "cyan", color: "white", textTransform: "none" }}>
//         Computer Science
//       </Button>
//     </Box>
//   </Box>
// </Box>
// );

function App() {
  // console.log("lol");
  // const [items, setItems] = useState<StdData[]>([]);

  // useEffect(() => {
  //   console.log("pp");
  //   fetch("http://localhost:3000/admin/getStudentProfiles")
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  //   console.log(setItems);
  //   console.log("jj");
  // }, []);

  // return (
  //   <Box sx={{ display: "flex", flexDirection: "column", height: "100svh" }}>
  //     <Box sx={{ display: "flex" }}>
  //       <Box
  //         sx={{
  //           height: "80px",
  //           width: "350px",
  //           backgroundColor: "aqua",
  //           border: "2px solid yellow",
  //           borderRadius: 0.5,
  //           paddingTop: "3px",
  //           paddingLeft: "9px",
  //         }}
  //       >
  //         logo
  //       </Box>
  //       <Box
  //         sx={{
  //           flexGrow: 1,
  //           backgroundColor: "bisque",
  //           border: "2px solid yellow",
  //           borderRadius: 0.5,
  //           paddingTop: "3px",
  //           paddingLeft: "9px",
  //         }}
  //       >
  //         statastics
  //       </Box>
  //     </Box>

  //     <Box sx={{ display: "flex", flexGrow: 1 }}>
  //       <Box
  //         sx={{
  //           width: "350px",
  //           backgroundColor: "blueviolet",
  //           border: "2px solid yellow",
  //           borderRadius: 0.5,
  //           paddingTop: "3px",
  //           paddingLeft: "9px",
  //         }}
  //       >
  //         <Box
  //           sx={{
  //             display: "flex",
  //             alignItems: "center",
  //             padding: "10px",
  //             border: "1px solid lightgray",
  //             borderRadius: "8px",
  //             marginBottom: "10px",
  //             backgroundColor: "white",
  //             width: "300px",
  //           }}
  //         >
  //           {items.length > 0 ? (
  //             <ul>
  //               {items.map((item) => (
  //                 <li key={item.id}>
  //                   <li>
  //                     {item.id} - {item.firstName}
  //                     <li>
  //                       {item.pincode} -{" "}
  //                       {item.isIDCardCreated
  //                         ? "ID Card Created"
  //                         : "ID Card Not Created"}
  //                     </li>
  //                   </li>
  //                 </li>
  //               ))}
  //             </ul>
  //           ) : (
  //             <p>Loading data...</p>
  //           )}
  //         </Box>
  //       </Box>

  //       {/* Main Content */}
  //       <Box
  //         sx={{
  //           flexGrow: 1,
  //           backgroundColor: "lightgreen",
  //           border: "2px solid yellow",
  //           borderRadius: 0.5,
  //           paddingTop: "3px",
  //           paddingLeft: "9px",
  //         }}
  //       >
  //         Main Content
  //       </Box>
  //     </Box>
  //   </Box>
  // );

  return (
    // <Form />
    // <SignUp />
    // <LogIn />
    // <PermissionForm />
    // <RolePermissionsForm />
    // <Form />
    // <AdmissionForm />
    // <StudentForm />
    // <Swami />
    // <AddPermission />
    // <CreateUser />
    // <SuperAdminDashboard />
    // <Appp/>
    <Try />
  );
}

export default App;
