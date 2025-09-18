import { useDispatch } from 'react-redux';
import { Ruble } from '../../../../components';
import { CancelIcon, CartIcon, Delete } from '../../../../components/icons';
import type { OrderData } from '../../../../types/types';
import {
    clearCart,
    removeItemFromCart,
} from '../../../../store/orderDataSlice';
import { ButtonBack } from '../ButtonBack';
import './style.css';

interface FullCartProps {
    orders: OrderData[];
    onClose: () => void;
}

interface DeletePositionParams {
    productId: string;
    selectedSauce: string;
    selectedWeight: number;
}

export const FullCart: React.FC<FullCartProps> = ({ orders, onClose }) => {
    const dispatch = useDispatch();

    const totalPrice = orders.reduce((sum, order) => sum + order.price, 0);
    const totalCount = orders.reduce((sum, order) => sum + order.count, 0);

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
        const isConfirmed = confirm('Точно очистить?');
        if (isConfirmed) {
            dispatch(clearCart());
        }
    };

    return (
        <div className="mx-auto mt-0 mb-0 flex items-center justify-center flex-col bg-white rounded-2xl p-10">
            <div className="flex flex-col text-xl scroll-container">
                <div className="flex justify-between items-center mx-7">
                    <div className="catr__icon flex items-center gap-1">
                        <CartIcon />
                        <p className="text-3xl">Корзина</p>
                    </div>
                    <button
                        type="button"
                        className="flex items-center gap-1 text-gray-300 duration-300 hover:text-gray-400"
                        onClick={handleCleanCart}
                    >
                        <Delete />
                        Очистить корзину
                    </button>
                </div>
                {orders.map((order) => (
                    <div
                        key={`${order.productId}-${order.selectedSauce}-${order.selectedWeight}`}
                        className="grid grid-cols-[100px_2fr_1fr_100px_35px] items-center p-10 gap-10 border-b-2 border-b-gray-100"
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
                            {order.price} <Ruble wSize="6" hSize="5" />
                        </div>
                        <div
                            className="delete__button cursor-pointer text-gray-300 duration-300 hover:text-gray-400"
                            onClick={() =>
                                handleDeletePostition({
                                    productId: order.productId,
                                    selectedSauce: order.selectedSauce,
                                    selectedWeight: order.selectedWeight,
                                })
                            }
                        >
                            <CancelIcon />
                        </div>
                    </div>
                ))}
                <div className="total__value flex justify-between items-center mt-4 mx-7">
                    <div className="flex items-center gap-1">
                        Общая сумма:
                        <p className="flex items-center font-bold text-green-500">
                            {totalPrice}
                            <Ruble
                                wSize="6"
                                hSize="5"
                                color="#22c55e"
                                strokeWidth="18"
                            />
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        Общее количество:{' '}
                        <p className="font-bold">{totalCount} шт.</p>
                    </div>
                </div>
                <div className="button__order flex items-center justify-between mx-7 mt-6">
                    <ButtonBack onClose={onClose} />
                    <button
                        type="button"
                        className="flex items-center bg-green-500 text-white text-lg font-bold rounded-xl h-12 w-auto p-3  hover:bg-green-700 transition duration-300"
                    >
                        Оформить заказ
                    </button>
                </div>
            </div>
        </div>
    );
};
