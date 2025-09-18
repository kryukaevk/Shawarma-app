import search from '../../assets/icon/search.png';
import card from '../../assets/icon/card.svg';
import ruble from '../../assets/icon/ruble.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { setSearchQuery } from '../../store/productsSlice';
import { currentOrderData } from '../../slicesLogic/transferOrderData';

interface HeaderProps {
    openModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ openModal }) => {
    const dispatch = useDispatch();
    const { searchQuery } = useSelector(
        (state: RootState) => state.productsList
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e?.target.value));
    };

    const orders = useSelector(currentOrderData);

    const totalPrice = orders.reduce((sum, order) => sum + order.price, 0);
    const totalCount = orders.reduce((sum, order) => sum + order.count, 0);

    return (
        <header className="flex justify-center items-center w-full bg-white h-32">
            <div className="flex justify-between w-3/5">
                <div className="flex justify-center gap-10">
                    <NavLink to="/" className="hover:no-underline">
                        <h1 className="logo-title text-lg">
                            <strong className="text-black">SHAWARMA APP</strong>
                            <br />{' '}
                            <p className="text-gray-400">Готовим с любовью</p>
                        </h1>
                    </NavLink>

                    <div className="flex items-center border border-1 border-gray-300 rounded-lg p-3 w-80 h-12 bg-white">
                        <div>
                            <img
                                src={search}
                                alt="search"
                                className="h-5 w-6"
                            />
                        </div>
                        <input
                            className="w-full ml-2 outline-none"
                            type="text"
                            value={searchQuery}
                            placeholder="Поиск шаурмы..."
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                <div
                    onClick={openModal}
                    className="flex justify-center items-center bg-green-600 rounded-3xl w-auto p-4 h-12 text-white font-semibold hover:bg-green-700 transition duration-300"
                >
                    <div className="count_card flex justify-center items-center">
                        <span>{totalPrice}</span>
                        <img
                            src={ruble}
                            alt="ruble"
                            className="h-6 w-5 filter brightness-0 invert"
                        />
                    </div>
                    <div className="mx-2 h-6 border-l border-gray-300 ml-3 mr-3"></div>
                    <div className="flex justify-center items-center gap-1">
                        <img
                            src={card}
                            alt="card"
                            className="h-6 w-6 filter brightness-0 invert"
                        />
                        <span>{totalCount}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};
