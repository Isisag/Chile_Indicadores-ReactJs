import React ,{ createContext, useState, useEffect }from 'react';
import { baseEndpoint, currentIndicator , currentCustomIndicator, indicatorYear, indicatorAnyDate } from "../constants/endpoints"

export const IndicatorsContext = createContext();

const IndicatorsContextProvider = ({children}) => {
  
    const [ indicator, setIndicator ] = useState([])
    const [ year, setYear ] = useState();

    useEffect(() => { getAllIndicator(); console.log(getAllIndicator) }, []);
    useEffect(() => {
        // getIndicator()
    }, []);
    
    const getAllIndicator = () => {
        fetch(currentIndicator())
        .then( (res) => res.json())
        .then( (data) => { 
            setIndicator(new Array(data));
            console.log(data.uf)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    // const getIndicator = (indicator) => {
    //     fetch(currentCustomIndicator(indicator))
    //     .then( (res) => res.json())
    //     .then( (data) => {
    //         // console.log(data)
    //         setIndicator( {data} );
    //     })
    //     .catch((err) => {
    //         // console.log(err)
    //     })
    // }
    
    return(
        <IndicatorsContext.Provider value={{indicator}}>
            {children} 
        </IndicatorsContext.Provider>
    )
};

export default IndicatorsContextProvider;
