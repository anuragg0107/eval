// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";
import {AiOutlineStar} from "react-icons/ai"
import {AiOutlineFork} from "react-icons/ai";
import Link from 'next/link'
import {Box,Text,Image,Input, Button} from "@chakra-ui/react";
import Toggle from './Toggle';
// import Resume from "../pages/resume.pdf";
 const  Home = ({user}) => {
  // console.log(user)
  const {id,name,login,bio,avatar_url}=user
  return (
    <div >
      
        <div >
        <Box display={"flex"} style={{width:"100%",justifyContent:"space-between"}}>
        <Link href='/'><Text>{name}</Text></Link>
        {/* <Toggle/> */}
           <Link href='/project'>
           <Button>Projects</Button>
           </Link>
           <Link href='/experience'>
           <Button>Experience</Button>
           </Link>
            <Image src={avatar_url} alt={name} style={{height:"40px",width:"40px",borderRadius:"50%"}} />
        </Box>
        <Box style={{display:"flex"}}>
          {/* {user.map((el)=>(
            <div key={el.id}> */}
            <Box className="left_side">
               <Image src={avatar_url} alt={name} style={{height:"100px",width:"100px",borderRadius:"50%",marginLeft:"110px"}}  />
             <Text textAlign="center">{name}</Text>
             <Text>Full Stack Web Developer | React | Redux | TypeScript | Nextjs</Text>
            <Box display={"flex"} justifyContent="space-evenly">
            <a href="https://drive.google.com/file/d/1FYOKitjxZtrexgGOmh4lRjQ_kZDlip4H/view?usp=sharing"  >
                 <Button style={{border:"none",outline:"none",background:"green.400",borderRadius:"20px"}}>
                  Resume
                 </Button>
             </a>
             <a href="https://github.com/anuragg0107" >
                 <Button style={{border:"none",outline:"none",background:"green.400",borderRadius:"20px"}}>
                   Follow me
                 </Button>
             </a>
            </Box>
            <Box>
            <Box>
       <Box display="flex" marginTop={"10px"}>
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
        <Text marginLeft={"40px"}marginTop="-14px"
        paddingTop={"20px"}>Aug 2018- Feb 2022</Text>
       </Box>
            </Box>
          </Box>
            {/* </div>
          ))} */}
         

          <Box className="right_side">
               <Text textAlign={"center"} fontSize="25px" paddingTop="20px">Projects</Text>
              <Box className="right_side_container">
              <Box className='container'>
                {/* {projects.map((el) => {
                  return (
                    <Box key={el.id}> */}
                       
                    <a href="https://github.com/anuragg0107/anuragg0107.github.io">
                    <Button outline={"none"} border="none" background={"azure"} >anurag.github.io</Button>
                    </a>

                    <Box display="flex" justifyContent={"space-between"}>
                    <Box display="flex">
                     <Box display={"flex"}>
                      <AiOutlineFork />
                      Fork
                     </Box>
                     <Box display={"flex"}>
                      <AiOutlineStar />
                     Star
                     </Box>
                    </Box> 
                    React
                    </Box>
                    {/* </Box>
                  )
                })} */}
               </Box>
              </Box>
          </Box>
        </Box>

        </div>
       {/* ))} */}
    </div>
  )
}


// export async function getServerSideProps(){
//   const res= await fetch('https://api.github.com/search/repositories?q=user:anuragg0107+fork:true&sort=updated&per_page=10&type=Repositories')
//   let data =await res.items;
//   return {
//     props:{
//       projects: data,
//     }
//   }
// }
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://api.github.com/search/repositories?q=user:anuragg0107+fork:true&sort=updated&per_page=10&type=Repositories')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       projects,
//     },
//   }
// }

export async function getStaticProps(context){
  const res= await fetch('https://api.github.com/users/anuragg0107')
  let data= await res.json()
  // console.log(data)
 
  return {
    props:{
      user:data,
    }
  }
  }

  // export async function getStaticProps(context){
  //   const res= await fetch('https://api.github.com/search/repositories?q=user:anuragg0107+fork:true&sort=updated&per_page=10&type=Repositories')
  //   let data= await res.json()
  //   // console.log(data)
   
  //   return {
  //     props:{
  //       user:data,
  //     }
  //   }
  //   }
// export async function getServerSideProps(){
//   let res= await fetch('https://api.github.com/users/anuragg0107')
//   let data=await res;

//   return {
//     props:{
//       gitdata:data,
//     }
//   }
// }

export default Home;