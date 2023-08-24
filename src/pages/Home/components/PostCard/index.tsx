import ptBR from 'date-fns/locale/pt-BR'
import { defaultTheme } from '../../../../styles/themes/default'
import { BodyPostCard, HeaderPostCard, PostCardWrapper } from './style'
import { formatDistanceToNow } from 'date-fns'

export interface PostCardProps {
  number: number
  title: string
  body: string
  createdAt: string
}

export function PostCard({ title, body, number, createdAt }: PostCardProps) {
  return (
    <PostCardWrapper to={`issue/${number}`}>
      <HeaderPostCard>
        <h3 className={defaultTheme.classes['title-M']}>{title}</h3>
        <span className={defaultTheme.classes['text-S']}>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </HeaderPostCard>
      <BodyPostCard className={defaultTheme.classes['text-M']}>
        {body}
      </BodyPostCard>
    </PostCardWrapper>
  )
}
