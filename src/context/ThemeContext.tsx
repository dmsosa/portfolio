import { ReactNode, useEffect, useState } from "react";
import { createStrictContext, getCookie, setCookie } from "../utils/react-helpers";

export type TThemeContext = {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const [ThemeContextProvider, useTheme  ] = createStrictContext<TThemeContext>({name: "themeContext"});

export function useThemeContext() {
    return useTheme();
}
export function ThemeProvider({ children }: { children: ReactNode | ReactNode[] }) {
    const [theme, setTheme] = useState<string>("dark");

    const removePreviousTheme = (body: HTMLElement) => {
        for (let i = 0; i < body.classList.length ; i ++) {
            let klass = body.classList[i];
            if (klass.indexOf("theme-") == 0) {
                console.log(klass)
                body.classList.remove(klass);
            } else continue;
        }
    }
    useEffect(() => {
        const body = document.body;
        let currentTheme = getCookie("theme");
        if (currentTheme != "" && currentTheme != theme) {
            removePreviousTheme(body);
            body.classList.add(`theme-${theme}`);
            setCookie("theme", theme, 1);
        } else {
            if (!body.classList.contains(theme)) {
                body.classList.add(`theme-${theme}`);
                setCookie("theme", theme, 1);
            }
        }
    }, [theme]);

    return (
    <ThemeContextProvider value={{theme, setTheme}}>
        {children}
    </ThemeContextProvider>)
}
