import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../Widgets/Avatar";
import SidebarToggler from "./SidebarToggler";
import { FaReceipt } from "react-icons/fa";
import LogoutKnopf from "../Widgets/Knopfen/LogoutKnopf";


function SidebarNavHeader() {
    const { loggedUser } = useAuth();


    return  <div className="sidebar-header border-bottom pb-3 mb-4">
                <Avatar bild={loggedUser?.image} username={loggedUser?.username} expanded={true}/>
                <div className="d-flex justify-content-center align-items-center">
                {loggedUser.role === 'ADMIN' ?  
                    <>
                        <LogoutKnopf />
                    </>
                    :
                    <>
                        <Link to={`/dashboard/`}><FaReceipt className="over-primary"/></Link>
                    </>
                }
                    <SidebarToggler role="closer"/>
                </div> 
            </div>
}
export default SidebarNavHeader;