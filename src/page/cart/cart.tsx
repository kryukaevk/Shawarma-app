import { useSelector } from 'react-redux';
import { EmptyCart, FullCart } from './components';
import { currentOrderData } from '../../slicesLogic/transferOrderData';

export const Cart: React.FC = () => {
    const orders = useSelector(currentOrderData);

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            {orders.length === 0 ? <EmptyCart /> : <FullCart orders={orders} />}
        </div>
    );
};
