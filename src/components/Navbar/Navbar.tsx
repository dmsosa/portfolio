function Navbar() {
    return (
        <div className="navbar navbar-expand navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold">
                    <img 
                    src="https://i.imgur.com/uM4qKvz_d.webp?maxwidth=520&shape=thumb&fidelity=high"
                    width={50}
                    alt="dmsosa's logo"></img>
                    Dmsosa
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link">Uber Mich</a></li>
                    <li className="nav-item"><a className="nav-link">Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link">Contact</a></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Navbar;