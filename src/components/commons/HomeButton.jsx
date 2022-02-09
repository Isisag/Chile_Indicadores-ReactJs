import React from 'react';
import {Home} from "@material-ui/icons"
import {Link} from "react-router-dom"


const HomeButton = () => (
  <>
    <Link to={"/"} className="home-button" > 
       <Home color='action'/>
    </Link>
  </>
)

export default HomeButton;
