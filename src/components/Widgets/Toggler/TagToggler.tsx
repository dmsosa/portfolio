import { ChangeEvent, useState } from "react";

export default function TagToggler({ selectedTags, setSelectedTags } : {
    selectedTags: string,
    setSelectedTags: React.Dispatch<React.SetStateAction<string>>,
}) {
    const [ inputTag, setInputTag ] = useState<string>("");
    const updateInputTag = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTag(e.target.value);
    }
    const addTag = () => {
        setSelectedTags((prev) => prev+","+inputTag);
    }
    const removeTag = (tag: string) => {
        const regExp = new RegExp(tag + ",");
        setSelectedTags((prev) => prev.replace(regExp, ''));
    }
    return (
        <div className="container">
            <div className="row">
                <label htmlFor="inputTag"></label>
                <span>icon</span>
                <input id="inputTag" type="text" value={inputTag} onChange={updateInputTag}/>
                <button onClick={addTag}>search</button>
            </div>
            <div className="row">
                <ul className="item-ul">
                    {selectedTags.split(",").map((tag) => 
                        <li key={tag} onClick={() => removeTag(tag)}>
                            <a>{tag}</a>
                            <span>X</span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
    
     
