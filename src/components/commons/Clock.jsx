import React, { useState, useEffect, Fragment } from 'react';
import { AccessTime, QueryBuilder} from "@material-ui/icons"

const Clock = () => {

  const date = new Date();

  const [ time , setTime ] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });

  const [ currentDate, setCurrentDate ] = useState(new Date())

  useEffect(() => {
    const everySecond = setInterval(()=>{
      const date = new Date()
      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      },1000);
      return () => clearInterval(everySecond)
    })
  }, [time]);

  // useEffect(() => {
  //   const actualDate = setCurrentDate(new Date())
  // },[]);
  
  

  return (
    <>
    <div className="clock">
      <QueryBuilder />
      <span> {time.hours} : {time.minutes}: {time.seconds} </span>
    </div>
    </>
  )

}

export default Clock;
