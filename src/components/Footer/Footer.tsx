export function Footer () {
    const year = new Date().getFullYear();
    return (
        <footer className="flex flex-col items-center justify-center w-full bg-black text-(--text-color) p-6">
            <p>
                © {year} Aristide Proriol - All rights reserved.
            </p>
        </footer>
    );
}