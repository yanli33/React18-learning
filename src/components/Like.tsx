import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { useState } from "react"
interface Props {
  color?: string
  onClick: () => void
}

interface Props{
    onClick:()=>void
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true)

  const toggle = ()={
    setStatus(!status)
    onClick()
  }
  return status ? (
    <AiFillHeart color="#ff6b81" size={20} onClick={() => setStatus(false)} />
  ) : (
    <AiOutlineHeart size={20} onClick={() => setStatus(true)} />
  )
}

export default Like
