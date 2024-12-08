import { useEffect, useState } from "react";

function Typewriter({ messages, delay } : { 
    messages: string[], 
    delay: number, 
    infinite?: boolean
}) {
    const [ text, setText ] = useState<string>("");
    const [ index, setIndex ] = useState<number>(0);

    const [ messageIndex, setMessageIndex ] = useState<number>(0);

    useEffect(() => {
        let timeout: number | undefined;
        let currentMessage: string | undefined = messages[messageIndex] ;

        if (currentMessage === undefined) {
            timeout = setTimeout(() => {
                setText("");
                setIndex(0);
                setMessageIndex(0);
            }, 3500);
        } else if (index < currentMessage.length) {
            timeout = setTimeout(() => {
                setText((prev) => prev + currentMessage[index]);
                setIndex((prev) => prev + 1);
            }, delay);
        } else if (messageIndex < messages.length) {
            setTimeout(() => {
                setText("");
                setIndex(0);
                setMessageIndex((prev) => prev + 1);
            }, 3500)
        }
        return () => clearTimeout(timeout);
     
    }, [text, index, messageIndex])
    return (<span className="typewriter__text">{text}</span>)
}

export default Typewriter;