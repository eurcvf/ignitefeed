import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.scss';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/122177641?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Roberto Filho</strong>
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