
import SectionTitle from "../Widgets/SectionTitle";
import { ReactNode } from "react";

function Content({ children, title, description, textToRight=false } : { children: ReactNode, title: string, description?: string | undefined, textToRight?: boolean }) {

    return (
        <div className="row row-cols-sm-2">
            <div className={`col-12 ${textToRight ? 'order-0':'order-1'}`}>
                {children}
            </div>
            <div className={`col-12 ${textToRight ? 'order-1':'order-0'}`}>
                <div className="w-100 d-flex flex-column justify-content-center align-items-center p-4">
                    <SectionTitle text={title}></SectionTitle>
                    {description && <p className="description w-80 mx-auto text-center">{description}</p>}
                </div>
            </div>
        </div>
    )
}

export default Content;