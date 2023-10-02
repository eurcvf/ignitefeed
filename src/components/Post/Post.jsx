import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.scss';
import { useState } from 'react';

const comments = [
  1,
  2,
  3,
]

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post muito massa'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedFormatterDate = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleCreateNewComment = () => {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  const handleNewCommentChange = () => {
    setNewCommentText(event.target.value);
  }

  const deleteComment = (commentToDelete) => {
    const newCommentList = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(newCommentList);
  }

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time dateTime={publishedAt.toISOString()} title={publishedFormatterDate}>{publishedRelativeNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe sua avaliação</strong>

        <textarea name='comment' placeholder='Deixe um comentário' onChange={handleNewCommentChange} value={newCommentText} />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
          )
        })}
      </div>
    </article>
  )
}