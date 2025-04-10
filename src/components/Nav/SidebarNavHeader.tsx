import { useAuth } from "../../context/AuthContext";
import Avatar from "../Widgets/Avatar";
import boy from "../../assets/img/boy.png"
import EditKnopf from "../Widgets/Knopfen/EditKnopf";
import SidebarToggler from "./SidebarToggler";


function SidebarNavHeader() {
    const { isAuth, loggedUser } = useAuth();
    return isAuth && loggedUser ?
            <div className="sidebar-header">
                <Avatar bild={loggedUser.image} username={loggedUser.username} expanded={true}/>
                <EditKnopf to={`profiles/${loggedUser.username}`}/>
                <SidebarToggler role="closer"/>
            </div>
            :
            <div className="sidebar-header">
                <Avatar bild={boy} username={'guest'} expanded={true}/>
                <div className="d-flex justify-content-center align-items-center gap-2">
                    <EditKnopf to={`profiles/guest`}/>
                    <SidebarToggler role="closer"/>
                </div>
            </div>
}
export default SidebarNavHeader;