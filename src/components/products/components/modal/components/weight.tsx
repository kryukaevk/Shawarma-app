import type { ProductPrice, WeightSelect } from '../../../../../types/types';
import type { Product } from '../../../../../db';

interface WeightProps {
    product: Product;
    activePositionIndex: number;
    choosePosition: (
        index: number,
        weight: WeightSelect,
        price: ProductPrice
    ) => void;
}

export const Weight: React.FC<WeightProps> = ({
    product,
    activePositionIndex,
    choosePosition,
}) => {
    return (
        <div className="weight__select">
            <p className="text-lg font-bold my-2 p-1">Вес</p>
            <ul>
                {product.weight.map((w, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer inline-flex justify-center p-2 w-28 overflow-hidden 
                                                    ${index === 0 ? 'border border-gray-300 rounded-l-2xl' : ''} 
                                                    ${index === product.weight.length - 1 ? 'border border-gray-300 rounded-r-2xl' : ''} 
                                                    ${index !== 0 && index !== product.weight.length - 1 ? 'border-t border-b border-gray-300 rounded-none' : ''}
                                                    ${activePositionIndex === index ? 'bg-green-500 text-white' : ''} `}
                        onClick={() => choosePosition(index, w, product.price)}
                    >
                        {w} грамм
                    </li>
                ))}
            </ul>
        </div>
    );
};
