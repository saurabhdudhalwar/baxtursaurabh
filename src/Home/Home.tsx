import React from "react";
import Nav from "../Nav/Nav";
import { Grid } from "@mantine/core";
import Content from "../Content/Content";

const Home = () => {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
        <Nav />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
        <Content />
      </Grid.Col>
    </Grid>
  );
};

export default Home;
