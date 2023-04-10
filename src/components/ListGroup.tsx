import { Fragment, useState } from "react"
interface Prop {
  //ts定义一个接口
  items: string[]
  heading: string
  onSelectedItem: (item: string) => void
}

function ListGroup({ items, heading, onSelectedItem }: Prop) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1) //返回一个数组，第一个元素为状态，第二个元素为状态改变函数

  items.map((item) => <li></li>)
  return (
    <Fragment>
      <h1>{heading}</h1>
      {/* 使用&& 左侧表达式的值相当于一个开关 */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index) //使用状态改变函数改变状态值
              onSelectedItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default ListGroup
