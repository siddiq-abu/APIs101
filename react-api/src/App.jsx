// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState, useEffect } from "react";
import { fetchSomeData } from "./apiService"; // Import your API functions

function MyComponent() {
  const [data, setData] = useState(null);

  // Fetch data when the component mounts
  async function fetchData() {
    try {
      const result = await fetchSomeData();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // useEffect block
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
{data?(

      <div className="card">
        {data.map(function (d, idx) {

          return <div className="cards">
            <h3 key={idx}>{d.id}</h3>
            <h3 key={idx}>{d.title}</h3>
            
          </div>;
        })}
      </div>
) : (
  <p>Loading...</p>
)}
    </div>
  );

  // return (
  //   <div>
  //     {data ? (
  //       <div>
  //         {/* Render the fetched data */}
  //         <h1>{data.map((d)=>d.title)}</h1>
  //         {/* <p>{data.description}</p> */}
  //       </div>
  //     ) : (
  //       <p>Loading...</p>
  //     )}
  //   </div>
  // );
}

export default MyComponent;
