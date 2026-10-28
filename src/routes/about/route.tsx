import { createFileRoute } from '@tanstack/react-router'
import {Title} from "#/components/Titles/Title.tsx";

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
      <div>
          <Title><h1>about</h1></Title>
      </div>
  )
}
