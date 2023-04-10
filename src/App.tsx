import { useState } from "react"
import Alert from "./components/Alert"
import Button from "./components/Button"
function App() {
  const [alertVisible, setAletVisibility] = useState(false)
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAletVisibility(false)}>My Alert</Alert>
      )}

      <Button onClick={() => setAletVisibility(true)}>My Button</Button>
    </div>
  )
}

export default App
