import React from 'react'
import { useEffect, useState } from "react";
import { Box, Typography, AppBar, Tabs, Tab, Divider, Button, TextField, Grid } from "@mui/material";

function UserHeader() {
  return (
    <Box sx={{ display: "flex" }}>
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
            justifyContent: "space-between"
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
              fontWeight: "bold"
            }}
          >
            Welcome
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "bisque",
            border: "2px solid yellow",
            borderRadius: 0.5,
            p: "3px 5px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          statistics
          <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: '12px', px: 4, py: 1 }}
            >
              Forms
              <Typography sx={{ pb: .5 }}>
                ()
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: '12px', px: 4, py: 1 }}
            >
              DKS
              <Typography sx={{ pb: .5 }}>
                ()
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: '12px', px: 4, py: 1 }}
            >
              Acc
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: '12px', px: 4, py: 1 }}
            >
              Button
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: '12px', px: 4, py: 1 }}
            >
              Button 5
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: '12px', px: 4, py: 1 }}
            >
              Button 6
            </Button>
            {/* <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: '12px', px: 4, py: 1 }}
            >
              Button 7
            </Button> */}
          </Box>
        </Box>
      </Box>
  )
}

export default UserHeader