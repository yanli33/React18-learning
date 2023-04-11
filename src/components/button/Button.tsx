import styles from "./button.module.css"
interface Props {
  children: string
  onClick: () => void
  color?: string
}
const Button = ({ children, onClick, color }: Props) => {
  console.log(styles)
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join("")}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
