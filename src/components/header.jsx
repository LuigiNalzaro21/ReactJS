

function Header() {
    return (
        <div className="p-4 border border-blue-700 rounded-2xl m-5 flex justify-between items-center">
            <h1 className="text-3xl p-3 ml-1">Start Bootstrap</h1>
            <div className="flex">
                <a href="#" className="mr-10 border border-blue-700 p-3 rounded-md bg-slate-700 text-slate-50 hover:bg-blue-700 hover:text-white">About</a>
                <a href="#" className="mr-10 border border-blue-700 p-3 rounded-md bg-slate-700 text-slate-50 hover:bg-blue-700 hover:text-white">Services</a>
                <a href="#" className="mr-10 border border-blue-700 p-3 rounded-md bg-slate-700 text-slate-50 hover:bg-blue-700 hover:text-white">Portfolio</a>
                <a href="#" className="mr-5 border border-blue-700 p-3 rounded-md bg-slate-700 text-slate-50 hover:bg-blue-700 hover:text-white">Contacts</a>
            </div>
        </div>
    );
}

export default Header;
