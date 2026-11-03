import { Outlet, createFileRoute } from '@tanstack/react-router'
import {Header} from "#/components/Header/Header.tsx";
import {Footer} from "#/components/Footer/Footer.tsx";
import styles from "./main.module.css";

export const Route = createFileRoute('/_main')({
  component: MainLayout,
})

function MainLayout() {
  return (
      <>
        <div className={styles.main}>
          <Header />
          <div className="mt-20 md:w-3/5 mx-auto px-5 flex-grow">
            <Outlet />
          </div>
          <Footer />
        </div>
      </>
  )
}
