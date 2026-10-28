import { createFileRoute } from '@tanstack/react-router'
import {Title} from "#/components/Titles/Title.tsx";
import {SectionHeader} from "#/components/Titles/SectionHeader.tsx";
import {UpdateDate} from "#/components/UpdateDate/UpdateDate.tsx";
import {Section} from "#/components/Section/Section.tsx";

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
      <div>
          <Title><h1>contact</h1></Title>

          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">Mail</h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
      </div>
  )
}