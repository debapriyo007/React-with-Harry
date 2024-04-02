import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './redux/counter/counterSlice'

function App() {
 
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <Navbar/>
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Learning Redux</h1>
      
      <div>
        <button onClick={()=>dispatch(decrement())} className='btn'> -  </button>
        Current Cout Value : {count}
        <button onClick={()=>dispatch(increment())} className='btn'> + </button>
        <br />
        <button onClick={()=>dispatch(multiply())} className='btn'> * </button>
      </div>
    </>
  )
}

export default App
