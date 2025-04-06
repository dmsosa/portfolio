import LinkList from "../Widgets/LinkList";



function NavMobile() {
    return (
        <nav className="nav-mobile d-block d-md-none">
            <div className="sidebar-content">
                <LinkList expanded={false}/>
            </div>
        </nav>
    );
}
export default NavMobile;