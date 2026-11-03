import * as React from "react";

export function ExternalLink({children} : {children: React.ReactNode}){
    return (
        <div className="bg-white text-center p-5 hover:bg-slate-400 transition-all duration-300 rounded-lg">
            {children}
        </div>
    )
}