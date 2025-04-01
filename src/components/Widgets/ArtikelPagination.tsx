import ReactPaginate from "react-paginate";

export default function ArtikelPagination({ loading, pageCount, setOffset }: { loading: boolean, pageCount: number, setOffset: React.Dispatch<React.SetStateAction<number>> }) {
    const handlePageChange = (selectedItem: { selected: number }) => {
        setOffset(selectedItem.selected);
        console.log(selectedItem.selected)
    }
    return loading ? 
    (
        <div>Loading</div>
    )
    :
    (
        <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageChange}
        previousLabel={"<"}
        nextLabel={">"}
        activeClassName={"active"}
        containerClassName={"pagination"}
        />
    )
}