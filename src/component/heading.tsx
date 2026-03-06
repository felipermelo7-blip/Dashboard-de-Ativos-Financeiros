import styles from "./heading.module.css"

interface HeadingProps {
  children: string
}

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.title}>{children}</h1>
}