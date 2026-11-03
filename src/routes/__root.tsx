import { Outlet, createRootRoute, } from '@tanstack/react-router'
import {Header} from "#/components/Header/Header.tsx";
import {Footer} from "#/components/Footer/Footer.tsx";
import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return <Outlet />
}
