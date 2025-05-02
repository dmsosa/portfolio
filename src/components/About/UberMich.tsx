
import Content from "./Content";
import { ReactNode } from "react";

type TDivContent = {
    img: ReactNode,
    title: string,
    description: string
}
const contents: TDivContent[] = [
    {
        img: <svg xmlns="http://www.w3.org/2000/svg" id="bookSvg" viewBox="0 0 24 24"><path d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z"/></svg>,
        title: "I LIKE TO",
        description: "Use my creativity to make real whatever you imagine, and for that I am equipped with the right set of tools."
    },
    {
        img: <svg fill="#000000" version="1.1" id="pencilSvg" xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 949.993 949.993">
   <g>
       <path d="M909.394,119.347c-25-25-58.2-38.7-93.5-38.7s-68.5,13.8-93.5,38.7l-374.9,374.899l-2.1,2.101l2.1,2.1l56.4,56.4l2.1,2.1
           l2.101-2.1l133.899-133.9l67.5,67.5l-133.799,134l-2.1,2.101l2.1,2.1l56.4,56.4l2.1,2.1l2.1-2.1l375-374.9
           c25-25,38.7-58.2,38.7-93.5s-13.7-68.5-38.7-93.5L909.394,119.347z"/>
       <path d="M19.794,869.246h328c5.101-0.1,9.9-2.1,13.5-5.699l0.101-0.101l0.1-0.1l36.4-41.9l1.899-2.1l-2-2l-72.6-72.4l-2.1-2.1
           l-2.101,2.1l-45.6,45.601c-5.5,5.5-12.9,9-20.8,9.199c-8.5,0.2-16.6-3.1-22.4-9.199c-11.3-11.801-10.6-30.7,0.9-42.301l45.6-45.6
           l2.1-2.1l-2.1-2.101l-65.5-65.5l-2.1-2.1l-2.1,2.1l-203,202.8c-5.5,5.5-7.5,13.7-4.8,20.9c2.9,7.8,10,12.7,18.2,12.7
           C19.594,869.246,19.694,869.246,19.794,869.246z"/>
       <polygon points="312.494,533.446 310.394,531.347 308.293,533.446 246.994,594.746 244.794,596.847 246.994,599.047 
           431.594,783.646 433.694,785.746 435.793,783.646 497.094,722.347 499.293,720.146 497.094,718.047 	"/>
   </g>
   </svg>,
        title: "DESIGN & DO",
        description: "The implementation of your solutions comes easier when you design first, sometimes just drawing what you want can make the difference."
    },
];
function UberMich() {
    return (
        <div className="content py-6">
            <div className="container container-sm">
                { contents.map((content, index) => (
                    <Content 
                    key={content.title}
                    title={content.title}
                    description={content.description}
                    textToRight={index % 2 === 0}
                    >
                        <div className="container-content">
                            {content.img}
                            <svg className="pointer" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 866.929 866.93">
                                <g>
                                    <path d="M144.465,450.93c7.8,46.7,58.9,155.399,159.8,257.5v55.3h362.401v-55v-0.3l36.6-61.5c13.101-21.9,20-47,20-72.5v-187.7
                                        c-0.3-16.3-19.199-32.6-45-37.6c-20.5-4-39.6,0.199-49.8,9.6c-0.3-16.3-19.1-32.6-44.899-37.7c-18.5-3.7-36-0.6-46.7,7
                                        c-3.2-15-21.9-29.2-46.601-34.1c-21.3-4.2-41.199-0.2-51.8,9.1h-0.1c0,0,0,0,0-0.1c-0.5-4.9-27.901-270.3-28-270.7
                                        c-5.101-46.8-81.2-40.7-81.101,5.8l-0.199,436.5c0,5.2-3.801,9.5-8.9,10.2c-0.1,0-0.1,0-0.2,0c-0.6,0.1-1.1,0.1-1.7,0.1
                                        c-14.699-0.399-47.8-0.899-80.1-47.6c-4.3-6.2-8.2-11.8-11.7-16.9C195.865,376.229,136.065,400.63,144.465,450.93z"/>
                                    <path d="M304.465,846.93c0,11,9,20,20,20h322.5c11,0,20-9,20-20v-51.101h-362.5V846.93z"/>
                                </g>
                            </svg>
                    </div>
                    </Content>
                ))}
            </div>
        </div>
    )
}

export default UberMich;