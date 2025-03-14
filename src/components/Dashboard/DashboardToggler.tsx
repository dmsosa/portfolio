import useDashboardContext, { TDashboardContext } from "../../context/DashboardContext";

function DashboardToggler({ hideButton = false } : { 
    hideButton?: boolean }) {
    
    const { expanded, setExpanded, setNavWidth } = useDashboardContext() as TDashboardContext;

    const showDashboard = () => {
        setNavWidth(200);
        setExpanded(true);
    }

    const hideDashboard = () => {
        setNavWidth(20);
        setExpanded(false);
    }

    const handleClick = () => {
        if (hideButton) {
            hideDashboard();
        } else {
            showDashboard();
        }
    }
    return (<button className={`nav-toggler ${hideButton ? 'nav-hide' : 'nav-open'}`} type="button" aria-expanded={expanded} aria-label="Navbar toggler" aria-controls="dashboard-nav" onClick={handleClick}>
            { hideButton ? 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="50px" height="50px">
                    <path d="M 150 250 L 50 150 L 150 50" id="bar1"/>
                    <path d="M 250 50 L 150 150 L 250 250" id="bar2"/>
                </svg> 
                :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="60px" height="60px">
                    <path d="M 50 50 L 141.406 50 L 250 50" id="bar1"></path>
                    <path d="M 50 150 L 200 150" id="bar2"/>
                    <path  d="M 50 250 L 250 250" id="bar3"/>
                </svg>
            }
            </button>)
};
export default DashboardToggler;