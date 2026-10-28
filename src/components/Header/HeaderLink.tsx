import {Link, type LinkComponentProps} from "@tanstack/react-router";

export function HeaderLink (linkProps : LinkComponentProps) {
    return <Link {...linkProps} className="text-xl hover:text-(--background-color) transition-all duration-200"/>;
}