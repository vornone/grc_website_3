
'use client';
import React from "react";
import { useGetUsersQuery } from "@/state/api";
import { List } from "@mantine/core";
const page = () => {
  const {data:users, isLoading, isError}=useGetUsersQuery();
  return (
    <List>
      {users?.map((user) => (
        <List.Item key={user.user_id}>{user.username}</List.Item>
      ))}
    </List>
  );
};

export default page;
