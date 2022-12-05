import React from 'react'
import Link from 'next/link'
import {Box,Text,Image,Input, Button} from "@chakra-ui/react";

const experience = () => {
  return (
    <div>
         <Box display={"flex"} style={{width:"100%",justifyContent:"space-between"}}>
        <Link href='/'><Text>Anurag  Gupta</Text></Link>
           <Link href='/project'>
           <Button>Projects</Button>
           </Link>
           <Link href='/experience'>
           <Button>Experience</Button>
           </Link>
            <Image src="https://avatars.githubusercontent.com/u/101393446?v=4" alt="name" style={{height:"40px",width:"40px",borderRadius:"50%"}} />
        </Box>
       


    <Box className="right_side" width={"100%"}>
       <Box>
       <Box display="flex">
            <Button height="40px" width={"40px"} borderRadius="50%" border="1px solid black">1</Button>
            <Text>Jr. Engineer at JSPL,Raigarh(C.G.) </Text>
        </Box>
        <Text marginLeft={"40px"}marginTop="-14px">July 2017- Aug 2018</Text>
       </Box>

       <Box>
       <Box display="flex" marginTop={'20px'}>
            <Button height="40px" width={"40px"} borderRadius="50%" border="1px solid black">2</Button>
            <Text>Maintenance Engineer at MSSL,Raigarh(C.G.) </Text>
        </Box>
        <Text marginLeft={"40px"}marginTop="-14px">Aug 2018- Feb 2022</Text>
       </Box>
    </Box>
    </div>
  )
}

export default experience