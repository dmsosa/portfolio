import SidebarNavHeader from "./SidebarNavHeader";


function SidebarNav() {
    return (
        <nav id="sidebar-nav" className="sidebar-nav active d-none d-md-block">
            <div className="sidebar-content">
                <SidebarNavHeader/>
                <div className="sidebar-main">
                    <h1>Titel 2</h1>
                </div>
                <div className="sidebar-footer">
                    <h1>Titel 3</h1>
                </div>
            </div>
        </nav>
    );
}
export default SidebarNav;