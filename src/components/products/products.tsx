import { useEffect, useState } from 'react';
import { IsLoading, Modal, Pagination, ProductsList } from './components';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import { fetchProducts, sortedProducts } from '../../actions';

export const Products: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [activeModalIndex, setActiveModalIndex] = useState<number | null>(
        null
    );
    const [isActiveList, setIsActiveList] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector(sortedProducts);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productsPerPage] = useState<number>(4);

    const { loading, error } = useSelector(
        (state: RootState) => state.productsList
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const totalPages = Math.ceil(products.length / productsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    const openModal = (index: number) => {
        setIsModalOpen(!isModalOpen);
        setActiveModalIndex(index);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setIsActiveList(false);
    };

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    if (error) return <div>Ошибка: {error}</div>;

    return (
        <div className="flex justify-center items-center flex-col">
            {loading ? (
                <IsLoading />
            ) : (
                <>
                    <ProductsList
                        products={currentProducts}
                        activeIndex={activeIndex}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                        openModal={openModal}
                    />
                    <Modal
                        isModalOpen={isModalOpen}
                        closeModal={closeModal}
                        activeModalIndex={activeModalIndex}
                        isActiveList={isActiveList}
                        setIsActiveList={setIsActiveList}
                        products={currentProducts}
                    />
                    <Pagination
                        handlePrevPage={handlePrevPage}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handlePageClick={handlePageClick}
                        handleNextPage={handleNextPage}
                    />
                </>
            )}
        </div>
    );
};
