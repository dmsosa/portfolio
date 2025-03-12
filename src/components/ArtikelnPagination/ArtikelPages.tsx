import { useState } from "react";


export default function ArtikelPages( { pageCount } : { pageCount: number }) {
    const [currentPage, setCurrentPage ] = useState(0);
    const handleClick = () => {
        setCurrentPage(pageCount - 1)
    }
    return (
        <div className="artikel-pagination">
            <a href="" className={`page page-prev ${currentPage === 0 && 'disabled'}`}>{'<'}</a>
                {[...Array(pageCount)].map((page, index) => 
                    {
                        return (
                            <a className={`page ${currentPage === index && 'active'}`} onClick={handleClick}>{page}</a>
                        )
                    }
                )}
            <a href="" className={`page page-prev ${currentPage === pageCount - 1 && 'disabled'}`}>{'<'}</a>
        </div>
    )
}