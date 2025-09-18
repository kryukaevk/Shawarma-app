import { useSelector } from 'react-redux';
import { EmptyCart, FullCart } from './components';
import { currentOrderData } from '../../slicesLogic/transferOrderData';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
    const orders = useSelector(currentOrderData);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center">
            {orders.length === 0 ? (
                <EmptyCart onClose={onClose} />
            ) : (
                <FullCart orders={orders} onClose={onClose} />
            )}
        </div>
    );
};
