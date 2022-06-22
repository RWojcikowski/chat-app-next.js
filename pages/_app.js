import Login from "../components/Login"
import { ChakraProvider } from "@chakra-ui/react"


function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return(
  <ChakraProvider>
    <Login />
</ChakraProvider>
  )
}

export default MyApp
