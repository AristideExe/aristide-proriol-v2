import { Outlet, createRootRoute, } from '@tanstack/react-router'
import {Header} from "#/components/Header/Header.tsx";
import {Footer} from "#/components/Footer/Footer.tsx";
import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="h-screen flex flex-col">
          <Header />
          <div className="mt-20 md:w-3/5 mx-auto px-5 flex-grow">
              <Outlet />
          </div>
          <Footer />
      </div>
    </>
  )
}
