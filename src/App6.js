// import {useState} from "react";

// export default function App6() {
//     const [count,setCount]= useState(0);
//     console.log("component loded")
//   return (
//     <div>
//         <button onClick={()=> setCount((prevState )=>prevState+1)}>
//         Click
//         </button>
//         <span>{count}</span>
       
//     </div>
//   )
// }
  ////////////////////////////////////
  import {useState,useEffect} from "react";

export default function App6() {
    const [runs,setRuns]= useState(0);
    const [wickets,setWickets]= useState(0);
    console.log("component loded");
    useEffect(()=>{
        console.log(`Wickets:${wickets}.better luck next time`)
    },[wickets]);
    useEffect(()=>{
        console.log(`good  score:${runs}`);
    },[runs]);
  return (
    <div>
        <button onClick={()=> setRuns((prevState )=>prevState + 1)}>
        Runs({runs})
        </button>
        <button onClick={()=> setWickets((prevState )=>prevState+1)}>
        wickets({wickets})
        </button>
       
       
    </div>
  )
}


/////trainer code
// import React from "react";
// import { useState, useEffect } from "react";

// export default function App6() {
//   const [runs, setRuns] = useState(0);
//   const [wickets, setWickets] = useState(0);
//   // console.log("Component loaded");
//   useEffect(() => {
//     if (wickets > 0) console.log(`Wickets:${wickets}.Better Luck Next Time!`);
//   }, [wickets]);

//   useEffect(() => {
//     if (runs > 0) console.log(`Good Job! Score:${runs}`);
//   }, [runs]);

//   return (
//     <>
//       <button onClick={() => setRuns((prevState) => prevState + 1)}>
//         Runs({runs})
//       </button>
//       <button onClick={() => setWickets((prevState) => prevState + 1)}>
//         Wickets({wickets})
//       </button>
//     </>
//   );
// }
