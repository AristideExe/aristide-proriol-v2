import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/links')({
  component: LinksComponent,
})

function LinksComponent() {
  return <div>Hello "/links"!</div>
}
