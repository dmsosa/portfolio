
import whiteLogo from "../../assets/img/logo.png";
function BrandLogo({ klazz, column=false, expanded=false } : { klazz?: string, column?: boolean, expanded?: boolean }) {
    const dir = column ? 'flex-column':'flex-row';
    const spanMargin = column ? 'mt-0':'ms-2';
    return (
        <div className={`d-flex w-3 ${dir} ${klazz ? klazz : ''}`} >
            <img className="w-100" src={whiteLogo} alt="Duvi's logo" />
            {expanded && <span className={`${spanMargin}`}>dmsosa</span>}
        </div>
    )
}

export default BrandLogo;