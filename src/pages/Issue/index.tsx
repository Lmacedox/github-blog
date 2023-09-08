import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api/axios'
import { IssueCard } from './components/IssueCard'
import { IssueMainWrapper, IssueCardSection, IssueBodySection } from './style'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export interface IssueType {
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
  state: string
  locked: boolean
  comments: number
  created_at: string
  updated_at: string
  author_association: string
  body: string
  closed_by: {
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
  state_reason: string
}

export function Issue() {
  const { issueId } = useParams()
  const [issue, setIssue] = useState<IssueType>()

  async function getIssueById(id: string | number) {
    const dataStorage = localStorage.getItem('@issue-storage')

    if (dataStorage) {
      setIssue(JSON.parse(dataStorage).data)

      return
    }

    const data = await api.get(
      `repos/${import.meta.env.VITE_GITHUB_USERNAME}/${
        import.meta.env.VITE_GITHUB_REPO
      }/issues/${id}`,
    )

    if (data) localStorage.setItem('@issue-storage', JSON.stringify(data))

    setIssue(data.data)
  }

  useEffect(() => {
    if (issueId) getIssueById(issueId)
  }, [issueId])

  return (
    issue && (
      <IssueMainWrapper>
        <IssueCardSection>
          <IssueCard {...issue} />
        </IssueCardSection>
        <IssueBodySection>
          {issue?.body && (
            <ReactMarkdown
              // eslint-disable-next-line react/no-children-prop
              children={issue?.body}
              components={{
                code({ inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      // eslint-disable-next-line react/no-children-prop
                      children={String(children).replace(/\n$/, '')}
                      style={dracula as any}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            />
          )}
        </IssueBodySection>
      </IssueMainWrapper>
    )
  )
}
