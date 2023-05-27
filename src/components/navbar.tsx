export default function Navbar() {
    const navOptions = {
        "home": "#home",
        "services": "#services",
        "contact": "#contactUs"
    };

    let generatedNavLinks = [];

    for (const [key, val] of Object.entries(navOptions)) {
        generatedNavLinks.push(
            <a className="flex h-full items-center justify-center duration-300 hover:text-orange-600 hover:cursor-pointer" href={val} key={key}>
                <span className="capitalize">{key}</span>
            </a>
        );         
    }

    return (
        <div className="w-screen bg-white text-orange-500 items-center h-12 pr-6">
            <div className="flex flex-row justify-end h-full space-x-6 items-center">
                {generatedNavLinks}
            </div>
        </div>
    )
}