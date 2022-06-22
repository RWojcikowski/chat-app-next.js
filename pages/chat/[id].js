import {Avatar, Button,  Flex,  FormControl,  Heading,  Input,  Text,} from "@chakra-ui/react";
import Head from "next/head";
import Sidebar from "../../components/Sidebar";

const TopBar = () => {
  return (
    <Flex
      p={5}
      align="center"
      _hover={{ bg: "#4a4948", cursor: "pointed" }}
      bg="#403D3D"
      h="80px"
      w="100%"
    >
      <Avatar src="" marginEnd={4} />
      <Heading size="lg" color="white">
        {" "}
        nazwa@email.com
      </Heading>
    </Flex>
  );
};
const Bottombar = () => {
  return (
    <FormControl p={5}>
      <Input color="white" placeholder="Napisz cos!" />
      <Button type="submit" hidden autoComplete="off">
        Wyślij
      </Button>
    </FormControl>
  );
};
export default function Chat() {
  return (

    <Flex h="100vh" bg="#403D3D">
      <Head>
       <title>Chat App</title>
       </Head> 
      <Sidebar />
      <Flex flex={1} direction="column">
        <TopBar />

        <Flex
          flex={1}
          direction="column"
          pt={4}
          mx={5}
          overflowX="none"
          sx={{ scrollbarWidth: "none" }}
        >
          <Flex
            bg="#805ad5"
            color="#FFF"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={2}
            m={1}
          >
            <Text> to jest jakas wiadomość</Text>
          </Flex>
          <Flex
            bg="#805ad5"
            color="#FFF"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={2}
            m={1}
          >
            <Text> wiadomość</Text>
          </Flex>
          <Flex
            bg="#B52828"
            color="#FFF"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={2}
            m={1}
            alignSelf="flex-end"
          >
            <Text> to jest jakas wiadomość</Text>
          </Flex>
          <Flex
            bg="#805ad5"
            color="#FFF"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={2}
            m={1}
          >
            <Text> to jest jakas wiadomość</Text>
          </Flex>
          <Flex
            bg="#805ad5"
            color="#FFF"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={2}
            m={1}
          >
            <Text> wiadomość</Text>
          </Flex>
          <Flex
            bg="#B52828"
            color="#FFF"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={2}
            m={1}
            alignSelf="flex-end"
          >
            <Text> to jest jakas wiadomość</Text>
          </Flex>
          <Flex
            bg="#805ad5"
            color="#FFF"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={2}
            m={1}
          >
            <Text> to jest jakas wiadomość</Text>
          </Flex>
          <Flex
            bg="#805ad5"
            color="#FFF"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={2}
            m={1}
          >
            <Text> wiadomość</Text>
          </Flex>
          <Flex
            bg="#B52828"
            color="#FFF"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={2}
            m={1}
            alignSelf="flex-end"
          >
            <Text> to jest jakas wiadomość</Text>
          </Flex>
          <Flex
            bg="#805ad5"
            color="#FFF"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={2}
            m={1}
          >
            <Text> to jest jakas wiadomość</Text>
          </Flex>
          <Flex
            bg="#805ad5"
            color="#FFF"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={2}
            m={1}
          >
            <Text> wiadomość</Text>
          </Flex>
          <Flex
            bg="#B52828"
            color="#FFF"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={2}
            m={1}
            alignSelf="flex-end"
          >
            <Text> to jest jakas wiadomość</Text>
          </Flex>
          <Flex
            bg="#805ad5"
            color="#FFF"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={2}
            m={1}
          ></Flex>
        </Flex>

        <Bottombar />
      </Flex>
    </Flex>
  );
}
