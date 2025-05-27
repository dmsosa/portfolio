import useFormContext from "../../context/AuthFormContext";
import BenutzerForms from "./BenutzerForms";


function FormModal() {
    const { visible, flipped } = useFormContext();

    const visibility = visible ? 'visible' : '';
    const flip = flipped ? 'flipped' : '';

    return (
        <div className={`form-modal ${visibility}`}>
            <div className={`form-modal-inner ${flip}`}>
                <BenutzerForms/>
            </div>
        </div>
        
    )
}

export default FormModal;