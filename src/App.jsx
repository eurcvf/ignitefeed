import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

import './styles/global.scss';
import styles from './styles/App.module.scss';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
        </main>
      </div>
    </>
  )
}

