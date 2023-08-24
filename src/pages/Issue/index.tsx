import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api/axios'

export function Issue() {
  const { issueId } = useParams()

  async function getIssueById(id: string | number) {
    return await api.get(
      `respos/${import.meta.env.VITE_GITHUB_USERNAME}/${
        import.meta.env.VITE_GITHUB_REPO
      }/issue/${id}`,
    )
  }

  useEffect(() => {
    if (issueId) getIssueById(issueId)
  }, [issueId])

  return (
    <main>
      <h1>Issue</h1>
    </main>
  )
}
