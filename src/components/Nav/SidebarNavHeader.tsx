import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../Widgets/Avatar";
import SidebarToggler from "./SidebarToggler";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";


function SidebarNavHeader() {
    const { loggedUser } = useAuth();
    return  loggedUser?.role === 'ADMIN' ? <div className="sidebar-header">
                <Avatar bild={loggedUser?.image} username={loggedUser?.username} expanded={true}/>
                <div className="d-flex justify-content-center align-items-center gap-2">
                    <Link to={`/editor/`}/>
                    <SidebarToggler role="closer"/>
                </div>
            </div>
            : 
            <div className="sidebar-header">
                <Avatar bild={loggedUser!.image} username={loggedUser!.username} expanded={true}/>
                <div className="d-flex justify-content-center align-items-center gap-2">
                    <Link to={`/dashboard/`}>
                        <MdOutlineMarkUnreadChatAlt />
                    </Link>
                    <SidebarToggler role="closer"/>
                </div>
            </div>
}
export default SidebarNavHeader;