import { useEffect, useState } from "react";

export default function useHeaderScroll() {
    const [ prevScrollY, setPrevScrollY ] = useState<number>(0);
    const handleScroll = () => {
        const header = document.getElementById('header') as HTMLElement;
        const main = document.querySelector('main') as HTMLElement;
        if (!header || !main) return;
        const currentScrollY = main.scrollTop;
        if (currentScrollY > prevScrollY && !header.classList.contains('scrolled')) {
            header.classList.add('scrolled');
        } else if (currentScrollY < prevScrollY && header.classList.contains('scrolled')) {
            header.classList.remove('scrolled');
        }
        setPrevScrollY(currentScrollY);
    };

    useEffect(() => {
        const main = document.querySelector('main') as HTMLElement;
        if (!main) return;
        main.addEventListener('scroll', handleScroll);
        return () => {
            main.removeEventListener('scroll', handleScroll);
        }
    }, [prevScrollY])
}