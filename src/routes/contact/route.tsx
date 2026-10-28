import { createFileRoute } from '@tanstack/react-router'
import {Title} from "#/components/Titles/Title.tsx";

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
      <div>
          <Title><h1>contact</h1></Title>
      </div>
  )
}