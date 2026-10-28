import { createFileRoute } from '@tanstack/react-router'
import {Title} from "#/components/Titles/Title.tsx";
import {UpdateDate} from "#/components/UpdateDate/UpdateDate.tsx";
import {SectionHeader} from "#/components/Titles/SectionHeader.tsx";
import {Section} from "#/components/Section/Section.tsx";
import {Technology} from "#/components/Titles/Technology.tsx";

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
      <div>
          <Title><h1>video games</h1></Title>
          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">Marie Project (in progress)</h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <Technology>Unreal Engine 5, C++, Blueprints</Technology>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">A lil horror gamejam 2026</h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <Technology>Unity, C#</Technology>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">The Last Bastion</h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <Technology>Unity, C#</Technology>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">Tick Tack Attack</h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <Technology>Unity, C#</Technology>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">Monster Hunter New World</h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <Technology>C#</Technology>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>

          <Title><h1>websites</h1></Title>

          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">FiLiGRANe website</h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <Technology>React, TS, CSS</Technology>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">ÉcologIIE website</h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <Technology>React, JS, CSS</Technology>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>

          <Title><h1>internship</h1></Title>

          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">IRD </h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <Technology>Java 24, PosgreSQL 17, GraphQL, Jooq, React, TS, CSS</Technology>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">ANSM </h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <Technology>Java 24, PosgreSQL 17, GraphQL, Jooq, React, TS, CSS</Technology>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>

          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">STEA </h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
      </div>
  )
}
