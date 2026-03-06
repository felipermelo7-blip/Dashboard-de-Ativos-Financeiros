import styles from "./CardAtivo.module.css"

interface CardAtivoProps {
  titulo: string
  children: React.ReactNode
}

export function CardAtivo({ titulo, children }: CardAtivoProps) {
  return (
    <div className={styles.card}>
      <h3>{titulo}</h3>
      {children}
    </div>
  )
}