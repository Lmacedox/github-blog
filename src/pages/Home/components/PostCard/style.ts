import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardWrapper = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;

  max-width: 416px;
  max-height: 260px;
  width: 100%;
  height: 100%;

  padding: 32px;

  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};

  transition: 0.5s;

  // BORDA JÁ ADICIONADA ANTES DO HOVER PARA QUE OS ELEMENTOS INTERNOS
  //NÃO SOFRAMA ALTERAÇÕES DE ESPAÇAMENTO COM O HOVER
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const HeaderPostCard = styled.header`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;

  span {
    white-space: nowrap;
  }
`

export const BodyPostCard = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625rem;
  text-align: left;
  color: rgb(175, 194, 212);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
