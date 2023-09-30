import { Avatar } from '../Avatar/Avatar';
import styles from './Sidebar.module.scss';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1519575706483-221027bfbb31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/eurcvf.png" />

        <strong>Roberto Filho</strong>
        <span>Web Developer</span>
      </div>

      <footer className={styles.footer}>
        <a className={styles.footerEditProfile} href="#">
          Editar meu perfil
        </a>
      </footer>

    </aside>
  )
}