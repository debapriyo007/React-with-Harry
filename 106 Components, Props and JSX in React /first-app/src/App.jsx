import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <>
      <Navbar/>
      
      <div className="cards">
        <Card title = "Card-1" des = "hey i am card 1 , write some thing to me"/>
        <Card title = "Card-2" des = "hey i am card 2 , write some thing to me"/>
        <Card title = "Card-3" des = "hey i am card 3 , write some thing to me"/>
        <Card title = "Card-4" des = "hey i am card 4 , write some thing to me"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
