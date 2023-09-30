import styles from './Header.module.scss';
import logoIgnite from '../../assets/logo-ignite.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoIgnite} alt="Logo Ignite" />
      <h1>Ignite Feed</h1>
    </header>
  )
}