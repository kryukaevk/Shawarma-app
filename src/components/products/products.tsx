import { PRODUCTS_MOCK } from './db';
import bag from '../../assets/icon/bag.svg';
import { truncateString } from './utils/truncateString';

export const Products: React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className="content__products flex justify-center items-center w-3/4">
                <div className="product flex gap-5 my-7">
                    {PRODUCTS_MOCK.map((item, index) => (
                        <div
                            className="flex justify-center shadow-xl rounded-xl  flex-col gap-5 m-4 p-1"
                            key={index}
                        >
                            <div className="product__image flex justify-center">
                                <img src={item.imageUrl} alt={item.title} />
                            </div>
                            <p className="text-center text-lg font-bold">
                                {item.title}
                            </p>
                            <p>{truncateString(item.description)}</p>
                            <div className="flex justify-between items-center p-1">
                                <p className="font-bold">
                                    от {item.price} руб.
                                </p>
                                <button
                                    type="submit"
                                    className="flex justify-center gap-1 items-center w-32 rounded-lg p-1 bg-green-500"
                                >
                                    <img src={bag} alt="bag" className="w-6" />
                                    <p>Собрать</p>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
