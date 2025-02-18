import React ,{useEffect, useState} from 'react'
import '../../styles/clock.css'

const Clock = () => {
  const [days , setDays]= useState()
  const [hours , setHours]= useState();
  const [minutes , setMinutes]= useState();
  const[seconds , setSeconds]= useState();
  let interval;
  const countDown=()=>{
    const destination = new Date("feb 21, 2025 00:00:00").getTime()

    interval = setInterval(()=>{
      const now = new Date().getTime()
      const different = destination - now;

      const dayss = Math.floor(different /(1000*60*60*24))
      const hourss = Math.floor(different%(1000*60*60*24)/(1000*60*60))
      const minutess = Math.floor(different%(1000*60*60)/(1000*60))
      const secondss = Math.floor(different%(1000*60)/(1000))

      if(different <0) clearInterval(interval.current)
    else {
     setDays(dayss)
     setHours(hourss)
     setMinutes(minutess)
     setSeconds(secondss)
}

    } , 1000)
  }

  useEffect(()=> countDown() , [])

  return (
    <div className='clock_wrapper d-flex align-items-center gap-3'>
      <div className="clock_data d-flex align-items-center gap-3">
        <div>
            <h1 className="text-white fs-3 mb-2">{days}</h1>
            <h5 className='text-white fs-6'>Days</h5>
        </div>
        <span className='text-white fs-3'>:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3">
        <div>
            <h1 className="text-white fs-3 mb-2">{hours}</h1>
            <h5 className='text-white fs-6'>Hours</h5>
        </div>
        <span className='text-white fs-3'>:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3">
        <div>
            <h1 className="text-white fs-3 mb-2">{minutes}</h1>
            <h5 className='text-white fs-6'>Minut</h5>
        </div>
        <span className='text-white fs-3'>:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3">
        <div>
            <h1 className="text-white fs-3 mb-2">{seconds}</h1>
            <h5 className='text-white fs-6'>Second</h5>
        </div>
      </div>
    </div>
  )
}

export default Clock
