import React, { useEffect, useState } from "react";
import { Box, Typography, AppBar, Tabs, Tab, Divider, Button, TextField, Grid } from "@mui/material";
import ProfileTile from './ProfileTile';
import SwipeableViews from 'react-swipeable-views';

import { useTheme } from '@mui/material/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </Typography>
  );
}


function a11yProps(index: number) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

function UserSidebar() {
  const theme = useTheme(); // @Extra
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  interface StdData {
    id: number
    firstName: string;
    middleName: string;
    lastName: string;
    admissionBranch: string,
    admissionSchoolOrCollege: string,
    isAdminPermitted: boolean,
    isDKSPermitted: boolean,
    isAccountantPermitted: boolean,
    isIDCardCreated: boolean
  }
  const [std, setStd] = useState<StdData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/getStudentProfiles")
      .then((response) => response.json())
      .then((json) => setStd(json));
    console.log(setStd);
  }, []);

  {/* <----- Filters -----> */ }
  const DKSPermittedStudents = std.filter(student => student.isAdminPermitted == true);
  return (
    <Box
      sx={{
        width: "380px",
        backgroundColor: "white",
        border: "2px solid yellow",
        borderRadius: 0.5,
        p: 0,// @ProfileTile Section
        position: "relative",
        overflowY: "auto",
        boxShadow: "none",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      className="no-scrollbar"
    >
      {/* @Filters */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'space-around',
          boxShadow: "none",
          mb: 1
        }}
      >
        <AppBar position="relative" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="standard"
            aria-label="action tabs example"
            sx={{
              color: "#00e5ff", '& .MuiTab-root': {
                color: 'primary.main',
                boxShadow: 'none',
                padding: '0px 3px',
              }
            }}
          >
            <Tab label="All" {...a11yProps(0)} sx={{ color: 'primary.main', boxShadow: 'none', padding: 0 }} />
            <Tab label="DKS" {...a11yProps(1)} />
            <Tab label="SMS" {...a11yProps(2)} sx={{ color: 'primary.main', boxShadow: 'none' }} />
            <Tab label="RJK" {...a11yProps(3)} sx={{ color: 'primary.main', boxShadow: 'none' }} />
            <Tab label="Sukha" {...a11yProps(3)} sx={{ color: 'primary.main', boxShadow: 'none' }} />
          </Tabs>
        </AppBar>
      </Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* @ProfileTileList */}
          {std.map((student) => (
            <Grid item xs={12} sm={6} md={4} key={student.id}>
              <ProfileTile
                imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
                name={student.firstName}
                year={0}
                degree='B.Tech'
                branch={student.admissionBranch}
                villege_city={student.admissionSchoolOrCollege}
              />
            </Grid>))
          }

          {/* Add more ProfileTile components as needed */}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* DKS */}
          {std.map((student) => (
            <Grid item xs={12} sm={6} md={4} key={student.id}>
              <ProfileTile
                imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
                name={student.firstName}
                year={0}
                degree='B.Tech'
                branch={student.admissionBranch}
                villege_city={student.admissionSchoolOrCollege}
              />
            </Grid>
          ))}

        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {/* SMS */}
          {std
            .filter((student) => student.isDKSPermitted) // Filter students with adminPermitted true
            .map((student) => ((
              <Grid item xs={12} sm={6} md={4} key={student.id}>
                <ProfileTile
                  imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
                  name={student.firstName}
                  year={0}
                  degree='B.Tech'
                  branch={student.admissionBranch}
                  villege_city={student.admissionSchoolOrCollege}
                />
              </Grid>
            )
            ))}
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          {/* RJK */}
          {std
            .filter((student) => student.isAdminPermitted) // Filter students with adminPermitted true
            .map((student) => ((
              <Grid item xs={12} sm={6} md={4} key={student.id}>
                <ProfileTile
                  imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
                  name={student.firstName}
                  year={0}
                  degree='B.Tech'
                  branch={student.admissionBranch}
                  villege_city={student.admissionSchoolOrCollege}
                />
              </Grid>
            )
            ))}

        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          {/* Sukhadiyo */}
          {std
            .filter((student) => student.isAccountantPermitted) // Filter students with adminPermitted true
            .map((student) => ((
              <Grid item xs={12} sm={6} md={4} key={student.id}>
                <ProfileTile
                  imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
                  name={student.firstName}
                  year={0}
                  degree='B.Tech'
                  branch={student.admissionBranch}
                  villege_city={student.admissionSchoolOrCollege}
                />
              </Grid>
            )
            ))}
          <ProfileTile
            imageUrl="https://hostel-management-backend-r93w.onrender.com/uploads/1717407818439.png"
            name="Dhaval Sureshbhai Dudheliya"
            year={1}
            degree="B.Tech"
            branch="IT"
            villege_city="Your City/Village Name"

          />
        </TabPanel>
      </SwipeableViews>
      <Divider sx={{ my: 1, borderColor: '#00e676', borderWidth: 1 }} />
    </Box>


  )
}

export default UserSidebar