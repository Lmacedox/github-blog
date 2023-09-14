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

import { IssuesContext } from '../../../../contexts/IssuesContext'
import { useContextSelector } from 'use-context-selector'

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

  const { fetchIssues, issues } = useContextSelector(
    IssuesContext,
    (context) => {
      return context
    },
  )

  async function handleSubmitForm({ query }: SearchFormInputs) {
    await fetchIssues(query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <SearchFormHeader className="">
        <h4 className={defaultTheme.classes['title-S']}>Publicações</h4>
        <span className={defaultTheme.classes['text-S']}>
          {issues.length} publicações
        </span>
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
