import {LinkIcon} from "#/components/Icons/LinkIcon.tsx";

export function LinkToProject({link} : {link: string}) {
    return <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm bg-(--color-primary) w-fit text-(--background-color) hover:underline p-1"
    >
        <LinkIcon className="shrink-0" />
        Link to project
    </a>
}
