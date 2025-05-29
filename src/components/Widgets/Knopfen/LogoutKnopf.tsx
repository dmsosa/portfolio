import { logoutBenutzer } from "../../../services/benutzer.services";
import { useAuth } from "../../../context/AuthContext";
import useAuthFormContext from "../../../context/AuthFormContext";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function LogoutKnopf() {
    const { headers, isAuth, setAuthStatus } = useAuth();
    const { setAuthFormContext } = useAuthFormContext();
    const navigate = useNavigate();


    const handleClick = () => {
        if (!isAuth) {
            setAuthFormContext((prev) => ({...prev, visible: true }));
            return;
        }
        const confirm = window.confirm('Are you sure?');
        if (!confirm) return;

        logoutBenutzer({ headers: headers! })
        .then((loggedStatus) => {
            console.log(loggedStatus)
            localStorage.removeItem('loggedStatus');
            setAuthStatus(loggedStatus);
            navigate('/');
        })
        .catch((error) => {
            console.error(error);
        })
    }

    return <button className="btn btn-transparent over-danger fs-5" onClick={handleClick}><MdLogout/></button>
}