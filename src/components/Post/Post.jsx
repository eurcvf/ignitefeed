import styles from './Post.module.scss';

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/122177641?v=4" />
          <div className={styles.authorInfo}>
            <strong>Roberto Filho</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime='2023-09-30 13:21:00' title='30 de setembro de 2023'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="#">jane.design/doctorcare</a></p>

        <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe sua avaliação</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}