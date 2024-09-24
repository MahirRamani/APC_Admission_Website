// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Typography,
//   TextField,
//   Grid,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import axios from "axios";

// type permission = { id: number, name: string }
// const AddPermission: React.FC = () => {
//   const [permissionName, setPermissionName] = useState("");
//   const [permissions, setPermissions] = useState<string[]>([]);

//   // Fetch existing permissions from the database
//   useEffect(() => {
//     fetch("http://localhost:3300/admin/user/getPermissions")
//       .then((response) => response.json())
//       .then((data) => {
//         const permissionNames = data.map((permission: permission) => permission.name); // Extract names
//         setPermissions(permissionNames);
//       });
//   }, []);

//   // Function to handle adding a new permission
//   const handleAddPermission = () => {
//     if (permissionName.trim() !== "") {
//       axios.post("http://localhost:3300/admin/user/addPermissions", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ permission: permissionName }),
//       }).then(() => {
//         // Fetch updated permissions list
//         fetch("http://localhost:3300/admin/user/getPermissions")
//           .then((response) => response.json())
//           .then((data) => {
//             const permissionNames = data.map((permission: permission) => permission.name); // Extract names
//             setPermissions(permissionNames);
//           });

//         setPermissionName(""); // Clear input field after submission
//       });
//     }
//   };

//   // Function to delete a permission from the table
//   const handleDeletePermission = (permission: string) => {
//     fetch("http://localhost:3300/admin/user/deletePermission", {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ permission }),
//     }).then(() => {
//       // Fetch updated permissions list after deletion
//       fetch("http://localhost:3300/admin/user/getPermissions")
//         .then((response) => response.json())
//         .then((data) => {
//           const permissionNames = data.map((permission: permission) => permission.name); // Extract names
//           setPermissions(permissionNames);
//         });
//     });
//   };

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: "500px",
//         margin: "auto",
//         p: 3,
//         mt: 5,
//         backgroundColor: "#E0FFFF",
//         border: "2px solid aqua",
//         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
//         Add New Permission
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Permission Name"
//             variant="outlined"
//             value={permissionName}
//             onChange={(e) => setPermissionName(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             onClick={handleAddPermission}
//           >
//             Add Permission
//           </Button>
//         </Grid>
//       </Grid>

//       <Typography variant="h6" sx={{ mt: 5 }}>
//         Existing Permissions:
//       </Typography>
//       <List>
//         {permissions.map((permission) => (
//           <ListItem key={permission}>
//             <ListItemText primary={permission} />
//             <ListItemSecondaryAction>
//               <IconButton
//                 edge="end"
//                 aria-label="delete"
//                 onClick={() => handleDeletePermission(permission)}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             </ListItemSecondaryAction>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default AddPermission;

// ============
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Typography,
//   TextField,
//   Grid,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";

// type Permission = { id: number; name: string };

// const AddPermission: React.FC = () => {
//   const [permissionName, setPermissionName] = useState("");
//   const [permissions, setPermissions] = useState<string[]>([]);

//   // Fetch existing permissions from the database
//   const fetchPermissions = async () => {
//     try {
//       const response = await fetch("http://localhost:3300/admin/user/getPermissions");
//       const data = await response.json();
//       const permissionNames = data.map((permission: Permission) => permission.name);
//       setPermissions(permissionNames);
//     } catch (error) {
//       console.error("Error fetching permissions:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPermissions();
//   }, []);

//   // Function to handle adding a new permission
//   const handleAddPermission = async () => {
//     if (permissionName.trim() !== "") {
//       try {
//         const response = await fetch("http://localhost:3300/admin/user/addPermissions", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ name: permissionName }),
//         });

//         if (response.ok) {
//           console.log("Permission added successfully");
//           fetchPermissions(); // Refresh the permissions list after adding
//           setPermissionName(""); // Clear the input field after successful submission
//         } else {
//           console.error("Failed to add permission");
//         }
//       } catch (error) {
//         console.error("Error adding permission:", error);
//       }
//     }
//   };

//   // Function to delete a permission from the table (if needed later)
//   const handleDeletePermission = async (permission: string) => {
//     try {
//       const response = await fetch("http://localhost:3300/admin/user/deletePermission", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ permission }),
//       });

//       if (response.ok) {
//         console.log("Permission deleted successfully");
//         fetchPermissions(); // Refresh the permissions list after deletion
//       } else {
//         console.error("Failed to delete permission");
//       }
//     } catch (error) {
//       console.error("Error deleting permission:", error);
//     }
//   };

//   return (
//     // <Box
//     //   sx={{
//     //     width: "100%",
//     //     maxWidth: "500px",
//     //     margin: "auto",
//     //     paddingTop: 4,
//     //     paddingRight: 5,
//     //     paddingLeft: 5,
//     //     marginTop: 5,
//     //     backgroundColor: "#E0FFFF",
//     //     border: "2px solid aqua",
//     //     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     //   }}
//     // >
//     //   <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
//     //     Add New Permission
//     //   </Typography>
//     //   <Grid container spacing={3}>
//     //     <Grid item xs={12}>
//     //       <TextField
//     //         fullWidth
//     //         label="Permission Name"
//     //         variant="outlined"
//     //         value={permissionName}
//     //         onChange={(e) => setPermissionName(e.target.value)}
//     //       />
//     //     </Grid>
//     //     <Grid item xs={12}>
//     //       <Button
//     //         variant="contained"
//     //         color="primary"
//     //         fullWidth
//     //         onClick={handleAddPermission}
//     //       >
//     //         Add Permission
//     //       </Button>
//     //     </Grid>
//     //   </Grid>

//     //   <Typography variant="h6" sx={{ mt: 3 }}>
//     //     Existing Permissions:
//     //   </Typography>
//     //   <List sx={{
//     //         position: "relative",
//     //         display: "flex",
//     //         flexWrap: "wrap",
//     //         maxHeight: "200px",
//     //         flexDirection: "column",
//     //         width: "100px", // Ensure the list takes up full width for two-column layout
//     //         columnCount: 2, // Split into two columns after 5 items
//     //         columnGap: "10px", // Set gap between the two columns
//     //       }}>
//     //     {permissions.map((permission) => (
//     //       <ListItem
//     //         key={permission}
//     //         sx={{
//     //           display: "inline-block",
//     //           padding: "10px 20px",
//     //           margin: "5px",
//     //           border: "2px solid #00bcd4",
//     //           borderRadius: "25px",
//     //           backgroundColor: "#E0FFFF",
//     //           color: "#333",
//     //           cursor: "default",
//     //           justifyContent: "center", // Center text horizontally
//     //           alignItems: "center", // Center text vertically
//     //           textAlign: "center",
//     //           width: "150px",
//     //         }}
//     //       >
//     //         <ListItemText primary={permission} />
//     //       </ListItem>
//     //     ))}
//     //   </List>
//     // </Box>
//     <Box
//   sx={{
//     width: "100%",
//     maxWidth: { xs: "90%", sm: "500px" }, // Adjust the max width based on screen size
//     margin: "auto",
//     padding: { xs: 2, sm: 4 }, // Responsive padding for mobile and larger screens
//     marginTop: 5,
//     backgroundColor: "#E0FFFF",
//     border: "2px solid aqua",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//   }}
// >
//   <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
//     Add New Permission
//   </Typography>
//   <Grid container spacing={3}>
//     <Grid item xs={12}>
//       <TextField
//         fullWidth
//         label="Permission Name"
//         variant="outlined"
//         value={permissionName}
//         onChange={(e) => setPermissionName(e.target.value)}
//       />
//     </Grid>
//     <Grid item xs={12}>
//       <Button
//         variant="contained"
//         color="primary"
//         fullWidth
//         onClick={handleAddPermission}
//       >
//         Add Permission
//       </Button>
//     </Grid>
//   </Grid>

//   <Typography variant="h6" sx={{ mt: 3 }}>
//     Existing Permissions:
//   </Typography>
  
//   <List
//     sx={{
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: { xs: "center", sm: "space-between" }, // Center on mobile, space evenly on larger screens
//       gap: "10px", // Gap between each permission button
//       maxWidth: "100%",
//     }}
//   >
//     {permissions.map((permission) => (
//       <ListItem
//         key={permission}
//         sx={{
//           padding: "10px 20px",
//           margin: "5px",
//           border: "2px solid #00bcd4",
//           borderRadius: "25px",
//           backgroundColor: "#E0FFFF",
//           color: "#333",
//           cursor: "default",
//           justifyContent: "center",
//           textAlign: "center",
//           width: { xs: "100%", sm: "48%", md: "30%" }, // Full width on mobile, half on small screens, and third on larger screens
//           boxSizing: "border-box",
//         }}
//       >
//         <ListItemText primary={permission} />
//       </ListItem>
//     ))}
//   </List>
// </Box>


//   );
// };

// export default AddPermission;


// {{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}
import React, { useState, useEffect } from "react"; 
import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  List,
  ListItem,
  ListItemText,
  FormHelperText,
} from "@mui/material";

type Permission = { id: number; name: string };

const AddPermission: React.FC = () => {
  const [permissionName, setPermissionName] = useState("");
  const [permissions, setPermissions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>(""); // Error state

  const fetchPermissions = async () => {
    try {
      const response = await fetch("http://localhost:3300/admin/user/getPermissions");
      const data = await response.json();
      const permissionNames = data.map((permission: Permission) => permission.name);
      setPermissions(permissionNames);
    } catch (error) {
      console.error("Error fetching permissions:", error);
    }
  };

  useEffect(() => {
    fetchPermissions();
  }, []);

  const handleAddPermission = async () => {
    if (permissionName.trim() === "") {
      setError("Please enter the permission."); // Set error message
      return; // Prevent submission
    }

    setError(""); // Clear error if input is valid
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3300/admin/user/addPermissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: permissionName }),
      });

      if (response.ok) {
        console.log("Permission added successfully");
        fetchPermissions(); // Refresh the permissions list after adding
        setPermissionName(""); // Clear the input field after successful submission
      } else {
        console.error("Failed to add permission");
      }
    } catch (error) {
      console.error("Error adding permission:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "90%", sm: "500px" },
        margin: "auto",
        padding: { xs: 2, sm: 4 },
        marginTop: 5,
        backgroundColor: "#E0FFFF",
        border: "2px solid aqua",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Add New Permission
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Permission Name"
            variant="outlined"
            value={permissionName}
            onChange={(e) => setPermissionName(e.target.value)}
            disabled={loading}
            error={!!error} // Set error state
          />
          {error && <FormHelperText error>{error}</FormHelperText>} {/* Display error message */}
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddPermission}
            disabled={loading} // Disable button while loading
          >
            {loading ? "Adding..." : "Add Permission"}
          </Button>
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ mt: 3 }}>
        Existing Permissions:
      </Typography>
      
      <List
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "space-between" },
          gap: "10px",
          maxWidth: "100%",
        }}
      >
        {permissions.map((permission) => (
          <ListItem
            key={permission}
            sx={{
              padding: "10px 20px",
              margin: "5px",
              border: "2px solid #00bcd4",
              borderRadius: "25px",
              backgroundColor: "#E0FFFF",
              color: "#333",
              cursor: "default",
              justifyContent: "center",
              textAlign: "center",
              width: { xs: "100%", sm: "48%", md: "30%" },
              boxSizing: "border-box",
            }}
          >
            <ListItemText primary={permission} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AddPermission;
