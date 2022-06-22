import { Avatar, Flex, IconButton, } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";


const Chat =( )=>{
    return(
    <Flex p={3} align="center"
    _hover={{bg:"#4a4948", cursor:"pointed"}} >
      <Avatar src="" marginEnd={4}/>
      <Text color="white">nazwa@email.com</Text>
    </Flex>
    )
}

export default function Sidebar() {
  return (
    <Flex
      bg="#403D3D"
      w="300px"
      h="100vh"
      borderEnd="1px solid"
      borderColor="gray.200"
      direction="column"
    >
      <Flex 
      bg="#4a4948" 
      w="100%" h="85px" 
      align="center"
      justifyContent="space-between"
      borderBottom="1px solid" borderColor="gray.200"
      p={3}
      > 
     <Flex>   
       
        <Avatar src="" marginEnd={4}/>
        <Text color="white">Twoja nazwa</Text>
        
        </Flex>


        <IconButton size="sm" isRound icon={<ArrowLeftIcon/>} />
      </Flex>

      <Button 
      boxShadow="md" 
      colorScheme="purple" 
      m={5} p={4} 
      >
        Nowy Chat
    </Button>

    <Flex overflowY="scroll" direction="column" sx={{scrollbarWidth:"none"}} >
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
    </Flex>



    </Flex>
  );
}