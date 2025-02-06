
'use client';
import React from "react";
import { useGetUsersQuery, useAddUserMutation } from "@/state/api";
import { Button, Input, List } from "@mantine/core";
const page = () => {
  const {data:users, isLoading, isError}=useGetUsersQuery();
  const [addUser, { isLoading:addUserLoading, isError:addUserError, isSuccess }] = useAddUserMutation();
  const [username, setUsername] = React.useState("");
  return (
    <>
    <Input
      type="text"
      placeholder="username"
      onChange={(e) => setUsername(e.target.value)}></Input>
    <Button
      onClick={() => {
        addUser({ username });
    }}/>
    <List>
      {users?.map((user) => (
        <List.Item key={user.user_id}>{user.username}</List.Item>
      ))}
    </List>
    </>
  );
};

export default page;
