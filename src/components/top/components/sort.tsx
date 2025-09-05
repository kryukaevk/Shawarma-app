import { useState } from 'react';
import { OutsideClickWrapper } from '../utils';

type SortOption =
    | 'популярности(+)'
    | 'популярности(-)'
    | 'цене(+)'
    | 'цене(-)'
    | 'алфавиту(+)'
    | 'алфавиту(-)';

export const Sort: React.FC = () => {
    const [activeListIndex, setActiveListIndex] = useState<number | null>(null);
    const [sortValue, setSortValue] = useState<SortOption>('популярности(+)');
    const [isActiveList, setIsActiveList] = useState<boolean>(false);

    const sortList: SortOption[] = [
        'популярности(+)',
        'популярности(-)',
        'цене(+)',
        'цене(-)',
        'алфавиту(+)',
        'алфавиту(-)',
    ];

    const handlePopupClick = () => {
        setIsActiveList(!isActiveList);
    };

    const handleListClick = (index: number, item: SortOption) => {
        setActiveListIndex(index);
        setIsActiveList(!isActiveList);
        setSortValue(item);
    };

    return (
        <OutsideClickWrapper onOutsideClick={() => setIsActiveList(false)}>
            <div className="sort">
                <div className="flex gap-1 items-center">
                    <b>Сортировать по:</b>
                    <span
                        className="text-lg cursor-pointer border-b border-dashed border-green-600 text-green-600"
                        onClick={handlePopupClick}
                    >
                        {sortValue}
                    </span>
                </div>
                <div
                    className={
                        isActiveList
                            ? 'absolute shadow-2xl rounded-xl ml-28 my-1 bg-white'
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
        </OutsideClickWrapper>
    );
};
