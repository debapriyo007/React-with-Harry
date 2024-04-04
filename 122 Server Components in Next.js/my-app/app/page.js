//To run this normal as React in Client
// "use client"
// import { useState, useEffect } from "react";

//i want to read node module.
import fs from "fs/promises";
import Navbar from "@/components/Navbar";


export default function Home() {

  // const [count, setcount] = useState(0)
  console.log("Hey i'm debu")
  // i write the backend code here also.
  let a = fs.readFile(".gitignore")
  a.then((e)=>{console.log(e.toString())})
  return (
   <div>
     <Navbar/> {/*here i am using Navbar as Client Components inside page.js which is server Componets */}
      I am Componenets
      {/* <h1>I am a Components {count}</h1>  */}
      {/* The above line give me error coz its server Components where 
       Count is Client Components
       In next.js by default every thing is "server" components. */}
       {/* <button onClick={()=>{setcount(count+1)}}>Click Me</button> */}
   </div>
  );
}
