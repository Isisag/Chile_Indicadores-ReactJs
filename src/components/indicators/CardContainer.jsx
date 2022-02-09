import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import { IndicatorsContext } from '../../contexts/IndicatorsContext';
import Cards from './Cards';
import UserWelcome from '../commons/UserWelcome';


const CardContainer = () => {
  const { indicator } = useContext(IndicatorsContext);
  
  return(
    <>
  <div className='home-container'>
      <UserWelcome />
  </div>
      <Cards indicator={indicator} />
      <p></p>
    </>
  )
}

export default CardContainer;
