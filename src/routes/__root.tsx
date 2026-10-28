import { Outlet, createRootRoute, Link } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
        <div>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/projects">projects</Link>
            <Link to="/contact">contact</Link>
        </div>
      <Outlet />
    </>
  )
}
