import type { Product } from '../../../db';
import { truncateString } from '../utils/truncateString';
import { Button } from './button';

interface ProductsListProps {
    products: Product[];
    activeIndex: number | null;
    handleMouseEnter: (index: number) => void;
    handleMouseLeave: () => void;
    openModal: (index: number) => void;
}

export const ProductsList: React.FC<ProductsListProps> = ({
    products,
    activeIndex,
    handleMouseEnter,
    handleMouseLeave,
    openModal,
}) => {
    return (
        <div className="flex justify-center items-center w-3/4">
            <ul className="flex gap-5 my-7">
                {products.map((item, index) => (
                    <li
                        className={`flex justify-center   flex-col gap-5 m-4 p-1 
                                ${activeIndex === index ? 'shadow-xl rounded-xl' : ''}`}
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => openModal(index)}
                    >
                        <div className="flex justify-center">
                            <img src={item.imageUrl} alt={item.title} />
                        </div>
                        <p className="text-center text-lg font-bold">
                            {item.title}
                        </p>
                        <p>{truncateString(item.description)}</p>
                        <div className="flex justify-between items-center p-1">
                            <p className="font-bold">от {item.price} руб.</p>
                            <Button
                                index={index}
                                openModal={() => openModal(index)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
