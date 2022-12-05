import React, { useContext } from 'react'
import {BsFillEmojiSunglassesFill} from "react-icons/bs"
import {BsFillMoonFill} from "react-icons/bs";
import { themeContext } from './Context';
const Toggle = () => {
    const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode
    const handleClick=()=>{
        theme.dispatch({type:"toggle"})
    }
  return (
    <div className='toggle'>
     <BsFillMoonFill />
     <BsFillEmojiSunglassesFill />
     <div className='toggle_btn' onClick={handleClick} style={darkMode ? {left:"2px"} : {right:"2px"}}>

     </div>
    </div>
  )
}

export default Toggle