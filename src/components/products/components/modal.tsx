import { useState, type MouseEvent } from 'react';
import { PRODUCTS_MOCK } from '../db';
import { Ruble } from '../../icons/ruble';

interface ModalProps {
    isModalOpen: boolean;
    closeModal: () => void;
    activeModalIndex: number | null;
    isActiveList: boolean;
    setIsActiveList: React.Dispatch<React.SetStateAction<boolean>>;
}

type SauceSelect = 'Без соуса' | 'Классический' | 'Сырный' | 'Чесночный';

type WeightSelect = 300 | 400 | 500;

type ProductPrice = 350 | 450 | 550;

export const Modal: React.FC<ModalProps> = ({
    isModalOpen,
    closeModal,
    activeModalIndex,
    isActiveList,
    setIsActiveList,
}) => {
    const [sauceValue, setSauceValue] = useState<SauceSelect>('Без соуса');
    const [weightValue, setWeightValue] = useState<WeightSelect>(300);
    const [activePositionIndex, setActivePositionIndex] = useState<number>(0);
    const [goodsCount, setGoodsCounter] = useState<number>(1);
    const [currentPrice, setCurrentPrice] = useState<ProductPrice>(350);
    const [priceByWeight, setPriceByWeight] = useState<number>(currentPrice);

    const currentProduct = PRODUCTS_MOCK.filter(
        (_, index) => activeModalIndex === index
    );

    const handlePopupClick = (e: MouseEvent) => {
        e.stopPropagation();
        setIsActiveList(!isActiveList);
    };

    const handleSauceListClick = (sauce: SauceSelect) => {
        setSauceValue(sauce);
        setIsActiveList(false);
    };

    const closeListClick = () => setIsActiveList(false);

    const choosePosition = (
        index: number,
        weight: WeightSelect,
        price: ProductPrice
    ) => {
        setCurrentPrice(price);
        setActivePositionIndex(index);
        setWeightValue(weight);

        if (weight === 300) {
            setPriceByWeight(price);
        }

        if (weight === 400) {
            setPriceByWeight(price + 100);
        }

        if (weight === 500) {
            setPriceByWeight(price + 200);
        }
    };

    const handlerGoodsCounterPlus = (count: number) => {
        setGoodsCounter(count + 1);
    };
    const handlerGoodsCounterMinus = (count: number) => {
        setGoodsCounter(count - 1);
    };

    if (!isModalOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center z-20"
            onClick={closeModal}
        >
            <div
                className="flex justify-center flex-col rounded-xl bg-white w-full max-w-2xl p-4"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="product-modal" onClick={closeListClick}>
                    {currentProduct.map((item, index) => (
                        <div
                            key={index}
                            className="product flex justify-center"
                        >
                            <div className="product__left-block">
                                <div className="product__image ">
                                    <img src={item.imageUrl} alt={item.title} />
                                </div>
                            </div>
                            <div className="product__right-block flex justify-start flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <p className="product__title text-lg font-bold">
                                        {item.title}
                                    </p>
                                    <button type="button" onClick={closeModal}>
                                        X
                                    </button>
                                </div>
                                <p>Вес: {weightValue} грамм</p>

                                <p className="product__description text-gray-500">
                                    {item.description}
                                </p>
                                <div className="sauce__select">
                                    <p className="text-lg font-bold my-2 p-1">
                                        Соус
                                    </p>
                                    <span
                                        className="cursor-pointer flex items-center border border-gray-300 rounded-2xl w-40 h-10 p-2 hover:border-green-600"
                                        onClick={handlePopupClick}
                                    >
                                        {sauceValue}
                                    </span>
                                    <div
                                        className={
                                            isActiveList
                                                ? 'absolute shadow-2xl rounded-xl bg-white'
                                                : 'hidden'
                                        }
                                    >
                                        <ul className="flex flex-col gap-1 p-2 w-40">
                                            {item.sauce.map((s, index) => (
                                                <li
                                                    key={index}
                                                    className="cursor-pointer hover:text-green-500"
                                                    onClick={() =>
                                                        handleSauceListClick(s)
                                                    }
                                                >
                                                    {s}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="weight__select">
                                    <p className="text-lg font-bold my-2 p-1">
                                        Вес
                                    </p>
                                    <ul>
                                        {item.weight.map((w, index) => (
                                            <li
                                                key={index}
                                                className={`cursor-pointer inline-flex justify-center p-2 w-28 overflow-hidden 
                                                    ${index === 0 ? 'border border-gray-300 rounded-l-2xl' : ''} 
                                                    ${index === item.weight.length - 1 ? 'border border-gray-300 rounded-r-2xl' : ''} 
                                                    ${index !== 0 && index !== item.weight.length - 1 ? 'border-t border-b border-gray-300 rounded-none' : ''}
                                                    ${activePositionIndex === index ? 'bg-green-500 text-white' : ''} `}
                                                onClick={() =>
                                                    choosePosition(
                                                        index,
                                                        w,
                                                        item.price
                                                    )
                                                }
                                            >
                                                {w} грамм
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex justify-end">
                                    <div className="flex justify-center items-center gap-5">
                                        <div className="flex items-center bg-gray-100 rounded-full p-1 shadow-sm">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handlerGoodsCounterMinus(
                                                        goodsCount
                                                    )
                                                }
                                                disabled={goodsCount === 1}
                                                className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-full text-lg font-semibold text-gray-700 bg-white hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center text-lg font-medium text-gray-800">
                                                {goodsCount}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handlerGoodsCounterPlus(
                                                        goodsCount
                                                    )
                                                }
                                                className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-full text-xl font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors duration-200"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            className="flex items-center bg-green-500 text-white text-lg rounded-xl p-2 hover:bg-green-700 transition duration-300"
                                            type="button"
                                        >
                                            Заказать за{' '}
                                            {priceByWeight * goodsCount}
                                            <Ruble />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
