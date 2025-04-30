
import { ReactNode } from "react";

function Content({ children, title, description, textToRight=false } : { children: ReactNode, title: string, description?: string | undefined, textToRight?: boolean }) {

    return (
        <div className="row row-cols-sm-2">
            <div className={`col-12 ${textToRight ? 'order-0':'order-1'}`}>
                {children}
            </div>
            <div className={`col-12 ${textToRight ? 'order-1':'order-0'}`}>
                <div className="w-100 d-flex flex-column justify-content-center align-items-center p-4">
                    <h2 className="h2 text-epic"><span className="line">{title}</span></h2>
                    {description && <p className="w-80 mx-auto text-center">{description}</p>}
                </div>
            </div>
        </div>
    )
}

export default Content;