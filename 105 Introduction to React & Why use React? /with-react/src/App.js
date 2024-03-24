
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [value, setValue] = useState(0); 
  return (
    <div className="App">
      <Header logoText = "Debu"/>

      <div className='value'>Value is : {value}</div>
      <button onClick={()=>{
        setValue(value+1)
      }}>Click Me</button>

      <Footer/>
    </div>
  );
}

export default App;
