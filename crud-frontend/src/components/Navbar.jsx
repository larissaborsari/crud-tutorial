export default function NavBar({onOpen, onSearch}) {

    const handleSearchChange = (event) =>
    {
        onSearch(event.target.value);
    }

    return (
        <>
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" onChange={handleSearchChange}/>
            </div>
            <div className="navbar-end">
            <a className="btn btn-primary" onClick={() => onOpen("add")}>Add Client</a>
            </div>
    </div>
        </>
    )
}