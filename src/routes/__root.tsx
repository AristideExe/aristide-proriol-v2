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
      <div className="mt-20 md:w-3/5 mx-auto px-5">
          <Outlet />
      </div>
    </>
  )
}
