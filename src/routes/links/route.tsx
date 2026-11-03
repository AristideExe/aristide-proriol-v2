import {createFileRoute, Link} from '@tanstack/react-router'
import {ExternalLink} from "#/components/Links/ExternalLink.tsx";
import Profile from '#/images/Profile.png';

export const Route = createFileRoute('/links')({
  component: LinksComponent,
})

function LinksComponent() {
  return (
      <div className="md:w-1/3 bg-slate-200 h-screen m-auto md:mt-10 flex flex-col align-items-center md:p-16 px-5 py-14 rounded-t-4xl gap-5">
        <div className="p-5 flex flex-col justify-center items-center text-center gap-2">
            <img src={Profile} className="md:w-1/3 w-1/2"/>
            <h1 className="text-2xl font-bold">Aristide</h1>
            <p>Actuellement en 3e année d'école d'ingénieur à l'ensIIE. Écologie 🌱, Cinéma 🎥 , Escalade 🧗, Jeux vidéos 🎮</p>
        </div>
          <div className="flex flex-col gap-5">
              <Link to={"/"} target="_blank">
                  <ExternalLink>
                      <p>Portfolio</p>
                  </ExternalLink>
              </Link>
              <a href="https://aristideexe.itch.io/" target="_blank">
                  <ExternalLink>
                      <p>itch.io</p>
                  </ExternalLink>
              </a>
              <a href="https://github.com/AristideExe/" target="_blank">
                  <ExternalLink>
                      <p>Github</p>
                  </ExternalLink>
              </a>
              <a href="https://linkedin.com/in/aristide-proriol" target="_blank">
                  <ExternalLink>
                      <p>LinkedIn</p>
                  </ExternalLink>
              </a>
              <a href="https://letterboxd.com/AristideExe/" target="_blank">
                  <ExternalLink>
                      <p>Letterboxd</p>
                  </ExternalLink>
              </a>
              <a href="https://ecologiie.iiens.net/" target="_blank">
                  <ExternalLink>
                      <p>EcologIIE</p>
                  </ExternalLink>
              </a>
          </div>
      </div>
  )
}
