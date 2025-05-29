
import { ReactNode } from "react";

function  TextImageContent({ children, title, description, textToRight=false } : { children: ReactNode, title: string, description?: string | undefined, textToRight?: boolean }) {

    return (
        <div className="d-flex flex-column flex-sm-row">
            <div className={`${textToRight ? 'order-0':'order-1'}`}>
                {children}
            </div>
            <div className={`${textToRight ? 'order-1':'order-0'}`}>
                <div className="w-100 d-flex flex-column justify-content-center align-items-center p-4">
                    <h2 className="h2 text-epic"><span className="line">{title}</span></h2>
                    {description && <p className="w-80 mx-auto text-center">{description}</p>}
                </div>
            </div>
        </div>
    )
}

export default TextImageContent;