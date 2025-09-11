import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import { setSelectedCategory } from '../../../store/productsSlice';

export const Categories: React.FC = () => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(
        (state: RootState) => state.productsList.selectedCategory
    );
    const categories = ['Все', 'Фри', 'Россия', 'Гавайи', 'В пите'];

    const handleCategoriesClick = (category: string) => {
        dispatch(setSelectedCategory(category));
    };

    return (
        <div className="categories">
            <ul className="flex gap-3">
                {categories.map((item, index) => (
                    <li
                        key={index}
                        className={
                            selectedCategory === item
                                ? 'active__item'
                                : 'categories__item'
                        }
                        onClick={() => handleCategoriesClick(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
