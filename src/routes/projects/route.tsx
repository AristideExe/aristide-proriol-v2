import { createFileRoute } from '@tanstack/react-router'
import {Title} from "#/components/Titles/Title.tsx";
import {UpdateDate} from "#/components/UpdateDate/UpdateDate.tsx";
import {SectionHeader} from "#/components/Titles/SectionHeader.tsx";
import {Section} from "#/components/Section/Section.tsx";

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
              <p>Technology : Unreal Engine 5, C++, Blueprints</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">A lil horror gamejam 2026</h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <p>Technology : Unity, C#</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">The Last Bastion</h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <p>Technology : Unity, C#</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">Tick Tack Attack</h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <p>Technology : Unity, C#</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">Monster Hunter New World</h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <p>Technology : C#</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>

          <Title><h1>websites</h1></Title>

          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">FiLiGRANe website</h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <p>Technology : React, TS, CSS</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">ÉcologIIE website</h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <p>Technology : React, JS, CSS</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>

          <Title><h1>internship</h1></Title>

          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">IRD </h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <p>Technology : Java 24, PosgreSQL 17, GraphQL, Jooq, React, TS, CSS</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <h2 className="text-3xl font-bold">ANSM </h2>
                  <UpdateDate>Updated on 28/10/2026</UpdateDate>
              </SectionHeader>
              <p>Technology : Java 24, PosgreSQL 17, GraphQL, Jooq, React, TS, CSS</p>
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
