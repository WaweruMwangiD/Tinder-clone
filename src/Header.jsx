import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import {SiTinder} from 'react-icons/si'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

function Header() {
  return (
    <div className='header'>
        <PersonIcon />
        <SiTinder className='tinder__logo'/>
        <QuestionAnswerIcon />

    </div>
  )
}

export default Header;