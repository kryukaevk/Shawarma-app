import React, { useState } from 'react';
import { type Product } from '../../../../db';
import type {
    ProductPrice,
    SauceSelect,
    WeightSelect,
} from '../../../../types/types';
import {
    ButtonClose,
    ButtonCountModal,
    ButtonOrder,
    Sauce,
    Weight,
} from './components';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../store/orderDataSlice';

interface ModalProps {
    isModalOpen: boolean;
    closeModal: () => void;
    activeModalIndex: number | null;
    isActiveList: boolean;
    setIsActiveList: React.Dispatch<React.SetStateAction<boolean>>;
    products: Product[];
}

export const Modal: React.FC<ModalProps> = ({
    isModalOpen,
    closeModal,
    activeModalIndex,
    isActiveList,
    setIsActiveList,
    products,
}) => {
    const [sauceValue, setSauceValue] = useState<SauceSelect>('Без соуса');
    const [weightValue, setWeightValue] = useState<WeightSelect>(300);
    const [activePositionIndex, setActivePositionIndex] = useState<number>(0);
    const [goodsCount, setGoodsCounter] = useState<number>(1);
    const [currentPrice, setCurrentPrice] = useState<ProductPrice>(350);
    const [priceByWeight, setPriceByWeight] = useState<number>(currentPrice);

    const priceOrder: number = priceByWeight * goodsCount;

    const dispatch = useDispatch();

    const currentProduct = products.filter(
        (_, index) => activeModalIndex === index
    );

    const handlePopupClick = (e: React.MouseEvent<HTMLSpanElement>) => {
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

    const handleCloseModal = () => {
        setSauceValue('Без соуса');
        setWeightValue(300);
        setGoodsCounter(1);
        setActivePositionIndex(0);
        setCurrentPrice(350);
        setPriceByWeight(350);
        setIsActiveList(false);
        closeModal();
    };

    const handletAddToCart = () => {
        currentProduct.forEach((p) => {
            dispatch(
                addToCart({
                    productId: p.id,
                    imageUrl: p.imageUrl,
                    title: p.title,
                    price: priceOrder,
                    selectedSauce: sauceValue,
                    selectedWeight: weightValue,
                    count: goodsCount,
                })
            );
        });
        handleCloseModal();
    };

    if (!isModalOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center z-20"
            onClick={handleCloseModal}
        >
            <div
                className="flex justify-center flex-col rounded-xl bg-white w-full max-w-2xl p-4"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="product-modal" onClick={closeListClick}>
                    {currentProduct.map((product, index) => (
                        <div key={index} className="flex justify-center">
                            <div className="product__left-block">
                                <div className="product__image ">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.title}
                                    />
                                </div>
                            </div>
                            <div className="product__right-block flex justify-start flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-bold">
                                        {product.title}
                                    </p>
                                    <ButtonClose
                                        handleCloseModal={handleCloseModal}
                                    />
                                </div>
                                <p>Вес: {weightValue} грамм</p>

                                <p className="text-gray-500">
                                    {product.description}
                                </p>
                                <Sauce
                                    handlePopupClick={handlePopupClick}
                                    sauceValue={sauceValue}
                                    isActiveList={isActiveList}
                                    handleSauceListClick={handleSauceListClick}
                                    product={product}
                                />

                                <Weight
                                    product={product}
                                    activePositionIndex={activePositionIndex}
                                    choosePosition={choosePosition}
                                />

                                <div className="flex justify-end">
                                    <div className="flex justify-center items-center gap-5">
                                        <ButtonCountModal
                                            handlerGoodsCounterMinus={
                                                handlerGoodsCounterMinus
                                            }
                                            goodsCount={goodsCount}
                                            handlerGoodsCounterPlus={
                                                handlerGoodsCounterPlus
                                            }
                                        />

                                        <ButtonOrder
                                            priceOrder={priceOrder}
                                            handletAddToCart={handletAddToCart}
                                        />
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
