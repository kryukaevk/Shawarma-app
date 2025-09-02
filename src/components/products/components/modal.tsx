import { PRODUCTS_MOCK } from '../db';

interface ModalProps {
    isModalOpen: boolean;
    closeModal: () => void;
    activeModalIndex: number | null;
}

export const Modal: React.FC<ModalProps> = ({
    isModalOpen,
    closeModal,
    activeModalIndex,
}) => {
    const currentProduct = PRODUCTS_MOCK.filter(
        (_, index) => activeModalIndex === index
    );

    if (!isModalOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center z-20"
            onClick={closeModal}
        >
            <div
                className="flex justify-between items-center rounded-xl bg-white w-full max-w-2xl p-4"
                onClick={(e) => e.stopPropagation()}
            >
                <h1>Модальное окно</h1>
                <button onClick={closeModal}>X</button>
                <div className="product-modal">
                    {currentProduct.map((item, index) => (
                        <div key={index} className="product">
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
