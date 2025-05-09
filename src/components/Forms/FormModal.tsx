import useFormContext from "../../context/FormContext";

function FormModal() {
    const { visible, flipped } = useFormContext();

    const visibility = visible ? 'visible' : '';
    const flip = flipped ? 'flipped' : '';

    return (
        <div className={`form-modal ${visibility} ${flip}`}>
            
        </div>
        
    )
}

export default FormModal;