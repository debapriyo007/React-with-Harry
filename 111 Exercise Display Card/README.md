## Question ? 🔥

You have to use an API and display the data in a card format under container. All the data pointes return by API should be convert into cards. 

API :- https://jsonplaceholder.typicode.com/posts


# Solution 🚀

```java
import { useState , useEffect} from 'react'
import './index.css'
function App() {
  const [card, setcard] = useState([])

  const fetchData = async()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcard(data)
    console.log(data)
  }

  useEffect(() => {
   fetchData()
  }, [])
  

  return (
    <>
      
      <div className="container">
        {card.map((card)=>{
          return(
            <div className="card" key={card.id}>
              <h1>{card.title}</h1>
              <p>{card.body}</p>
              <span>By UserId : {card.userId}</span>
          </div>
          )
        })}
        
      </div>
       
    </>
  )
}

export default App

```