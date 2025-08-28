import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateClock = () => {
      const options= {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'America/Toronto', // Montreal timezone
      }
      setTime(new Intl.DateTimeFormat('en-GB', options).format(new Date()))
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <p className='absolute lg:w-[17vw] w-64 right-0 bottom-36 lg:bottom-48 font-[font2] lg:text-[0.9rem] text-xs lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. 
        On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, 
        on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>

      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to='/projects'>Projects</Link>
      </div>

      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to='/agence'>agence</Link>
      </div>

      {/* Montreal clock bottom-left */}
      <div className="absolute bottom-2 left-2 hidden lg:flex items-center gap-4 text-2xl font-[font2] text-white ">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 120 120"
  className="w-8 h-8 text-white"
  fill="currentColor"
>
  <path d="M60 120C26.9 120 0 93.1 0 60S26.9 0 60 0s60 26.9 60 60-26.9 60-60 60zM60 5C29.7 5 5 29.7 5 60s24.7 55 55 55 55-24.7 55-55S90.3 5 60 5z" />
  <path d="M60 120c-19.3 0-34.4-26.4-34.4-60S40.7 0 60 0s34.4 26.4 34.4 60-15.1 60-34.4 60zM60 5C43.8 5 30.5 29.7 30.5 60s13.2 55 29.5 55 29.5-24.7 29.5-55S76.2 5 60 5z" />
  <path d="M12.2 25.6h95.6v5H12.2zM12.2 89.5h95.6v5H12.2zM2.5 57.5h115v5H2.5z" />
  <path d="M57.5 2.5h5v115h-5z" />
</svg>

  <span className='text-xl'>MONTREAL_{time}</span>

</div>

    </div>
  )
}

export default HomeBottomText
