export function ArtikelInfoPhamton() {
    //if author, remove und edit knopf
    //if not: follow und fav knopf
    //slug
        return (<div className="position-relative bg-2 border mb-3">
                    {/* CreatedAt */}
                    <div className="phamton phamton-square position-absolute top-05 right-0 w-6 h-1 rounded-1"></div>
                    {/* Avatar + Buttons */}
                    <div className="d-flex justify-content-start align-items-center w-100 px-2 mt-4">
                        <div className="d-flex justify-content-center align-items-start">
                            <div className="phamton phamton-circle w-3 h-3"></div>
                            <div className="phamton phamton-square w-3 h-1 rounded-1 ms-1"></div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-1 ms-auto">
                            <div className="phamton phamton-square w-3 h-2 rounded-1"></div>
                            <div className="phamton phamton-square w-3 h-2 rounded-1"></div>
                        </div>
                    </div>
                    {/* Description + Body */}
                    <div className="px-2 w-100 mt-1">
                        <div className="phamton phamton-square h-2 mb-1"></div>
                        <div className="phamton phamton-square h-6"></div>
                    </div>
                    {/* Buttons */}
                    <div className="d-flex justify-content-start align-items-center px-2 mt-1 w-100 border">
                        <div className="phamton phamton-square w-3"></div>
                        <div className="phamton phamton-square w-3 ms-3"></div>
                        <div className="phamton phamton-square w-3 ms-3"></div>
                        <div className="phamton phamton-square w-3 ms-3"></div>
                    </div>
                </div>
    )
}
export function BenutzerInfoPhamton() {
    //if author, remove und edit knopf
    //if not: follow und fav knopf
    //slug
        return (<div className="position-relative bg-2 border mb-3">
                    {/* CreatedAt */}
                    <div className="phamton phamton-square position-absolute top-05 right-0 w-6 h-1 rounded-1"></div>
                    {/* Avatar + Buttons */}
                    <div className="d-flex justify-content-start align-items-start px-2 mb-1 mt-4 w-100">
                        <div className="phamton phamton-circle w-3 h-3"></div>
                        <div className="phamton phamton-square w-3 h-1 rounded-1 ms-1"></div>
                    </div>
                    {/* Description + Body */}
                    <div className="px-2 w-100 mt-1">
                        <div className="phamton phamton-square h-2 mb-1"></div>
                    </div>
                    {/* Buttons */}
                    <div className="d-flex justify-content-end align-items-center px-2 mt-1 w-100 border">
                        <div className="phamton phamton-square w-3"></div>
                        <div className="phamton phamton-square w-3 ms-3"></div>
                    </div>
                </div>
    )
}
export function KommentInfoPhamton() {
    //if author, remove und edit knopf
    //if not: follow und fav knopf
    //slug
        return (<div className="position-relative bg-2 border mb-3">
                    {/* CreatedAt */}
                    <div className="phamton phamton-square position-absolute top-05 right-0 w-6 h-1 rounded-1"></div>
                    {/* Avatar + Buttons */}
                    <div className="d-flex justify-content-start align-items-center w-100 px-2 mt-4">
                        <div className="d-flex justify-content-center align-items-start">
                            <div className="phamton phamton-circle w-3 h-3"></div>
                            <div className="phamton phamton-square w-3 h-1 rounded-1 ms-1"></div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-1 ms-auto">
                            <div className="phamton phamton-square w-3 h-2 rounded-1"></div>
                            <div className="phamton phamton-square w-3 h-2 rounded-1"></div>
                        </div>
                    </div>
                    {/* Description + Body */}
                    <div className="px-2 w-100 mt-1">
                        <div className="phamton phamton-square h-6"></div>
                    </div>
                    {/* Buttons */}
                    <div className="d-flex justify-content-end align-items-center px-2 mt-1 w-100 border">
                        <div className="phamton phamton-square w-3"></div>
                        <div className="phamton phamton-square w-3 ms-3"></div>
                    </div>
                </div>
    )
}
export function PaginationPhamton() {
    //if author, remove und edit knopf
    //if not: follow und fav knopf
    //slug
        return (
            <div className="d-flex justify-content-center align-items-center mt-1 w-100">
                <div className="phamton phamton-square w-2 rounded-1"></div>
                <div className="phamton phamton-square w-2 ms-3 rounded-1"></div>
                <div className="phamton phamton-square w-2 ms-3 rounded-1"></div>
                <div className="phamton phamton-square w-2 ms-3 rounded-1"></div>
                <div className="phamton phamton-square w-2 ms-3 rounded-1"></div>
                <div className="phamton phamton-square w-2 ms-3 rounded-1"></div>
            </div>
    )
}
export function ArtikelArrayPhamton() {
    //if author, remove und edit knopf
    //if not: follow und fav knopf
    //slug
        return (<div>
            <ArtikelInfoPhamton/>
            <ArtikelInfoPhamton/>
            <ArtikelInfoPhamton/>
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
        return (<div>
            <KommentInfoPhamton/>
            <KommentInfoPhamton/>
            <KommentInfoPhamton/>
            <PaginationPhamton/>
        </div>)
}

export function PhamtonBg() {
    return (<div className="content content-full-width h-500 d-flex position-relative d-flex justify-content-end align-items-end">
                <div className="phamton phamton-bg"></div>
                <PhamtonAvatar/>
            </div>)
}
export function PhamtonAvatar() {
    return (
        <div className="d-flex justify-content-start align-items-center position-relative bg-2 py-2 px-4 w-100">
                    <div className="phamton phamton-circle w-3 h-3"></div>
                    <div className="div ms-1">
                        <div className="phamton phamton-square w-4 h-2 rounded-1 mb-1"></div>
                        <div className="phamton phamton-square w-4 h-1 rounded-1"></div>
                    </div>

                    <div className="d-flex justify-content-start align-items-center ms-auto gap-1">
                        <div className="phamton phamton-square-round w-3 rounded-1"></div>
                        <div className="phamton phamton-square-round w-3 rounded-1"></div>
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
        <div className="d-flex align-items-center justify-content-start mt-3 bg-2 border border-width-2 w-75 ms-0 me-auto mb-2 p-2">
            <div className="phamton phamton-square w-4 h-2 rounded-1"></div>
            <div className="phamton phamton-square-round w-80 ms-3 rounded-1"></div>
            <div className="phamton phamton-square-round w-6 ms-3 rounded-1"></div>
        </div>
    )
}

export function ArtikelPhamton() {
    return (
        <>
            {/* PhamptonHeroSection */}
            <PhamtonBg/>
            {/* //////////////////////////////////////////// */}

            
            <div className="content w-100">
            {/* PhamtonBodyDescriptionSection */}
                <div className="phamton phamton-square w-80 h-6 mx-auto mt-2 rounded-1"></div>
                <div className="phamton phamton-square w-80 mx-auto h-300 mt-3 rounded-1"></div>
            {/* //////////////////////////////////////////// */}
             {/* PhamtonKommentSection */}
                <PhamtonInput/>
                <KommentArrayPhamton/>
            {/* //////////////////////////////////////////// */}
            {/* PhamtonReadMoreSection */}
                <PhamtonToggler/>
                <ArtikelArrayPhamton/>
            {/* //////////////////////////////////////////// */}
            </div>
        </>
    )
}
export function ProfilePhamton() {
    return (
        <>
            {/* PhamptonHeroSection */}
            <PhamtonBg/>
            {/* //////////////////////////////////////////// */}
            <div className="content w-100">
            {/* PhamtonBodyDescriptionSection */}
                <div className="phamton phamton-square w-80 h-6 mx-auto mt-2 rounded-1"></div>
                <div className="phamton phamton-square w-80 mx-auto h-300 mt-3 rounded-1"></div>
            {/* //////////////////////////////////////////// */}
            {/* PhamtonReadMoreSection */}
                <PhamtonToggler/>
                <ArtikelArrayPhamton/>
            {/* //////////////////////////////////////////// */}
            </div>
        </>
    )
}