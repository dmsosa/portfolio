import { useState } from "react";

export default function KommentForm({ id, body } : { id?: string, body: string }) {
    const [ value, setValue ] = useState(body ? body : 'try to leave a comment!');
return <form >
        <fieldset className={`fieldset`}>
            <textarea name="body" id="komment-body" value={value}></textarea>
            <label htmlFor="komment-body">Write a comment</label>
        </fieldset>
        <div className="d-flex justify-content-end align-items-center gap-2">
            <button className="btn btn-primary">Comment</button>
            <button className="btn btn-danger">Cancel</button>
        </div>

    </form>
}