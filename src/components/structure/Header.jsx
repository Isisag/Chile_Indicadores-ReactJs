import React , {Fragment} from 'react';
import {Link} from "react-router-dom"
import logo from '../../assets/Flag_of_Chile.svg';
import Clock from '../commons/Clock';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar"
import HomeButton from '../commons/HomeButton';




const Header = () => {

  return (
    <>
    <AppBar className="header-bar">
      <Toolbar className='header-toobar'>
        <h1> Chile Indicadores 
          { "   " }
        <img src={logo} alt={logo} width="20px" height="20px"/>
        </h1>
        <HomeButton />
        <span> <Clock /> </span>
      </Toolbar>
    </AppBar>
    </>
  )
};

export default Header;
