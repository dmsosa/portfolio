
import { Link } from "react-router-dom";
import { BookSvg, PencilSvg, PointerTwo } from "../Widgets/Svg/ContentSvg";
import TextImageContent from "./TextImageContent";
import { MouseEvent, ReactNode } from "react";

type TDivContent = {
    svg: ReactNode,
    title: string,
    description: string,
    href: string,
}
const contents: TDivContent[] = [
    {
        svg: <BookSvg />,
        title: "I LIKE TO",
        description: "Use my creativity to make real whatever you imagine, and for that I am equipped with the right set of tools.",
        href: '/dashboard'
    },
    {
        svg: <PencilSvg />,
        title: "DESIGN & DO",
        description: "The implementation of your solutions comes easier when you design first, sometimes just drawing what you want can make the difference.",
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
        <div className="content pt-4">
            <div className="container container-sm">
                { contents.map((content, index) => (
                    <TextImageContent 
                    key={content.title}
                    title={content.title}
                    description={content.description}
                    textToRight={index % 2 === 0}
                    >
                        <Link to={content.href} className="d-block position-relative" onMouseOver={handleOver}>
                            <div className="w-50 mx-auto">{content.svg}</div>
                            { index === 1 && <PointerTwo />}
                        </Link>
                    </TextImageContent>
                ))}
            </div>
        </div>
    )
}

export default UberMich;