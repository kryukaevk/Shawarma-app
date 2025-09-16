import type { OrderData } from '../../../types/types';

interface fullCartProps {
    orders: OrderData[];
}

export const FullCart: React.FC<fullCartProps> = ({ orders }) => {
    return (
        <div className="mx-auto mt-0 mb-0 flex items-center justify-center flex-col">
            <div className="flex flex-col">
                <div className="flex justify-between items-center mx-4">
                    <h3>Корзина</h3>
                    <button
                        type="button"
                        className="bg-gray-500 text-white rounded-2xl p-3 hover:bg-gray-400"
                    >
                        Очистить корзину
                    </button>
                </div>
                {orders.map((order, index) => (
                    <div key={index} className="flex items-center">
                        <div className="order__image">
                            <img src={order.imageUrl} alt={order.title} />
                        </div>
                        <div className="order__descriptoin flex justify-between gap-20 w-full">
                            <div className="flex flex-col">
                                <div className="order__title">
                                    {order.title}
                                </div>
                                <div className="order__attribute text-gray-400">
                                    {order.selectedWeight} грамм,{' '}
                                    {order.selectedSauce} соус
                                </div>
                            </div>

                            <div className="oredr___product-count">
                                Количество: {order.count} шт.
                            </div>
                            <div className="oredr___price">
                                {order.price} руб.
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
