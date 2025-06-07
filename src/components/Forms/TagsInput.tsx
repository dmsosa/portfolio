import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";
import { MdNewLabel } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export default function TagsInput({ tagsArray, parentHandler } : { tagsArray: string[], parentHandler: (tags: string[]) => void } ) {

    //Input Logik
    const [ tagInput, setTagInput ] = useState<string>('');
    const tagsLimit = 10;
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
    const addFromArray = (inputArray: string[], inputElement: HTMLInputElement) => {
        const inputArrayClone = [...inputArray];
        let errorMessage = '';
        const arrayToConcatenate: string[] = [];
        let spaces = remainingTags;
        for (let i = 0; i < inputArray.length; i++) {
            const value = inputArray[i];
            errorMessage = addTag(value, arrayToConcatenate, inputElement, spaces);
            if (errorMessage.length > 1) {
                break;
            } else {
                spaces--;
                inputArrayClone.splice(i, 1);
            };
        }
        parentHandler(tagsArray.concat(arrayToConcatenate));
        let message = spaces > 0 ? `you can add ${spaces} more tags!` :`tag limit reached!`;
        setMessage(errorMessage.length > 1 ?  errorMessage : message);
        setTagInput(inputArrayClone.join(','));
    }
    const addTag = (tag: string, arrayToConcatenate: string[], inputElement: HTMLInputElement, spaces: number): string => {
            if (spaces === 0) {
                inputElement.classList.add('color-danger');
                inputElement.classList.add('shake');
                return `You can not add more than ${tagsLimit} tags!`;
            } else if (tag.length < 3) {
                inputElement.classList.add('color-danger');
                inputElement.classList.add('shake');
                return 'each tag must have at least 3 characters!';
            } else if (tagsArray.includes(tag)) {
                inputElement.classList.add('color-danger');
                inputElement.classList.add('shake');
                return `the tag ${tag} is already selected!`;
            } else if (arrayToConcatenate.includes(tag)) {
                inputElement.classList.add('color-danger');
                inputElement.classList.add('shake');
                return `the same tag: '${tag}' can not be added more than once!`;
            } else {
                arrayToConcatenate.push(tag.trim());
                console.log('added')
                return '';
            }
    }
    const handleKeydown = (e: KeyboardEvent<HTMLInputElement> ) => {
        const inputElement = e.currentTarget;
        if (e.key === "Enter") {
            e.preventDefault();
            if (remainingTags === 0) {
                    inputElement.classList.add('color-danger');
                    inputElement.classList.add('shake');
                    setMessage(`You can not add more than ${tagsLimit} tags!`);
                    return;
            };
            const inputArray = tagInput.split(',');
            if (inputArray.length < 1) return;
            addFromArray(inputArray, inputElement);

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
        const value = box.innerText;
        const filteredTags = tagsArray.filter((tag) => tag != value);

        parentHandler(filteredTags);
        if (remainingTags + 1 > 1) {
            setMessage(`you can add ${remainingTags} more tags.`);
        } else {
            setMessage(`you can add up to ${remainingTags} tags.`);
        }
    }
    const handleAddButton = (e: MouseEvent<HTMLButtonElement> ) => {
        const inputElement = document.getElementById("tags") as HTMLInputElement;
        e.preventDefault();
        if (remainingTags === 0) {
                inputElement.classList.add('color-danger');
                inputElement.classList.add('shake');
                setMessage(`You can not add more than ${tagsLimit} tags!`);
                return;
        };
        const inputArray = tagInput.split(',');
        if (inputArray.length < 1) return;
        addFromArray(inputArray, inputElement);
    }
    const handleRemoveAll = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (tagsArrayLength === 0) return;
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
            <div className="d-flex justify-content-start align-items-center gap-2">
                <button className="btn btn-primary" onClick={handleAddButton}>Add</button>
                <button className="btn btn-secondary" onClick={handleRemoveAll}>Remove All</button>
            </div>
        </div>
    )
}