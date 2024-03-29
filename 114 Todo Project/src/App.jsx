import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
 // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";


function App() {


  const [todo, setTodo] = useState("")
  const[todos, setTodos] = useState([]) //holde al todos
  const [ShowFinish, setShowFinish] = useState(true)
  useEffect(() => {
    let todosString = localStorage.getItem("todos")
    if(todosString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  


  const saveLs = ()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const handelEdit = (e, id)=>{
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
    let index = todos.findIndex(items=>{
      return items.id === id
    })
    let newTodos = todos.filter(items=>{
      return items.id!= id;
    })
    setTodos(newTodos)
    saveLs()
  }


  const handelDelete = (e, id)=>{
    let index = todos.findIndex(items=>{
      return items.id === id
    })
    let newTodos = todos.filter(items=>{
      return items.id!= id;
    })
    setTodos(newTodos)
    saveLs()
  }
  const handelAdd = ()=>{
      setTodos([...todos, {id:uuidv4(),todo, isComplete:false}])
      setTodo("")
      // console.log(todos)
      saveLs()
  }

  const handelChange = (e)=>{
      setTodo(e.target.value)
  }

  const handelCheckBox = (e) => {
    let id = e.target.name
    // console.log(`The Id is : ${id}`)
    let index = todos.findIndex(items=>{
      return items.id === id
    })
    let newTodos = [...todos]
    newTodos[index].isComplete  = !newTodos[index].isComplete
    setTodos(newTodos)
    saveLs()
  }


  const toggleFinished = (e)=>{
    setShowFinish(!ShowFinish)
  }

  return (
    <>
    <Navbar/>
      <div className="md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[45%]">
        <h1 className='font-bold text-center text-2xl'>iTask Manager Your Todos</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className=' text-xl font-bold text-center'>Add Todos</h2>
          <div className='flex'>
          <input onChange={handelChange} value={todo} type="text" className='w-full px-4 py-2 rounded-lg' />
          <button onClick={handelAdd} disabled ={todo.length<=3} className=' bg-violet-800 hover:bg-violet-950 py-1 p-3  text-md font-bold rounded-md text-white  disabled:bg-violet-800 mx-3'>Save</button>
          </div>
        </div>
        <input className='my-4' onChange={toggleFinished} type="checkbox" checked={ShowFinish} /> Show Finished
        <div className='h-[1px] bg-black opacity-15 mx-auto my-2'></div>
          <h2 className='text-lg font-bold'>Your Todos</h2>
        
        <div className="todos">
          {todos.length === 0 && <div className=' text-red-600 m-5 font-bold'>No Todos</div>}
          {todos.map(items=>{

          
            return (ShowFinish || items.isComplete) && <div key={items.id} className="todo flex justify-between">
              <div className='flex gap-5'>
              <input name={items.id} onChange={handelCheckBox} type="checkbox" checked={items.isComplete} />
              <div className={items.isComplete?"line-through":""}>{items.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e)=>{handelEdit(e, items.id)}} className=' bg-violet-800 hover:bg-violet-950 py-1 p-3  text-md font-bold rounded-md text-white m-1'><FaEdit /></button>
                <button onClick={(e)=>{handelDelete(e,items.id)}} className=' bg-violet-800 hover:bg-violet-950 py-1 p-3  text-md font-bold rounded-md text-white m-1'><AiFillDelete /></button>
              </div>
            </div>
            })}
        </div>
        
      </div>
        
    </>
  )
}

export default App
