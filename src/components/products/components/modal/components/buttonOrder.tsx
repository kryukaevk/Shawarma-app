import { Ruble } from '../../../../../components';

interface OrderProps {
    priceByWeight: number;
    goodsCount: number;
}

export const ButtonOrder: React.FC<OrderProps> = ({
    priceByWeight,
    goodsCount,
}) => {
    return (
        <button
            className="flex items-center bg-green-500 text-white text-lg rounded-xl p-2 hover:bg-green-700 transition duration-300"
            type="button"
        >
            Заказать за {priceByWeight * goodsCount}
            <Ruble />
        </button>
    );
};
