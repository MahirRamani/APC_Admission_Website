import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";

const DeletePermission: React.FC = () => {
  const [selectedPermission, setSelectedPermission] = useState<string>("");
  const [permissions, setPermissions] = useState<string[]>([]);

  // Fetch existing permissions from the database
  useEffect(() => {
    fetch("http://localhost:3300/admin/getPermissions")
      .then((response) => response.json())
      .then(setPermissions);
  }, []);

  // Function to delete the selected permission
  const handleDeletePermission = () => {
    if (selectedPermission !== "") {
      fetch("http://localhost:3300/admin/deletePermission", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ permission: selectedPermission }),
      }).then(() => {
        // Fetch updated permissions list after deletion
        fetch("http://localhost:3300/admin/getPermissions")
          .then((response) => response.json())
          .then(setPermissions);

        setSelectedPermission(""); // Clear the selected permission
      });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "500px",
        margin: "auto",
        p: 3,
        mt: 5,
        backgroundColor: "#E0FFFF",
        border: "2px solid aqua",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Delete Permission
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Select Permission</InputLabel>
            <Select
              value={selectedPermission}
              onChange={(e) => setSelectedPermission(e.target.value as string)}
            >
              {permissions.map((permission) => (
                <MenuItem key={permission} value={permission}>
                  {permission}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleDeletePermission}
            disabled={!selectedPermission} // Disable if no permission is selected
          >
            Delete Permission
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DeletePermission;
