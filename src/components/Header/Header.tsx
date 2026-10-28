import {HeaderLink} from "#/components/Header/HeaderLink.tsx";

export function Header() {
  return (
    <header className="header flex justify-evenly p-5 bg-black text-white fixed top-0 left-0 right-0">
        <HeaderLink to="/">home</HeaderLink>
        <HeaderLink to="/about">about</HeaderLink>
        <HeaderLink to="/projects">projects</HeaderLink>
        <HeaderLink to="/contact">contact</HeaderLink>
    </header>
  );
}