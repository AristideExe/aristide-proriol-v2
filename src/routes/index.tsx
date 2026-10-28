import { createFileRoute } from '@tanstack/react-router'
import { SectionHeader } from '#/components/Titles/SectionHeader'
import { UpdateDate } from '../components/UpdateDate/UpdateDate'
import {Title} from "#/components/Titles/Title.tsx";
import {Section} from "#/components/Section/Section";

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div>
        <Title><h1>home</h1></Title>
        <Section>
            <SectionHeader>
                <h2 className="text-3xl font-bold">Presentation</h2>
                <UpdateDate>Updated on 28/10/2026</UpdateDate>
            </SectionHeader>
            <p>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel vulputate metus. Pellentesque arcu mauris, posuere ac dignissim vel, tincidunt ac lectus. Phasellus eu suscipit magna. Vivamus sapien sapien, posuere sit amet massa mattis, tempus luctus eros. Mauris eros nunc, semper mollis tristique quis, facilisis nec nulla. Sed pellentesque lectus fermentum justo vehicula, a scelerisque tellus dapibus. Donec sit amet efficitur erat. Fusce vitae consequat turpis. Quisque blandit dolor id metus tincidunt, eu ornare leo scelerisque. Morbi suscipit elementum velit tristique fermentum. Cras at ante ex. Duis ultricies nisi in sodales finibus. Duis maximus nulla in diam sagittis, vitae egestas ipsum interdum. Nullam vehicula scelerisque ex, ut laoreet dui tincidunt a.
            </p>
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
