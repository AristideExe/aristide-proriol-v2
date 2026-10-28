import { createFileRoute } from '@tanstack/react-router'
import { SectionHeader } from '#/components/Titles/SectionHeader'
import { UpdateDate } from '../components/UpdateDate/UpdateDate'
import {Title} from "#/components/Titles/Title.tsx";

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div>
        <Title><h1>home</h1></Title>
        <SectionHeader>
            <h2 className="text-3xl font-bold">Presentation</h2>
            <UpdateDate>Updated on 28/10/2026</UpdateDate>
        </SectionHeader>
    </div>
  )
}
