import { useSidebarContext, TSidebarContext } from "../../context/SidebarContext";

function DashboardToggler({ hideButton = false } : { 
    hideButton?: boolean }) {
    
    const { expandedLeft, setExpandedLeft } = useSidebarContext() as TSidebarContext;


    const showDashboard = () => {
        const nav = document.getElementById("nav")  as HTMLDivElement;
        setExpandedLeft(true);
        if (!nav.classList.contains('active')) {
            console.log('hey')
            nav.classList.add('active');
        } 
    }

    const hideDashboard = () => {
        setExpandedLeft(false);
        const nav = document.getElementById("nav")  as HTMLDivElement;
        if (nav.classList.contains('active')) {
            console.log('now')
            nav.classList.remove('active');
        } 
    }

    const handleClick = () => {
        if (hideButton) {
            hideDashboard();
        } else {
            showDashboard();
        }
    }
    return (<button className='nav-toggler d-sm-block d-none' type="button" aria-expanded={expandedLeft} aria-label={`${hideButton ? 'nav-toggler-hide' : 'nav-toggler-open'}`} aria-controls="dashboard-nav" onClick={handleClick}>
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