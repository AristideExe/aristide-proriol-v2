import { Outlet, createRootRoute, } from '@tanstack/react-router'
import {Header} from "#/components/Header/Header.tsx";
import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Header />
      <div className="mt-20 px-20">
          <Outlet />
      </div>
    </>
  )
}
