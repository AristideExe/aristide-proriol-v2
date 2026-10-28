export function SectionHeader({children}: {children: React.ReactNode}){
    return (
        <div className="flex flex-col gap-2 pb-5">
            {children}
        </div>
    );
}