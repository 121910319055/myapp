// import React from 'react'

// export default function App7() {
//     const handleClick=()=>{
//         alert("hello ");
//     };
//   return (
//     <div>
//         <button onClick={handleClick}>Click</button>
//     </div>
//   );
// }
/////////////////////////////


import React from 'react'

export default function App7() {
    const handleClick=(msg)=>{
        alert(msg );
    };
  return (
    <div>
        <button onClick={()=>handleClick('hi john')}>Click</button>
    </div>
  );
}