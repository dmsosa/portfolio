
import whiteLogo from "../../assets/img/logo.png";
function BrandLogo({ klazz, column=false, expanded=false } : { klazz?: string, column?: boolean, expanded?: boolean }) {
    const dir = column ? 'flex-column':'flex-row';
    const spanMargin = column ? 'mt-0':'ms-2';
    return (
        <div className={`d-flex ${dir} ${klazz}`} >
            <img src={whiteLogo} alt="Duvi's logo" />
            {expanded && <span className={`${spanMargin}`}>dmsosa</span>}
        </div>
    )
}

export default BrandLogo;