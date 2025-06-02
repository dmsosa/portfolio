import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";
import { MdNewLabel } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export default function TagsInput({ tagsArray, parentHandler, tagsLimit } : { tagsArray: string[], parentHandler: (tags: string[]) => void, tagsLimit: number } ) {

    //Input Logik
    const [ tagInput, setTagInput ] = useState<string>('');
    const handleTagChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const inputElement = e.currentTarget;
        if (inputElement.classList.contains('color-danger') || inputElement.classList.contains('shake')) {
            inputElement.classList.remove('color-danger');
            inputElement.classList.remove('shake');
        }
        setTagInput(inputElement.value);
    }

    //Message Logik
    const tagsArrayLength = tagsArray.length;
    const remainingTags =  tagsLimit - tagsArrayLength;
    const initMessage = tagsArrayLength > 1 && tagsArrayLength < tagsLimit ? `you can add ${remainingTags} more tags.` :  tagsArrayLength < 1 ? `you can add up to ${tagsLimit} tags.`: `you can not add more than ${tagsLimit} tags!`;
    const [ message, setMessage ] = useState<string>(initMessage);



    //Add Tags Logik
    const addTag = (tag: string, arrayToAdd: string[], inputParent: HTMLInputElement): boolean => {
        if (tag.length < 3) {
            inputParent.classList.add('color-danger');
            inputParent.classList.add('shake');
            setMessage('each tag must have at least 3 characters!');
            return false;
            } else {
                arrayToAdd.push(tag);
                return true;
            }
    }
    const handleKeydown = (e: KeyboardEvent<HTMLInputElement> ) => {
        const inputParent = e.currentTarget;
        if (e.key === "Enter") {
            e.preventDefault();

            const currentInput = inputParent.value as string;
            const valueArray = currentInput.split(',');

            if (valueArray.length < 1) return;

            const arrayToAdd: string[] = [];
            let remainingSpace = remainingTags;

            for (let i = 0; i < valueArray.length; i++) {
                if (remainingSpace === 0) {
                    inputParent.classList.add('color-danger');
                    inputParent.classList.add('shake');
                    setMessage(`You can not add more than ${tagsLimit} tags!`);
                    return;
                };
                const val = valueArray[i];
                const added = addTag(val, arrayToAdd, inputParent);
                if (added) {
                    remainingSpace--;
                } else return;
            }

            parentHandler(tagsArray.concat(arrayToAdd));
            setTagInput('');
            setMessage(`you can add ${remainingSpace} more tags.`)
        } else if (e.key === "Backspace") {
            if (tagInput.length === 0 ) {
                if (remainingTags >= 10) return;
                const filteredTags = tagsArray.slice(0, tagsArray.length-1);
                parentHandler(filteredTags);
                if (remainingTags > 1) {
                    setMessage(`you can add ${remainingTags} more tags.`);
                } else {
                    setMessage(`you can add up to ${remainingTags} tags.`);
                }
            }
        else return;
    }
    }
    const handleClick = (e: MouseEvent<HTMLDivElement> ) => {
        if (remainingTags >= tagsLimit) return;
        const box = e.currentTarget;
        const value = box.querySelector('span')?.innerText;
        const filteredTags = tagsArray.filter((tag) => tag != value);
        parentHandler(filteredTags);
        if (remainingTags + 1 > 1) {
            setMessage(`you can add ${remainingTags} more tags.`);
        } else {
            setMessage(`you can add up to ${remainingTags} tags.`);
        }
    }
    const handleRemoveAll = () => {
        if (tagsArrayLength >= 10) return;
        parentHandler([]);
        setMessage(`you can add up to ${tagsLimit} tags.`);
    }
    return (
        <div className="tag-input-wrapper border-container container-2">
            <div>
                <div className="d-flex justify-content-start align-items-center gap-2">
                    <MdNewLabel/>
                    <h4>tags</h4>
                </div>
                <p>{message}</p>
            </div>
            <ul className="tag-input-inner">
                {tagsArray.map((tag) => <div key={tag} className="tag-box container-3" ><span onClick={handleClick}>{tag}</span><IoMdClose/></div>)}
                <input className="tag-input border-bottom-primary" type="text" name="tags" id="tags" value={tagInput}  onChange={handleTagChange} onKeyDown={handleKeydown}/>
            </ul>
            <button className="btn btn-secondary" onClick={handleRemoveAll}>Remove All</button>
        </div>
    )
}