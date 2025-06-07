import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

export default function CopyEmail() {
    const [ hidden, setHidden ] = useState(false);
    const [ message, setMessage ] = useState('click here to copy!')

    const backToInitState = () => {
            setHidden(true);
            setMessage('click here to copy!');
    }
    const handleClick = () => {
            const inputElement = document.getElementById('copyEmail') as HTMLInputElement;
            inputElement.select();
            inputElement.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(inputElement.value);
            setMessage('copied!');
            setHidden(false);
            const timeout = setTimeout(() => {
                backToInitState();
                clearTimeout(timeout);
            }, 1000)
    }
    return (
        <div className="copy-input border bg-3">
            <div className={`copy-input-modal bg-1 border-top-bg1 ${!hidden ? 'shake shake-rotating': ''}`} aria-hidden={hidden}><span className="text-center">{message}</span></div>
            <input type="text" name="copy-email" id="copyEmail" value={'dmsosa21@outlook.com'} readOnly/>
            <button className="btn btn-primary p-0 fs-5" onClick={handleClick}onMouseOver={() => { setHidden(false)}} onMouseLeave={() => { setHidden(true)}}><FaRegCopy /></button>
        </div>
    )
}