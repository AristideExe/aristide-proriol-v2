import { Outlet, createRootRoute, } from '@tanstack/react-router'
import '../styles.css'
import {ToastContainer} from "react-toastify";

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
      <>
        <Outlet />
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            theme="light"
        />
      </>
  )
}
