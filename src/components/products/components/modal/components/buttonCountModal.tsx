interface ButtonCountProps {
    handlerGoodsCounterMinus: (count: number) => void;
    goodsCount: number;
    handlerGoodsCounterPlus: (count: number) => void;
}

export const ButtonCountModal: React.FC<ButtonCountProps> = ({
    handlerGoodsCounterMinus,
    goodsCount,
    handlerGoodsCounterPlus,
}) => {
    return (
        <div className="flex items-center bg-gray-100 rounded-full p-1 shadow-sm">
            <button
                type="button"
                onClick={() => handlerGoodsCounterMinus(goodsCount)}
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
                onClick={() => handlerGoodsCounterPlus(goodsCount)}
                className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-full text-xl font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors duration-200"
            >
                +
            </button>
        </div>
    );
};
