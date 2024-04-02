import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"
function App() {
  const {
    register,
    handleSubmit,
    setError, //create my custom error for 'myfrom'
    formState: { errors , isSubmitting},
  } = useForm()

  const delay = (d)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }
  
  const onSubmit = async(data) =>{
    // await delay(2)
    let r = await fetch("http://localhost:3000/", {method:"POST" , headers:{
      "Content-Type":"application/json",
    } ,body:JSON.stringify(data)})
    let res = await r.text()

    console.log(data, res)

    //This are Cutomized Server site error!!!

    // if(data.username!== "debu99"){
    //   setError("myform", {message:"Your Form is't good order because of credential are invalid!"})
    // }
    // //create your own cutomize error.. 
    // if(data.username === "sourav"){
    //   setError("blocked", {message:"You are temporary Blocked!"})
    // }
  }
  return (
    <>
    {/* {isSubmitting && <div>Loading...</div>} */}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username", {required:{value:true, message:"This field is required"}, minLength:{value:3, message:"Minimum user length is 3"}, maxLength:{value:8, message:"Maximum user length is 8"}})}  placeholder='usename'/>

          
           {errors.username && <div className='red'>{errors.username.message}</div>}
         
           <br />
         
          <input  {...register("password", {minLength:{value:7, message:"Min Password Length is 7 required"}})} placeholder='password' type='password'/>

        
          {errors.password && <div className='red'>{errors.password.message}</div>}
          

          <br />
          <input disabled = {isSubmitting} type="submit" value="submit" className='btn' />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
