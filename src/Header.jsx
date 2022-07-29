import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import {SiTinder} from 'react-icons/si'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className='header'>
        <IconButton>
          <PersonIcon className='header__icon'/>
        </IconButton>
        <IconButton>
          <SiTinder className='header__icon tinder__icon'/>
        </IconButton>
        <IconButton>
          <QuestionAnswerIcon className='header__icon'/>
        </IconButton>

    </div>
  )
}

export default Header;