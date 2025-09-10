interface PaginationProps {
    handlePrevPage: () => void;
    currentPage: number;
    totalPages: number;
    handlePageClick: (page: number) => void;
    handleNextPage: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({
    handlePrevPage,
    currentPage,
    totalPages,
    handlePageClick,
    handleNextPage,
}) => {
    return (
        <div className="flex justify-center items-center mt-10 space-x-2">
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`text-lg  px-4 py-2 rounded-2xl ${
                    currentPage === 1
                        ? 'opacity-50'
                        : 'hover:bg-gray-300 duration-500 ease-in-out'
                }`}
            >
                {'<'}
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handlePageClick(index + 1)}
                    className={`text-lg  px-4 py-2 rounded-2xl  ${
                        currentPage === index + 1
                            ? 'opacity-50'
                            : 'hover:bg-gray-300 duration-500 ease-in-out'
                    }`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`text-lg px-4 py-2 rounded-2xl ${
                    currentPage === totalPages
                        ? 'opacity-50'
                        : 'hover:bg-gray-300 duration-500 ease-in-out'
                }`}
            >
                {'>'}
            </button>
        </div>
    );
};
