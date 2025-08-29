import search from '../../assets/icon/search.png';
import card from '../../assets/icon/card.svg';
import ruble from '../../assets/icon/ruble.svg';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <header className="flex justify-center items-center w-full bg-white h-32">
            <div className="flex justify-between w-3/5">
                <div className="flex justify-center gap-10">
                    <NavLink to="/" className="logo">
                        <h1 className="header__title">
                            <strong>SHAWARMA APP</strong>
                            <br />{' '}
                            <p className="text-gray-400">Готовим с любовью</p>
                        </h1>
                    </NavLink>

                    <div className="flex items-center border border-1 border-gray-300 rounded-lg p-3 w-80 bg-white">
                        <div>
                            <img
                                src={search}
                                alt="search"
                                className="h-5 w-5"
                            />
                        </div>
                        <input
                            className="w-full ml-2 outline-none"
                            type="text"
                            placeholder="Поиск шаурмы..."
                        />
                    </div>
                </div>

                <NavLink to="/card" className="header__card">
                    <div className="flex justify-center items-center bg-green-600 rounded-3xl w-32 h-12 text-white font-semibold hover:bg-green-700 transition duration-300">
                        <div className="count_card flex justify-center items-center">
                            <span>0</span>
                            <img
                                src={ruble}
                                alt="ruble"
                                className="h-6 w-5 filter brightness-0 invert"
                            />
                        </div>
                        <div className="mx-2 h-6 border-l border-gray-300 ml-3 mr-3"></div>
                        <div className="count_card flex justify-center items-center gap-1">
                            <img
                                src={card}
                                alt="card"
                                className="h-6 w-6 filter brightness-0 invert"
                            />
                            <span>0</span>
                        </div>
                    </div>
                </NavLink>
            </div>
        </header>
    );
};
