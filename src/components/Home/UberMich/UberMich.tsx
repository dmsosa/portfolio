
import { Link } from "react-router-dom";
import { BookSvg, PencilSvg, PointerTwo } from "../../Widgets/Svg/ContentSvg";
import TextImageContent from "./TextImageContent";
import { MouseEvent, ReactNode } from "react";

type TDivContent = {
    svg: ReactNode,
    title: string,
    text: string,
    href: string,
}
const contents: TDivContent[] = [
    {
        svg: <BookSvg />,
        title: "I LIKE TO",
        text: "Use my creativity to make real whatever you imagine, and for that I am equipped with the right set of tools.",
        href: '/dashboard'
    },
    {
        svg: <PencilSvg />,
        title: "DESIGN & DO",
        text: "The implementation of your solutions comes easier when you design first, sometimes just drawing what you want can make the difference.",
        href: '/cv'
    },
];
function UberMich() {
    const handleOver = (e: MouseEvent<HTMLAnchorElement>) => {
        const click = e.currentTarget.querySelector("#pointer");
        if (!click) return;
        click.classList.add("hovered");
    }
    return (
        <>
            <div className="container container-sm">
                { contents.map((content, index) => (
                    <TextImageContent 
                    key={content.title}
                    title={content.title}
                    text={content.text}
                    textToRight={index % 2 === 0}
                    >
                        <Link to={content.href} className="d-block position-relative" onMouseOver={handleOver}>
                            <div className="mx-auto w-50 w-md-100">{content.svg}</div>
                            { index === 1 && <PointerTwo />}
                        </Link>
                    </TextImageContent>
                ))}
            </div>
        </>
    )
}

export default UberMich;