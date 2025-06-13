
import { ReactNode } from "react";

function  TextImageContent({ children, title, text, textToRight=false } : { children: ReactNode, title: string, text: string | undefined, textToRight?: boolean }) {

    return (
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <div className={`${textToRight ? 'order-0':'order-1'}`}>
                {children}
            </div>
            <div className={`${textToRight ? 'order-1':'order-0'}`}>
                <div className="w-100 d-flex flex-column justify-content-center align-items-center p-4">
                    <h2 className="h2"><span className="line">{title}</span></h2>
                    <p className="w-80 mx-auto text-center">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default TextImageContent;