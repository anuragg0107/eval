import React from 'react'
import {AiOutlineStar} from "react-icons/ai"
import {AiOutlineFork} from "react-icons/ai";
import Link from 'next/link'
import {Box,Text,Image,Input, Button} from "@chakra-ui/react";
const project = ({user}) => {
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
        <Text textAlign={"center"} fontSize="25px" paddingTop="20px">Projects</Text>
        <Box className="right_side_container">
              <Box className='container'>
                {user.items.map((el) => {
                  return(
                 <Box key={el.id}>
                 <a href="https://github.com/anuragg0107/anuragg0107.github.io">
                    <Button outline={"none"} border="none" background={"azure"} >{el.name}</Button>
                    </a>

                    <Box display="flex" justifyContent={"space-between"}>
                    <Box display="flex">
                     <Box display={"flex"}>
                      <AiOutlineFork />
                      Fork:{el.fork === false? 0:el.fork}
                     </Box>
                     <Box display={"flex"}>
                      <AiOutlineStar />
                     language:{el.language}
                     </Box>
                    </Box> 
                    {el.html_url}
                    </Box>
                 </Box>
                  )
                 } )}
               </Box>
              </Box>
              </Box>
    
    </div>
  )
}

export async function getStaticProps(context){
    const res= await fetch('https://api.github.com/search/repositories?q=user:anuragg0107+fork:true&sort=updated&per_page=10&type=Repositories')
    let data=await res.json();
    return {
        props:{
            user:data,
        }
    }
}

export default project