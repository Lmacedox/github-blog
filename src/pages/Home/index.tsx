import { useContextSelector } from 'use-context-selector'
import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import {
  HomeProfileSection,
  PostsWrapper,
  SectionPostsContainer,
} from './style'
import { IssuesContext } from '../../contexts/IssuesContext'

export function Home() {
  const issuesContext = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  return (
    <main>
      <HomeProfileSection>
        <ProfileCard />
      </HomeProfileSection>
      <SectionPostsContainer>
        <SearchForm />

        <PostsWrapper>
          {issuesContext.map((issue) => (
            <PostCard key={issue.id} {...issue} createdAt={issue.created_at} />
          ))}
        </PostsWrapper>
      </SectionPostsContainer>
    </main>
  )
}
