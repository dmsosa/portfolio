import { useThemeContext } from "../../context/ThemeContext";

function ThemeToggler() {
    const { theme, setTheme } = useThemeContext();

    const handleClick = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <button className={`theme-toggler ${theme === "light" ? "dark":"light"}`} onClick={handleClick}>
            <i className="bi bi-circle-half"></i>
        </button>
        
    )
}

export default ThemeToggler;