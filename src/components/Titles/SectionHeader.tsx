export function SectionHeader({children}: {children: React.ReactNode}){
    return (
        <div className="flex items-center gap-4">
            {children}
            <div className="flex-1 border-b-2"></div>
        </div>
    );
}