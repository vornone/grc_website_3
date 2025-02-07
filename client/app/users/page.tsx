
'use client';
import React, { useEffect } from "react";
import { useGetUsersQuery, useAddUserMutation } from "@/state/api";
import { Button, Center, Input, List, Table, Stack, Flex} from "@mantine/core";
const page = () => {
  const {data:users, isLoading, isError}=useGetUsersQuery();
  const [addUser, { data: addUserData, isLoading:addUserLoading, isError:addUserError, isSuccess }] = useAddUserMutation();
  const [username, setUsername] = React.useState("");
  const rows = users?.map((user) => (
     <Table.Tr key={user.user_id}>
      <Table.Td>{user.user_id}</Table.Td>
      <Table.Td>{user.username}</Table.Td>
      </Table.Tr>
  ))

  const handleOnClick = async () => {
    try {
      await addUser({ username });

    } catch (error) {
      console.error("Error adding user:", error);
    }
  }
  useEffect(() => {
    isSuccess && setUsername('')
  }, [isSuccess])
  return (
    <>
    <Center  m={"auto"} h={"100dvh"}>
      <Stack  w={"50%"}>
        <Flex gap={"md"} >
    <Input
    error={username === "" || addUserError && "Username is required"}
      value={username}
      type="text"
      placeholder="username"
      onChange={(e) => setUsername(e.target.value)}></Input>
    <Button
      disabled={username === ""}
      onClick={() => {
        handleOnClick()}
    }>Add User</Button>
    </Flex>
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>ID</Table.Th>
          <Table.Th>Username</Table.Th>

        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
    </Stack>
    </Center>
    </>
  );
};

export default page;
