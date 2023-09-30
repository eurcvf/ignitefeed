import { Avatar } from '../Avatar/Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.scss';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} className={styles.avatar} src="https://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego</strong>
              <time dateTime='2023-09-30 13:21:00' title='30 de setembro de 2023'>Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, Roberto! Sucesso...</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}