
import { Link } from "react-router-dom";
import whiteLogo from "../../assets/img/logo.png";
function BrandLogo({ klazz, column=false, expanded=false } : { klazz?: string, column?: boolean, expanded?: boolean }) {
    const dir = column ? 'flex-column':'flex-row';
    const spanMargin = column ? 'mt-0':'ms-2';
    return (
        <Link className={`d-flex w-3 ${dir} ${klazz ? klazz : ''}`} to={'/'}>
            <img className="w-100" src={whiteLogo} alt="Duvi's logo" />
            {expanded && <span className={`${spanMargin}`}>dmsosa</span>}
        </Link>
    )
}

export default BrandLogo;