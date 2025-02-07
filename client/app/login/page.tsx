"use client";


import React from "react";
import { Box, Button, Card, Center, Checkbox, Flex, Input, InputWrapper, Stack, Text, TextInput, Title } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import { LuUserRound } from "react-icons/lu";
import { LuLockKeyhole, LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from "react";

function login() {
  const isMobile = useMediaQuery('(max-width: 600px)')?? false;
  const label = (label:String, icon:React.ReactNode)=>{
    return (<>{icon} {label}</>)
  }
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleLogin = () => {
    window.location.href = '/auth/login';
  }
  return (
  <Center w={'100dvw'} h={'100dvh'} >
      <Card w={isMobile ? '80%' : '30%'} h={isMobile ? '55%':'60%'} radius='lg' p={'xl'}>
        <Stack  w={'100%'} h={'100%'}   justify="space-between">
        <Stack align="left" gap={0} >
          <Title >
            Welcome Back
          </Title>
          <Text size="sm" c="gray.6">
            Enter your credentials
          </Text>
        </Stack>
        <Stack>
          <TextInput label={label('Username or Email', <LuUserRound />)} placeholder="Enter your username or email"/>
          <TextInput label={label('Password', <LuLockKeyhole />)} type={showPassword ? 'text' : 'password'} rightSection={showPassword ? <LuEye onClick={handleShowPassword} /> : <LuEyeOff onClick={handleShowPassword} />} placeholder="Enter your password"/>
          <Flex w={'100%'} justify={'space-between'}>
            <Checkbox label="Remember me" color="teal" variant="outline"/>
            <Text size="sm" c="gray.6" >
            <a href={'/register'}>Forget password?</a> </Text>
        </Flex>
        </Stack>
        <Button variant="filled" color={'teal.8'} onClick={handleLogin}>Sign In</Button>
        <Text ta={'center'} size="sm">
          Dont have an account? <a href="/auth/login">Register</a>
        </Text>
        </Stack>
      </Card>
  </Center>);
}
export default login;
