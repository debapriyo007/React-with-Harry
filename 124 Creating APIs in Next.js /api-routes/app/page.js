"use client"
import Image from "next/image";

export default function Home() {

  const handleClick = async()=>{
    //it do post request.
    let data = {
      name:"debu", 
      role:"Coder"
    }
    let a = await fetch('/api/add',{

      method:"POST", headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res)
  }
  return (
   <div>
      <h1 className="text-4xl font-bold text-center text-white my-6">Next Js Api route Demo</h1>
      <button onClick={handleClick}>Click Me</button>
   </div>
  );
}
