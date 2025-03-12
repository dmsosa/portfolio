import ReactPaginate from "react-paginate";

export default function ArtikelReactPagination({ pageCount } : { pageCount: number }) {
    const handlePageChange = () => {
        console.log("pa")
    }    
    return (
        <ReactPaginate
        onPageChange={handlePageChange}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        pageRangeDisplayed={3}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page"
        nextClassName="page-next"
        previousClassName="page-prev"
        />
    )
}