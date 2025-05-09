import { useSidebarContext } from "../../context/SidebarContext";

function SidebarToggler( { role } : { role: 'opener' | 'closer' }) {
    const { expandedLeft, setExpandedLeft } = useSidebarContext();
    const hideButton = role === 'opener' && expandedLeft || role === 'closer' && !expandedLeft;
    const handleClick = () => {
        console.log(expandedLeft)
        setExpandedLeft(!expandedLeft);
    }
    return  (<button onClick={handleClick} className="sidebar-toggler" data-role={role} data-hidden={hideButton}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                    <path id="bar1"/>
                    <path id="bar2"/>
                    <path id="bar3"/>
                </svg>
            </button>)
}
export default SidebarToggler;

