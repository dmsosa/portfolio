import ReactPaginate from "react-paginate";

export default function ArrayPagination({ loading, pageAnzahl, setOffset }: { loading: boolean, pageAnzahl: number, setOffset: React.Dispatch<React.SetStateAction<number>> }) {
    const handlePageChange = (selectedItem: { selected: number }) => {
        setOffset(selectedItem.selected);
    }
    return loading ? 
    (
        <div>Loading</div>
    )
    :
    (
        <ReactPaginate
        pageCount={pageAnzahl}
        onPageChange={handlePageChange}
        previousLabel={"<"}
        nextLabel={">"}
        activeClassName={"active"}
        containerClassName={"pagination"}
        />
    )
}