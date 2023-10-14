import React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../global/Footer';

const Dashboard = () => {
  return (
    <div className="main-banner">
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="Your dashboard" />
        </Box>
      </Box>
      
    </div>
  );
};

export default Dashboard;
