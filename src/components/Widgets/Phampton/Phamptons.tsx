export function ArtikelInfoPhamton() {
    //if author, remove und edit knopf
    //if not: follow und fav knopf
    //slug
        return (<div className="position relative mb-3 position-relative rounded bg-dark2 pt-5 px-0">
                    <div className="d-flex justify-content-start align-items-center">
                        <div className="phamton phamton-circle w-3 h-3 mx-3"></div>
                        <div className="div">
                            <div className="phamton phamton-square w-6 h-2"></div>
                            <div className="phamton phamton-square w-6 h-1"></div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center ms-5 flex-column flex-md-row">
                            <div className="phamton phamton-square-round w-3 h-2 h-2"></div>
                            <div className="phamton phamton-square-round w-3 h-2 ms-md-3"></div>
                        </div>
                    </div>
                    <div className="phamton phamton-square h-2 w-6 ms-5"></div>
                    <div className="phamton phamton-square h-6 w-75 ms-5"></div>
                    <div className="phamton phamton-line w-75 h-1 mx-auto"></div>
                    <div className="d-flex justify-content-start align-items-center mt-1 w-75 ms-5">
                        <div className="phamton phamton-square w-3"></div>
                        <div className="phamton phamton-square w-3 ms-3"></div>
                        <div className="phamton phamton-square w-3 ms-3"></div>
                        <div className="phamton phamton-square w-3 ms-3"></div>
                        <div className="phamton phamton-square w-3 ms-3"></div>
                    </div>
                    <div className="phamton phamton-square position-absolute top-1 right-1 w-6 h-1"></div>
                </div>
    )
}
export function BenutzerInfoPhamton() {
    //if author, remove und edit knopf
    //if not: follow und fav knopf
    //slug
        return (<div className="position relative mb-3 position-relative rounded bg-dark2 py-3 px-0">
                    <div className="d-flex justify-content-start align-items-center">
                        <div className="phamton phamton-circle w-3 h-3 mx-3"></div>
                        <div className="div">
                            <div className="phamton phamton-square w-6 h-2"></div>
                            <div className="phamton phamton-square w-6 h-1"></div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center ms-5">
                            <div className="phamton phamton-square-round w-3 "></div>
                        </div>
                    </div>
                    <div className="phamton phamton-line w-75 h-1 ms-5 mt-3"></div>
                    <div className="phamton phamton-square w-75 h-6 ms-5"></div>
                    <div className="d-flex justify-content-start align-items-center mt-1 w-75 ms-5">
                        <div className="phamton phamton-square w-6"></div>
                        <div className="phamton phamton-square w-6 ms-3"></div>
                        <div className="phamton phamton-square w-6 ms-3"></div>
                    </div>
                </div>
    )
}
export function KommentInfoPhamton() {
    //if author, remove und edit knopf
    //if not: follow und fav knopf
    //slug
        return (<div className="position relative mb-3 position-relative rounded bg-dark2 py-3 px-0">
            <div className="d-flex justify-content-start align-items-center">
                <div className="phamton phamton-circle w-4 h-4 mx-3"></div>
                <div className="div">
                    <div className="phamton phamton-square w-6 h-2"></div>
                    <div className="phamton phamton-square w-6 h-1"></div>
                </div>
            </div>
            <div className="phamton phamton-line w-75 h-1 ms-5"></div>
            <div className="phamton phamton-line w-75 h-1 ms-5"></div>
            <div className="phamton phamton-line w-75 h-1 ms-5"></div>
            <div className="d-flex justify-content-start align-items-center mt-1 w-75 ms-5">
                <div className="phamton phamton-square w-6"></div>
                <div className="phamton phamton-square w-6 ms-3"></div>
                <div className="phamton phamton-square w-6 ms-3"></div>
            </div>
            <div className="phamton phamton-square position-absolute top-1 right-1 w-3 h-1"></div>
        </div>
    )
}
export function PaginationPhamton() {
    //if author, remove und edit knopf
    //if not: follow und fav knopf
    //slug
        return (
            <div className="d-flex justify-content-start align-items-center mt-1 w-75 mx-auto">
                <div className="phamton phamton-square w-4"></div>
                <div className="phamton phamton-square w-4 ms-3"></div>
                <div className="phamton phamton-square w-4 ms-3"></div>
                <div className="phamton phamton-square w-4 ms-3"></div>
                <div className="phamton phamton-square w-4 ms-3"></div>
            </div>
    )
}
export function ArtikelArrayPhamton() {
    //if author, remove und edit knopf
    //if not: follow und fav knopf
    //slug
        return (<div>
            <BenutzerInfoPhamton/>
            <ArtikelInfoPhamton/>
            <KommentInfoPhamton/>
            <PaginationPhamton/>
        </div>)
}
export function BenutzerArrayPhamton() {
    //if author, remove und edit knopf
    //if not: follow und fav knopf
    //slug
        return (<div>
            <BenutzerInfoPhamton/>
            <BenutzerInfoPhamton/>
            <BenutzerInfoPhamton/>
            <PaginationPhamton/>
        </div>)
}
export function KommentArrayPhamton() {
    //if author, remove und edit knopf
    //if not: follow und fav knopf
    //slug
        return (<div>
            <ArtikelInfoPhamton/>
            <BenutzerInfoPhamton/>
            <KommentInfoPhamton/>
            <PaginationPhamton/>
        </div>)
}

export function PhamtonBg() {
    return (<div className="content entity-content px-2">
                <div className="phamton phamton-bg"></div>
                <PhamtonAvatar/>
            </div>)
}
export function PhamtonAvatar() {
    return (
        <div className="d-flex justify-content-center align-items-center position-relative rounded bg-dark2 p-2 align-self-end w-md-50 ms-md-5 me-md-auto">
                    <div className="phamton phamton-circle w-3 h-3 mx-3"></div>
                    <div className="div">
                        <div className="phamton phamton-square w-4 h-2"></div>
                        <div className="phamton phamton-square w-4 h-1"></div>
                    </div>

                    <div className="d-flex justify-content-start align-items-center ms-5 flex-column flex-md-row">
                        <div className="phamton phamton-square-round w-4"></div>
                        <div className="phamton phamton-square-round w-4  ms-md-3"></div>
                    </div>
                </div>
    )
}
export function PhamtonToggler() {
    return (
        <div className="d-flex align-items-center justify-content-start mt-3 bg-dark2 rounded w-75 ms-1 me-auto mb-3 py-3 px-3">
        <div className="phamton phamton-square w-4 h-2 mx-3"></div>
        <div className="phamton phamton-square-round w-6"></div>
        <div className="phamton phamton-square-round w-6 ms-3"></div>
    </div>
    )
}

export function PhamtonInput() {
    return (
        <div className="d-flex align-items-center justify-content-start mt-3 bg-dark2 rounded w-75 ms-1 me-auto mb-2 py-2 px-2">
            <div className="phamton phamton-square w-4 h-2"></div>
            <div className="phamton phamton-square-round w-80 ms-3"></div>
            <div className="phamton phamton-square-round w-6 ms-3"></div>
        </div>
    )
}