import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { PostList } from './components/PostList'
import {
  HomeProfileSection,
  PostsWrapper,
  SectionPostsContainer,
} from './style'

export function Home() {
  return (
    <main>
      <HomeProfileSection>
        <ProfileCard />
      </HomeProfileSection>
      <SectionPostsContainer>
        <SearchForm />

        <PostsWrapper>
          <PostList />
        </PostsWrapper>
      </SectionPostsContainer>
    </main>
  )
}
