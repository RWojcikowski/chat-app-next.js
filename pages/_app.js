import { Center, ChakraProvider, Spinner } from "@chakra-ui/react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebaseconfig";
import Login from "../components/Login"
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  if (loading){
    return(
    <ChakraProvider>
     
      <Center h="100vh" bg="#403D3D"> 
        <Spinner color="purple" thickness="5px" size="xl"/>
      </Center>
     
    </ChakraProvider>
    )
  }
if (!user) {
  return(
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  )
}

 return(
  <ChakraProvider>
    <Component {...pageProps}/>
  </ChakraProvider>
  )
}

export default MyApp
