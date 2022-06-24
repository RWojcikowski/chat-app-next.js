import { Flex, Heading, Avatar } from "@chakra-ui/react"

export default function Topbar({email}) {
  return (
      <Flex
        p={5}
        align="center"
        _hover={{ bg: "#4a4948", cursor: "pointed" }}
        bg="#403D3D"
        h="80px"
        w="100%"
      >
        <Avatar src="" marginEnd={5} />
        <Heading size="lg" color="white">
          {email}
        </Heading>
      </Flex>
    );
  };