import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  FormHelperText,
} from "@mui/material";

interface Permission {
  id: number;
  name: string;
}

const SignUp: React.FC = () => {
  const [name, setName] = useState(""); // For user's name
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [selectedPermissions, setSelectedPermissions] = useState<number[]>([]);

  const [nameError, setNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [permissionsError, setPermissionsError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState("");

  // Fetch permissions list from the backend
  useEffect(() => {
    fetch("http://localhost:3300/admin/user/getPermissions")
      .then((response) => response.json())
      .then((data) => setPermissions(data));
  }, []);

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === "") {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }

    if (username.trim() === "") {
      setUsernameError(true);
      isValid = false;
    } else {
      setUsernameError(false);
    }

    if (password.trim() === "") {
      setPasswordError(true);
      setPasswordHelperText("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError(true);
      setPasswordHelperText("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordHelperText("");
    }

    if (selectedPermissions.length === 0) {
      setPermissionsError(true);
      isValid = false;
    } else {
      setPermissionsError(false);
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const newUser = {
        "name":name,        // Add name field to the submission
        "username":username,
        "password":password,
        "permissions": selectedPermissions, // Send the selected permission IDs to backend
      };

      // Send the new user data to the server
      fetch("http://localhost:3300/admin/createUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      }).then(() => {
        // Clear the form after submission
        setName("");
        setUsername("");
        setPassword("");
        setSelectedPermissions([]);
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
        Create New User
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
            helperText={nameError ? "Name is required" : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={usernameError}
            helperText={usernameError ? "Username is required" : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            helperText={passwordError ? passwordHelperText : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth error={permissionsError}>
            <InputLabel>Permissions</InputLabel>
            <Select
              label="Permissions"
              multiple
              value={selectedPermissions}
              onChange={(e) => {
                const value = e.target.value;  // This is now inferred as string | string[]

                // Ensure value is treated as string[]
                const selectedValues = Array.isArray(value) ? value : [value];
                setSelectedPermissions(selectedValues.map(Number)); // Convert string[] to number[]
              }}
              renderValue={(selected) =>
                selected
                  .map((id) => permissions.find((p) => p.id === id)?.name)
                  .join(", ")
              }
            >
              {permissions.map((permission) => (
                <MenuItem key={permission.id} value={permission.id}>
                  {permission.name}
                </MenuItem>
              ))}
            </Select>

            {permissionsError && (
              <FormHelperText>
                At least one permission must be selected
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Create User
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
