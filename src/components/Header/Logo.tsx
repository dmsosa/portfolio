import whiteLogo from "../../assets/img/logo.png";
import blackLogo from "../../assets/img/logo-black.png"
import { useThemeContext } from "../../context/ThemeContext";
import { useEffect, useState } from "react";

function Logo() {

    const { theme } = useThemeContext();
    const [ logo, setLogo ] = useState(blackLogo);
    useEffect(() => {
        if ( theme === 'light' ) {
            setLogo(blackLogo);
        } else {
            setLogo(whiteLogo);
        }
    }, [theme])
    return (
        <a className="logo"><img src={logo}></img>Dmsosa</a>
    )
}

export default Logo;