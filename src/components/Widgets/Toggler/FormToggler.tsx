import useFormContext from "../../../context/FormContext";

function FormToggler() {
    const { setFormContext } = useFormContext();

    return (
        <ul className="ul-item mb-4">
            <li className='li-primary'><a onClick={() => {
                setFormContext({ visible: true, flipped: false});
            }} >Login</a></li>
            <li className='li-secondary'><a onClick={() => {
                setFormContext({ visible: true, flipped: true});
            }}>Sign Up</a></li>
        </ul>
        
    )
}

export default FormToggler;