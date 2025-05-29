import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../Widgets/Avatar";
import SidebarToggler from "./SidebarToggler";
import { MdBook } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import LogoutKnopf from "../Widgets/Knopfen/LogoutKnopf";


function SidebarNavHeader() {
    const { loggedUser } = useAuth();


    return  <div className="sidebar-header">
                <Avatar bild={loggedUser?.image} username={loggedUser?.username} expanded={true}/>
                <div className="d-flex justify-content-center align-items-center gap-2">
                {loggedUser.role === 'ADMIN' ?  
                    <>
                        <Link to={`/editor/`}><FaEdit className="over-primary"/></Link>
                        <LogoutKnopf />
                    </>
                    :
                    <>
                        <Link to={`/dashboard/`}>
                            <MdBook />
                        </Link>
                        <LogoutKnopf />
                    </>
                }
                    <SidebarToggler role="closer"/>
                </div> 
            </div>
}
export default SidebarNavHeader;