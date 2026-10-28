import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
      <div>
        <h1>Projects</h1>
      </div>
  )
}
