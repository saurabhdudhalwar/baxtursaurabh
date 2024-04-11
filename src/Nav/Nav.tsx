import React from "react";
import { Box, Grid, Text } from "@mantine/core";
import "./nav.css";

const Nav = () => {
  return (
    <Box className="header-container">
      <Text size="xl" className="app-name">
        <span className="ba-tur">ba</span>
        <span className="capital-x">X</span>
        <span className="ba-tur">tur</span>
      </Text>
      <Grid className="hamburger-icon">
        <svg
          viewBox="0 0 24 24"
          width="40"
          height="40"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </Grid>
    </Box>
  );
};

export default Nav;
