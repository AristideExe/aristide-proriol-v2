import { createFileRoute } from '@tanstack/react-router'
import {Title} from "#/components/Titles/Title.tsx";
import {UpdateDate} from "#/components/UpdateDate/UpdateDate.tsx";
import {SectionTitle} from "#/components/Titles/SectionTitle.tsx";
import {Section} from "#/components/Section/Section.tsx";
import {SectionHeader} from "#/components/Section/SectionHeader.tsx";
import {Technology} from "#/components/Titles/Technology.tsx";
import {Year} from "#/components/Titles/Year.tsx";
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
                      <h2 className="text-3xl font-bold">A lil horror gamejam 2026</h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
                  <Year>2026</Year>
                  <Technology>Unity, C#</Technology>
              </SectionHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <SectionTitle>
                      <h2 className="text-3xl font-bold">Marie Project (in stand-by)</h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
                  <Year>2026</Year>
                  <Technology>Unreal Engine 5, C++, Blueprints</Technology>
              </SectionHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <SectionTitle>
                      <h2 className="text-3xl font-bold">The Last Bastion</h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
                  <Year>2026</Year>
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
                  <Year>2025</Year>
                  <Technology>Unity, C#</Technology>
              </SectionHeader>
              <p>A simple zombie game where you have to survive against waves of zombies. Upgrade your weapons and your character, and build defenses in order to survive.</p>
              <br/>
              <p>My first Unity project, for my game development class. It was made in a rush, so it is lacking of polish. There are many features that could be improved and bugs I would like to fix.</p>
              <br/>
              <p>Still a very fun project ! I learned how to build a complete Unity game, with UIs, enemy AIs, third person camera, etc... I also tried my best to balance the game. I would like to make a sequel one day.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <SectionTitle>
                      <h2 className="text-3xl font-bold">Monster Hunter New World</h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
                  <Year>2022</Year>
                  <Technology>C#</Technology>
              </SectionHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis.</p>
          </Section>
          <Section>
              <SectionHeader>
                  <SectionTitle>
                      <h2 className="text-3xl font-bold">La folle du manoir (The crazy mansion lady)</h2>
                      <UpdateDate>Updated on 28/10/2026</UpdateDate>
                  </SectionTitle>
                  <Year>2020</Year>
                  <Technology>Unreal Engine, Blueprints</Technology>
              </SectionHeader>
              <p>My first ever videogame. A 3D horror game where you have to find 6 books to escape a mansion. Heavily inspired by Slenderman and Devour.</p>
              <br/>
              <p>I think it was made in a week or so. Very amateurish but it has it's charm ! I'm not sure it can be finished tho, as the difficulty is very hard toward the end.</p>
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
