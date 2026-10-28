import { createFileRoute } from '@tanstack/react-router'
import {Title} from "#/components/Titles/Title.tsx";

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
      <div>
          <Title><h1>projects</h1></Title>
      </div>
  )
}
