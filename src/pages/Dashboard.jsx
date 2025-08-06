import React from "react";
import { Container, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import analyticsImage from "../assets/analytics.jpg";

const Dashboard = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ERP Dashboard - K L University
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <PeopleIcon color="primary" fontSize="large" />
              <Typography variant="h6">Employees</Typography>
              <Typography variant="body2">Manage employee records</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <BusinessIcon color="secondary" fontSize="large" />
              <Typography variant="h6">Departments</Typography>
              <Typography variant="body2">View and manage departments</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              component="img"
              height="180"
              image={analyticsImage}
              alt="ERP Analytics"
            />
            <CardContent>
              <Typography variant="h6">ERP Analytics</Typography>
              <Typography variant="body2">Visualize Performance metrics</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;