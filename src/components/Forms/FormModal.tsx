import { IoClose } from "react-icons/io5";
import useAuthFormContext from "../../context/AuthFormContext";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { FaExchangeAlt } from "react-icons/fa";
import BrandLogo from "../Widgets/BrandLogo";


function FormModal() {
    const { visible, flipped, authFormMessage, setAuthFormContext } = useAuthFormContext();
    const visibility = visible ? 'visible opacity-1' : '';
    const innerTopPosition = visible ? 'top-0':'';
    const flip = flipped ? 'flipped' : '';

    const handleFlip = () => {
        setAuthFormContext((prev) => ({...prev, flipped: !flipped}))
    }
        const handleClose = () => {
        setAuthFormContext((prev) => ({...prev, visible: !visible}))
    }
    return (
        <div className={`form-modal ${visibility}`}>
            <div className={`form-modal-inner bg-2 border border-width-2
            container-secondary border-container  ${flip}  ${innerTopPosition}`}>
                <div className="front-face  pt-2 px-3">
                     <button className="btn btn-transparent position-absolute top-05  right-1  fs-5 p-0 color-inherit z-index-2 over-secondary bg-danger" onClick={handleClose}><IoClose /></button>
                    <button className="btn btn-transparent position-absolute top-05 left-1 fs-5 color-inherit z-index-2" onClick={handleFlip}><FaExchangeAlt /></button>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <p className="text-center w-80 mt-3">{authFormMessage}</p>
                        <BrandLogo klazz="w-4 fs-6" column expanded />                        <h3 className="h3">log in</h3>
                    </div>
                    <div>
                        <LoginForm/>
                    </div>
                </div>
                <div className="back-face  pt-2 px-3">
                    <button className="btn btn-transparent position-absolute top-05 right-1  fs-5 p-0 color-inherit z-index-2 over-secondary bg-danger" onClick={handleClose}><IoClose /></button>
                    <button className="btn btn-transparent position-absolute top-05 left-1 fs-5 color-inherit z-index-2 over-primary" onClick={handleFlip}><FaExchangeAlt /></button>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <p className="text-center w-80 mt-3">{authFormMessage}</p>
                        <BrandLogo klazz="w-4 fs-6 rotate-90" column />
                        <h3 className="h3">sign up</h3>
                    </div>
                    <div>
                        <SignUpForm/>
                    </div>                
                </div>
            </div>
        </div>
        
    )
}

export default FormModal;