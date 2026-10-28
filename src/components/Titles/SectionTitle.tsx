export function SectionTitle({children}: {children: React.ReactNode}){
    return (
        <div className="flex flex-col md:flex-row text-center md:text-left items-center md:gap-4">
            {children}
            <div className="flex-1 border-b-2"></div>
        </div>
    );
}