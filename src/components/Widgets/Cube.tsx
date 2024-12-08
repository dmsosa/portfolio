import LinkIcon from "./LinkIcon";

function Cube() {
    return ( 
        <div className="cube my-5 mx-auto">
            <div className="side-outer front"></div>
            <div className="side-inner front">
                <LinkIcon icon="robot"/>
            </div>
            <div className="side-outer back"></div>
            <div className="side-inner back">
                <LinkIcon icon="emoji-smile-fill"/>
            </div>
            <div className="side-outer left"></div>
            <div className="side-inner left">
                <LinkIcon icon="github"/>
            </div>
            <div className="side-outer right"></div>
            <div className="side-inner right">
                <LinkIcon icon="piggy-bank-fill"/>
            </div>
            <div className="side-outer top"></div>
            <div className="side-inner top">
                <LinkIcon icon="linkedin"/>
            </div>
            <div className="side-outer bot"></div>
            <div className="side-inner bot">
                <LinkIcon icon="instagram"/>
            </div>
        </div>
    )
}

export default Cube;