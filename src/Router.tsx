import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { Home, Issue } from './pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue/:issueId" element={<Issue />} />
      </Route>
    </Routes>
  )
}
