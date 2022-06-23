import {Avatar, Button,  Flex,  FormControl,  Heading,  Input,  Text,} from "@chakra-ui/react";
import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";
import { useCollectionData, useDocumentData } from "react-firebase-hooks/firestore";
import { collection, query, orderBy} from "firebase/firestore";
import { db, auth } from "../../firebaseconfig";
import { useAuthState } from 'react-firebase-hooks/auth';
import getOtherEmail from "../../utils/getOtherEmail";
import { doc } from "firebase/firestore";

const TopBar = ({email}) => {
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
        {email}
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
  
  const router = useRouter();
  const {id} = router.query;
  const [user] = useAuthState(auth);

  const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"));
  const[messages] = useCollectionData(q);

const[chat] = useDocumentData(doc(db, "chats", id));



  const getMessages = () =>{
    messages?.map(msg =>{
  const sender = msg.sender === user.email

      return(
      <Flex key={Math.random()} alignSelf={sender ? "flex-start": "flex-end"} bg= {sender ? "#805ad5" : "#C00A0A"  } color="#FFF" w="fit-content" minWidth="100px" borderRadius="lg" p={2} m={1}>
        <Text>{msg.text}</Text>
        </Flex>

      )
    })
    }

  return (

    <Flex h="100vh" bg="#403D3D">
      <Head>
       <title>Chat App</title>
       </Head> 
      <Sidebar />
      <Flex flex={1} direction="column">
        <TopBar email={getOtherEmail(chat?.users, user)}/>

        <Flex flex={1} direction="column" pt={4} mx={5} overflowX="none" sx={{ scrollbarWidth: "none" }}
        >
        {getMessages}
        </Flex>

        <Bottombar />
      </Flex>
    </Flex>
  );
}


{/* <Flex
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
</Flex> */}