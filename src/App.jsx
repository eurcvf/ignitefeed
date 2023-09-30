import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import './styles/global.scss';
import styles from './styles/App.module.scss';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <span>Aqui fica os posts</span>
        </main>
      </div>
    </>
  )
}

