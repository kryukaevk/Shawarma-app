import { useState } from 'react';
import './style.css';

type SortOption =
    | 'популярности(+)'
    | 'популярности(-)'
    | 'цене(+)'
    | 'цене(-)'
    | 'алфавиту(+)'
    | 'алфавиту(-)';

export const Content: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isActiveList, setIsActiveList] = useState<boolean>(false);
    const [activeListIndex, setActiveListIndex] = useState<number | null>(null);
    const [sortValue, setSortValue] = useState<SortOption>('популярности(+)');

    const categories = ['Все', 'Фри', 'Россия', 'Гавайи', 'Вегетарианская'];
    const sortList: SortOption[] = [
        'популярности(+)',
        'популярности(-)',
        'цене(+)',
        'цене(-)',
        'алфавиту(+)',
        'алфавиту(-)',
    ];

    const handleCategoriesClick = (index: number) => {
        setActiveIndex(index);
    };

    const handlePopupClick = () => {
        setIsActiveList(!isActiveList);
    };

    const handleListClick = (index: number, item: SortOption) => {
        setActiveListIndex(index);
        setIsActiveList(!isActiveList);
        setSortValue(item);
    };

    return (
        <div className="flex justify-center">
            <div className="flex justify-between items-center w-3/5 mr-2">
                <ul className="flex gap-3">
                    {categories.map((item, index) => (
                        <li
                            key={index}
                            className={
                                activeIndex === index
                                    ? 'active__item'
                                    : 'categories__item'
                            }
                            onClick={() => handleCategoriesClick(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="sort">
                    <div className="flex gap-1">
                        <b>Сортировать по:</b>
                        <span
                            className="sort__value text-lg cursor-pointer border-b border-dashed border-green-600 text-green-600"
                            onClick={handlePopupClick}
                        >
                            {sortValue}
                        </span>
                    </div>
                    <div
                        className={
                            isActiveList
                                ? 'absolute shadow-2xl rounded-xl ml-28 my-1'
                                : 'hidden'
                        }
                    >
                        <ul className="flex flex-col">
                            {sortList.map((item, index) => (
                                <li
                                    key={index}
                                    className={
                                        activeListIndex === index
                                            ? 'cursor-pointer p-2 text-green-600 bg-green-200 text-lg font-bold'
                                            : 'text-lg cursor-pointer p-2 hover:bg-green-200 duration-300'
                                    }
                                    onClick={() => handleListClick(index, item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
