import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

interface User {
  id: number;
  username: string;
  permissions: string[];
}

const permissionsList = ["Admin", "Accountant", "DKS", "User"];

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [updatedPermissions, setUpdatedPermissions] = useState<string[]>([]);

  useEffect(() => {
    // Fetch users from the server
    fetch("http://localhost:3300/admin/getUsers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setUpdatedPermissions(user.permissions);
  };

  const handleSave = () => {
    if (editingUser) {
      // Save the updated permissions to the server
      fetch(`http://localhost:3300/admin/updatePermissions/${editingUser.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ permissions: updatedPermissions }),
      }).then(() => {
        setUsers((prev) =>
          prev.map((user) =>
            user.id === editingUser.id
              ? { ...user, permissions: updatedPermissions }
              : user
          )
        );
        setEditingUser(null);
      });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item xs={12} md={6} key={user.id}>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                p: 2,
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography variant="h6">{user.username}</Typography>
              <Typography variant="body1">
                Permissions: {user.permissions.join(", ")}
              </Typography>
              <Button
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={() => handleEdit(user)}
              >
                Edit Permissions
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      {editingUser && (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5">
            Editing Permissions for {editingUser.username}
          </Typography>
          <FormControl sx={{ mt: 2, minWidth: 200 }}>
            <InputLabel>Permissions</InputLabel>
            <Select
              multiple
              value={updatedPermissions}
              onChange={(e) =>
                setUpdatedPermissions(
                  typeof e.target.value === "string"
                    ? e.target.value.split(",")
                    : e.target.value
                )
              }
              renderValue={(selected) => selected.join(", ")}
            >
              {permissionsList.map((permission) => (
                <MenuItem key={permission} value={permission}>
                  {permission}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AdminDashboard;
