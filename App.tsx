import * as React from "react"
import {
  ChakraProvider,

  extendTheme,
} from "@chakra-ui/react"
import Home from "./Pages/home"

const theme = extendTheme(  { components: { Button: { baseStyle: { _hover: { border: 'none' } } } } })
export const App = () => (
  <ChakraProvider theme={theme}>
<Home/>
  </ChakraProvider>
)
