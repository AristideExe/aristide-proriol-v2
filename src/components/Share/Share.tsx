import {Icon} from "#/components/Icons/Icon.tsx";
import {toast} from "react-toastify";

export function Share({link} : {link: string}){
    return (
        <button
            className="absolute right-5 shrink-0 text-xl hover:bg-slate-400 p-2 rounded-full cursor-pointer transition-all duration-300"
            onClick={() => {
                toast("Copied link to " + link);
                navigator.clipboard.writeText(link);
            }}
        >
            <Icon name="share" />
        </button>
    )
}