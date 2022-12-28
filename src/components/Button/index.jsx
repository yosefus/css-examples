import styles from './style.module.css'

export default function Button({ text, children, className = '', onClick, ...props }) {

   return (
      <button onClick={onClick} className={`${styles.btn} ${className}`} {...props}> {text} {children} </button>
   )
}

