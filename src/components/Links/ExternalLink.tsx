import * as React from "react";

export function ExternalLink({children} : {children: React.ReactNode}){
    return (
        <div className="relative flex items-center justify-center bg-white text-center px-5 hover:bg-slate-300 transition-all duration-300 rounded-lg font-bold">
            {children}
        </div>
    )
}
