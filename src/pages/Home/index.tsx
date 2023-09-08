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
import { useEffect } from 'react'

export function Home() {
  const issuesList = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  const fetchIssues = useContextSelector(IssuesContext, (context) => {
    return context.fetchIssues
  })

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <main>
      <HomeProfileSection>
        <ProfileCard />
      </HomeProfileSection>
      <SectionPostsContainer>
        <SearchForm />

        <PostsWrapper>
          {issuesList.map((issue) => (
            <PostCard key={issue.id} {...issue} createdAt={issue.created_at} />
          ))}
        </PostsWrapper>
      </SectionPostsContainer>
    </main>
  )
}
