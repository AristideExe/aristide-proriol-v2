export function UpdateDate({children}: {children: React.ReactNode}){
    return (
        <div className="text-lg text-(--color-secondary) whitespace-nowrap italic">
            {children}
        </div>
    );
}