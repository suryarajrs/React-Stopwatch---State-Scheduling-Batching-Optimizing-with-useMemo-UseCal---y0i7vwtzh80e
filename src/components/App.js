import React, { useEffect, useRef, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const startTime = useRef(0);
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState(null);
  const [lapSectionVisible, setlapSectionVisible] = useState(false);
  const [start, setStart] = useState()

  useEffect(()=>{
    let intervel

    if(start){
       intervel = setInterval(() => {
        setCurrentTime((prev)=>prev+.010)
      },10);

    } 

    return () => clearInterval(intervel);

  },[start])

  function handleLap(){
    setLaps([...laps,currentTime])
    setlapSectionVisible(true)
  }
   
  return (
    <div id="main">
      <section>
        <h1 className='seconds-elapsed'>{currentTime.toFixed(3)}</h1>
        <section className='buttons'>
          <button onClick={()=>{setStart(true)}} className="start-btn">START</button>
          <button onClick={()=>{setStart(false)}} className="stop-btn">STOP</button>
          <button  onClick={handleLap} className="lap-btn">LAP</button>
          <button onClick={()=>{setRunning(false) ,setCurrentTime(0),setlapSectionVisible(false),setLaps([])}} className="reset-btn">RESET</button>
        </section>
      </section>
      {lapSectionVisible && <section className='lap-section'>
        <h2>Laps</h2>
        <section className='laps'>
          <p>lap</p>
          <p>lap</p>
          <p>lap</p>
        </section>
      </section>}
    </div>
  )
}


export default App;
