import Head from "next/head";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";

export default function Login() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

 
  return (
    <Box  bgGradient="linear(to-r, #360F37, #0F2D33)" >
      <Head>
        <title>Login</title>
      </Head>
      <Center
      h="100vh">
        <Stack
        align="center"
        bgColor="#403D3D"
        p={20}
        rounded="3xl"
        spacing={3}
        boxShadow="dark-lg"
        >
          <Box
           bgColor="#805ad5"
            w="fit-content"
            p={5}
            rounded="2xl"
            boxShadow="dark-lg"
          >
            <ChatIcon w="100px" h="100px" color="#fff" />
          </Box>
          <Text fontSize="25px" color="grey">
            Next Chat App
          </Text>
          <Button onClick={()=> signInWithGoogle("",{prompt:"select_account"}) } boxShadow="md" colorScheme="purple"> Zaloguj przez Google</Button>
        </Stack>

      </Center>
    </Box>
  );
}
