import { Avatar, Flex, IconButton, } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { signOut} from "firebase/auth"
import { auth } from "../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import {useCollection} from "react-firebase-hooks/firestore";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseconfig";
import getOtherEmail from "../utils/getOtherEmail";
import { useRouter } from "next/router";
import { async } from "@firebase/util";




export default function Sidebar() {
const [user] = useAuthState(auth);
const [snapshot, loading, error]= useCollection(collection(db,"chats"));
const chats = snapshot?.docs.map(doc =>({id: doc.id, ...doc.data() }));
const router = useRouter();

const redirect = (id) =>{
router.push(`/chat/$(id)`);
}

const chatExists = email => chats?.find(chat => (chat.users.includes(user.email) && chat.users.includes(email)))

const newChat = async () => {
  const input = prompt("Enter email of chat recipient");
  if (!chatExists(input) && (input != user.email)) {
    await addDoc(collection(db, "chats"), { users: [user.email, input] })
  }
}

const chatlist =( )=>{
    return (
        chats?.filter(chat => chat.users.includes(user.email))
        .map(
          chat => 
		<Flex key={Math.random()} p={3} align="center"
    	_hover={{bg:"#4a4948", cursor:"pointed"}} onClick={() => redirect(chat.id)}>
      		<Avatar src="" marginEnd={4}/>
      		
            <Text color="white" >{getOtherEmail(chat.users, user)}</Text>
        </Flex>
        )
    )
}

// console.log(snapshot);
  return (
    <Flex
      bg="#403D3D"
      w="300px"
      h="100%"
      borderEnd="1px solid"
      borderColor="gray.200"
      direction="column"
    >
      <Flex 
      bg="#403D3D" 
      w="100%" h="85px" 
      align="center"
      justifyContent="space-between"
      borderBottom="1px solid" borderColor="gray.200"
      p={3}
      > 
     <Flex>   
       
        <Avatar src={user.photoURL} marginEnd={4}/>
        <Text color="white">{user.displayName}</Text>
        
        </Flex>


        <IconButton onClick={()=>signOut(auth)} size="sm" isRound icon={<ArrowLeftIcon/>} />
      </Flex>

      <Button 
      boxShadow="md" 
      colorScheme="purple" 
      m={5} p={4} 
        onClick= {()=> newChat()}
      >
        Nowy Chat
    </Button>

    <Flex overflowX="none" direction="column" sx={{scrollbarWidth: "none"}} flex={1} >
      {chatlist()}
    </Flex>



    </Flex>
  );
}
