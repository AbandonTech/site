export default function Navbar() {
    const navOptions = {
        "home": "#home",
        "services": "#services",
        "contact us": "#contactUs"
    };

    let generatedNavLinks = [];

    for (const [key, val] of Object.entries(navOptions)) {
        generatedNavLinks.push(
            <a className="flex h-full items-center justify-center p-4 hover:bg-slate-200 hover:cursor-pointer" href={val} key={key}>
                <span className="capitalize">{key}</span>
            </a>
        );         
    }

    return (
        <div className="flex items-center h-12">
            <div className="flex flex-row h-full items-center">
                {generatedNavLinks}
            </div>
        </div>
    )
}