import { createFileRoute } from '@tanstack/react-router'
import { SectionTitle } from '#/components/Titles/SectionTitle'
import { SectionHeader } from '#/components/Section/SectionHeader'
import { UpdateDate } from '../components/UpdateDate/UpdateDate'
import {Title} from "#/components/Titles/Title.tsx";
import {Section} from "#/components/Section/Section";
import Profile from '#/images/Profile.png';

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div>
        <Title><h1>home</h1></Title>
        <Section>
            <SectionHeader>
                <SectionTitle>
                    <h2 className="text-3xl font-bold">Presentation</h2>
                    <UpdateDate>Updated on 28/10/2026</UpdateDate>
                </SectionTitle>
            </SectionHeader>
            <div className="flex flex-col gap-4 md:gap-10 md:flex-row">
                <p className="flex-2">

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis, tempus luctus eros. Mauris eros nunc, semper mollis tristique quis, facilisis nec nulla. Sed pellentesque lectus fermentum justo vehicula, a scelerisque tellus dapibus. Donec sit amet efficitur erat. Fusce vitae consequat turpis. Quisque blandit dolor id metus tincidunt, eu ornare leo scelerisque. Morbi suscipit elementum velit tristique fermentum. Cras at ante ex. Duis ultricies nisi in sodales finibus. Duis maximus nulla in diam sagittis, vitae egestas ipsum interdum. Nullam vehicula scelerisque ex, ut laoreet dui tincidunt a.
                </p>
                <img src={Profile} alt="Profile" className="flex-1 w-full rounded-full border border-white"/>
            </div>
            <br/>
            <p>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis, tempus luctus eros. Mauris eros nunc, semper mollis tristique quis, facilisis nec nulla. Sed pellentesque lectus fermentum justo vehicula, a scelerisque tellus dapibus. Donec sit amet efficitur erat. Fusce vitae consequat turpis. Quisque blandit dolor id metus tincidunt, eu ornare leo scelerisque. Morbi suscipit elementum velit tristique fermentum. Cras at ante ex. Duis ultricies nisi in sodales finibus. Duis maximus nulla in diam sagittis, vitae egestas ipsum interdum. Nullam vehicula scelerisque ex, ut laoreet dui tincidunt a.
            </p>
            <br/>
            <p>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis, tempus luctus eros. Mauris eros nunc, semper mollis tristique quis, facilisis nec nulla. Sed pellentesque lectus fermentum justo vehicula, a scelerisque tellus dapibus. Donec sit amet efficitur erat. Fusce vitae consequat turpis. Quisque blandit dolor id metus tincidunt, eu ornare leo scelerisque. Morbi suscipit elementum velit tristique fermentum. Cras at ante ex. Duis ultricies nisi in sodales finibus. Duis maximus nulla in diam sagittis, vitae egestas ipsum interdum. Nullam vehicula scelerisque ex, ut laoreet dui tincidunt a.
            </p>
        </Section>
    </div>
  )
}
