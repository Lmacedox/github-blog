import { useEffect } from 'react'
import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { PostCard } from '../PostCard'

export function PostList() {
  const issuesList = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  const fetchIssues = useContextSelector(IssuesContext, (context) => {
    return context.fetchIssues
  })

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return issuesList.map((issue) => (
    <PostCard key={issue.id} {...issue} createdAt={issue.created_at} />
  ))
}
