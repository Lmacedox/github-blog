import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../api/axios'

interface Issue {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }
  labels: Array<any>
  state: string
  locked: boolean
  assignee: any
  assignees: Array<any>
  milestone: any
  comments: number
  created_at: string
  updated_at: string
  closed_at: string
  author_association: string
  active_lock_reason: any
  body: string
  reactions: {
    url: string
    total_count: number
    '+1': number
    '-1': number
    laugh: number
    hooray: number
    confused: number
    heart: number
    rocket: number
    eyes: number
  }
  timeline_url: string
  performed_via_github_app: any
  state_reason: string
  score: number
}

interface IssuesContext {
  issues: Issue[]
  fetchIssues: (textQuery?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContext)

export function IssuesProviderContext({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssues = useCallback(async (textQuery = '') => {
    const response = await api.get(
      `search/issues?q=${textQuery}%20repo:${
        import.meta.env.VITE_GITHUB_USERNAME
      }/${import.meta.env.VITE_GITHUB_REPO}`,
    )

    setIssues(response.data.items)
  }, [])

  return (
    <IssuesContext.Provider
      value={{
        issues,
        fetchIssues,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
