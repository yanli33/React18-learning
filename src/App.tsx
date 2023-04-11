import ListGroup from "./components/ListGroup"
import { BsFillCalendarFill } from "react-icons/bs"
import Button from "./components/button/Button"
import "./App.css"
import Like from "./components/Like"
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"]
  const handleSelected = (item: string) => {
    console.log(item)
  }
  const color = "#ffe6h7"
  const handleClick = () => {
    color === "#ffe6h7" ? "#ffffff" : "#ffe6h7"
    console.log("Clicked")
  }
  return (
    <div>
      <BsFillCalendarFill color="read" size={40} />
      <br />
      <Button
        color="primary"
        onClick={() => {
          console.log("Clicked")
        }}
      >
        My button
      </Button>
      <br />
      <Like onClick={handleClick} color={color} />
    </div>
  )
}

export default App
