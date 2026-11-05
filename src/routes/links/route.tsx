import {createFileRoute, Link} from '@tanstack/react-router'
import {ExternalLink} from "#/components/Links/ExternalLink.tsx";
import Profile from '#/images/Profile.png';
import {Icon} from "#/components/Icons/Icon.tsx";
import {Share} from "#/components/Share/Share.tsx";

export const Route = createFileRoute('/links')({
  component: LinksComponent,
})

function LinksComponent() {
  return (
      <div className="bg-gray-500 md:pt-10">
          <div className="md:w-1/3 min-h-screen bg-slate-200 mx-auto flex flex-col align-items-center px-5 py-14 md:rounded-t-4xl gap-5 shadow">
              <div className="p-5 flex flex-col justify-center items-center text-center gap-2">
                  <img src={Profile} className="md:w-1/3 w-1/2"/>
                  <h1 className="text-2xl font-bold">Aristide</h1>
                  <p>Actuellement en 3e année d'école d'ingénieur à l'ensIIE. Écologie 🌱, Cinéma 🎥 , Escalade 🧗, Jeux vidéos 🎮</p>
              </div>
              <div className="flex flex-col gap-4">
                  <ExternalLink>
                      <Link to={"/"} target="_blank" className="w-full h-full py-7">
                          <Icon name="computer" className="absolute left-5 shrink-0 text-xl" />
                          <p>Portfolio</p>
                      </Link>
                      <Share link="https://aristideproriol.com" />
                  </ExternalLink>
                  <ExternalLink>
                      <a href="https://aristideexe.itch.io/" target="_blank" className="w-full h-full py-7">
                          <Icon name="gamepad" className="absolute left-5 shrink-0 text-xl" />
                          <p>itch.io</p>
                      </a>
                      <Share link="https://aristideexe.itch.io/" />
                  </ExternalLink>
                  <ExternalLink>
                      <a href="https://github.com/AristideExe/" target="_blank" className="w-full h-full py-7">
                          <Icon name="github" className="absolute left-5 shrink-0 text-xl" />
                          <p>Github</p>
                      </a>
                      <Share link="https://github.com/AristideExe/" />
                  </ExternalLink>
                  <ExternalLink>
                      <a href="https://linkedin.com/in/aristide-proriol" target="_blank" className="w-full h-full py-7">
                          <Icon name="linkedin" className="absolute left-5 shrink-0 text-xl" />
                          <p>LinkedIn</p>
                      </a>
                      <Share link="https://linkedin.com/in/aristide-proriol" />
                  </ExternalLink>
                  <ExternalLink>
                      <a href="https://letterboxd.com/AristideExe/" target="_blank" className="w-full h-full py-7">
                          <Icon name="film" className="absolute left-5 shrink-0 text-xl" />
                          <p>Letterboxd</p>
                      </a>
                      <Share link="https://letterboxd.com/AristideExe/" />
                  </ExternalLink>
                  <ExternalLink>
                      <a href="https://ecologiie.iiens.net/" target="_blank" className="w-full h-full py-7">
                          <Icon name="plant" className="absolute left-5 shrink-0 text-xl" />
                          <p>EcologIIE</p>
                      </a>
                      <Share link="https://ecologiie.iiens.net/" />
                  </ExternalLink>
              </div>
          </div>
      </div>
  )
}
