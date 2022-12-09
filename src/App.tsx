import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import './App.css'
import Router from "./components/routes/router";
import Nav from "./components/navBar";
import Main from "./components/Main";
export const App = () => (
 
 
<ChakraProvider theme={theme}>
<Nav/>

{/* <Router/> */}
<Main></Main>
</ChakraProvider>







)
