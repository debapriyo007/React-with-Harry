import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setshowBtn] = useState(false)

  const [todo, settodo] = useState([
    {
      title:"Todo 1",
      des: "Hey i'm the first todo"
    },
    {
      title:"Todo 2",
      des: "Hey i'm the second todo"
    },
    {
      title:"Todo 3",
      des: "Hey i'm the third todo"
    }
  ]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* {showBtn?<button>Show when another btn Click</button>:"tenga"} */}
      {showBtn?<button>Show button True</button>:<button>Show button Flase</button>}
      {/* {showBtn && <button>Button is True</button>} */}


      {/* Print all Todos */}
      {todo.map((item, index) => (
        <div key={index}>
          <h4>{item.title}</h4>
          <p>{item.des}</p>
        </div>
      ))}

      {/* Print only first Todo */}

      <div className="card">
        <button onClick={() => setshowBtn(!showBtn)}>
          Toggle Button
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
