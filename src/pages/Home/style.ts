import styled from 'styled-components'

export const HomeProfileSection = styled.section`
  margin-top: -5rem;
  position: relative;
`

export const SectionPostsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;

  margin-top: 72px;
`

export const PostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`
