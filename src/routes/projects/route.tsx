import { createFileRoute } from '@tanstack/react-router'
import {Title} from "#/components/Titles/Title.tsx";
import {UpdateDate} from "#/components/UpdateDate/UpdateDate.tsx";
import {SectionTitle} from "#/components/Titles/SectionTitle.tsx";
import {Section} from "#/components/Section/Section.tsx";
import {SectionHeader} from "#/components/Section/SectionHeader.tsx";
import {Technology} from "#/components/Titles/Technology.tsx";
import {LinkToProject} from "#/components/Titles/LinkToProject.tsx";

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
      <div>
          <Title><h1>video games</h1></Title>
          <Section>
              <SectionHeader>
                  <SectionTitle>
                      <h2 className="text-3xl font-bold">Marie Project (in stand-by)</h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
                  <Technology>Unreal Engine 5, C++, Blueprints</Technology>
              </SectionHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <SectionTitle>
                      <h2 className="text-3xl font-bold">A lil horror gamejam 2026</h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
                  <Technology>Unity, C#</Technology>
              </SectionHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <SectionTitle>
                      <h2 className="text-3xl font-bold">The Last Bastion</h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
                  <Technology>Unity, C#</Technology>
                  <LinkToProject link={"https://aristideexe.itch.io/the-last-bastion"} />
              </SectionHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <SectionTitle>
                      <h2 className="text-3xl font-bold">Tick Tack Attack</h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
                  <Technology>Unity, C#</Technology>
              </SectionHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <SectionTitle>
                      <h2 className="text-3xl font-bold">Monster Hunter New World</h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
                  <Technology>C#</Technology>
              </SectionHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>

          <Title><h1>websites</h1></Title>

          <Section>
              <SectionHeader>
                  <SectionTitle>
                      <h2 className="text-3xl font-bold">FiLiGRANe website</h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
                  <Technology>React, TS, CSS</Technology>
              </SectionHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <SectionTitle>
                      <h2 className="text-3xl font-bold">ÉcologIIE website</h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
                  <Technology>React, JS, CSS</Technology>
                  <LinkToProject link={"https://ecologiie.iiens.net"} />
              </SectionHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>

          <Title><h1>internship</h1></Title>

          <Section>
              <SectionHeader>
                  <SectionTitle>
                      <h2 className="text-3xl font-bold">IRD </h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
                  <Technology>Java 24, PosgreSQL 17, GraphQL, Jooq, React, TS, CSS</Technology>
              </SectionHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <SectionTitle>
                      <h2 className="text-3xl font-bold">ANSM </h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
                  <Technology>Java 24, PosgreSQL 17, GraphQL, Jooq, React, TS, CSS</Technology>
              </SectionHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>

          <Section>
              <SectionHeader>
                  <SectionTitle>
                      <h2 className="text-3xl font-bold">STEA </h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
              </SectionHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
      </div>
  )
}
