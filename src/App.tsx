import ListGroup from "./components/ListGroup"
import Alert from "./components/Alert"
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"]
  const handleSelected = (item: string) => {
    console.log(item)
  }
  return (
    <div>
      {/* ts在编译时就能找到错误 */}
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectedItem={handleSelected}
      />
      {/* <Alert /> */}
    </div>
  )
}

export default App
