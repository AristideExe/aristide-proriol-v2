import { createFileRoute } from '@tanstack/react-router'
import {Title} from "#/components/Titles/Title.tsx";
import {SectionHeader} from "#/components/Section/SectionHeader.tsx";
import {SectionTitle} from "#/components/Titles/SectionTitle.tsx";
import {UpdateDate} from "#/components/UpdateDate/UpdateDate.tsx";
import {Section} from "#/components/Section/Section.tsx";

export const Route = createFileRoute('/_main/about')({
  component: About,
})

function About() {
  return (
      <div>
          <Title><h1>about</h1></Title>
          <Section>
              <SectionHeader>
                  <SectionTitle>
                      <h2 className="text-3xl font-bold">Links</h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
              </SectionHeader>
              <ul>
                  <li>GitHub</li>
                  <li>itch.io</li>
                  <li>LinkedIn</li>
                  <li>YouTube</li>
                  <li>Twitter</li>
                  <li>Letterboxd</li>
                  <li>Instagram</li>
              </ul>
          </Section>
      </div>
  )
}
