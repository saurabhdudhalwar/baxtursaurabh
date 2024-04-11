import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Grid } from "@mantine/core";
import "./card.css";

const Content = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = (userId: any) => {
    setUsers(users.filter((user: any) => user?.id !== userId));
  };

  return (
    <Grid className="content" gutter={{ base: 30 }}>
      {users?.map((user: any) => {
        return (
          <Grid.Col
            span={{ base: 12, xs: 6, sm: 4, md: 4, lg: 3 }}
            key={user?.username}
          >
            <Card user={user} onDelete={deleteUser}/>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export default Content;
