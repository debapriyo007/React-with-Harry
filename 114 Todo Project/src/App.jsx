import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
 // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'


function App() {


  const [todo, setTodo] = useState("")
  const[todos, setTodos] = useState([]) //holde al todos

  const handelEdit = ()=>{
    
  }
  const handelDelete = (e)=>{
      let id = e.target.name

  }
  const handelAdd = ()=>{
      setTodos([...todos, {id:uuidv4(),todo, isComplete:false}])
      setTodo("")
      console.log(todos)
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
  }

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add Todo</h2>
          <input onChange={handelChange} value={todo} type="text" className='w-1/2 h-8' />
          <button onClick={handelAdd} className=' bg-violet-800 hover:bg-violet-950 py-1 p-3  text-md font-bold rounded-md text-white m-6'>Add</button>
        </div>
          <h2 className='text-lg font-bold'>Your Todos</h2>
        
        <div className="todos">
          {todos.map(items=>{

          
            return <div key={items.id} className="todo flex w-1/4 justify-between">
              <input name={items.id} onChange={handelCheckBox} type="checkbox" value={items.isComplete} />
              <div className={items.isComplete?"line-through":""}>{items.todo}</div>
              <div className="buttons">
                <button onClick={handelEdit} className=' bg-violet-800 hover:bg-violet-950 py-1 p-3  text-md font-bold rounded-md text-white m-1'>Edit</button>
                <button onClick={handelDelete} className=' bg-violet-800 hover:bg-violet-950 py-1 p-3  text-md font-bold rounded-md text-white m-1'>Delete</button>
              </div>
            </div>
            })}
        </div>
        
      </div>
        
    </>
  )
}

export default App
