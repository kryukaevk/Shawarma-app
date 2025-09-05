import type { SauceSelect } from '../../../../../types/types';
import { Chevron } from '../../../../../components';
import type { Product } from '../../../db';

interface SauceProps {
    handlePopupClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
    sauceValue: SauceSelect;
    isActiveList: boolean;
    handleSauceListClick: (sauce: SauceSelect) => void;
    product: Product;
}

export const Sauce: React.FC<SauceProps> = ({
    handlePopupClick,
    sauceValue,
    isActiveList,
    handleSauceListClick,
    product,
}) => {
    return (
        <div className="sauce__select">
            <p className="text-lg font-bold my-2 p-1">Соус</p>
            <span
                className="cursor-pointer flex justify-between items-center border border-gray-300 rounded-2xl w-40 h-10 p-2 hover:border-green-600"
                onClick={handlePopupClick}
            >
                {sauceValue}
                <Chevron isActiveList={isActiveList} />
            </span>
            <div
                className={
                    isActiveList
                        ? 'absolute shadow-2xl rounded-xl bg-white'
                        : 'hidden'
                }
            >
                <ul className="flex flex-col gap-1 p-2 w-40">
                    {product.sauce.map((s, index) => (
                        <li
                            key={index}
                            className="cursor-pointer hover:text-green-500"
                            onClick={() => handleSauceListClick(s)}
                        >
                            {s}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
