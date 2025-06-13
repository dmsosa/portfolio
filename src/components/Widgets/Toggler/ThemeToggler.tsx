import { FaMoon, FaSun } from "react-icons/fa";
import { useThemeContext } from "../../../context/ThemeContext";

export default function ThemeToggler() {
    const { theme, setTheme } = useThemeContext();
    return <div className={`theme-toggler ${theme === 'dark' ? '': 'active'}`} onClick={() => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }}>
            <FaSun className="sun"/>
            <FaMoon className="moon"/>
    </div>
}