import { useForm } from 'react-hook-form'
import { defaultTheme } from '../../../../styles/themes/default'
import {
  SearchFormContainer,
  SearchFormHeader,
  SearchFormInputWrapper,
} from './style'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { api } from '../../../../api/axios'
import { useEffect } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSubmitForm({ query }: SearchFormInputs) {
    // await api.get('search/issues', {
    //   params: {
    //     q: query,
    //   },
    // })
    // const formatedQuery = new URLSearchParams()
    // formatedQuery.append('q', query)
    // await api.get(`search/issues?${formatedQuery}`)
  }

  async function getIssues() {
    const formatedQuery = new URLSearchParams()
    formatedQuery.append(
      'q',
      `repo:${import.meta.env.VITE_GITHUB_USERNAME}/${
        import.meta.env.VITE_GITHUB_REPO
      }`,
    )
    await api.get(`search/issues?${formatedQuery}`)
  }

  // useEffect(() => {
  //   getIssues()
  // }, [])

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <SearchFormHeader className="">
        <h4 className={defaultTheme.classes['title-S']}>Publicações</h4>
        <span className={defaultTheme.classes['text-S']}>6 publicações</span>
      </SearchFormHeader>
      <SearchFormInputWrapper>
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} color={defaultTheme['base-span']} />
        </button>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          className={defaultTheme.classes['text-M']}
          {...register('query')}
        />
      </SearchFormInputWrapper>
    </SearchFormContainer>
  )
}
