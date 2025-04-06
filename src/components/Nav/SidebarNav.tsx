import { DragEvent } from "react";



function SidebarNav() {
    const handleDragStart = (e: DragEvent<HTMLElement>) => {
        const sidebar = e.currentTarget;
        if (!sidebar!.classList.contains('dragging')) {
            sidebar!.classList.add('dragging')
        }
    }
    const handleDrag = (e: DragEvent<HTMLElement>) => {
        const width = e.clientX;
        const appWrapper = document.getElementById('app-wrapper');
        if (width <= 82) {
            appWrapper?.style.setProperty('grid-template-columns', '82px 1fr')
        } else if (width >= 255 ) {
            appWrapper?.style.setProperty('grid-template-columns', '255px 1fr')

        } else {
            appWrapper?.style.setProperty('grid-template-columns', `${width}px 1fr`)
        }
    } 
    const handleDragEnd = (e: DragEvent<HTMLElement>) => {
        const sidebar = e.currentTarget;
        if (sidebar!.classList.contains('dragging')) {
            sidebar!.classList.remove('dragging')
        }
    } 
    return (
        <nav id="sidebar-nav" className="sidebar-nav active d-none d-md-block" draggable={true} onDragStart={handleDragStart} onDrag={handleDrag} onDragEnd={handleDragEnd}>
            <div className="sidebar-content">
                <h1>Titel</h1>
            </div>
            <div className="sidebar-content">
                <h1>Titel 2</h1>
            </div>
            <div className="sidebar-content">
                <h1>Titel 3</h1>
            </div>
        </nav>
    );
}
export default SidebarNav;