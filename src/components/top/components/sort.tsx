import { useState } from 'react';
import { OutsideClickWrapper } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import {
    setField,
    setOrder,
    type SortField,
    type SortOrder,
} from '../../../store/sortSlice';

interface SortOption {
    label: string;
    field: SortField;
    order: SortOrder;
}

export const Sort: React.FC = () => {
    const dispatch = useDispatch();
    const { field, order } = useSelector((state: RootState) => state.sorter);
    const [isActiveList, setIsActiveList] = useState<boolean>(false);

    const sortOptions: SortOption[] = [
        { label: 'популярности (убыв.)', field: 'popularity', order: 'desc' },
        { label: 'популярности (возр.)', field: 'popularity', order: 'asc' },
        { label: 'цене (убыв.)', field: 'price', order: 'desc' },
        { label: 'цене (возр.)', field: 'price', order: 'asc' },
        { label: 'алфавиту (убыв.)', field: 'title', order: 'desc' },
        { label: 'алфавиту (возр.)', field: 'title', order: 'asc' },
    ];

    const handlePopupClick = () => {
        setIsActiveList(!isActiveList);
    };

    const handleListClick = (option: SortOption) => {
        dispatch(setField(option.field));
        dispatch(setOrder(option.order));
        setIsActiveList(!isActiveList);
    };

    const currentLabel =
        sortOptions.find(
            (option) => option.field === field && option.order === order
        )?.label || 'популярности (убыв.)';

    return (
        <OutsideClickWrapper onOutsideClick={() => setIsActiveList(false)}>
            <div className="sort">
                <div className="flex gap-1 items-center">
                    <b>Сортировать по:</b>
                    <span
                        className="text-lg cursor-pointer border-b border-dashed border-green-600 text-green-600"
                        onClick={handlePopupClick}
                    >
                        {currentLabel}
                    </span>
                </div>
                <div
                    className={
                        isActiveList
                            ? 'absolute shadow-2xl rounded-xl ml-28 my-1 bg-white'
                            : 'hidden'
                    }
                >
                    <ul className="flex flex-col my-2">
                        {sortOptions.map((option, index) => (
                            <li
                                key={index}
                                className={
                                    field === option.field &&
                                    order === option.order
                                        ? 'cursor-pointer p-2 text-green-600 bg-green-200 text-lg font-bold'
                                        : 'text-lg cursor-pointer p-2 hover:bg-green-200 duration-300'
                                }
                                onClick={() => handleListClick(option)}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </OutsideClickWrapper>
    );
};
