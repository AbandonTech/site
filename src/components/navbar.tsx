export default function Navbar() {
    const navOptions = {
        "services": "#services",
        "contact": "#contactUs"
    };

    let generatedNavLinks = [];

    for (const [key, val] of Object.entries(navOptions)) {
        generatedNavLinks.push(
            <a className="flex h-full items-center justify-center duration-300 hover:text-orange-400 hover:cursor-pointer" href={val} key={key}>
                <span className="capitalize">{key}</span>
            </a>
        );         
    }

    return (
        <div className="fixed w-screen bg-gradient-to-b from-slate-800 text-white items-center h-12">
            <div className="flex flex-row h-full space-x-6 items-center">
                <a className="text-2xl text-orange-400 pl-6" href="#home">AbandonTech</a>
                {generatedNavLinks}
            </div>
        </div>
    )
}