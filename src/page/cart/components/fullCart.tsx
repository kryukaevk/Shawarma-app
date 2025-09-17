import { useDispatch } from 'react-redux';
import { Ruble } from '../../../components';
import { Delete } from '../../../components/icons';
import type { OrderData } from '../../../types/types';
import { clearCart, removeItemFromCart } from '../../../store/orderDataSlice';

interface FullCartProps {
    orders: OrderData[];
}

interface DeletePositionParams {
    productId: string;
    selectedSauce: string;
    selectedWeight: number;
}

export const FullCart: React.FC<FullCartProps> = ({ orders }) => {
    const dispatch = useDispatch();

    const handleDeletePostition = ({
        productId,
        selectedSauce,
        selectedWeight,
    }: DeletePositionParams) => {
        dispatch(
            removeItemFromCart({
                productId,
                selectedSauce,
                selectedWeight,
            } as OrderData)
        );
    };

    const handleCleanCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="mx-auto mt-0 mb-0 flex items-center justify-center flex-col">
            <div className="flex flex-col text-xl">
                <div className="flex justify-between items-center mx-7">
                    <h3>Корзина</h3>
                    <button
                        type="button"
                        className="bg-gray-500 text-white rounded-2xl p-3 hover:bg-gray-400"
                        onClick={handleCleanCart}
                    >
                        Очистить корзину
                    </button>
                </div>
                {orders.map((order) => (
                    <div
                        key={`${order.productId}-${order.selectedSauce}-${order.selectedWeight}`}
                        className="grid grid-cols-[100px_2fr_1fr_100px_35px] items-center p-10 gap-10"
                    >
                        <div className="order__image">
                            <img
                                src={order.imageUrl}
                                alt={order.title}
                                className="w-24 h-24"
                            />
                        </div>
                        <div className="order__attribute flex flex-col ">
                            <div className="order__title ">{order.title}</div>
                            <p className="text-gray-400">
                                {order.selectedWeight} грамм
                            </p>
                            <p className="text-gray-400">
                                {order.selectedSauce === 'Без соуса'
                                    ? order.selectedSauce
                                    : `${order.selectedSauce} соус`}
                            </p>
                        </div>
                        <div className="order__product-count ">
                            Количество: {order.count} шт.
                        </div>
                        <div className="order__price flex items-center ">
                            {order.price} <Ruble size={'6'} />
                        </div>
                        <div
                            className="delete__button cursor-pointer text-gray-300 hover:text-gray-400"
                            onClick={() =>
                                handleDeletePostition({
                                    productId: order.productId,
                                    selectedSauce: order.selectedSauce,
                                    selectedWeight: order.selectedWeight,
                                })
                            }
                        >
                            <Delete />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
