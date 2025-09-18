import { Ruble } from '../../../../../components';

interface OrderProps {
    priceOrder: number;
    handletAddToCart: () => void;
}

export const ButtonOrder: React.FC<OrderProps> = ({
    priceOrder,
    handletAddToCart,
}) => {
    return (
        <button
            onClick={handletAddToCart}
            className="flex items-center bg-green-500 text-white text-lg rounded-xl w-auto p-2 hover:bg-green-700 transition duration-300"
            type="button"
        >
            Добавить за {priceOrder}
            <Ruble wSize="5" hSize="5" />
        </button>
    );
};
